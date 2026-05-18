import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MapPin, Clock, Phone, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Contact</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">ติดต่อเรา</h1>
          <p className="text-muted-foreground mt-3">ติดต่อทางหน้าร้าน หรือติดต่อผ่านช่องทางด้านล่าง</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: MapPin, title: 'ที่ตั้งร้าน', value: 'ขอนแก่น, ประเทศไทย', sub: 'ดูแผนที่ใน Google Maps' },
            { icon: Clock, title: 'เวลาเปิดบริการ', value: 'เปิดทุกวัน', sub: '17:00 - 23:00' },
            { icon: Facebook, title: 'Facebook', value: 'Riburs BBQ', sub: 'ติดตามข่าวสารและโปรโมชั่น' },
            { icon: Phone, title: 'โทรศัพท์', value: 'ติดต่อทาง Facebook', sub: 'หรือมาที่ร้านโดยตรง' },
          ].map(({ icon: Icon, title, value, sub }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{title}</h3>
              <p className="text-foreground mt-1">{value}</p>
              <p className="text-muted-foreground text-sm mt-1">{sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border h-80 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5!2d102.8445471!3d16.462686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bf964ea4f5f%3A0x1e0d39264bdc4f9e!2sRiburs%20BBQ!5e0!3m2!1sth!2sth!4v1699999999999!5m2!1sth!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Riburs BBQ Location"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://www.google.com/maps/place/Riburs+BBQ/@16.462686,102.8445471,17z" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 w-4 h-4" />
              นำทางไปร้าน
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
            <a href="https://www.facebook.com/ribursbbq" target="_blank" rel="noopener noreferrer">
              <Facebook className="mr-2 w-4 h-4" />
              Facebook Page
              <ExternalLink className="ml-2 w-3 h-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}