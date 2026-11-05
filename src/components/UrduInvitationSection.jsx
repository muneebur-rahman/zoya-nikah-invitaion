import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function UrduInvitationSection() {
  const [nikahEvent, dinnerEvent] = INVITATION_DATA.events;

  return (
    <section id="urdu-card" className="relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-heading tracking-[0.3em] uppercase text-gold-400 block mb-1">
            Traditional Urdu Invitation
          </span>
          <h2 className="font-urdu text-2xl sm:text-4xl text-ivory-50 font-bold">
            دعوت نامہ تقریبِ نکاح
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Card Body with Right-To-Left layout */}
        <div
          dir="rtl"
          className="luxury-card relative p-6 sm:p-12 rounded-3xl overflow-hidden border border-gold-500/40 text-center font-urdu shadow-2xl"
        >
          {/* Ornate Gold Corners */}
          <div className="ornate-corner ornate-corner-tl" />
          <div className="ornate-corner ornate-corner-tr" />
          <div className="ornate-corner ornate-corner-bl" />
          <div className="ornate-corner ornate-corner-br" />

          <div className="luxury-card-inner rounded-2xl p-5 sm:p-10 relative">
            {/* Bismillah & Hamd */}
            <div className="mb-6 space-y-2">
              <div className="font-arabic text-2xl sm:text-4xl text-gold-300 drop-shadow-md">
                {INVITATION_DATA.islamicQuotes.bismillah}
              </div>
              <div className="font-arabic text-sm sm:text-base text-ivory-300/80">
                نَحْمَدُهُ وَنُصَلِّي عَلَىٰ رَسُولِهِ الْكَرِيمِ
              </div>
            </div>

            {/* Salutation */}
            <div className="my-5">
              <h3 className="text-lg sm:text-2xl font-bold text-ivory-50">
                جنابِ عالی! السلام علیکم ورحمۃ اللہ وبرکاتہ
              </h3>
            </div>

            {/* Invitation Wording */}
            <div className="max-w-2xl mx-auto space-y-4 text-ivory-100/95 text-base sm:text-xl leading-loose font-normal">
              <p>
                اللہ تبارک و تعالیٰ کے فضل و کرم سے ہماری دخترِ ارجمند
              </p>

              {/* Bride Name Calligraphy */}
              <div className="py-2.5 my-2 border-y border-gold-500/30 bg-navy-950/60 rounded-2xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-wide drop-shadow-md font-urdu py-1">
                  {INVITATION_DATA.bride.urduName}
                </h1>
                <p className="text-xs sm:text-base text-gold-300 font-medium mt-0.5">
                  ({INVITATION_DATA.bride.urduRelation})
                </p>
              </div>

              <p className="text-gold-300 font-semibold text-lg sm:text-xl">
                کا عقدِ مسنون
              </p>

              {/* Groom Name Calligraphy */}
              <div className="py-2.5 my-2 border-y border-gold-500/30 bg-navy-950/60 rounded-2xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-wide drop-shadow-md font-urdu py-1">
                  {INVITATION_DATA.groom.urduName}
                </h1>
                <p className="text-xs sm:text-base text-gold-300 font-medium mt-0.5">
                  ({INVITATION_DATA.groom.urduRelation})
                </p>
              </div>

              <p>
                کی <span className="text-gold-300 font-bold">بابرکت تقریبِ نکاح</span> بخیر و خوبی طے پائی ہے۔
              </p>

              <p className="text-ivory-200 text-sm sm:text-lg italic pt-1">
                آپ کی پُروقار شرکت اور نودمیدہ جوڑے کے حق میں پُرخلوص دعاؤں کے تہہِ دل سے متمنی و خواستگار ہیں۔
              </p>
            </div>

            {/* Event Specifics Box in Urdu for BOTH venues */}
            <div className="mt-8 pt-6 border-t border-gold-500/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center max-w-xl mx-auto">
              {/* Event 1: Nikah */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-gold-500/25 shadow-md">
                <span className="text-xs text-gold-400 font-bold block mb-1">
                  {nikahEvent.urduTitle}
                </span>
                <span className="text-base sm:text-lg font-bold text-ivory-50 block">
                  {nikahEvent.urduVenueName}
                </span>
                <span className="text-xs sm:text-sm text-gold-300 block mt-1">
                  {INVITATION_DATA.eventDate.urduDay}، {INVITATION_DATA.eventDate.urduDate}
                </span>
                <span className="text-xs text-ivory-300/90 block mt-0.5">
                  وقت: {nikahEvent.urduTime}
                </span>
              </div>

              {/* Event 2: Dinner */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-gold-500/25 shadow-md">
                <span className="text-xs text-gold-400 font-bold block mb-1">
                  {dinnerEvent.urduTitle}
                </span>
                <span className="text-base sm:text-lg font-bold text-ivory-50 block">
                  {dinnerEvent.urduVenueName}
                </span>
                <span className="text-xs sm:text-sm text-gold-300 block mt-1">
                  {INVITATION_DATA.eventDate.urduDay}، {INVITATION_DATA.eventDate.urduDate}
                </span>
                <span className="text-xs text-ivory-300/90 block mt-0.5">
                  وقت: {dinnerEvent.urduTime}
                </span>
              </div>
            </div>

            {/* Hosts Signature */}
            <div className="mt-8 pt-6 border-t border-gold-500/20">
              <span className="text-xs text-gold-400 font-bold block mb-1">
                {INVITATION_DATA.family.hosts.urduLabel}:
              </span>
              <p className="text-lg sm:text-2xl font-bold text-ivory-50">
                {INVITATION_DATA.hosts.urdu}
              </p>
              <p className="text-xs sm:text-sm text-gold-300/80 mt-1">
                جملہ اہل خانہ، بلال فیملی و اعزہ و اقارب
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
