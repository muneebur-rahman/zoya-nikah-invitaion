import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, Check, Download, ExternalLink, Share2 } from 'lucide-react';
import { INVITATION_DATA, getGoogleCalendarUrl, downloadIcsFile, getWhatsAppShareUrl } from '../data/invitationData';

export default function SaveTheDateCalendar() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    downloadIcsFile();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="luxury-card relative p-8 sm:p-12 rounded-3xl border border-gold-500/40 text-center overflow-hidden shadow-2xl"
      >
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sky-400/10 blur-[85px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/60 border border-gold-500/30 text-gold-300 text-xs font-heading tracking-widest uppercase mb-1">
            <Bell className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
            <span>Mark Your Calendar</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient">
            SAVE THE DATE
          </h3>

          <p className="font-serif italic text-ice-100/90 text-sm sm:text-base leading-relaxed">
            Please add the Nikah Ceremony of <span className="text-ice-50 font-bold">{INVITATION_DATA.bride.name}</span> &amp; <span className="text-gold-300 font-bold">{INVITATION_DATA.groom.name}</span> to your calendar so we may cherish your gracious company.
          </p>

          {/* Date & Time Badge */}
          <div className="my-6 py-4 px-6 rounded-2xl bg-teal-900/45 border border-gold-500/25 inline-flex items-center gap-5 shadow-inner">
            <div className="text-center border-r border-gold-500/30 pr-5">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-gold-300 block">23</span>
              <span className="font-heading text-[10px] uppercase tracking-widest text-sky-200">NOV 2026</span>
            </div>
            <div className="text-left">
              <span className="font-serif text-base font-bold text-ice-50 block">Monday Evening</span>
              <span className="text-xs text-gold-300/90 font-medium">7:30 PM IST onwards</span>
            </div>
          </div>

          {/* Buttons: Google Calendar + iCal + WhatsApp Share */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4 text-teal-950" />
              <span>Add To Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-950" />
            </a>

            <button
              onClick={handleDownload}
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold border border-gold-400 text-gold-200 hover:bg-gold-500/15 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Calendar Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-gold-400" />
                  <span>Download iCal (.ics)</span>
                </>
              )}
            </button>

            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold border border-sky-400/60 text-sky-200 hover:bg-sky-500/15 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-sky-300" />
              <span>Share Invitation</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

