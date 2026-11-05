import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopeIntro from './components/EnvelopeIntro';
import ScrollProgress from './components/ScrollProgress';
import FloatingElements from './components/FloatingElements';
import FloatingAudioControl from './components/FloatingAudioControl';
import Navbar from './components/Navbar';
import HeroCoupleSection from './components/HeroCoupleSection';
import WeddingScheduleSection from './components/WeddingScheduleSection';
import UrduInvitationSection from './components/UrduInvitationSection';
import CountdownTimer from './components/CountdownTimer';
import FamilySection from './components/FamilySection';
import DeveloperCredit from './components/DeveloperCredit';
import Footer from './components/Footer';

export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);

  // Check if opened previously in this browser session
  useEffect(() => {
    const sessionOpened = sessionStorage.getItem('zoya_nikah_envelope_opened');
    if (sessionOpened === 'true' && window.location.hash !== '#intro') {
      setHasOpenedEnvelope(true);
    }
  }, []);

  const handleOpenEnvelope = () => {
    setHasOpenedEnvelope(true);
    try {
      sessionStorage.setItem('zoya_nikah_envelope_opened', 'true');
    } catch (e) {}
  };

  const handleReopenEnvelope = () => {
    setHasOpenedEnvelope(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#011c15] text-[#fcfbf7] relative font-sans">
      {/* Background Royal Islamic Geometric Tessellation in Deep Emerald */}
      <div className="fixed inset-0 bg-islamic-pattern opacity-60 pointer-events-none z-0" />

      {/* Floating Animated Golden Lanterns, Crescent Moon & Shimmer Particles */}
      <FloatingElements />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Music Toggle & Action Buttons */}
      <FloatingAudioControl />

      {/* Cinematic Royal Animated Envelope Opening Screen */}
      <AnimatePresence mode="wait">
        {!hasOpenedEnvelope && (
          <EnvelopeIntro onOpen={handleOpenEnvelope} />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Website Content */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          hasOpenedEnvelope ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        }`}
      >
        <Navbar onReopenEnvelope={handleReopenEnvelope} />

        <main className="space-y-6 sm:space-y-12">
          {/* Hero & Couple Section (Zoya Firdous & Musavvir Ameen - Main Attraction) */}
          <HeroCoupleSection />

          {/* Wedding Schedule: Two Separate Premium Cards with Google Maps buttons */}
          <WeddingScheduleSection />

          {/* Traditional Urdu Invitation Card */}
          <UrduInvitationSection />

          {/* Live Real-Time Countdown Timer */}
          <CountdownTimer />

          {/* Family Wishes & Compliments Section */}
          <FamilySection />

          {/* Subtle & Professional Developer Contact */}
          <DeveloperCredit />
        </main>

        <Footer onReopenEnvelope={handleReopenEnvelope} />
      </div>
    </div>
  );
}
