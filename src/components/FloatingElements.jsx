import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  // Generate random shimmering gold & ivory particles
  const particles = useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3.5 + 2,
      duration: Math.random() * 9 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.55 + 0.25,
      isIvory: i % 3 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Crescent Moon & Star - Top Right */}
      <div className="absolute top-6 right-6 sm:right-16 opacity-35 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3c4" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#fbfaf5" />
            </linearGradient>
          </defs>
          <path
            d="M32 8 C44 8 54 18 54 32 C54 46 44 56 32 56 C26 56 20 53 16 48 C28 48 38 38 38 24 C38 17 35 11 30 8 C30.6 8 31.3 8 32 8 Z"
            fill="url(#moonGrad)"
            filter="drop-shadow(0 0 14px rgba(212, 175, 55, 0.45))"
          />
          <polygon
            points="46,18 48,23 53,23 49,26 51,31 46,28 41,31 43,26 39,23 44,23"
            fill="#fff3c4"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Hanging Royal Lantern - Left */}
      <motion.div
        className="absolute top-0 left-3 sm:left-12 origin-top"
        animate={{ rotate: [-3.5, 3.5, -3.5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="50" height="200" viewBox="0 0 50 200" fill="none" className="drop-shadow-[0_4px_18px_rgba(212,175,55,0.45)]">
          {/* Chain */}
          <line x1="25" y1="0" x2="25" y2="75" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Lantern Top Cap */}
          <path d="M15 75 L35 75 L29 66 L21 66 Z" fill="#b89228" stroke="#d4af37" strokeWidth="1" />
          <polygon points="25,58 27,66 23,66" fill="#fff3c4" />
          {/* Lantern Body with Navy & Gold Glass */}
          <path d="M12 75 L38 75 L44 115 L25 148 L6 115 Z" fill="#04142e" fillOpacity="0.9" stroke="#d4af37" strokeWidth="1.5" />
          {/* Inner Glowing Candle */}
          <ellipse cx="25" cy="112" rx="7" ry="14" fill="#fff5cc" className="animate-pulse" filter="blur(1px)" />
          <ellipse cx="25" cy="110" rx="14" ry="20" fill="#d4af37" fillOpacity="0.25" filter="blur(5px)" />
          {/* Decorative Lattice Lines */}
          <line x1="25" y1="75" x2="25" y2="148" stroke="#d4af37" strokeWidth="1" />
          <line x1="12" y1="75" x2="25" y2="148" stroke="#d4af37" strokeWidth="0.7" strokeOpacity="0.7" />
          <line x1="38" y1="75" x2="25" y2="148" stroke="#d4af37" strokeWidth="0.7" strokeOpacity="0.7" />
          <line x1="8" y1="102" x2="42" y2="102" stroke="#d4af37" strokeWidth="0.8" />
          {/* Bottom Finial */}
          <circle cx="25" cy="151" r="3.5" fill="#d4af37" />
          <line x1="25" y1="154" x2="25" y2="168" stroke="#d4af37" strokeWidth="1.5" />
          <polygon points="25,168 27,175 23,175" fill="#fff3c4" />
        </svg>
      </motion.div>

      {/* Hanging Royal Lantern - Right */}
      <motion.div
        className="absolute top-0 right-3 sm:right-14 origin-top"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg width="46" height="170" viewBox="0 0 46 170" fill="none" className="drop-shadow-[0_4px_18px_rgba(212,175,55,0.35)]">
          <line x1="23" y1="0" x2="23" y2="55" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M14 55 L32 55 L27 48 L19 48 Z" fill="#b89228" stroke="#d4af37" strokeWidth="1" />
          <path d="M13 55 L33 55 L39 90 L23 120 L7 90 Z" fill="#04142e" fillOpacity="0.9" stroke="#d4af37" strokeWidth="1.5" />
          <ellipse cx="23" cy="88" rx="6" ry="11" fill="#fff5cc" className="animate-pulse" filter="blur(1px)" />
          <ellipse cx="23" cy="86" rx="11" ry="16" fill="#fdf8e6" fillOpacity="0.2" filter="blur(4px)" />
          <line x1="23" y1="55" x2="23" y2="120" stroke="#d4af37" strokeWidth="1" />
          <circle cx="23" cy="123" r="2.8" fill="#d4af37" />
          <line x1="23" y1="126" x2="23" y2="136" stroke="#d4af37" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Floating Shimmer Dust Particles (Gold & Ivory) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full pointer-events-none ${p.isIvory ? 'bg-ivory-100' : 'bg-gold-300'}`}
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: p.isIvory
              ? `0 0 ${p.size * 2}px rgba(251, 250, 245, 0.85)`
              : `0 0 ${p.size * 2.5}px rgba(246, 226, 122, 0.85)`,
          }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, p.opacity, p.opacity * 0.85, 0],
            scale: [0.8, 1.25, 0.9, 1.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
