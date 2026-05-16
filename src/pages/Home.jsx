import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PromotionSection from '../components/home/PromotionSection';
import FeaturedSection from '../components/home/FeaturedSection';
import AboutPreview from '../components/home/AboutPreview';

// รูปจริงจากร้าน
const RESTAURANT_HERO = 'https://media.base44.com/images/public/69ff6bf44c32fd651b682917/d06d6ced2_Screenshot2026-05-10002434.png';
const RESTAURANT_EXT  = 'https://media.base44.com/images/public/69ff6bf44c32fd651b682917/663df7b74_Screenshot2026-05-10002428.png';

// รูปเมนูจริง (จาก screenshots ที่ส่งมา)
const REAL_MENU = {
  beefCuts:     'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/600420af5_Screenshot2026-05-10001152.png',
  wagyu:        'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/7f0921fcc_Screenshot2026-05-10001113.png',
  ribs:         'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/a3309d249_Screenshot2026-05-10001054.png',
  brisket:      'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/0591b358e_Screenshot2026-05-10001042.png',
  beefStick:    'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/580e7499d_Screenshot2026-05-10001031.png',
  flatMarble:   'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/b1cfd72ed_Screenshot2026-05-10001022.png',
  specialCarbo: 'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/6ff9e1fb9_Screenshot2026-05-10001143.png',
  appetizer:    'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/5c8f32bfc_Screenshot2026-05-10001216.png',
  moreBeef:     'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/00acc4b3f_Screenshot2026-05-10001224.png',
  dessert:      'https://media.base44.com/images/public/user_69aafc8720abc9433d4c7a27/f95f3d217_Screenshot2026-05-10001233.png',
};

const IMAGES = {
  hero:         RESTAURANT_HERO,
  brisket:      REAL_MENU.brisket,
  wagyu:        REAL_MENU.wagyu,
  ribs:         REAL_MENU.ribs,
  stew:         REAL_MENU.moreBeef,
  specialCarbo: REAL_MENU.specialCarbo,
  flatMarble:   REAL_MENU.flatMarble,
  beefStick:    REAL_MENU.beefStick,
};

const featuredItems = [
  {
    name: 'BBQ Brisket',
    desc: 'รมควัน 9-10 ชั่วโมง นุ่ม ฉ่ำ',
    price: '2.20 ฿/Gram',
    src: IMAGES.brisket,
    pos: '50% 20%',
  },
  {
    name: 'Wagyu Ribeye',
    desc: 'ไขมันแทรกสวย ฉ่ำ ละลายในปาก',
    price: '3.90 ฿/Gram',
    src: IMAGES.wagyu,
    pos: '50% 20%',
  },
  {
    name: 'Pork Ribs',
    desc: 'Tender & Juicy ซอส BBQ สูตรพิเศษ',
    price: '679-1,199 ฿',
    src: IMAGES.ribs,
    pos: '50% 10%',
  },
  {
    name: 'Beef Stick',
    desc: 'เนื้อ Oyster Blade เสียบไม้ย่างถ่าน',
    price: '195 ฿/set',
    src: IMAGES.beefStick,
    pos: '50% 15%',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={IMAGES.hero} />
      <PromotionSection specialImage={IMAGES.specialCarbo} promoImage={IMAGES.flatMarble} />
      <FeaturedSection items={featuredItems} />
      <AboutPreview bbqImage={IMAGES.brisket} />
    </div>
  );
}