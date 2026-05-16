import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User, FileText, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const TIME_SLOTS = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

// โต๊ะทั้งหมดในร้าน: 2คน×2 + 4คน×7 + 8คน×1 = 10 โต๊ะ
const TOTAL_TABLES = 10;

export default function Booking() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    note: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookedCount, setBookedCount] = useState(null);
  const [loadingTables, setLoadingTables] = useState(false);

  const todayObj = new Date();
  const today = todayObj.toISOString().split('T')[0];
  const maxDateObj = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const maxDate = maxDateObj.toISOString().split('T')[0];

  // สร้าง list ของ 7 วันข้างหน้า
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(todayObj);
    d.setDate(d.getDate() + i);
    const iso = d.toISOString().split('T')[0];
    const dayNames = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์'];
    const label = `${dayNames[d.getDay()]} ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()+543}`;
    return { value: iso, label };
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // โหลดข้อมูลโต๊ะเมื่อเลือกวัน+เวลา
  useEffect(() => {
    if (!form.date || !form.time) { setBookedCount(null); return; }
    setLoadingTables(true);
    base44.entities.Booking.filter({ date: form.date, time: form.time, status__ne: 'cancelled' })
      .then(results => { setBookedCount(results.length); setLoadingTables(false); });
  }, [form.date, form.time]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Booking.create({ ...form, guests: Number(form.guests), status: 'pending' });
    // ส่งอีเมลแจ้งเตือนเจ้าของร้าน
    base44.integrations.Core.SendEmail({
      to: 'achita.p@kkumail.com',
      from_name: 'Riburs BBQ — ระบบจอง',
      subject: `🥩 จองใหม่! ${form.customer_name} — ${form.date} ${form.time}`,
      body: `มีการจองโต๊ะใหม่เข้ามา\n\nชื่อลูกค้า: ${form.customer_name}\nเบอร์โทร: ${form.phone}\nวันที่: ${form.date}\nเวลา: ${form.time}\nจำนวนคน: ${form.guests} คน${form.note ? `\nหมายเหตุ: ${form.note}` : ''}\n\n— Riburs BBQ Booking System`,
    });
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-3">จองสำเร็จ!</h2>
          <p className="text-muted-foreground mb-2">
            ขอบคุณ <span className="text-foreground font-medium">{form.customer_name}</span>
          </p>
          <p className="text-muted-foreground mb-1">
            วันที่ <span className="text-foreground">{form.date}</span> เวลา <span className="text-foreground">{form.time}</span>
          </p>
          <p className="text-muted-foreground mb-8">
            จำนวน <span className="text-foreground">{form.guests}</span> คน
          </p>
          <p className="text-sm text-muted-foreground bg-secondary/50 rounded-xl px-5 py-3">
            ทางร้านจะติดต่อกลับเพื่อยืนยันการจองทาง LINE หรือโทรศัพท์
          </p>
          <Link to="/booking-status" className="mt-2 inline-block text-sm text-primary underline-offset-4 hover:underline">
            ตรวจสอบสถานะการจอง →
          </Link>
          <button
            onClick={() => { setSuccess(false); setForm({ customer_name:'', phone:'', email:'', date:'', time:'', guests:'', note:'' }); }}
            className="mt-6 text-primary text-sm underline-offset-4 hover:underline"
          >
            จองใหม่อีกครั้ง
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative bg-card border-b border-border py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Reservation</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-2 mb-3">จองโต๊ะ</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            จองล่วงหน้าเพื่อให้แน่ใจว่าคุณได้โต๊ะที่ต้องการ<br />
            เปิดให้บริการทุกวัน 18:00 – 23:00 น. (ครัวปิด 21:30 น.)
          </p>
        </motion.div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Date & Time */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-heading text-lg font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> วันและเวลา
            </h3>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">วันที่จอง *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dateOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleChange('date', opt.value)}
                    className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all text-center ${
                      form.date === opt.value
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {!form.date && <input type="text" required className="opacity-0 h-0 w-0 absolute" />}
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">เวลา *</label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {TIME_SLOTS.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleChange('time', t)}
                    className={`py-2 rounded-lg text-sm font-medium border transition-all ${
                      form.time === t
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {!form.time && <input type="text" required className="opacity-0 h-0 w-0 absolute" />}
            </div>

            {/* สถานะโต๊ะ */}
            <AnimatePresence>
              {form.date && form.time && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  {loadingTables ? (
                    <p className="text-sm text-muted-foreground text-center">กำลังตรวจสอบโต๊ะ...</p>
                  ) : bookedCount !== null ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-500">{TOTAL_TABLES - bookedCount}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">โต๊ะว่าง</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{bookedCount}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">จองแล้ว</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-foreground">{TOTAL_TABLES}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">ทั้งหมด</p>
                        </div>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end max-w-[120px]">
                        {Array.from({ length: TOTAL_TABLES }, (_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-md ${i < bookedCount ? 'bg-primary/40' : 'bg-green-500/30 border border-green-500/40'}`}
                            title={i < bookedCount ? 'จองแล้ว' : 'ว่าง'}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guests */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-heading text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> จำนวนคน
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {GUEST_OPTIONS.map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => handleChange('guests', n)}
                  className={`aspect-square rounded-xl text-lg font-bold border transition-all ${
                    form.guests === n
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">สำหรับกลุ่มมากกว่า 8 คน กรุณาติดต่อทาง LINE โดยตรง</p>
          </div>

          {/* Contact */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-heading text-lg font-semibold flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> ข้อมูลติดต่อ
            </h3>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">ชื่อ-นามสกุล *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="กรอกชื่อ-นามสกุล"
                  value={form.customer_name}
                  onChange={e => handleChange('customer_name', e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">เบอร์โทร *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="0XX-XXX-XXXX"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">อีเมล (ไม่บังคับ)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">หมายเหตุเพิ่มเติม</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <textarea
                  placeholder="เช่น แพ้อาหาร, ต้องการที่นั่งพิเศษ..."
                  value={form.note}
                  onChange={e => handleChange('note', e.target.value)}
                  rows={3}
                  className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !form.time || !form.guests}
            className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-2xl text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'กำลังส่งข้อมูล...' : 'ยืนยันการจอง'}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            ทางร้านจะยืนยันการจองภายใน 1 ชั่วโมง หากไม่ได้รับการยืนยัน กรุณาติดต่อ LINE: @ribursbqq
          </p>
        </motion.form>
      </div>
    </div>
  );
}