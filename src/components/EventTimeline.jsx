import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Utensils, Sparkles, Clock } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function EventTimeline() {
  const iconMap = {
    users: Users,
    heart: Heart,
    utensils: Utensils,
    sparkles: Sparkles,
  };

  return (
    <section id="timeline" className="relative py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/60 border border-gold-500/30 text-gold-300 text-xs font-heading tracking-widest uppercase mb-1">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>Evening Schedule</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide">
            EVENT TIMELINE
          </h2>

          <p className="font-urdu text-lg sm:text-xl text-gold-200">
            پروگرام تقریبِ نکاح
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Timeline Path & Cards */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-400/60 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-10">
            {INVITATION_DATA.timeline.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-6">
                    <div className="luxury-card relative p-6 rounded-2xl border border-gold-500/35 hover:border-gold-400 transition-all duration-300 group shadow-lg">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-teal-950/80 border border-gold-500/30 text-xs font-heading font-bold text-gold-300 mb-1">
                            {item.time}
                          </span>
                          <h3 className="font-heading text-lg sm:text-xl font-bold text-ice-50 group-hover:text-gold-200 transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <span className="font-urdu text-lg font-bold text-gold-300 shrink-0">
                          {item.urduTitle}
                        </span>
                      </div>

                      <p className="font-serif italic text-sm text-ice-100/90 leading-relaxed">
                        {item.description}
                      </p>

                      <p className="font-urdu text-xs text-sky-200/80 text-right mt-2 border-t border-gold-500/15 pt-2">
                        {item.urduDescription}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon Badge */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 items-center justify-center text-teal-950 shadow-[0_0_15px_rgba(212,175,55,0.6)] border-2 border-teal-950 z-10 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

