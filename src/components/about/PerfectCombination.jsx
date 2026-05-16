import React from 'react';
import { motion } from 'framer-motion';

// รูปจริงจากเมนูที่ส่งมา
const IMG_BRISKET  = 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/0591b358e_Screenshot2026-05-10001042.png';
const IMG_BEEFSTICK= 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/580e7499d_Screenshot2026-05-10001031.png';
const IMG_WAGYU    = 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/7f0921fcc_Screenshot2026-05-10001113.png';
const IMG_RIBS     = 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png';

const pillars = [
  {
    title: 'FIREWOOD',
    desc: 'เพื่อให้ได้ผลัพธ์ของกลิ่นที่ดีที่สุดสำหรับเนื้อ ทางร้านได้ทำการคัดเลือกใช้ฟืนจากไม้หลายประเภท พบว่าฟืนที่ให้กลิ่นหอมมากที่สุดคือฟืนจากต้นลำไย ด้วยความหอมที่เป็นเอกลักษณ์ของไม้ลำไย เมื่อโดนความร้อนจากการเผาไม้ ทำให้เกิดควันที่หอมตลบอบอวล และแทรกซึมไปทุกอณูของเนื้อสัตว์ขณะรมควัน',
  },
  {
    title: 'MEAT',
    desc: 'วัตถุดิบดี ย่อมส่งผลให้รสชาติของอาหารออกมาอร่อย ทางร้านได้คัดสรรวัตถุดิบ สะอาด ผ่านการตัดแต่งชิ้นส่วนของเนื้อให้สวยงามกำจัดไขมันส่วนเกินและเส้นเอ็นออก ทำให้ลูกค้าได้สัมผัสรสชาติและผิวสัมผัสของเนื้อที่ดีและนุ่มขึ้นอีกระดับ พร้อมความหอมของกลิ่นถ่านไม้ในทุกคำ',
  },
  {
    title: 'SEASONING',
    desc: 'อีกหนึ่งสิ่งที่ขาดไม่ได้เลยคือ เครื่องเทศและซอสบาร์บีคิวสูตรพิเศษของ Riburs ทำหน้าที่ชูความหอมและทำให้รสชาติของเนื้อออกมาลงตัว ผ่านการเลือกและคำนวณสัดส่วนพอดี และเป็นสูตรเฉพาะของทางร้าน ใช้โรยและหมักเนื้อสัตว์ก่อนเข้าอบและย่าง',
  },
];

export default function PerfectCombination() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2 mb-0 rounded-t-2xl overflow-hidden"
        >
          {[IMG_BRISKET, IMG_WAGYU, IMG_RIBS].map((img, i) => (
            <div key={i} className="overflow-hidden h-40 sm:h-52">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-x border-border text-center py-6"
        >
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-foreground">
            PERFECT COMBINATION
          </h2>
        </motion.div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-card border border-border rounded-b-2xl overflow-hidden">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 sm:p-8 ${idx < 2 ? 'md:border-r border-border' : ''} border-b md:border-b-0`}
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-3 tracking-widest">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Seasoned ribs image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 rounded-2xl overflow-hidden"
        >
          <img
            src={IMG_BEEFSTICK}
            alt="Beef Stick on grill"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}