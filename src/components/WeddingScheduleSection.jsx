import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, ExternalLink, Heart, Utensils } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function WeddingScheduleSection() {
  const [nikahEvent, dinnerEvent] = INVITATION_DATA.events;

  return (
    <section id="schedule" className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
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
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>Programme &amp; Venues</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide">
            WEDDING SCHEDULE
          </h2>

          <p className="font-urdu text-lg sm:text-xl text-gold-200">
            پروگرام تقریبِ نکاح و ضیافتِ طعام
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* TWO SEPARATE LUXURY EVENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* EVENT CARD 1: THE SACRED NIKAH CEREMONY */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxury-card relative p-6 sm:p-8 rounded-3xl border border-gold-500/40 flex flex-col justify-between group hover:border-gold-400 transition-all shadow-xl"
          >
            {/* Ornate Gold Corners */}
            <div className="ornate-corner ornate-corner-tl" />
            <div className="ornate-corner ornate-corner-tr" />
            <div className="ornate-corner ornate-corner-bl" />
            <div className="ornate-corner ornate-corner-br" />

            <div className="space-y-6">
              {/* Event Badge & Title */}
              <div className="border-b border-gold-500/20 pb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-[10px] font-heading uppercase tracking-widest text-gold-300 mb-2">
                  {nikahEvent.badge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-ivory-50">
                  {nikahEvent.title}
                </h3>
                <p className="font-urdu text-lg sm:text-xl text-gold-300 font-bold mt-1">
                  {nikahEvent.urduTitle}
                </p>
              </div>

              {/* Timing & Venue Details */}
              <div className="space-y-4">
                {/* Time */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold font-heading block">
                      Time &amp; Schedule
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                      {nikahEvent.time}
                    </p>
                    <p className="font-urdu text-xs sm:text-sm text-gold-300">
                      {nikahEvent.urduTime}
                    </p>
                    <p className="text-xs text-ivory-300/80 mt-0.5">
                      {INVITATION_DATA.eventDate.day}, {INVITATION_DATA.eventDate.date}
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold font-heading block">
                      Venue Location
                    </span>
                    <p className="font-serif text-base sm:text-lg font-bold text-gold-200">
                      {nikahEvent.venueName}
                    </p>
                    <p className="font-urdu text-xs sm:text-sm text-ivory-100">
                      {nikahEvent.urduVenueName}
                    </p>
                    <p className="text-xs text-ivory-300/80">
                      {nikahEvent.venueAddress}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif italic text-xs sm:text-sm text-ivory-200/90 pt-1 border-t border-gold-500/15">
                  "{nikahEvent.description}"
                </p>
              </div>

              {/* Map Preview Embed */}
              <div className="rounded-xl overflow-hidden border border-gold-500/30 h-36 relative bg-navy-950">
                <iframe
                  title="Ismail Pura Masjid Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(190deg) brightness(95%) contrast(90%)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Ismail Pura Masjid, Kamptee, Maharashtra'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-navy-950/90 rounded text-[9px] text-gold-300 border border-gold-500/30 pointer-events-none">
                  Ismail Pura, Kamptee
                </div>
              </div>
            </div>

            {/* SEPARATE GOOGLE MAPS BUTTON */}
            <div className="mt-6 pt-4 border-t border-gold-500/20">
              <a
                href={nikahEvent.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn w-full py-3 px-5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 text-navy-950 fill-navy-950" />
                <span>DIRECTIONS TO NIKAH VENUE</span>
                <ExternalLink className="w-3.5 h-3.5 text-navy-950" />
              </a>
            </div>
          </motion.div>

          {/* EVENT CARD 2: WEDDING DINNER & CELEBRATION */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxury-card relative p-6 sm:p-8 rounded-3xl border border-gold-500/40 flex flex-col justify-between group hover:border-gold-400 transition-all shadow-xl"
          >
            {/* Ornate Gold Corners */}
            <div className="ornate-corner ornate-corner-tl" />
            <div className="ornate-corner ornate-corner-tr" />
            <div className="ornate-corner ornate-corner-bl" />
            <div className="ornate-corner ornate-corner-br" />

            <div className="space-y-6">
              {/* Event Badge & Title */}
              <div className="border-b border-gold-500/20 pb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-[10px] font-heading uppercase tracking-widest text-gold-300 mb-2">
                  {dinnerEvent.badge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-ivory-50">
                  {dinnerEvent.title}
                </h3>
                <p className="font-urdu text-lg sm:text-xl text-gold-300 font-bold mt-1">
                  {dinnerEvent.urduTitle}
                </p>
              </div>

              {/* Timing & Venue Details */}
              <div className="space-y-4">
                {/* Time */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold font-heading block">
                      Time &amp; Schedule
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-ivory-50">
                      {dinnerEvent.time}
                    </p>
                    <p className="font-urdu text-xs sm:text-sm text-gold-300">
                      {dinnerEvent.urduTime}
                    </p>
                    <p className="text-xs text-ivory-300/80 mt-0.5">
                      {INVITATION_DATA.eventDate.day}, {INVITATION_DATA.eventDate.date}
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold font-heading block">
                      Venue Location
                    </span>
                    <p className="font-serif text-base sm:text-lg font-bold text-gold-200">
                      {dinnerEvent.venueName}
                    </p>
                    <p className="font-urdu text-xs sm:text-sm text-ivory-100">
                      {dinnerEvent.urduVenueName}
                    </p>
                    <p className="text-xs text-ivory-300/80">
                      {dinnerEvent.venueAddress}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif italic text-xs sm:text-sm text-ivory-200/90 pt-1 border-t border-gold-500/15">
                  "{dinnerEvent.description}"
                </p>
              </div>

              {/* Map Preview Embed */}
              <div className="rounded-xl overflow-hidden border border-gold-500/30 h-36 relative bg-navy-950">
                <iframe
                  title="Green Leaf Garden Celebration Lawn Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(190deg) brightness(95%) contrast(90%)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Green Leaf Garden Celebration Lawn, Kalamna Road, Kamptee, Maharashtra'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-navy-950/90 rounded text-[9px] text-gold-300 border border-gold-500/30 pointer-events-none">
                  Kalamna Road, Kamptee
                </div>
              </div>
            </div>

            {/* SEPARATE GOOGLE MAPS BUTTON */}
            <div className="mt-6 pt-4 border-t border-gold-500/20">
              <a
                href={dinnerEvent.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn w-full py-3 px-5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 text-navy-950 fill-navy-950" />
                <span>DIRECTIONS TO DINNER VENUE</span>
                <ExternalLink className="w-3.5 h-3.5 text-navy-950" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

