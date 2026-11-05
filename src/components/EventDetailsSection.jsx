import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, ExternalLink, Utensils, Heart } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function EventDetailsSection() {
  return (
    <section id="venue" className="relative py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
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
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Ceremony &amp; Destination</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide">
            EVENT DETAILS &amp; VENUE
          </h2>

          <p className="font-urdu text-lg sm:text-xl text-gold-200">
            تفصیلاتِ تقریب و مقام
          </p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* CARD 1 – NIKAH CEREMONY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
              {/* Card Header */}
              <div className="flex items-center gap-4 border-b border-gold-500/20 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-900/80 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-heading text-sky-300">
                    Sacred Ceremony
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ice-50">
                    NIKAH
                  </h3>
                  <span className="font-urdu text-xs text-gold-300">عقدِ مسنون و تقریبِ نکاح</span>
                </div>
              </div>

              {/* Ceremony Timing Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold font-heading">
                      Date &amp; Day
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-bold text-ice-50">
                      {INVITATION_DATA.event.day}
                    </p>
                    <p className="font-serif text-base text-gold-200">
                      {INVITATION_DATA.event.date}
                    </p>
                    <p className="font-urdu text-xs text-gold-400/90 mt-0.5">
                      {INVITATION_DATA.event.urduDay}، {INVITATION_DATA.event.urduDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold font-heading">
                      Time &amp; Schedule
                    </p>
                    <p className="font-serif text-lg font-bold text-ice-50">
                      {INVITATION_DATA.event.timeDescription}
                    </p>
                    <p className="text-base text-gold-200 font-medium">
                      {INVITATION_DATA.event.startTime}
                    </p>
                    <p className="font-urdu text-xs text-gold-400/90 mt-0.5">
                      {INVITATION_DATA.event.urduStartTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-gold-500/15">
                  <Utensils className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold font-heading">
                      Royal Hospitality
                    </p>
                    <p className="font-serif text-sm text-ice-100/90 italic">
                      Dawat-e-Nikah (Dinner) will be served with gracious welcome.
                    </p>
                    <p className="font-urdu text-xs text-gold-300/80 mt-0.5">
                      طعام و مہمان نوازی
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gold-500/20 text-center">
              <span className="text-xs text-gold-300/90 font-serif italic flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
                "May Allah shower peace and happiness on this auspicious union."
              </span>
            </div>
          </motion.div>

          {/* CARD 2 – VENUE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
              {/* Card Header */}
              <div className="flex items-center gap-4 border-b border-gold-500/20 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-900/80 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-heading text-sky-300">
                    Celebration Venue
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ice-50">
                    CELEBRATION LAWN
                  </h3>
                  <span className="font-urdu text-xs text-gold-300">مقامِ تقریب</span>
                </div>
              </div>

              {/* Venue Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient mb-1">
                    {INVITATION_DATA.venue.name}
                  </h4>
                  <p className="font-urdu text-lg text-ice-100">
                    {INVITATION_DATA.venue.urduName}
                  </p>
                </div>

                <div className="space-y-1 text-ice-100/90 text-sm sm:text-base">
                  <p className="font-medium text-sky-200">Kalamna Road</p>
                  <p className="text-ice-100">Kamptee, Maharashtra</p>
                  <p className="font-urdu text-xs text-gold-400/90 mt-1">
                    {INVITATION_DATA.venue.urduAddress}
                  </p>
                </div>

                {/* Map Preview Embed Frame */}
                <div className="rounded-xl overflow-hidden border border-gold-500/30 h-36 relative bg-teal-950/80">
                  <iframe
                    title="Green Leaf Garden Celebration Lawn Kamptee Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      'Green Leaf Garden Celebration Lawn, Kalamna Road, Kamptee, Maharashtra'
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-teal-950/90 rounded text-[10px] text-gold-300 border border-gold-500/30 pointer-events-none">
                    Kamptee, MH
                  </div>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <div className="mt-6 pt-4 border-t border-gold-500/20">
              <a
                href={INVITATION_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn w-full py-3.5 px-6 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Navigation className="w-4 h-4 text-teal-950 fill-teal-950" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-950" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

