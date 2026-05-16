import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Search, Calendar, Clock, Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const STATUS_CONFIG = {
  pending:   { label: 'รอยืนยัน',  icon: AlertCircle,  color: 'text-yellow-500', bg: 'bg-yellow-500/10 border-yellow-500/30' },
  confirmed: { label: 'ยืนยันแล้ว', icon: CheckCircle, color: 'text-green-500',  bg: 'bg-green-500/10 border-green-500/30' },
};

export default function BookingStatus() {
  const [phone, setPhone] = useState('');
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const results = await base44.entities.Booking.filter({ phone, status__ne: 'cancelled' });
    setBookings(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative bg-card border-b border-border py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Booking Status</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-2 mb-3">ตรวจสอบการจอง</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            กรอกเบอร์โทรศัพท์ที่ใช้จองเพื่อดูสถานะการจองของคุณ
          </p>
        </motion.div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-16">
        {/* Search form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSearch}
          className="flex gap-3 mb-10"
        >
          <div className="relative flex-1">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="tel"
              placeholder="กรอกเบอร์โทรศัพท์..."
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground px-5 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            {loading ? 'ค้นหา...' : 'ค้นหา'}
          </button>
        </motion.form>

        {/* Results */}
        <AnimatePresence mode="wait">
          {bookings !== null && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {bookings.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <XCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="font-medium text-foreground mb-1">ไม่พบรายการจอง</p>
                  <p className="text-sm">ลองตรวจสอบเบอร์โทรให้ถูกต้อง หรือจองใหม่ได้เลย</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-2">พบ {bookings.length} รายการ</p>
                  {bookings.map((b) => {
                    const cfg = STATUS_CONFIG[b.status] || STATUS_CONFIG.pending;
                    const Icon = cfg.icon;
                    return (
                      <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card border border-border rounded-2xl p-5 space-y-4"
                      >
                        {/* Status badge */}
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading font-semibold text-lg">{b.customer_name}</h3>
                          <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${cfg.bg} ${cfg.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                            {cfg.label}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-secondary/50 rounded-xl p-3 text-center">
                            <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">วันที่</p>
                            <p className="text-sm font-medium mt-0.5">{b.date}</p>
                          </div>
                          <div className="bg-secondary/50 rounded-xl p-3 text-center">
                            <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">เวลา</p>
                            <p className="text-sm font-medium mt-0.5">{b.time}</p>
                          </div>
                          <div className="bg-secondary/50 rounded-xl p-3 text-center">
                            <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">จำนวน</p>
                            <p className="text-sm font-medium mt-0.5">{b.guests} คน</p>
                          </div>
                        </div>

                        {b.note && (
                          <p className="text-xs text-muted-foreground bg-secondary/30 rounded-lg px-3 py-2">
                            หมายเหตุ: {b.note}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}