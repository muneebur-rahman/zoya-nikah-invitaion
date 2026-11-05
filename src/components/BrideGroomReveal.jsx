import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function BrideGroomReveal() {
  return (
    <section id="couple" className="relative py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
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
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
            <span>The Blessed Union</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient tracking-wide">
            BRIDE &amp; GROOM
          </h2>

          <p className="font-serif italic text-ice-200/80 text-sm sm:text-base max-w-md mx-auto">
            "And He has put love and mercy between your hearts."
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Reveal Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Card 1: The Bride */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card relative p-8 sm:p-10 rounded-3xl border border-sky-400/30 text-center group hover:border-gold-400 transition-all shadow-xl"
          >
            {/* Ornate Gold Corners */}
            <div className="ornate-corner ornate-corner-tl" />
            <div className="ornate-corner ornate-corner-tr" />
            <div className="ornate-corner ornate-corner-bl" />
            <div className="ornate-corner ornate-corner-br" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-950/80 border border-sky-400/40 text-[10px] font-heading tracking-[0.25em] uppercase text-sky-200">
                The Bride • دلہن
              </span>

              {/* Bride Name Calligraphy & Display */}
              <div className="py-2">
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ice-gradient drop-shadow-md">
                  {INVITATION_DATA.bride.name}
                </h3>
                <p className="font-urdu text-2xl sm:text-3xl text-gold-300 font-bold mt-2">
                  {INVITATION_DATA.bride.urduName}
                </p>
              </div>

              {/* Family Lineage */}
              <div className="pt-2 border-t border-gold-500/20 max-w-xs mx-auto space-y-1">
                <p className="font-serif text-sm sm:text-base text-ice-100 font-medium italic">
                  {INVITATION_DATA.bride.relation}
                </p>
                <p className="font-urdu text-xs sm:text-sm text-gold-300/80">
                  {INVITATION_DATA.bride.urduRelation}
                </p>
              </div>

              {/* Subtle poetic note */}
              <p className="text-xs text-ice-200/70 font-serif italic pt-2">
                "A gracious daughter stepping into a blessed new dawn with prayers and joy."
              </p>
            </div>
          </motion.div>

          {/* Center Connector Medallion on Desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] border-2 border-white">
            <span className="font-script text-2xl text-teal-950 font-bold">&amp;</span>
          </div>

          {/* Card 2: The Groom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card relative p-8 sm:p-10 rounded-3xl border border-gold-500/35 text-center group hover:border-gold-400 transition-all shadow-xl"
          >
            {/* Ornate Gold Corners */}
            <div className="ornate-corner ornate-corner-tl" />
            <div className="ornate-corner ornate-corner-tr" />
            <div className="ornate-corner ornate-corner-bl" />
            <div className="ornate-corner ornate-corner-br" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-950/80 border border-gold-500/40 text-[10px] font-heading tracking-[0.25em] uppercase text-gold-300">
                The Groom • دولہا
              </span>

              {/* Groom Name Calligraphy & Display */}
              <div className="py-2">
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient drop-shadow-md">
                  {INVITATION_DATA.groom.name}
                </h3>
                <p className="font-urdu text-2xl sm:text-3xl text-gold-300 font-bold mt-2">
                  {INVITATION_DATA.groom.urduName}
                </p>
              </div>

              {/* Family Lineage */}
              <div className="pt-2 border-t border-gold-500/20 max-w-xs mx-auto space-y-1">
                <p className="font-serif text-sm sm:text-base text-ice-100 font-medium italic">
                  {INVITATION_DATA.groom.relation}
                </p>
                <p className="font-urdu text-xs sm:text-sm text-gold-300/80">
                  {INVITATION_DATA.groom.urduRelation}
                </p>
              </div>

              {/* Poetic note */}
              <p className="text-xs text-gold-200/70 font-serif italic pt-2">
                "Embarking upon the noble Sunnah with honour, devotion and gratitude."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sunnah Marriage Du'a Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 p-6 sm:p-8 rounded-2xl bg-teal-950/60 border border-gold-500/25 text-center max-w-2xl mx-auto shadow-lg"
        >
          <div className="font-arabic text-xl sm:text-2xl text-gold-300 leading-relaxed">
            {INVITATION_DATA.islamicQuotes.sunnahDuaArabic}
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-ice-100/90 mt-2">
            "{INVITATION_DATA.islamicQuotes.sunnahDuaTranslation}"
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-gold-400/80 text-[11px] font-heading tracking-widest uppercase">
            <Star className="w-3 h-3 text-gold-400 fill-gold-400/40" />
            <span>Prophetic Du'a for Newlyweds</span>
            <Star className="w-3 h-3 text-gold-400 fill-gold-400/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

