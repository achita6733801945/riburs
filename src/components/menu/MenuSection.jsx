import React from 'react';
import { motion } from 'framer-motion';

export default function MenuSection({ title, subtitle, items, layout = 'grid' }) {
  if (layout === 'featured') {
    return (
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">{title}</h3>
          {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
        </motion.div>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/30 transition-colors"
            >
              <div className="md:w-72 shrink-0 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: item.pos || '50% 50%' }}
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h4 className="font-heading text-xl font-bold">{item.name}</h4>
                <p className="text-primary font-semibold mt-1">{item.price}</p>
                {item.desc && (
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.desc}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h3 className="font-heading text-2xl sm:text-3xl font-bold">{title}</h3>
        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-card rounded-xl overflow-hidden border border-border group hover:border-primary/30 transition-colors"
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: item.pos || '50% 50%' }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-lg font-semibold">{item.name}</h4>
                <span className="text-primary font-semibold text-sm">{item.price}</span>
              </div>
              {item.desc && (
                <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{item.desc}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}