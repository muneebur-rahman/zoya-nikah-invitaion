import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Calendar, Heart, Users } from 'lucide-react';
import { audioPlayer } from '../utils/audioPlayer';

export default function Navbar({ onReopenEnvelope }) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = audioPlayer.subscribe((playing) => {
      setIsPlayingMusic(playing);
    });
    return unsubscribe;
  }, []);

  const navLinks = [
    { name: 'Couple', href: '#couple' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Urdu Card', href: '#urdu-card' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Family', href: '#family' },
  ];

  return (
    <nav className="sticky top-0 z-30 w-full bg-navy-950/90 backdrop-blur-md border-b border-gold-500/25 py-2.5 px-4 sm:px-6 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Monogram Brand */}
        <a href="#couple" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <span className="font-heading font-black text-xs text-navy-950">ZM</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-xs sm:text-sm font-bold text-gold-200 tracking-wider group-hover:text-gold-300 transition-colors">
              Zoya &amp; Musavvir
            </span>
            <span className="text-[9px] tracking-widest uppercase text-ivory-300/80 -mt-0.5 font-medium">
              Nikah • 23 Nov 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-ivory-200/80 hover:text-gold-300 transition-colors font-medium hover:scale-105 transform"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls: Stylish Music ON/OFF Button + Replay Envelope */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Reopen Envelope Button */}
          {onReopenEnvelope && (
            <button
              onClick={onReopenEnvelope}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-heading font-semibold uppercase tracking-wider text-gold-300 hover:text-white bg-navy-900/60 hover:bg-navy-850 border border-gold-500/25 transition-all cursor-pointer"
              title="Reopen Animated Envelope"
            >
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Envelope</span>
            </button>
          )}

          {/* ULTRA-STYLISH MUSIC ON/OFF BUTTON */}
          <button
            onClick={() => audioPlayer.toggle()}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              isPlayingMusic
                ? 'bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-gold-400 text-gold-200 shadow-[0_0_15px_rgba(212,175,55,0.45)] ring-1 ring-gold-400/30'
                : 'bg-navy-950/70 border-navy-700/60 text-ivory-300/75 hover:text-white hover:border-gold-500/40'
            }`}
            title={isPlayingMusic ? 'Mute Music' : 'Play Soothing Islamic Wedding Instrumental'}
            aria-label="Toggle Background Music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="font-heading text-[11px] text-gold-200 font-bold">
                  Music ON
                </span>
                {/* Animated Equalizer Wave Bars */}
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-gold-400 rounded-full sound-bar-1" />
                  <span className="w-0.5 bg-gold-400 rounded-full sound-bar-2" />
                  <span className="w-0.5 bg-gold-400 rounded-full sound-bar-3" />
                  <span className="w-0.5 bg-gold-400 rounded-full sound-bar-4" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-ivory-300/70" />
                <span className="font-heading text-[11px] text-ivory-300/80">
                  Music OFF
                </span>
              </>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gold-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 border-b border-gold-500/30 px-4 pt-3 pb-5 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-ivory-100 hover:bg-navy-850 hover:text-gold-300 font-medium"
            >
              {link.name}
            </a>
          ))}

          {onReopenEnvelope && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReopenEnvelope();
              }}
              className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gold-300 hover:bg-navy-850 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Reopen Animated Envelope</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
