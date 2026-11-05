import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Calendar, Clock } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-6 sm:py-10 px-3.5 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="luxury-card relative p-5 sm:p-8 rounded-3xl border border-gold-500/35 overflow-hidden shadow-xl"
      >
        {/* Ornate Gold Corners */}
        <div className="ornate-corner ornate-corner-tl" />
        <div className="ornate-corner ornate-corner-tr" />
        <div className="ornate-corner ornate-corner-bl" />
        <div className="ornate-corner ornate-corner-br" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Venue Info */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900/60 border border-gold-500/30 text-gold-300 text-[10px] font-heading tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Wedding Destination</span>
            </div>

            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-gold-gradient">
                {INVITATION_DATA.venue.name}
              </h3>
              <p className="font-urdu text-base sm:text-lg text-gold-200 mt-0.5">
                {INVITATION_DATA.venue.urduName}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-ice-100/90 space-y-0.5">
              <p className="font-medium text-sky-200">Kalamna Road, Kamptee</p>
              <p>Maharashtra, India</p>
              <p className="font-urdu text-[11px] text-gold-400/90 pt-0.5">
                {INVITATION_DATA.venue.urduAddress}
              </p>
            </div>

            {/* Quick timing reminder */}
            <div className="pt-2 text-xs text-gold-300/80 flex items-center justify-center md:justify-start gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                Mon, 23 Nov 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                7:30 PM IST
              </span>
            </div>

            {/* Directions button */}
            <div className="pt-2">
              <a
                href={INVITATION_DATA.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold cursor-pointer shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-950 fill-teal-950" />
                <span>Open In Google Maps</span>
                <ExternalLink className="w-3 h-3 text-teal-950" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-gold-500/30 h-48 sm:h-56 relative bg-teal-950 shadow-inner">
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
      </motion.div>
    </section>
  );
}

