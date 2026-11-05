import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_DATA } from '../data/invitationData';

export default function CountdownTimer() {
  const targetTimestamp = new Date(INVITATION_DATA.eventDate.targetIsoDate).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.isComplete) {
        clearInterval(timer);
        try {
          confetti({
            particleCount: 110,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#fff3c4', '#ffffff', '#043e31'],
          });
        } catch (e) {}
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const timeUnits = [
    { label: 'DAYS', urdu: 'دن', value: timeLeft.days },
    { label: 'HOURS', urdu: 'گھنٹے', value: timeLeft.hours },
    { label: 'MINUTES', urdu: 'منٹ', value: timeLeft.minutes },
    { label: 'SECONDS', urdu: 'سیکنڈ', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900 border border-gold-500/30 text-gold-300 text-xs font-heading tracking-widest uppercase mb-1">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>Cherishing Every Blessed Moment</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wider">
            COUNTDOWN TO NIKAH
          </h2>

          <p className="font-serif italic text-ivory-200/80 text-sm sm:text-base max-w-md mx-auto">
            Counting down each moment until we gather to celebrate on{' '}
            <span className="text-gold-300 font-semibold">{INVITATION_DATA.eventDate.date}</span>
          </p>
        </div>

        {/* Countdown Display */}
        {timeLeft.isComplete ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="luxury-card p-8 rounded-3xl border border-gold-400 text-center max-w-lg mx-auto shadow-[0_0_50px_rgba(212,175,55,0.45)]"
          >
            <Sparkles className="w-10 h-10 text-gold-300 mx-auto mb-3 animate-spin" style={{ animationDuration: '8s' }} />
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gold-gradient mb-2">
              The Auspicious Nikah Has Begun!
            </h3>
            <p className="font-urdu text-xl text-gold-200">
              تقریبِ نکاح کا پُرمسرت آغاز ہو چکا ہے!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="luxury-card relative p-4 sm:p-6 rounded-2xl border border-gold-500/35 flex flex-col items-center justify-center group hover:border-gold-400 transition-all duration-300 shadow-xl"
              >
                {/* Gold Top Light Accents */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-85" />

                {/* Animated Digit Box */}
                <div className="relative w-full py-2 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: -16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory-50 tracking-tight drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] tabular-nums"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Label */}
                <div className="mt-2 pt-2 border-t border-gold-500/20 w-full flex flex-col items-center">
                  <span className="font-heading text-[11px] sm:text-xs tracking-[0.25em] uppercase text-gold-300 font-semibold">
                    {unit.label}
                  </span>
                  <span className="font-urdu text-[12px] text-ivory-300/80 mt-0.5">
                    {unit.urdu}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Timezone Disclaimer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ivory-300/70 font-sans">
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Calculated in Indian Standard Time (IST, GMT+5:30)</span>
        </div>
      </motion.div>
    </section>
  );
}
