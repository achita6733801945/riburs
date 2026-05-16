import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPreview({ bbqImage }) {
  const highlights = [
    { icon: Flame, title: 'รมควัน 9-10 ชม.', desc: 'ด้วยไม้สำโยแท้' },
    { icon: Award, title: 'เนื้อพรีเมียม', desc: '6 ส่วนให้เลือก' },
    { icon: Clock, title: 'เปิดทุกวัน', desc: '17:00 - 23:00' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={bbqImage}
                alt="BBQ Brisket"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="font-heading text-2xl font-bold">6</div>
                <div className="text-xs">ส่วน</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">
              เนื้อคุณภาพ
              <br />
              <span className="text-primary italic">รมควันแท้</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Riburs BBQ เราคัดเนื้อวัวคุณภาพพรีเมียม 6 ส่วนให้คุณเลือก 
              รมควันด้วยไม้สำโย 9-10 ชั่วโมง ทำให้เนื้อมีกลิ่นหอม นุ่ม ฉ่ำ 
              สไตล์ American BBQ แท้ๆ ที่ขอนแก่น
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-4 rounded-xl bg-secondary">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              <Link to="/about">เรียนรู้เพิ่มเติม</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}