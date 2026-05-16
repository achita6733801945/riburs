import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SMOKER_IMG   = 'https://media.base44.com/images/public/69ff6bf44c32fd651b682917/663df7b74_Screenshot2026-05-10002428.png';
const INTERIOR_IMG = 'https://media.base44.com/images/public/69ff6bf44c32fd651b682917/d06d6ced2_Screenshot2026-05-10002434.png';

export default function FounderStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />
          <p className="font-heading text-xl sm:text-2xl font-semibold italic leading-relaxed text-foreground max-w-3xl mx-auto">
            "ผมอยากให้เพื่อนและครอบครัวได้กินบาร์บีคิวแบบที่ผมเคยกิน
            อยากให้เข้าใจรสชาติที่เราได้กินที่เท็กซัสจริงๆ
            จึงตัดสินใจฝึกทำบาร์บีคิว"
          </p>
        </motion.div>

        {/* Story: text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground leading-relaxed text-sm"
          >
            <p>
              <span className="font-semibold text-foreground">'พรอม'</span> เจ้าของร้าน Riburs BBQ
              วิศวกรสิ่งแวดล้อมที่เคยไปเรียนแลกเปลี่ยนที่รัฐเท็กซัส ประเทศอเมริกา
              จนได้ตกหลุมรักกับความอร่อยของเนื้อวัวจากซีโครงหมู อาหารขึ้นชื่อที่เรียกว่า
              เมนู 'บาร์บีคิว' จนเป็นที่มาให้เริ่งราวทั้งหมดที่จะเกิดร้าน Riburs BBQ
            </p>
            <p>
              "ผมไปแลกเปลี่ยนที่รัฐเท็กซัสตอนอายุ 16 ปี พักอยู่กับโฮสต์ชาวอเมริกา
              โดยปกติที่นั่นจะพาครอบครัวกินเลี้ยงที่ร้านบาร์บีคิวในวันพิเศษ
              และหลังจากได้ลองกินบาร์บีคิวที่เท็กซัส ผมก็ชอบเลย"
            </p>
            <p>
              จุดเริ่มต้นความชอบหรือจะเอียงไปเป็นความรัก ก็ว่าได้
              จากการตัดสินใจไปแลกเปลี่ยนเพื่อฝึก ภาษาของพรอม
              แต่กลับกลับมาเริ่มต้นความครั้งใหม่กับเมนูอาหารที่ชื่อว่า 'บาร์บีคิว'
              อาหารขึ้นชื่อประจำรัฐเท็กซัส จนทำให้เกิดร้าน 'Riburs BBQ' ขึ้นในวันนี้
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img src={SMOKER_IMG} alt="BBQ Smoker" className="w-full h-56 object-cover" />
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                🔥 เตารมควันบาร์บีคิวอันแรกของผม
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second story block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-secondary flex items-center justify-center h-48">
              <div className="text-center p-6">
                <div className="text-5xl mb-2">🤠</div>
                <p className="text-sm text-muted-foreground font-medium">TEXAS</p>
                <p className="text-xs text-muted-foreground mt-1">จุดเริ่มต้นของ Riburs BBQ</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground leading-relaxed text-sm"
          >
            <p>
              "หลังจากกลับมาไทย พรอมได้รู้ตัวเองอย่างแท้จริงว่า เขาคือคนที่รักการกินบาร์บีคิว
              สุดหัวใจ และหลังกลับไทยครั้งนี้ ทำให้เขาตัดสินใจลงมือทำบาร์บีคิวกินเอง
              โดยใช้สูตรดั้งเดิมจากเท็กซัส เมื่อที่ให้เขาตกหลุมรักการกินเนื้อ
              จนเปลี่ยนชีวิตของเขาไปตลอดกาล
              พรอมได้รับวัตถุดิบพิเศษจากโฮสต์นั่นคือเตาอบเนื้อขนาดเล็กส่งตรงจากเท็กซัส
              และทำให้พรอมได้มีโอกาสฝึกทำเนื้อเอง"
            </p>
          </motion.div>
        </div>

        {/* Renovated + Interior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="relative rounded-xl overflow-hidden">
              <img src={SMOKER_IMG} alt="เริ่มต้นจากตรงนี้" className="w-full h-44 object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">เริ่มต้นจากตรงนี้</div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img src={INTERIOR_IMG} alt="ได้เดียวทุกวันเสาร์" className="w-full h-44 object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">ได้เดียวทุกวันเสาร์</div>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              จันทร์ถึงศุกร์พรอมรับหน้าที่เป็นวิศวกรสิ่งแวดล้อม แต่ในทุกเช้าวันเสาร์
              พรอมคือชายหนุ่มที่ลุกขึ้นมาเตรียมเนื้อ เพื่อที่จะตัดลองอบบาร์บีคิวในเวลาดี 3 กิโวตรีรายสัดฐาทั้งหมดอยู่อย่างนาน 2 ปี ทำให้เพื่อนของพรอมแนะนำให้เขาเปิดรับออเดอร์จริงๆ
            </p>
            <p>
              แรกเริ่มพรอมรับออเดอร์แบบ Take a way เพียงวันละ 4 ชิ้น เพราะเขาเกิดที่จำกัดในการอบซีโครงหนึ่งครั้ง
              แม้กระทั้งลูกค้าต่างจังหวัดก็มี ทำให้พรอมต้องหาวิธีรีฮีซีเพื่อส่งให้ลูกค้าที่อยู่นอกจังหวัดเข้าถึงการรับออเดอร์ของร้านที่มากขึ้น
              จนตัดสินใจตั้งที่เทเนื้อเพิ่มเพื่อรองรับออเดอร์ที่มากขึ้น ขยายรอบเป็นวันละ 2 รอบ เปิดรับวาอาทิตย์เพิ่มอีกหนึ่งวัน พัฒนามาเรื่อยๆ
              จนกลายมาเป็นจุดเริ่มต้นของ 'ร้าน Riburs BBQ'
            </p>
          </div>
        </motion.div>

        {/* Renovated banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-8"
        >
          <img src={INTERIOR_IMG} alt="Renovated Restaurant" className="w-full h-64 sm:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
              Renovated April 2024
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground leading-relaxed text-sm"
        >
          <p>
            6 ชม. คือขึ้นต่ำในการอบเนื้อบาร์บีคิว และอาจจะยาวไปถึง 9-12 ชม.
            เลยที่ เหตุนี้ทำให้พรอมต้องการที่จะให้พนักงานในร้านทุกคนเข้าใจวิธีการทำ
            และสามารถอธิบายความพิเศษของเนื้อแต่ละชิ้นได้ เพื่อให้ลูกค้าเข้าใจตัวและรับรู้ว่าร้านมีคุณค่าแค่ไหน
          </p>
          <p>
            นอกจากเมนู Signature ของร้านอย่างบาร์บีคิว ยังมี Steak เนื้อคุณภาพ
            ที่มีให้เลือกถึง 6 ส่วนด้วยกัน พรอมตั้งใส่ความพิเศษทุกอย่างไว้ในเมนูต้องหมด
            จึงทำให้เนื้อนุ่มมีอีกระดับ เห็นถึงความใส่ใจในการที่ไม่แพ้กับบาร์บีคิว
            จนปัจจุบันกลายเป็นอีกเมนูหลักของร้าน ที่หากได้มาห้ามพลาด
          </p>
          <p>
            แม้ว่าพรอมจะสะสมประสบการณ์มาอย่างยาวนาน ตั้งแต่เริ่มทำให้เพื่อนชิม
            จนเริ่มมีออเดอร์จริง พัฒนาทุกอย่างจนปัจจุบันกลายเป็น Riburs BBQ
            ขอนแก่น ที่มีลูกค้าถาลเปลี่ยนหนุนเวียนเข้ามาลองความอร่อยทั้งสายออเดอร์
            จนถึงบริการที่แสนประทับใจ พรอมยังคงอยากให้ร้านค่อยๆ เดินทางไปเรื่อยๆ
            ตามทำสิ่งที่จะดูแลดี แต่ตั้งใจที่จะคอยส่งต่อความอร่อยผ่านเมนูสูตรที่เขา ทำให้กับทุกคนต่อไป
          </p>
        </motion.div>
      </div>
    </section>
  );
}