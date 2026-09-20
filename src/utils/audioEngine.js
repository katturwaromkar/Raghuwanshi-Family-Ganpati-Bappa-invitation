/**
 * Devotional Audio Engine
 * Supports audio elements with fallback to Web Audio API ambient drone & temple bells
 */

class DevotionalAudioEngine {
  constructor() {
    this.audioElement = null;
    this.audioCtx = null;
    this.isPlaying = false;
    this.isSynthesized = false;
    this.oscillators = [];
    this.gainNode = null;
    this.listeners = new Set();
  }

  init(audioUrl = '/audio/devotional_bg.mp3') {
    if (typeof window === 'undefined') return;

    if (!this.audioElement) {
      this.audioElement = new Audio(audioUrl);
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';
      this.audioElement.volume = 0.55;

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audioElement.addEventListener('error', () => {
        // Fallback to Web Audio synthesizer if audio file cannot be loaded
        console.info('Audio file fallback: using synthesized ambient devotional sound.');
      });
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.isPlaying);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  /**
   * Rings a sacred brass temple bell chime with resonant overtone decay
   */
  playTempleBell() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      const baseFreq = 528; // Sacred Solfeggio / Indian Bell harmonic (C5/D5 range)
      const harmonics = [1, 2.76, 5.4, 8.9];
      const gains = [0.4, 0.25, 0.12, 0.05];

      harmonics.forEach((h, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * h, ctx.currentTime);

        gain.gain.setValueAtTime(gains[idx], ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 3.3);
      });
    } catch (e) {
      console.warn('Temple bell sound could not be initialized', e);
    }
  }

  /**
   * Starts devotional ambient sound (audio track or soft tanpura synthesizer)
   */
  async play() {
    this.init();
    
    // Play the auspicious opening bell chime
    this.playTempleBell();

    if (this.audioElement) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notifyListeners();
        return;
      } catch (err) {
        console.warn('Audio element play failed, falling back to Web Audio drone:', err);
      }
    }

    this.startSynthesizedDrone();
  }

  /**
   * Synthesizes Indian Tanpura & meditative drone (Sa-Pa scale)
   */
  startSynthesizedDrone() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.stopSynthesizedDrone();

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.08, this.audioCtx.currentTime + 2.5);
      this.gainNode.connect(this.audioCtx.destination);

      // Indian classical Sa (C# / 138.59 Hz), Pa (G# / 207.65 Hz), Sa' (277.18 Hz)
      const freqs = [138.59, 207.65, 277.18, 554.37];
      this.oscillators = freqs.map((f, i) => {
        const osc = this.audioCtx.createOscillator();
        osc.type = i === 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(f, this.audioCtx.currentTime);

        const oscGain = this.audioCtx.createGain();
        oscGain.gain.setValueAtTime(0.3 / (i + 1), this.audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.gainNode);
        osc.start();
        return osc;
      });

      this.isSynthesized = true;
      this.isPlaying = true;
      this.notifyListeners();
    } catch (e) {
      console.warn('Could not start synthesized drone', e);
    }
  }

  stopSynthesizedDrone() {
    if (this.gainNode && this.audioCtx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.8);
      } catch (e) {}
    }
    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];
      this.isSynthesized = false;
    }, 800);
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.isSynthesized) {
      this.stopSynthesizedDrone();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}

export const audioEngine = new DevotionalAudioEngine();
