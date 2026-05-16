import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const beefCuts = [
  { name: 'Oyster Blade', cut: 'จุดที่ 1', tenderness: 5, flavor: 5, price: '3.50 ฿/Gram', weight: '130-200 กรัม/ชิ้น', desc: 'เนื้อบริเวณคอหรือหัวไหล่ มีรสชาติเนื้อเข้มข้น มีไขมันแทรก ร้านเราจะตัดแต่งเอาเอ็นออกประมาณ 50%' },
  { name: 'Hanger', cut: 'จุดที่ 2', tenderness: 5, flavor: 5, price: '3.40 ฿/Gram', weight: '130-200 กรัม/ชิ้น', desc: 'เนื้อบริเวณท้องวัว มีรสชาติของเนื้อเข้มข้นมาก ไขมันแทรกน้อย ร้านเราตัดเอาเอ็นออกประมาณ 50%' },
  { name: 'Picanha', cut: 'จุดที่ 5', tenderness: 4, flavor: 4, price: '3.40 ฿/Gram', weight: '150-250 กรัม/ชิ้น', desc: 'เนื้อส่วนสะโพกบน มีความนุ่มหนึบนิดๆ ไขมันติดที่ปลายเนื้อกลิ่นเนื้อชัดเจน' },
  { name: 'T-bone', cut: 'จุดที่ 4', tenderness: 4, flavor: 4, price: '3.10 ฿/Gram', weight: '700-1300 กรัม/ชิ้น', desc: 'เนื้อส่วนสันกลางของวัวที่เป็นรูปตัว T คล้ายกับ Porterhouse แต่ต่างกันที่สันในจะเล็กกว่ามาก' },
  { name: 'Porterhouse', cut: 'จุดที่ 3', tenderness: 4, flavor: 3, price: '3.20 ฿/Gram', weight: '900-1800 กรัม/ชิ้น', desc: 'เนื้อส่วนสันกลาง ที่จะได้ทั้งส่วนของสันใหญ่ และสันนอก ลูกค้างจะได้ลองเนื้อ 2 ส่วน' },
  { name: 'Tomahawk', cut: 'จุดที่ 6', tenderness: 3, flavor: 5, price: '3.20 ฿/Gram', weight: '1000-2000 กรัม/ชิ้น', desc: 'ใหญ่อลังไม่เหมือนใคร เป็นพิเศษ 1-2 กิโลกรัมต่อชิ้น เป็นส่วนที่มาจากเนื้อส่วนซี่โครง (Rib set)' },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < count ? 'text-primary fill-primary' : 'text-border'}`}
        />
      ))}
    </div>
  );
}

export default function BeefCutGuide() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h3 className="font-heading text-2xl sm:text-3xl font-bold">BEEF — Cut of Beef</h3>
        <p className="text-muted-foreground mt-2">ทางร้านมีเนื้อ 6 ส่วนให้คุณเลือก</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {beefCuts.map((cut, idx) => (
          <motion.div
            key={cut.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-lg font-bold">{cut.name}</h4>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {cut.cut}
              </span>
            </div>

            <div className="flex items-center gap-6 mb-3">
              <div>
                <span className="text-xs text-muted-foreground">ความนุ่ม</span>
                <Stars count={cut.tenderness} />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">กลิ่นเนื้อ</span>
                <Stars count={cut.flavor} />
              </div>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed mb-3">{cut.desc}</p>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <span className="text-primary font-semibold">{cut.price}</span>
              <span className="text-xs text-muted-foreground">{cut.weight}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}