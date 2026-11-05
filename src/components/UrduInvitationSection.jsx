import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function UrduInvitationSection({
  initialOption = 'all',
  brideName,
  brideUrduName,
  groomName,
  groomUrduName,
  onOptionChange,
} = {}) {
  const [nikahEvent, dinnerEvent] = INVITATION_DATA.events;

  // State for Option A (Bride), Option B (Groom), or all (Both)
  const [selectedOption, setSelectedOption] = useState(initialOption);

  // Dynamic names supporting props for testability with fallbacks
  const effectiveBrideName = brideUrduName || INVITATION_DATA.bride.urduName;
  const effectiveGroomName = groomUrduName || INVITATION_DATA.groom.urduName;

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (onOptionChange) {
      onOptionChange(option);
    }
  };

  const isBrideOnly = selectedOption === 'optionA';
  const isGroomOnly = selectedOption === 'optionB';
  const isBrideSelected = selectedOption === 'optionA' || selectedOption === 'all';
  const isGroomSelected = selectedOption === 'optionB' || selectedOption === 'all';

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
        <div className="text-center mb-6">
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

        {/* Option Selection Controls (Option A / Option B / Both) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 no-print">
          <button
            type="button"
            id="btn-option-a"
            data-option="optionA"
            onClick={() => handleSelectOption('optionA')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
              selectedOption === 'optionA'
                ? 'bg-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105'
                : 'bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 border border-emerald-950" />
            <span>Option A: دلہن ({effectiveBrideName})</span>
          </button>

          <button
            type="button"
            id="btn-option-b"
            data-option="optionB"
            onClick={() => handleSelectOption('optionB')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
              selectedOption === 'optionB'
                ? 'bg-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105'
                : 'bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 border border-emerald-950" />
            <span>Option B: دولہا ({effectiveGroomName})</span>
          </button>

          <button
            type="button"
            id="btn-option-all"
            data-option="all"
            onClick={() => handleSelectOption('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
              selectedOption === 'all'
                ? 'bg-gradient-to-r from-gold-400 to-yellow-400 text-emerald-950 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105'
                : 'bg-emerald-950/80 text-gold-200 border-gold-500/35 hover:border-gold-400 hover:bg-emerald-900/90'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-950" />
            <span>مشترکہ دعوت (Both)</span>
          </button>
        </div>

        {/* Card Body with Right-To-Left layout in Royal Emerald */}
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

              {/* Bride Name Box (Option A) - Clickable and 100% visible at all times */}
              <div
                id="name-card-bride"
                data-option="optionA"
                data-name={effectiveBrideName}
                data-selected={isBrideSelected}
                onClick={() => handleSelectOption(isBrideOnly ? 'all' : 'optionA')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectOption(isBrideOnly ? 'all' : 'optionA');
                  }
                }}
                className={`urdu-name-container my-3 p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isBrideOnly
                    ? 'border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.45)] scale-[1.01]'
                    : 'border-gold-500/30 hover:border-gold-400/60'
                }`}
                style={{ isolation: 'isolate' }}
              >
                {/* Background Layer: strictly at z-index 0 with pointer-events-none so it NEVER covers text */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 z-0 ${
                    isBrideOnly ? 'urdu-name-yellow-bg' : 'bg-emerald-950/70'
                  }`}
                  aria-hidden="true"
                />

                {/* Text Layer: strictly at relative z-10 with overflow visible and solid non-transparent text */}
                <div className="relative z-10 overflow-visible text-center select-text">
                  {isBrideOnly && (
                    <span className="inline-block mb-1 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-yellow-400 text-emerald-950 border border-yellow-300 shadow-sm">
                      Option A • منتخب دلہن
                    </span>
                  )}
                  <h1
                    className={`urdu-name-display text-3xl sm:text-5xl font-extrabold font-urdu py-1 select-text ${
                      isBrideSelected ? 'is-active-name' : ''
                    }`}
                  >
                    {effectiveBrideName}
                  </h1>
                  <p className="text-xs sm:text-base text-gold-300 font-medium mt-1 select-text">
                    ({INVITATION_DATA.bride.urduRelation})
                  </p>
                </div>
              </div>

              <p className="text-gold-300 font-semibold text-lg sm:text-xl">
                کا عقدِ مسنون
              </p>

              {/* Groom Name Box (Option B) - Clickable and 100% visible at all times */}
              <div
                id="name-card-groom"
                data-option="optionB"
                data-name={effectiveGroomName}
                data-selected={isGroomSelected}
                onClick={() => handleSelectOption(isGroomOnly ? 'all' : 'optionB')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectOption(isGroomOnly ? 'all' : 'optionB');
                  }
                }}
                className={`urdu-name-container my-3 p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isGroomOnly
                    ? 'border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.45)] scale-[1.01]'
                    : 'border-gold-500/30 hover:border-gold-400/60'
                }`}
                style={{ isolation: 'isolate' }}
              >
                {/* Background Layer: strictly at z-index 0 with pointer-events-none so it NEVER covers text */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 z-0 ${
                    isGroomOnly ? 'urdu-name-yellow-bg' : 'bg-emerald-950/70'
                  }`}
                  aria-hidden="true"
                />

                {/* Text Layer: strictly at relative z-10 with overflow visible and solid non-transparent text */}
                <div className="relative z-10 overflow-visible text-center select-text">
                  {isGroomOnly && (
                    <span className="inline-block mb-1 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-yellow-400 text-emerald-950 border border-yellow-300 shadow-sm">
                      Option B • منتخب دولہا
                    </span>
                  )}
                  <h1
                    className={`urdu-name-display text-3xl sm:text-5xl font-extrabold font-urdu py-1 select-text ${
                      isGroomSelected ? 'is-active-name' : ''
                    }`}
                  >
                    {effectiveGroomName}
                  </h1>
                  <p className="text-xs sm:text-base text-gold-300 font-medium mt-1 select-text">
                    ({INVITATION_DATA.groom.urduRelation})
                  </p>
                </div>
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
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-gold-500/25 shadow-md">
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
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-gold-500/25 shadow-md">
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