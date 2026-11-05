import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function FamilySection() {
  const { hosts, compliments, awaiting } = INVITATION_DATA.family;

  return (
    <section id="family" className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-300 text-xs font-heading tracking-widest uppercase mb-1">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            <span>Family &amp; Relatives</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide">
            CORDIALLY INVITED BY
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-gold-200">
            میزبان و جملہ ارکانِ خاندان
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Family Cards Layout */}
        <div className="space-y-6">
          {/* Card 1: The Hosts (Mrs. & Mr. Mohammad Bilal) */}
          <div className="luxury-card relative p-6 sm:p-8 rounded-3xl border border-gold-500/40 text-center shadow-xl">
            {/* Ornate Gold Corners */}
            <div className="ornate-corner ornate-corner-tl" />
            <div className="ornate-corner ornate-corner-tr" />
            <div className="ornate-corner ornate-corner-bl" />
            <div className="ornate-corner ornate-corner-br" />

            <div className="relative z-10 space-y-3">
              <span className="text-xs font-heading tracking-[0.25em] uppercase text-gold-400 font-semibold">
                {hosts.englishLabel} • {hosts.urduLabel}
              </span>

              {hosts.names.map((host, idx) => (
                <div key={idx} className="py-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
                    {host.english}
                  </h3>
                  <p className="font-urdu text-xl sm:text-2xl text-gold-300 font-bold mt-1">
                    {host.urdu}
                  </p>
                  <span className="text-xs font-serif italic text-ivory-300/80 mt-1 block">
                    ({host.relation})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: With Best Compliments From */}
          <div className="luxury-card relative p-6 sm:p-8 rounded-3xl border border-gold-500/35 text-center shadow-xl">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-heading tracking-[0.25em] uppercase text-gold-300 font-semibold">
                  {compliments.englishLabel}
                </span>
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>

              <div className="py-2 border-t border-b border-gold-500/20 max-w-lg mx-auto">
                <p className="font-urdu text-xl sm:text-2xl text-gold-100 font-bold leading-relaxed">
                  {compliments.groups[0].urduTitle}
                </p>
                <p className="font-serif italic text-sm sm:text-base text-ivory-100 mt-1">
                  {compliments.groups[0].englishTitle}
                </p>
                <p className="font-urdu text-xs text-gold-400/80 mt-1">
                  {compliments.groups[0].note}
                </p>
              </div>

              <p className="text-xs text-ivory-200/80 font-serif italic max-w-md mx-auto">
                "May your gracious prayers and joyful presence bestow abundant blessings on this blessed union."
              </p>
            </div>
          </div>

          {/* Card 3: Awaiting to Welcome You */}
          <div className="luxury-card relative p-6 sm:p-8 rounded-3xl border border-gold-500/30 text-center shadow-xl">
            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-gold-400 fill-gold-400/20" />
                <span className="text-xs font-heading tracking-[0.25em] uppercase text-gold-300 font-semibold">
                  {awaiting.englishLabel} • {awaiting.urduLabel}
                </span>
                <Heart className="w-4 h-4 text-gold-400 fill-gold-400/20" />
              </div>

              <p className="font-urdu text-lg sm:text-xl text-gold-200 pt-1">
                {awaiting.messageUrdu}
              </p>
              <p className="font-serif italic text-sm text-ivory-100/90">
                {awaiting.messageEnglish}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
