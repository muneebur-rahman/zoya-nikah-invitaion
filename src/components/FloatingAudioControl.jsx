import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ChevronUp } from 'lucide-react';
import { audioPlayer } from '../utils/audioPlayer';

export default function FloatingAudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const unsubscribe = audioPlayer.subscribe((playing) => {
      setIsPlaying(playing);
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Music Control - Fixed Bottom Left in Emerald & Gold */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => audioPlayer.toggle()}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full backdrop-blur-md border shadow-2xl transition-all duration-300 cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-900 border-gold-400 text-gold-200 shadow-[0_0_20px_rgba(212,175,55,0.45)] scale-105'
              : 'bg-emerald-950/85 border-emerald-800/60 text-ivory-200/70 hover:text-white hover:border-gold-500/50'
          }`}
          aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
          title={isPlaying ? 'Mute Background Music' : 'Play Soothing Islamic Wedding Instrumental'}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-gold-200">
                Music ON
              </span>
              {/* Animated Equalizer Wave Bars */}
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 bg-gold-400 rounded-full sound-bar-1" />
                <span className="w-0.5 bg-gold-400 rounded-full sound-bar-2" />
                <span className="w-0.5 bg-gold-400 rounded-full sound-bar-3" />
                <span className="w-0.5 bg-gold-400 rounded-full sound-bar-4" />
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-ivory-300/80" />
              <span className="text-[11px] font-heading font-medium uppercase tracking-wider text-ivory-200">
                Music OFF
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Back To Top Button - Fixed Bottom Right */}
      {showScrollTop && (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-emerald-900/90 hover:bg-gold-500 hover:text-emerald-950 text-gold-300 flex items-center justify-center border border-gold-400/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer"
            title="Scroll To Top"
            aria-label="Scroll To Top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
