// Web Audio API synthesized sounds for cheerful birthday effects

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a cheerful chime note
export function playChime(freq: number = 523.25, duration: number = 0.4, type: OscillatorType = 'sine'): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Audio may be blocked before interaction
  }
}

// Candle blow-out breath sound
export function playBlowSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch {
    // Ignore audio errors
  }
}

// Play cheerful celebratory fanfare
export function playFanfare(): void {
  const notes = [
    { freq: 523.25, time: 0, dur: 0.15 }, // C5
    { freq: 659.25, time: 0.15, dur: 0.15 }, // E5
    { freq: 783.99, time: 0.3, dur: 0.15 }, // G5
    { freq: 1046.5, time: 0.45, dur: 0.45 }, // C6
  ];

  notes.forEach((n) => {
    setTimeout(() => {
      playChime(n.freq, n.dur, 'triangle');
    }, n.time * 1000);
  });
}

// Happy Birthday tune snippet notes (C4, C4, D4, C4, F4, E4...)
export function playHappyBirthdayTune(): void {
  const notes = [
    { freq: 261.63, delay: 0, dur: 0.3 },    // Hap-
    { freq: 261.63, delay: 350, dur: 0.2 },  // py
    { freq: 293.66, delay: 600, dur: 0.4 },  // Birth-
    { freq: 261.63, delay: 1100, dur: 0.4 }, // day
    { freq: 349.23, delay: 1600, dur: 0.4 }, // to
    { freq: 329.63, delay: 2100, dur: 0.8 }, // you!
  ];

  notes.forEach(({ freq, delay, dur }) => {
    setTimeout(() => {
      playChime(freq, dur, 'sine');
    }, delay);
  });
}
