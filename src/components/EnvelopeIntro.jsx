import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';
import { audioPlayer } from '../utils/audioPlayer';

export default function EnvelopeIntro({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Start soothing Islamic instrumental music on user interaction
    audioPlayer.play();

    // Trigger royal rose gold, warm ivory & deep velvet burgundy confetti
    try {
      confetti({
        particleCount: 80,
        spread: 85,
        origin: { y: 0.62 },
        colors: ['#d4888f', '#fff2f0', '#ffffff', '#75143a', '#e1a1a6', '#3c0a1d'],
      });
    } catch (e) {}

    // Transition to main site after animation finishes
    setTimeout(() => {
      onOpen();
    }, 1850);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#100206] via-[#220511] to-[#100206] px-4 py-6 overflow-y-auto"
    >
      {/* Background Islamic star geometry & ambient rose-gold glow */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-55 pointer-events-none" />
      <div className="absolute w-[520px] h-[520px] rounded-full bg-burgundy-600/20 blur-[140px] pointer-events-none" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-rosegold-500/15 blur-[120px] pointer-events-none" />

      {/* Decorative Rose Gold Lanterns - Top */}
      <div className="absolute top-2 left-6 sm:left-16 pointer-events-none opacity-85">
        <svg width="34" height="110" viewBox="0 0 32 100" fill="none">
          <line x1="16" y1="0" x2="16" y2="42" stroke="#d4888f" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M10 42 L22 42 L26 64 L16 82 L6 64 Z" fill="#3c0a1d" stroke="#d4888f" strokeWidth="1" />
          <ellipse cx="16" cy="62" rx="4" ry="8" fill="#ffe4e2" />
        </svg>
      </div>
      <div className="absolute top-2 right-6 sm:right-16 pointer-events-none opacity-85">
        <svg width="34" height="100" viewBox="0 0 32 90" fill="none">
          <line x1="16" y1="0" x2="16" y2="38" stroke="#d4888f" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M10 38 L22 38 L26 58 L16 76 L6 58 Z" fill="#3c0a1d" stroke="#d4888f" strokeWidth="1" />
          <ellipse cx="16" cy="56" rx="4" ry="7" fill="#fff0ed" />
        </svg>
      </div>

      <div className="relative w-full max-w-md my-auto flex flex-col items-center text-center">
        {/* Bismillah Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 sm:mb-5"
        >
          <div className="text-xl sm:text-3xl font-arabic text-rosegold-300 drop-shadow-[0_2px_12px_rgba(212,136,143,0.5)] tracking-wide">
            {INVITATION_DATA.islamicQuotes.bismillah}
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
            <span className="text-rosegold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-rosegold-400 to-transparent" />
          </div>
        </motion.div>

        {/* Intro Subheadings */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-5 sm:mb-6 space-y-1"
        >
          <p className="font-heading tracking-[0.25em] text-xs sm:text-sm text-rosegold-300 uppercase font-semibold">
            Royal Islamic Wedding Invitation
          </p>
          <p className="font-serif italic text-ivory-200 text-sm sm:text-base">
            Under the Divine Blessings of Allah Almighty
          </p>
        </motion.div>

        {/* Realistic Interactive 3D Envelope Container in Royal Velvet Burgundy */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-[360px] sm:max-w-[390px] h-[240px] sm:h-[260px] perspective-[1000px] cursor-pointer group"
          onClick={handleOpen}
        >
          {/* Card Sliding Out of Envelope (Warm Ivory & Rose Gold) */}
          <motion.div
            className="absolute inset-x-4 top-2 h-[220px] bg-gradient-to-b from-[#ffffff] via-[#fffefa] to-[#fbf7f3] rounded-lg shadow-2xl p-4 flex flex-col items-center justify-between border-2 border-rosegold-500 z-10 text-burgundy-950"
            initial={{ y: 0 }}
            animate={isOpen ? { y: -90, scale: 1.02 } : { y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full border border-rosegold-600/40 rounded p-3 flex flex-col items-center justify-between text-center relative">
              <span className="text-[10px] uppercase tracking-[0.25em] font-heading text-rosegold-700 font-bold">
                Nikah Ceremony
              </span>

              {/* Exact Names: Zoya Firdous & Musavvir Ameen */}
              <div className="space-y-0.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950">
                  {INVITATION_DATA.bride.name}
                </h3>
                <span className="text-xs font-script text-rosegold-700 text-base">&amp;</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950">
                  {INVITATION_DATA.groom.name}
                </h3>
              </div>

              {/* Date & Venues */}
              <div className="text-[11px] font-sans font-medium text-burgundy-900 border-t border-rosegold-500/30 pt-1.5 w-full">
                <span>{INVITATION_DATA.eventDate.day}, {INVITATION_DATA.eventDate.date}</span>
                <span className="block text-rosegold-800 font-semibold truncate">
                  Ismail Pura Masjid &amp; Green Leaf Lawn, Kamptee
                </span>
              </div>
            </div>
          </motion.div>

          {/* Envelope Base Body in Royal Burgundy Velvet */}
          <div className="absolute inset-0 bg-[#1e050e] rounded-xl border border-rosegold-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 overflow-hidden">
            {/* Burgundy Velvet Texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-950 via-burgundy-900 to-[#3c0a1d] opacity-95" />
            <div className="absolute inset-0 border border-rosegold-400/30 m-2 rounded-lg pointer-events-none" />

            {/* Side & Bottom Flaps (SVG Geometry) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <polygon points="0,0 50,60 0,100" fill="#140308" fillOpacity="0.88" stroke="#d4888f" strokeWidth="0.4" strokeOpacity="0.5" />
              <polygon points="100,0 50,60 100,100" fill="#140308" fillOpacity="0.88" stroke="#d4888f" strokeWidth="0.4" strokeOpacity="0.5" />
              <polygon points="0,100 50,55 100,100" fill="#2b0715" stroke="#d4888f" strokeWidth="0.6" strokeOpacity="0.6" />
            </svg>
          </div>

          {/* Top Envelope Flap (Opens upwards) */}
          <motion.div
            className="absolute top-0 inset-x-0 h-[130px] z-30 origin-top"
            style={{ transformStyle: 'preserve-3d' }}
            animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <svg className="w-full h-full drop-shadow-lg" preserveAspectRatio="none" viewBox="0 0 100 60">
              <polygon points="0,0 100,0 50,60" fill="#3c0a1d" stroke="#d4888f" strokeWidth="0.8" />
              <polygon points="4,2 96,2 50,55" fill="none" stroke="#f7c7c3" strokeWidth="0.3" strokeOpacity="0.55" />
            </svg>
          </motion.div>

          {/* Rose Gold Royal Wax Seal Monogram "Z & M" */}
          <motion.div
            className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative wax-seal w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#fff2f0] via-[#d4888f] to-[#75143a] flex items-center justify-center p-1 shadow-[0_4px_25px_rgba(212,136,143,0.75)] border-2 border-[#fff0ed]">
              <div className="w-full h-full rounded-full border border-dashed border-[#853e45] flex flex-col items-center justify-center bg-gradient-to-br from-[#d4888f] to-[#9f4d56]">
                <span className="font-heading font-black text-xs sm:text-sm text-[#1e050e] tracking-wider drop-shadow-sm">
                  Z &amp; M
                </span>
                <span className="text-[7px] text-[#1e050e] font-semibold -mt-1 tracking-widest uppercase">
                  Nikah
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Instructions & Glowing "Open Invitation" Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3 w-full"
        >
          <button
            onClick={handleOpen}
            disabled={isOpen}
            className="rosegold-btn group relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2 overflow-hidden cursor-pointer shadow-[0_0_25px_rgba(212,136,143,0.55)] hover:shadow-[0_0_35px_rgba(255,228,226,0.85)] transition-all"
          >
            <Sparkles className="w-4 h-4 text-burgundy-950 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{isOpen ? 'Revealing Invitation...' : 'Open Invitation'}</span>
            <Sparkles className="w-4 h-4 text-burgundy-950 animate-spin" style={{ animationDuration: '6s' }} />
          </button>

          <p className="text-xs text-ivory-300/80 italic font-serif flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-rosegold-400 fill-rosegold-400/40 inline" />
            Tap the wax seal or button to begin your experience
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

