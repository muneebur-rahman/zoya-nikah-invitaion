import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Share2, Sparkles, Navigation } from 'lucide-react';
import { INVITATION_DATA, getGoogleCalendarUrl, getWhatsAppShareUrl } from '../data/invitationData';

export default function HeroSection() {
  return (
    <section id="invitation" className="relative py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Decorative Islamic Dome / Arch Silhouette Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full pointer-events-none opacity-25">
        <svg viewBox="0 0 400 620" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#94711f" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M50 620 V260 C50 130 150 45 200 12 C250 45 350 130 350 260 V620"
            stroke="url(#archGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Subtle inner minaret / spire accent */}
          <line x1="200" y1="12" x2="200" y2="70" stroke="#d4af37" strokeWidth="1" />
          <circle cx="200" cy="10" r="3" fill="#fce8a6" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10"
      >
        {/* Bismillah Calligraphy */}
        <div className="mb-6">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-arabic text-gold-300 drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)] leading-relaxed">
            {INVITATION_DATA.islamicQuotes.bismillah}
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-ice-200/80 mt-1">
            In the Name of Allah, the Most Beneficent, the Most Merciful
          </p>
        </div>

        {/* Sacred Quranic Verse */}
        <div className="mb-8 max-w-2xl mx-auto px-5 py-4 rounded-2xl bg-teal-950/70 border border-gold-500/25 backdrop-blur-sm shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
          <p className="font-arabic text-lg sm:text-2xl text-gold-200 leading-loose">
            {INVITATION_DATA.islamicQuotes.quranVerseArabic}
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-ice-100/90 mt-2 leading-relaxed">
            "{INVITATION_DATA.islamicQuotes.quranVerseTranslation}"
          </p>
          <span className="text-[10px] tracking-widest uppercase text-sky-300 font-semibold mt-2 block">
            {INVITATION_DATA.islamicQuotes.quranVerseRef}
          </span>
        </div>

        {/* Grand Invitation Card Container */}
        <div className="luxury-card relative p-6 sm:p-12 rounded-3xl overflow-hidden border border-gold-500/40">
          {/* Ornate Gold Corners */}
          <div className="ornate-corner ornate-corner-tl" />
          <div className="ornate-corner ornate-corner-tr" />
          <div className="ornate-corner ornate-corner-bl" />
          <div className="ornate-corner ornate-corner-br" />

          {/* Inner Dashed Border */}
          <div className="luxury-card-inner rounded-2xl p-6 sm:p-10 relative">
            {/* Host Announcement */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-heading tracking-[0.3em] uppercase text-sky-300 font-semibold block">
                The Wedding Invitation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ice-50 tracking-wide drop-shadow-sm">
                {INVITATION_DATA.hosts.english}
              </h2>
              <p className="font-urdu text-lg sm:text-xl text-gold-300">
                {INVITATION_DATA.hosts.urdu}
              </p>
              <p className="text-sm sm:text-base font-serif italic text-ice-100/90 max-w-xl mx-auto leading-relaxed pt-2">
                {INVITATION_DATA.hosts.description}
              </p>
            </div>

            {/* Ornamental Divider with Heart */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <div className="w-8 h-8 rounded-full border border-gold-500/50 flex items-center justify-center bg-teal-950">
                <Heart className="w-4 h-4 text-gold-400 fill-gold-400/30" />
              </div>
              <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            </div>

            {/* Occasion & Prominent Names */}
            <div className="py-4 space-y-3">
              <span className="text-xs font-heading tracking-[0.28em] uppercase text-sky-200 font-semibold">
                Solemnization of the Auspicious
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-widest">
                NIKAH CEREMONY
              </h3>

              {/* Couple Presentation */}
              <div className="pt-4 pb-2 space-y-3">
                {/* Bride */}
                <div>
                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ice-gradient tracking-wide drop-shadow-[0_4px_25px_rgba(186,230,253,0.4)]">
                    {INVITATION_DATA.bride.name}
                  </h1>
                  <p className="font-serif text-sm sm:text-base text-sky-200/90 italic mt-0.5">
                    {INVITATION_DATA.bride.relation}
                  </p>
                </div>

                {/* Romantic Connector */}
                <div className="flex items-center justify-center gap-3 py-1">
                  <div className="h-[1px] w-12 bg-gold-400/50" />
                  <span className="font-script text-2xl sm:text-3xl text-gold-300">with</span>
                  <div className="h-[1px] w-12 bg-gold-400/50" />
                </div>

                {/* Groom */}
                <div>
                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gold-gradient tracking-wide drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]">
                    {INVITATION_DATA.groom.name}
                  </h1>
                  <p className="font-serif text-sm sm:text-base text-gold-200/90 italic mt-0.5">
                    {INVITATION_DATA.groom.relation}
                  </p>
                </div>
              </div>
            </div>

            {/* Event Highlights Pill */}
            <div className="mt-8 pt-6 border-t border-gold-500/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center max-w-xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-teal-900/50 border border-gold-500/20 backdrop-blur-sm shadow-md">
                <Calendar className="w-5 h-5 text-gold-400 mb-1" />
                <span className="font-heading text-xs tracking-wider uppercase text-sky-200">Date & Time</span>
                <span className="font-serif text-base sm:text-lg font-bold text-ice-50">
                  {INVITATION_DATA.event.day}, {INVITATION_DATA.event.date}
                </span>
                <span className="text-xs text-gold-300 font-semibold">{INVITATION_DATA.event.startTime}</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-2xl bg-teal-900/50 border border-gold-500/20 backdrop-blur-sm shadow-md">
                <MapPin className="w-5 h-5 text-gold-400 mb-1" />
                <span className="font-heading text-xs tracking-wider uppercase text-sky-200">Venue</span>
                <span className="font-serif text-base sm:text-lg font-bold text-ice-50">
                  {INVITATION_DATA.venue.name}
                </span>
                <span className="text-xs text-ice-200/80">{INVITATION_DATA.venue.address}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4 text-teal-950" />
                <span>Save The Date</span>
              </a>

              <a
                href={INVITATION_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold border border-gold-400 text-gold-200 hover:bg-gold-500/15 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold border border-sky-400/70 text-sky-200 hover:bg-sky-500/15 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Share2 className="w-4 h-4 text-sky-300" />
                <span>Share via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

