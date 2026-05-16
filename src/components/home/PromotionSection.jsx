import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PromotionSection({ specialImage, promoImage }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Special</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">โปรโมชั่น & เมนูพิเศษ</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img
              src={specialImage}
              alt="Month's Special Menu - Beefy Carbo"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">Month's Special</span>
              <h3 className="font-heading text-2xl font-bold text-white mt-1">"BEEFY CARBO"</h3>
              <p className="text-white/80 text-lg font-semibold mt-1">329 ฿</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img
              src={promoImage}
              alt="Flat Marble Steak Promotion"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold">
                Promotion 10% OFF
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mt-2">FLAT MARBLE STEAK</h3>
              <p className="text-white/70 text-sm mt-1">Feel like Picanha but more tender — Beefy, Juicy & Smoky</p>
              <p className="text-primary text-lg font-semibold mt-1">3.00 ฿/Gram</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}