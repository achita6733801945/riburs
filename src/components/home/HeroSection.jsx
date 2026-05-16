import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Riburs BBQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                Smoke · Fire · Flavor
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Riburs
              <br />
              <span className="text-primary italic">BBQ</span>
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              เนื้อคุณภาพพรีเมียม รมควันด้วยไม้สำโย 9-10 ชั่วโมง
              <br />
              สไตล์ American BBQ แท้ๆ ที่ขอนแก่น
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
                <Link to="/menu">
                  ดูเมนูทั้งหมด
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-base px-8 h-12">
                <a href="https://www.google.com/maps/place/Riburs+BBQ/@16.462686,102.8445471,17z" target="_blank" rel="noopener noreferrer">
                  แผนที่ร้าน
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}