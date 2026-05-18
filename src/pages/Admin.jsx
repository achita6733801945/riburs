import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CheckCircle, XCircle, Clock, Phone, Users, Calendar, StickyNote, RefreshCw } from 'lucide-react';

const STATUS_LABEL = {
  pending: { label: 'รอยืนยัน', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' },
  confirmed: { label: 'ยืนยันแล้ว', color: 'text-green-400 bg-green-400/10 border-green-400/30' },
  cancelled: { label: 'ยกเลิก', color: 'text-red-400 bg-red-400/10 border-red-400/30' },
};

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [filter, setFilter] = useState('pending');

  const fetchBookings = async () => {
    setLoading(true);
    const query = filter === 'all' ? {} : { status: filter };
    const results = await base44.entities.Booking.filter(query, '-date', 100);
    setBookings(results);
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, [filter]);

  const updateStatus = async (id, status) => {
    setUpdating(id);
    await base44.entities.Booking.update(id, { status });
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
    setUpdating(null);
  };

  const filtered = filter === 'all' ? bookings : bookings.filter(b => b.status === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold">Admin — การจองทั้งหมด</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Riburs BBQ Booking Management</p>
        </div>
        <button
          onClick={fetchBookings}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          รีเฟรช
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pt-6 flex gap-2 flex-wrap">
        {[
          { key: 'pending', label: 'รอยืนยัน' },
          { key: 'confirmed', label: 'ยืนยันแล้ว' },
          { key: 'cancelled', label: 'ยกเลิก' },
          { key: 'all', label: 'ทั้งหมด' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              filter === tab.key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background border-border text-muted-foreground hover:border-primary/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="px-6 py-6 max-w-4xl mx-auto space-y-4">
        {loading ? (
          <div className="text-center py-20 text-muted-foreground">กำลังโหลด...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">ไม่มีรายการ</div>
        ) : (
          <AnimatePresence>
            {filtered.map(b => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-card border border-border rounded-2xl p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-lg font-semibold">{b.customer_name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_LABEL[b.status]?.color}`}>
                        {STATUS_LABEL[b.status]?.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {b.date} {b.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" /> {b.guests} คน
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-4 h-4" /> {b.phone}
                      </span>
                    </div>
                    {b.note && (
                      <p className="text-sm text-muted-foreground flex items-start gap-1.5">
                        <StickyNote className="w-4 h-4 mt-0.5 shrink-0" />
                        {b.note}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  {b.status === 'pending' && (
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => updateStatus(b.id, 'confirmed')}
                        disabled={updating === b.id}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all disabled:opacity-50"
                      >
                        <CheckCircle className="w-4 h-4" />
                        ยืนยัน
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, 'cancelled')}
                        disabled={updating === b.id}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-all disabled:opacity-50"
                      >
                        <XCircle className="w-4 h-4" />
                        ยกเลิก
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}