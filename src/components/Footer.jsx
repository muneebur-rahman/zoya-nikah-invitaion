import React from 'react';
import { ChevronUp, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export default function Footer({ onReopenEnvelope }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-8 pb-16 px-4 sm:px-6 bg-[#100206] border-t border-rosegold-500/20 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Closing Blessing */}
        <div className="space-y-1">
          <p className="font-serif text-sm sm:text-base text-ivory-100 font-semibold">
            {INVITATION_DATA.islamicQuotes.closingBlessing}
          </p>
          <p className="font-urdu text-xs sm:text-sm text-rosegold-300">
            {INVITATION_DATA.islamicQuotes.urduClosingBlessing}
          </p>
        </div>

        {/* Buttons: Reopen Envelope & Back to Top */}
        <div className="flex items-center justify-center gap-3 pt-1">
          {onReopenEnvelope && (
            <button
              onClick={onReopenEnvelope}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-950/80 border border-rosegold-500/30 text-rosegold-300 hover:text-white hover:border-rosegold-400 text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-rosegold-400" />
              <span>Reopen Envelope</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-950/80 border border-rosegold-500/30 text-rosegold-300 hover:text-white hover:border-rosegold-400 text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Short Copyright with Correct Names */}
        <div className="text-[10px] text-ivory-300/50 font-sans pt-1">
          <p>
            Nikah: {INVITATION_DATA.bride.name} &amp; {INVITATION_DATA.groom.name} • 23rd Nov 2026 • Kamptee
          </p>
        </div>
      </div>
    </footer>
  );
}

