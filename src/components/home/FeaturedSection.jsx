import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Beef } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedSection({ items }) {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Beef className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Signature</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">เมนูแนะนำ</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            คัดสรรเมนูเด็ดจากร้าน Riburs BBQ ที่ห้ามพลาด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={item.src || item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: item.pos || '50% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-primary font-semibold">{item.price}</p>
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold mt-3">{item.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
            <Link to="/menu">
              ดูเมนูทั้งหมด
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}