import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold">
                riburs <span className="text-primary">BBQ</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              เนื้อคุณภาพพรีเมียม รมควันด้วยไม้สำโย
              สไตล์ American BBQ ที่ขอนแก่น
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/ribursbbq" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary">เมนู</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">BBQ &amp; Smoked Meats</Link>
              <Link to="/menu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Steak &amp; Beef Cuts</Link>
              <Link to="/menu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Wagyu Steak</Link>
              <Link to="/menu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Appetizer</Link>
              <Link to="/menu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Dessert</Link>
              <Link to="/booking" className="block text-sm text-primary font-medium hover:text-primary/80 transition-colors">จองโต๊ะ →</Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-primary">ข้อมูลร้าน</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>ขอนแก่น, ประเทศไทย</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>เปิดทุกวัน 17:00 - 23:00</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>ติดต่อทาง Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Riburs BBQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}