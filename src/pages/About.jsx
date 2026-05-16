import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MapPin, Clock, Award, Star, Beef } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PerfectCombination from '../components/about/PerfectCombination';
import FounderStory from '../components/about/FounderStory';

const IMAGES = {
  brisket:  'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/0591b358e_Screenshot2026-05-10001042.png',
  ribs:     'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png',
  beefStick:'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/580e7499d_Screenshot2026-05-10001031.png',
};

export default function About() {
  return (
    <div className="pt-20 bg-background min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">About Us</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">เกี่ยวกับ Riburs BBQ</h1>
        </motion.div>

        {/* Story intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.brisket} alt="BBQ Brisket" className="rounded-2xl w-full h-48 object-cover" />
              <img src={IMAGES.ribs} alt="Pork Ribs" className="rounded-2xl w-full h-48 object-cover mt-8" />
              <img src={IMAGES.beefStick} alt="Beef Stick" className="rounded-2xl w-full h-48 object-cover col-span-2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              เรื่องราวของ <span className="text-primary italic">Riburs BBQ</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Riburs BBQ ร้านบาร์บีคิวสไตล์อเมริกันแท้ๆ ตั้งอยู่ที่จังหวัดขอนแก่น
                เราคัดเนื้อวัวคุณภาพพรีเมียม 6 ส่วนให้คุณเลือก
                ทุกชิ้นผ่านกระบวนการรมควันด้วยไม้สำโยนาน 9-10 ชั่วโมง
              </p>
              <p>
                ทำให้เนื้อทุกชิ้นได้กลิ่นหอมของควัน นุ่ม ฉ่ำ ละลายในปาก
                ไม่ว่าจะเป็น BBQ Brisket, Pork Ribs, Beef Ribs หรือ Wagyu Steak
                ทุกจานปรุงด้วยความใส่ใจและรักในงาน BBQ อย่างแท้จริง
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20"
        >
          {[
            { icon: Flame, title: 'รมควัน 9-10 ชม.', desc: 'ด้วยไม้สำโยแท้' },
            { icon: Beef, title: '6 ส่วนเนื้อ', desc: 'พรีเมียม ให้เลือกหลากหลาย' },
            { icon: Star, title: 'สูตรพิเศษ', desc: 'BBQ Rub & Sauce เฉพาะร้าน' },
            { icon: Award, title: 'คุณภาพ', desc: 'วัตถุดิบสดใหม่ทุกวัน' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Perfect Combination */}
      <PerfectCombination />

      {/* Founder Story */}
      <FounderStory />

      {/* Map */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl font-bold text-center mb-8">แผนที่ร้าน</h2>
          <div className="rounded-2xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5!2d102.8445471!3d16.462686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bf964ea4f5f%3A0x1e0d39264bdc4f9e!2sRiburs%20BBQ!5e0!3m2!1sth!2sth!4v1699999999999!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riburs BBQ Map"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">ขอนแก่น, ประเทศไทย</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">เปิดทุกวัน 17:00 - 23:00</span>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://www.google.com/maps/place/Riburs+BBQ/@16.462686,102.8445471,17z" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 w-4 h-4" />
              นำทางไปร้าน
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}