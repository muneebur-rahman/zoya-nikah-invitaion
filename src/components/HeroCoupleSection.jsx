import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Download, Check, Sparkles } from 'lucide-react';
import { INVITATION_DATA, getGoogleCalendarUrl, downloadIcsFile } from '../data/invitationData';

export default function HeroCoupleSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    downloadIcsFile();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="couple" className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Authentic Moorish Multifoil Cusped Arch Silhouette in Rose Gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 500 750" fill="none" className="w-full h-full">
          {/* Outer Scalloped Cusped Arch */}
          <path
            d="M 50 750 V 380 C 50 320 70 280 100 250 C 90 220 120 180 150 160 C 150 120 190 90 250 30 C 310 90 350 120 350 160 C 380 180 410 220 400 250 C 430 280 450 320 450 380 V 750"
            stroke="#d4888f"
            strokeWidth="1.8"
            strokeDasharray="6 4"
          />
          {/* Inner Halo */}
          <path
            d="M 80 750 V 400 C 80 340 110 300 135 270 C 130 240 160 205 185 185 C 190 150 225 125 250 80 C 275 125 310 150 315 185 C 340 205 370 240 365 270 C 390 300 420 340 420 400 V 750"
            stroke="#f7c7c3"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* Arch Apex Finial */}
          <circle cx="250" cy="24" r="5" fill="#d4888f" />
          <path d="M 250 6 L 250 24" stroke="#d4888f" strokeWidth="2" />
          <path d="M 244 14 L 256 14" stroke="#d4888f" strokeWidth="1.5" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Bismillah Header */}
        <div className="mb-6">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-arabic text-rosegold-300 drop-shadow-[0_2px_14px_rgba(212,136,143,0.5)] leading-relaxed">
            {INVITATION_DATA.islamicQuotes.bismillah}
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-ivory-300/80 mt-1">
            In the Name of Allah, the Most Beneficent, the Most Merciful
          </p>
        </div>

        {/* Sacred Quranic Verse Card with Subtle Islamic Arabesque Arch Inset */}
        <div className="mb-8 max-w-2xl mx-auto px-5 py-4 rounded-2xl bg-burgundy-950/90 border border-rosegold-500/35 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
          <p className="font-arabic text-lg sm:text-2xl text-rosegold-200 leading-loose">
            {INVITATION_DATA.islamicQuotes.quranVerseArabic}
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-ivory-100/90 mt-2 leading-relaxed">
            "{INVITATION_DATA.islamicQuotes.quranVerseTranslation}"
          </p>
          <span className="text-[10px] tracking-widest uppercase text-rosegold-400 font-semibold mt-2 block">
            {INVITATION_DATA.islamicQuotes.quranVerseRef}
          </span>
        </div>

        {/* Grand Royal Burgundy & Rose Gold Invitation Card */}
        <div className="luxury-card relative p-6 sm:p-10 md:p-12 rounded-3xl overflow-hidden border border-rosegold-500/40 shadow-2xl">
          {/* Ornate Rose Gold Corners */}
          <div className="ornate-corner ornate-corner-tl" />
          <div className="ornate-corner ornate-corner-tr" />
          <div className="ornate-corner ornate-corner-bl" />
          <div className="ornate-corner ornate-corner-br" />

          <div className="luxury-card-inner rounded-2xl p-5 sm:p-10 relative">
            {/* Host Announcement */}
            <div className="mb-6 space-y-1.5">
              <span className="text-[11px] sm:text-xs font-heading tracking-[0.3em] uppercase text-rosegold-400 font-semibold block">
                The Wedding Invitation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-50 tracking-wide drop-shadow-sm">
                {INVITATION_DATA.hosts.english}
              </h2>
              <p className="font-urdu text-lg sm:text-2xl text-rosegold-300 font-bold">
                {INVITATION_DATA.hosts.urdu}
              </p>
              <p className="text-sm sm:text-base font-serif italic text-ivory-200/90 max-w-xl mx-auto leading-relaxed pt-1">
                {INVITATION_DATA.hosts.description}
              </p>
            </div>

            {/* Ornamental Divider with Heart */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
              <div className="w-8 h-8 rounded-full border border-rosegold-500/50 flex items-center justify-center bg-burgundy-950 shadow-md">
                <Heart className="w-4 h-4 text-rosegold-400 fill-rosegold-400/30" />
              </div>
              <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
            </div>

            {/* MAIN ATTRACTION: BRIDE & GROOM */}
            <div className="py-2 space-y-4">
              <span className="text-xs font-heading tracking-[0.28em] uppercase text-rosegold-300 font-semibold block">
                Solemnization of the Auspicious
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-rosegold-gradient tracking-widest">
                NIKAH CEREMONY
              </h3>

              {/* Couple Cards Layout with Authentic Arched Pavilion Shapes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-center pt-4">
                {/* Bride: Zoya Firdous */}
                <div className="p-6 rounded-t-[2.8rem] rounded-b-2xl bg-burgundy-950/85 border border-rosegold-500/40 shadow-lg text-center space-y-2 group hover:border-rosegold-400 transition-all relative overflow-hidden">
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
                  <span className="inline-block px-3.5 py-1 rounded-full bg-burgundy-900 border border-rosegold-500/35 text-[10px] font-heading tracking-[0.25em] uppercase text-rosegold-300 shadow-sm">
                    The Bride • دلہن
                  </span>
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory-gradient tracking-wide drop-shadow-md select-text">
                    {INVITATION_DATA.bride.name}
                  </h1>
                  <p className="font-urdu text-2xl sm:text-3xl text-rosegold-300 font-bold mt-1 urdu-name-display select-text">
                    {INVITATION_DATA.bride.urduName}
                  </p>
                  <p className="font-serif text-sm sm:text-base text-ivory-200/90 italic pt-1">
                    {INVITATION_DATA.bride.relation}
                  </p>
                  <p className="font-urdu text-xs sm:text-sm text-rosegold-400/80">
                    {INVITATION_DATA.bride.urduRelation}
                  </p>
                </div>

                {/* Groom: Musavvir Ameen */}
                <div className="p-6 rounded-t-[2.8rem] rounded-b-2xl bg-burgundy-950/85 border border-rosegold-500/40 shadow-lg text-center space-y-2 group hover:border-rosegold-400 transition-all relative overflow-hidden">
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-rosegold-400 to-transparent" />
                  <span className="inline-block px-3.5 py-1 rounded-full bg-burgundy-900 border border-rosegold-500/35 text-[10px] font-heading tracking-[0.25em] uppercase text-rosegold-300 shadow-sm">
                    The Groom • دولہا
                  </span>
                  <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rosegold-gradient tracking-wide drop-shadow-md select-text">
                    {INVITATION_DATA.groom.name}
                  </h1>
                  <p className="font-urdu text-2xl sm:text-3xl text-rosegold-300 font-bold mt-1 urdu-name-display select-text">
                    {INVITATION_DATA.groom.urduName}
                  </p>
                  <p className="font-serif text-sm sm:text-base text-ivory-200/90 italic pt-1">
                    {INVITATION_DATA.groom.relation}
                  </p>
                  <p className="font-urdu text-xs sm:text-sm text-rosegold-400/80">
                    {INVITATION_DATA.groom.urduRelation}
                  </p>
                </div>
              </div>

              {/* Sunnah Marriage Du'a */}
              <div className="mt-6 pt-4 border-t border-rosegold-500/20 text-center max-w-lg mx-auto">
                <div className="font-arabic text-lg sm:text-2xl text-rosegold-300 leading-relaxed">
                  {INVITATION_DATA.islamicQuotes.sunnahDuaArabic}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-ivory-200/90 mt-1">
                  "{INVITATION_DATA.islamicQuotes.sunnahDuaTranslation}"
                </p>
              </div>
            </div>

            {/* Date Badge & Calendar Save Buttons */}
            <div className="mt-8 pt-6 border-t border-rosegold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-rosegold-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-heading text-xs uppercase tracking-wider text-rosegold-300 font-bold">
                    Wedding Day
                  </span>
                </div>
                <p className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                  {INVITATION_DATA.eventDate.day}, {INVITATION_DATA.eventDate.date}
                </p>
                <p className="font-urdu text-xs text-rosegold-400/80">
                  {INVITATION_DATA.eventDate.urduDay}، {INVITATION_DATA.eventDate.urduDate}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rosegold-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5 text-burgundy-950" />
                  <span>Add To Calendar</span>
                </a>

                <button
                  onClick={handleDownload}
                  className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-rosegold-400 text-rosegold-200 hover:bg-rosegold-500/20 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-rosegold-300" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-rosegold-400" />
                      <span>iCal (.ics)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
