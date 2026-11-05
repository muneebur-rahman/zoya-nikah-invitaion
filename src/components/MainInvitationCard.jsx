import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Share2, 
  Navigation, 
  Download, 
  Check, 
  Users, 
  Utensils, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  INVITATION_DATA, 
  getGoogleCalendarUrl, 
  downloadIcsFile, 
  getWhatsAppShareUrl 
} from '../data/invitationData';

export default function MainInvitationCard() {
  const [downloaded, setDownloaded] = useState(false);
  const targetTimestamp = new Date(INVITATION_DATA.event.targetIsoDate).getTime();

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
            particleCount: 100,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#bae6fd', '#ffffff', '#072b35'],
          });
        } catch (e) {}
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const handleDownload = () => {
    downloadIcsFile();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const timeUnits = [
    { label: 'DAYS', urdu: 'دن', value: timeLeft.days },
    { label: 'HOURS', urdu: 'گھنٹے', value: timeLeft.hours },
    { label: 'MINS', urdu: 'منٹ', value: timeLeft.minutes },
    { label: 'SECS', urdu: 'سیکنڈ', value: timeLeft.seconds },
  ];

  return (
    <section id="invitation" className="relative py-6 sm:py-12 px-3.5 sm:px-6 max-w-4xl mx-auto">
      {/* Decorative Golden Arch Silhouette Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 400 620" fill="none" className="w-full h-full">
          <path
            d="M50 620 V240 C50 120 150 40 200 10 C250 40 350 120 350 240 V620"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* ONE MASTER LUXURY CARD */}
        <div className="luxury-card relative p-5 sm:p-10 md:p-12 rounded-3xl overflow-hidden border border-gold-500/40 text-center shadow-2xl">
          {/* Ornate Gold Corners */}
          <div className="ornate-corner ornate-corner-tl" />
          <div className="ornate-corner ornate-corner-tr" />
          <div className="ornate-corner ornate-corner-bl" />
          <div className="ornate-corner ornate-corner-br" />

          <div className="luxury-card-inner rounded-2xl p-4 sm:p-8 relative space-y-6 sm:space-y-8">
            {/* 1. BISMILLAH & QURANIC VERSE */}
            <div className="space-y-2">
              <div className="text-2xl sm:text-4xl font-arabic text-gold-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)] leading-relaxed">
                {INVITATION_DATA.islamicQuotes.bismillah}
              </div>
              <p className="text-[11px] sm:text-xs font-serif italic text-ice-200/80">
                In the Name of Allah, the Most Beneficent, the Most Merciful
              </p>

              <div className="pt-2 max-w-xl mx-auto">
                <p className="font-arabic text-base sm:text-xl text-gold-200/90 leading-relaxed">
                  {INVITATION_DATA.islamicQuotes.shortVerseArabic}
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-ice-100/85">
                  "{INVITATION_DATA.islamicQuotes.shortVerseTranslation}"
                  <span className="text-[10px] text-sky-300 ml-1.5 font-sans font-semibold">
                    ({INVITATION_DATA.islamicQuotes.shortVerseRef})
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                <span className="text-gold-400 text-xs">✦</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
              </div>
            </div>

            {/* 2. HOST ANNOUNCEMENT */}
            <div className="space-y-1 sm:space-y-1.5">
              <span className="text-[10px] sm:text-xs font-heading tracking-[0.28em] uppercase text-sky-200 font-semibold block">
                The Nikah Invitation
              </span>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-ice-50 tracking-wide">
                {INVITATION_DATA.hosts.english}
              </h2>
              <p className="font-urdu text-base sm:text-xl text-gold-300 font-bold">
                {INVITATION_DATA.hosts.urdu}
              </p>
              <p className="text-xs sm:text-sm font-serif italic text-ice-100/90 max-w-lg mx-auto leading-relaxed pt-1">
                {INVITATION_DATA.hosts.description}
              </p>
            </div>

            {/* 3. BRIDE & GROOM SPOTLIGHT */}
            <div className="py-2 sm:py-4 border-y border-gold-500/25 bg-gradient-to-b from-teal-900/30 via-teal-900/50 to-teal-900/30 rounded-2xl px-3 sm:px-6">
              <span className="text-[10px] sm:text-xs font-heading tracking-[0.25em] uppercase text-gold-400 font-bold block mb-2">
                Solemnization of Sacred Nikah
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                {/* Bride */}
                <div className="space-y-1 p-2 sm:p-3 rounded-xl bg-teal-950/60 border border-sky-400/25 shadow-sm">
                  <span className="text-[9px] uppercase tracking-widest text-sky-300 font-heading">
                    The Bride • دلہن
                  </span>
                  <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-ice-gradient tracking-wide drop-shadow-md">
                    {INVITATION_DATA.bride.name}
                  </h1>
                  <p className="font-urdu text-xl sm:text-2xl text-gold-300 font-bold">
                    {INVITATION_DATA.bride.urduName}
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-sky-200/90 italic">
                    {INVITATION_DATA.bride.relation}
                  </p>
                  <p className="font-urdu text-[11px] text-gold-400/80">
                    {INVITATION_DATA.bride.urduRelation}
                  </p>
                </div>

                {/* Groom */}
                <div className="space-y-1 p-2 sm:p-3 rounded-xl bg-teal-950/60 border border-gold-500/25 shadow-sm">
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-heading">
                    The Groom • دولہا
                  </span>
                  <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-gold-gradient tracking-wide drop-shadow-md">
                    {INVITATION_DATA.groom.name}
                  </h1>
                  <p className="font-urdu text-xl sm:text-2xl text-gold-300 font-bold">
                    {INVITATION_DATA.groom.urduName}
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-gold-200/90 italic">
                    {INVITATION_DATA.groom.relation}
                  </p>
                  <p className="font-urdu text-[11px] text-gold-400/80">
                    {INVITATION_DATA.groom.urduRelation}
                  </p>
                </div>
              </div>

              {/* Sunnah Du'a */}
              <div className="mt-4 pt-3 border-t border-gold-500/20 text-center">
                <p className="font-arabic text-base sm:text-xl text-gold-300">
                  {INVITATION_DATA.islamicQuotes.sunnahDuaArabic}
                </p>
                <p className="font-serif italic text-[11px] sm:text-xs text-ice-100/85 mt-1">
                  "{INVITATION_DATA.islamicQuotes.sunnahDuaTranslation}"
                </p>
              </div>
            </div>

            {/* 4. COMPACT LIVE COUNTDOWN BADGE */}
            <div className="max-w-md mx-auto">
              <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-sky-300 font-semibold block mb-2">
                Countdown to Nikah Ceremony
              </span>

              {timeLeft.isComplete ? (
                <div className="p-3 rounded-xl bg-teal-900/60 border border-gold-400 text-gold-300 text-sm font-heading font-bold">
                  The Auspicious Nikah Has Begun! • مبارک آغاز
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {timeUnits.map((u) => (
                    <div
                      key={u.label}
                      className="p-2 sm:p-2.5 rounded-xl bg-teal-950/80 border border-gold-500/30 flex flex-col items-center justify-center shadow-md"
                    >
                      <span className="font-heading text-xl sm:text-2xl font-bold text-ice-50 tabular-nums">
                        {String(u.value).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-heading uppercase tracking-wider text-sky-200">
                        {u.label}
                      </span>
                      <span className="font-urdu text-[10px] text-gold-400 -mt-0.5">
                        {u.urdu}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 5. CEREMONY DATE, TIME & VENUE HIGHLIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center max-w-xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-teal-900/50 border border-gold-500/25">
                <div className="flex items-center justify-center gap-1.5 text-gold-400 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-heading text-xs uppercase tracking-wider text-sky-200 font-semibold">
                    Date &amp; Time
                  </span>
                </div>
                <p className="font-serif text-base sm:text-lg font-bold text-ice-50">
                  {INVITATION_DATA.event.day}, {INVITATION_DATA.event.date}
                </p>
                <p className="text-xs text-gold-300 font-semibold">
                  {INVITATION_DATA.event.startTime}
                </p>
                <p className="font-urdu text-xs text-gold-400/90 mt-0.5">
                  {INVITATION_DATA.event.urduDay}، {INVITATION_DATA.event.urduDate} ({INVITATION_DATA.event.urduStartTime})
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-900/50 border border-gold-500/25">
                <div className="flex items-center justify-center gap-1.5 text-gold-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="font-heading text-xs uppercase tracking-wider text-sky-200 font-semibold">
                    Venue
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base font-bold text-ice-50">
                  {INVITATION_DATA.venue.name}
                </p>
                <p className="text-xs text-ice-200/80">
                  {INVITATION_DATA.venue.address}
                </p>
                <p className="font-urdu text-xs text-gold-400/90 mt-0.5">
                  {INVITATION_DATA.venue.urduName}
                </p>
              </div>
            </div>

            {/* 6. COMPACT ITINERARY / PROGRAMME BADGES */}
            <div className="border-t border-gold-500/20 pt-4">
              <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-gold-400 font-semibold block mb-3">
                Programme Itinerary • پروگرام تقریب
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto">
                {INVITATION_DATA.timeline.map((item) => (
                  <div
                    key={item.title}
                    className="p-2.5 rounded-xl bg-teal-950/70 border border-gold-500/20 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-[10px] font-heading font-bold text-gold-300">
                      {item.time}
                    </span>
                    <span className="text-xs font-heading font-semibold text-ice-100">
                      {item.title}
                    </span>
                    <span className="font-urdu text-[11px] text-sky-200 mt-0.5">
                      {item.urduTitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. ACTION BUTTONS HUB */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-950" />
                <span>Save Date</span>
              </a>

              <button
                onClick={handleDownload}
                className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-gold-400 text-gold-200 hover:bg-gold-500/15 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {downloaded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-gold-400" />
                    <span>iCal (.ics)</span>
                  </>
                )}
              </button>

              <a
                href={INVITATION_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-gold-400 text-gold-200 hover:bg-gold-500/15 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-gold-400" />
                <span>Directions</span>
              </a>

              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-sky-400/70 text-sky-200 hover:bg-sky-500/15 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-sky-300" />
                <span>Share WhatsApp</span>
              </a>
            </div>

            {/* 8. FAMILY COMPLIMENTS FOOTER */}
            <div className="pt-4 border-t border-gold-500/20 text-center space-y-1.5">
              <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-sky-300 font-semibold block">
                With Best Compliments From
              </span>
              <p className="font-urdu text-base sm:text-lg text-gold-200 font-bold">
                {INVITATION_DATA.family.compliments.groups[0].urduTitle}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-ice-100/90">
                {INVITATION_DATA.family.compliments.groups[0].englishTitle}
              </p>
              <p className="font-serif italic text-xs text-gold-300/80 pt-1">
                "Awaiting to Welcome You: Mrs. &amp; Mr. Mohammad Bilal and Family"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

