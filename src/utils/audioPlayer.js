// Royal Islamic Wedding Instrumental Audio Engine
// Soft Oud, Nay (Arabic Flute) & Piano Instrumental Arrangement with Ambient Warmth

class WeddingAudioPlayer {
  constructor() {
    this.audio = null;
    this.audioCtx = null;
    this.isPlaying = false;
    this.listeners = new Set();
    this.synthActive = false;
    this.playbackTimer = null;
    this.masterGain = null;
    this.stringGain = null;
    this.stringOscs = [];
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  // Create an acoustic reverberant space using multi-tap delay line
  createReverbNetwork(ctx, destination) {
    const input = ctx.createGain();
    const output = ctx.createGain();

    const delays = [0.18, 0.27, 0.36, 0.45];
    const feedbacks = [0.3, 0.25, 0.2, 0.15];

    delays.forEach((delayTime, i) => {
      const delay = ctx.createDelay();
      delay.delayTime.value = delayTime;

      const fb = ctx.createGain();
      fb.gain.value = feedbacks[i];

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1400;

      input.connect(delay);
      delay.connect(filter);
      filter.connect(fb);
      fb.connect(delay);
      filter.connect(output);
    });

    output.connect(destination);
    return { input, output };
  }

  // Synthesize an authentic acoustic Piano/Oud chord note
  playPluckNote(ctx, freq, startTime, duration = 2.4, isOud = false, targetNode) {
    // Fundamental
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc1.type = isOud ? 'triangle' : 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    // 2nd harmonic with subtle detuning for organic acoustic warmth
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.002, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isOud ? 1800 : 1200, startTime);
    filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

    // Realistic piano/oud envelope: rapid soft attack, natural exponential decay
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(isOud ? 0.08 : 0.09, startTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(targetNode);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  // Synthesize a lyrical breathy Nay (flute) tone with expressive vibrato
  playNayNote(ctx, freq, startTime, duration = 2.2, targetNode) {
    const osc = ctx.createOscillator();
    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Woodwind vibrato LFO (4.8 Hz, delayed onset)
    vibrato.frequency.setValueAtTime(4.8, startTime);
    vibratoGain.gain.setValueAtTime(0.1, startTime);
    vibratoGain.gain.linearRampToValueAtTime(3.2, startTime + 0.6); // Vibrato blossoms gently
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm wooden resonant formant filter
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, startTime);
    filter.Q.value = 4.0;

    // Gentle breath attack and smooth release
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(0.07, startTime + 0.35);
    noteGain.gain.setValueAtTime(0.065, startTime + duration - 0.4);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(targetNode);

    vibrato.start(startTime);
    osc.start(startTime);
    vibrato.stop(startTime + duration + 0.1);
    osc.stop(startTime + duration + 0.1);
  }

  // Start the peaceful, royal wedding instrumental arrangement
  startInstrumentalArrangement() {
    if (this.synthActive) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.synthActive = true;

      // Master Output with graceful volume ramp-in
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.22, this.audioCtx.currentTime + 1.8);
      this.masterGain.connect(this.audioCtx.destination);

      // Reverb Send
      const reverb = this.createReverbNetwork(this.audioCtx, this.masterGain);

      // Lush String Ensemble Pad (D minor / Bayati root drone)
      this.stringGain = this.audioCtx.createGain();
      this.stringGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.stringGain.gain.linearRampToValueAtTime(0.05, this.audioCtx.currentTime + 3.0);

      const padFilter = this.audioCtx.createBiquadFilter();
      padFilter.type = 'lowpass';
      padFilter.frequency.value = 450;
      this.stringGain.connect(padFilter);
      padFilter.connect(this.masterGain);

      const rootFreqs = [146.83, 220.0, 293.66]; // D3, A3, D4
      this.stringOscs = rootFreqs.map((f, idx) => {
        const osc = this.audioCtx.createOscillator();
        osc.type = idx === 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(f + (idx * 0.2), this.audioCtx.currentTime);
        osc.connect(this.stringGain);
        osc.start();
        return osc;
      });

      // Romantic Islamic Wedding Composition:
      // Chords (Piano/Oud arpeggios) & Melodic Phrases (Nay flute solo)
      const chordProgression = [
        // Chord 1: D minor 9 (D3, A3, F4, C5, E5)
        { bass: 146.83, notes: [220.0, 349.23, 523.25, 659.25], nay: 440.0 }, // A4
        // Chord 2: Bb Major 7 (Bb2, F3, D4, A4)
        { bass: 116.54, notes: [174.61, 293.66, 440.0, 587.33], nay: 466.16 }, // Bb4
        // Chord 3: G minor 9 (G2, D3, Bb3, F4, A4)
        { bass: 98.0, notes: [146.83, 233.08, 349.23, 440.0], nay: 392.0 }, // G4
        // Chord 4: A 7 sus 4 -> A 7 (A2, E3, A3, D4, C#5)
        { bass: 110.0, notes: [164.81, 220.0, 293.66, 554.37], nay: 440.0 }, // A4
        // Chord 5: D minor (D3, A3, D4, F4, A4)
        { bass: 146.83, notes: [220.0, 293.66, 349.23, 440.0], nay: 587.33 }, // D5
        // Chord 6: F Major 6 (F2, C3, A3, D4, E4)
        { bass: 87.31, notes: [130.81, 220.0, 293.66, 329.63], nay: 523.25 }, // C5
        // Chord 7: G minor (G2, D3, G3, Bb3, D4)
        { bass: 98.0, notes: [146.83, 196.0, 233.08, 293.66], nay: 349.23 }, // F4
        // Chord 8: A dominant (A2, E3, G3, C#4, E4)
        { bass: 110.0, notes: [164.81, 196.0, 277.18, 329.63], nay: 293.66 }, // D4 resolution
      ];

      let chordIndex = 0;

      const scheduleBar = () => {
        if (!this.synthActive || !this.audioCtx) return;

        const currentBar = chordProgression[chordIndex % chordProgression.length];
        chordIndex = (chordIndex + 1) % chordProgression.length;

        const now = this.audioCtx.currentTime;

        // 1. Piano / Bass root
        this.playPluckNote(this.audioCtx, currentBar.bass, now, 3.2, false, this.masterGain);

        // 2. Rolling arpeggiated piano/oud chord notes
        currentBar.notes.forEach((freq, i) => {
          const noteTime = now + (i * 0.45);
          const isOud = i % 2 === 1;
          this.playPluckNote(this.audioCtx, freq, noteTime, 2.5, isOud, this.masterGain);
          // Send touch to reverb
          this.playPluckNote(this.audioCtx, freq, noteTime, 2.5, isOud, reverb.input);
        });

        // 3. Breathy Nay solo singing above the chord
        const nayStartTime = now + 0.4;
        this.playNayNote(this.audioCtx, currentBar.nay, nayStartTime, 2.4, this.masterGain);
        this.playNayNote(this.audioCtx, currentBar.nay, nayStartTime, 2.4, reverb.input);
      };

      scheduleBar();
      this.playbackTimer = setInterval(scheduleBar, 2200);
    } catch (err) {
      console.warn("Instrumental audio synthesis unavailable:", err);
    }
  }

  stopInstrumentalArrangement() {
    this.synthActive = false;
    if (this.playbackTimer) {
      clearInterval(this.playbackTimer);
      this.playbackTimer = null;
    }

    if (this.masterGain && this.audioCtx) {
      try {
        this.masterGain.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.6);
      } catch (e) {}
    }

    if (this.stringOscs) {
      this.stringOscs.forEach((osc) => {
        try {
          osc.stop();
        } catch (e) {}
      });
      this.stringOscs = [];
    }
  }

  async play() {
    this.isPlaying = true;
    this.notify();

    // Smoothly start the procedural Islamic acoustic instrumental arrangement (Oud, Nay & Piano)
    try {
      this.startInstrumentalArrangement();
    } catch (err) {
      console.warn("Unable to start instrumental arrangement:", err);
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.audio) {
      try {
        this.audio.pause();
      } catch (e) {}
    }
    this.stopInstrumentalArrangement();
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}

export const audioPlayer = new WeddingAudioPlayer();
