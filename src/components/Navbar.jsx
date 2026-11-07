import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
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
    <nav className="sticky top-0 z-30 w-full bg-burgundy-950/90 backdrop-blur-md border-b border-rosegold-500/25 py-2.5 px-4 sm:px-6 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Monogram Brand */}
        <a href="#couple" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rosegold-300 via-rosegold-500 to-rosegold-700 flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <span className="font-heading font-black text-xs text-burgundy-950">ZM</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-xs sm:text-sm font-bold text-rosegold-200 tracking-wider group-hover:text-rosegold-300 transition-colors">
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
              className="text-xs uppercase tracking-widest text-ivory-200/85 hover:text-rosegold-300 transition-colors font-medium hover:scale-105 transform"
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-heading font-semibold uppercase tracking-wider text-rosegold-300 hover:text-white bg-burgundy-900/60 hover:bg-burgundy-850 border border-rosegold-500/25 transition-all cursor-pointer"
              title="Reopen Animated Envelope"
            >
              <Sparkles className="w-3 h-3 text-rosegold-400" />
              <span>Envelope</span>
            </button>
          )}

          {/* ULTRA-STYLISH MUSIC ON/OFF BUTTON */}
          <button
            onClick={() => audioPlayer.toggle()}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              isPlayingMusic
                ? 'bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 border-rosegold-400 text-rosegold-200 shadow-[0_0_15px_rgba(212,136,143,0.5)] ring-1 ring-rosegold-400/30'
                : 'bg-burgundy-950/70 border-burgundy-800/60 text-ivory-300/75 hover:text-white hover:border-rosegold-500/40'
            }`}
            title={isPlayingMusic ? 'Mute Music' : 'Play Soothing Islamic Wedding Instrumental'}
            aria-label="Toggle Background Music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rosegold-400 animate-pulse" />
                <span className="font-heading text-[11px] text-rosegold-200 font-bold">
                  Music ON
                </span>
                {/* Animated Equalizer Wave Bars in Rose Gold */}
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-rosegold-400 rounded-full sound-bar-1" />
                  <span className="w-0.5 bg-rosegold-400 rounded-full sound-bar-2" />
                  <span className="w-0.5 bg-rosegold-400 rounded-full sound-bar-3" />
                  <span className="w-0.5 bg-rosegold-400 rounded-full sound-bar-4" />
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
            className="md:hidden p-1.5 text-rosegold-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-burgundy-950/95 border-b border-rosegold-500/30 px-4 pt-3 pb-5 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-ivory-100 hover:bg-burgundy-850 hover:text-rosegold-300 font-medium"
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
              className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-rosegold-300 hover:bg-burgundy-850 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-rosegold-400" />
              <span>Reopen Animated Envelope</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

