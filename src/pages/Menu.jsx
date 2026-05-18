import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import MenuSection from '../components/menu/MenuSection';
import BeefCutGuide from '../components/menu/BeefCutGuide';

// รูปจริงจากเมนูที่ส่งมา — แต่ละไฟล์เป็น screenshot เต็มหน้า
// ใช้ object-position เพื่อซูมไปที่รายการที่ถูกต้อง
// format: { src, position }
const R = {
  // BBQ page screenshots
  brisket:      { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/0591b358e_Screenshot2026-05-10001042.png', pos: '50% 20%' },
  beefRibs:     { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png', pos: '50% 55%' },
  beefTongue:   { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png', pos: '50% 85%' },
  porkRibs:     { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png', pos: '50% 10%' },
  beefStick:    { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/580e7499d_Screenshot2026-05-10001031.png', pos: '50% 15%' },
  // Steak
  flatMarble:   { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/b1cfd72ed_Screenshot2026-05-10001022.png', pos: '50% 50%' },
  // Wagyu
  ribeyeWagyu:  { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/7f0921fcc_Screenshot2026-05-10001113.png', pos: '50% 20%' },
  striploinWagyu:{ src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/7f0921fcc_Screenshot2026-05-10001113.png', pos: '50% 75%' },
  // More beef
  beefStew:     { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/00acc4b3f_Screenshot2026-05-10001224.png', pos: '50% 20%' },
  beefTaco:     { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/00acc4b3f_Screenshot2026-05-10001224.png', pos: '50% 75%' },
  specialCarbo: { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/6ff9e1fb9_Screenshot2026-05-10001143.png', pos: '50% 50%' },
  // Appetizer — ใช้ pos ต่างกันตามตำแหน่งในหน้า
  carbonara:    { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '25% 12%' },
  freshSalad:   { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '75% 12%' },
  caesarSalad:  { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '25% 38%' },
  baconChilli:  { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '75% 38%' },
  hashBrown:    { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '25% 62%' },
  ranchChicken: { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '75% 62%' },
  bbqChicken:   { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '25% 85%' },
  salsaChips:   { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png', pos: '75% 85%' },
  // Dessert
  blueberryPie: { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/f95f3d217_Screenshot2026-05-10001233.png', pos: '30% 60%' },
  bananaSplit:  { src: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/02819ab77_Screenshot2026-05-10001238.png', pos: '70% 70%' },
};

const categories = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'bbq', label: 'BBQ' },
  { id: 'steak', label: 'Steak' },
  { id: 'wagyu', label: 'Wagyu' },
  { id: 'beef', label: 'Beef Menu' },
  { id: 'appetizer', label: 'Appetizer' },
  { id: 'dessert', label: 'Dessert' },
];

const bbqItems = [
  { name: 'BBQ Brisket', price: '2.20 ฿/Gram', desc: 'รมควัน 9-10 ชั่วโมง รสชาติเนื้อเข้มข้น พร้อมความฉ่ำและกลิ่นรมควันจากไม้ลำไย', ...R.brisket },
  { name: 'Pork Ribs (Half Rack)', price: '679 ฿', desc: 'Smoked pork ribs for 6 hrs. with special Riburs BBQ rub and brushed with Riburs BBQ sauce', ...R.porkRibs },
  { name: 'Pork Ribs (Full Rack)', price: '1,199 ฿', desc: 'Smoked pork ribs for 6 hrs. Full rack with special Riburs BBQ rub', ...R.porkRibs },
  { name: 'Beef Ribs', price: '2.20 ฿/Gram', desc: 'Only salt & black pepper on the meat then Smoked beef ribs for 9-10 hrs. Riburs BBQ sauce on top', ...R.beefRibs },
  { name: 'Beef Tongue', price: '2.20 ฿/Gram', desc: 'Smoked beef tongue for 9 hrs. with special Riburs BBQ rub and brushed with Riburs BBQ sauce', ...R.beefTongue },
  { name: 'Beef Stick', price: '195 ฿/set', desc: 'เนื้อ Oyster Blade (ใบพาย) ตัดแต่งเป็นเต๋าเสียบไม้ย่างถ่านหอมๆ แต่ยังคงความเข้มของเนื้อ', ...R.beefStick },
];

const steakItems = [
  { name: 'Flat Marble Steak', price: '3.00 ฿/Gram', desc: 'Feel like Picanha but more tender — Beefy, Juicy & Smoky', ...R.flatMarble },
];

const wagyuItems = [
  { name: 'Ribeye Wagyu', price: '3.90 ฿/Gram', desc: 'ไขมันแทรกสวย ฉ่ำ หอม มันแบบละลายในปาก', ...R.ribeyeWagyu },
  { name: 'Striploin Wagyu', price: '3.55 ฿/Gram', desc: 'รสชาติเนื้อเข้มชัด เสริมความนุ่มและหอมจากไขมันแทรกลงตัว', ...R.striploinWagyu },
];

const beefMenuItems = [
  { name: 'Beef Stew', price: '289 ฿', desc: 'เนื้อ Oyster Blade ที่นำมาทำ Stew ได้กลิ่นหอมและนุ่มของเนื้อ มีกลิ่นสมุนไพรในน้ำซุปเพิ่มรสชาติ', ...R.beefStew },
  { name: 'Beef Taco', price: '209 ฿/piece', desc: 'เสือร้องให้รมควัน 9 ชั่วโมงได้ทั้งรสชาติ เนื้อที่มีกลิ่นควันหอมๆ เพิ่มเติมความสดชื่นด้วยซอส Taco', ...R.beefTaco },
  { name: '"BEEFY CARBO" (Special)', price: '329 ฿', desc: "Month's Special Menu — เนื้อย่างกับพาสต้าคาร์โบนาร่า", ...R.specialCarbo },
];

const appetizerItems = [
  { name: 'Spaghetti Carbonara', price: '229 ฿', ...R.carbonara },
  { name: 'Spaghetti Bacon Chilli', price: '189 ฿', ...R.baconChilli },
  { name: "Fresh'n Fresh Salad", price: '219 ฿', ...R.freshSalad },
  { name: 'Grandma Caesar Salad', price: '209 ฿', ...R.caesarSalad },
  { name: 'Hash Brown', price: '99 ฿', ...R.hashBrown },
  { name: 'Salsa & Chips', price: '99 ฿', ...R.salsaChips },
  { name: 'Ranch Fried Chicken', price: '189 ฿', ...R.ranchChicken },
  { name: 'BBQ Fried Chicken', price: '189 ฿', ...R.bbqChicken },
];

const dessertItems = [
  { name: 'Blueberry Crumble Pie', price: '145 ฿', ...R.blueberryPie },
  { name: 'Roasted Banana Split', price: '125 ฿', ...R.bananaSplit },
];

export default function Menu() {
  const [active, setActive] = useState('all');

  const show = (cat) => active === 'all' || active === cat;

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Menu</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">เมนูอาหาร</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            คัดสรรวัตถุดิบคุณภาพ ปรุงด้วยความใส่ใจทุกจาน
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sections */}
        {show('steak') && (
          <MenuSection title="Beef Cuts — เลือกส่วนที่ชอบ" layout="grid" items={steakItems} />
        )}
        {show('steak') && <BeefCutGuide />}

        {show('bbq') && (
          <MenuSection
            title="BBQ — Tender & Juicy"
            subtitle="รมควันด้วยไม้ลำไย 9-10 ชั่วโมง"
            layout="featured"
            items={bbqItems}
          />
        )}

        {show('wagyu') && (
          <MenuSection
            title="WAGYU STEAK"
            subtitle='ความพิเศษของวากิวคือไขมันที่กระจายตัวในเนื้อ ทำให้ทุกคำ "นุ่ม ฉ่ำ และมีกลิ่นหอมเฉพาะ"'
            layout="featured"
            items={wagyuItems}
          />
        )}

        {show('beef') && (
          <MenuSection
            title="MORE BEEF MENU"
            layout="featured"
            items={beefMenuItems}
          />
        )}

        {show('appetizer') && (
          <MenuSection title="APPETIZER" items={appetizerItems} />
        )}

        {show('dessert') && (
          <MenuSection title="DESSERT" items={dessertItems} />
        )}
      </div>
    </div>
  );
}