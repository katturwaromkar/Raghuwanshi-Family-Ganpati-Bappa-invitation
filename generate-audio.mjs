import fs from 'fs';
import path from 'path';

// Generate a 15-second soothing Indian ambient meditative drone (Sa-Pa-Sa harmonic with gentle bell pulses)
const sampleRate = 44100;
const duration = 15;
const numSamples = sampleRate * duration;
const numChannels = 2;
const bytesPerSample = 2;
const blockAlign = numChannels * bytesPerSample;
const byteRate = sampleRate * blockAlign;
const dataSize = numSamples * blockAlign;
const buffer = Buffer.alloc(44 + dataSize);

// RIFF header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);

// fmt chunk
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // subchunk1size (16 for PCM)
buffer.writeUInt16LE(1, 20);  // audioFormat (1 for PCM)
buffer.writeUInt16LE(numChannels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(byteRate, 28);
buffer.writeUInt16LE(blockAlign, 32);
buffer.writeUInt16LE(16, 34); // bitsPerSample

// data chunk
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

// Indian classical Tanpura frequencies (C# base: 138.59 Hz, Pa: 207.65 Hz, Sa': 277.18 Hz)
const baseSa = 138.59;
const pa = 207.65;
const highSa = 277.18;
const fluteHarmonic = 554.37;

let offset = 44;
for (let i = 0; i < numSamples; i++) {
  const t = i / sampleRate;
  
  // Envelope for smooth looping
  const fadeIn = Math.min(1, t / 1.5);
  const fadeOut = Math.min(1, (duration - t) / 1.5);
  const loopEnv = fadeIn * fadeOut;

  // Tanpura drone modulation
  const drone1 = Math.sin(2 * Math.PI * baseSa * t) * 0.25;
  const drone2 = Math.sin(2 * Math.PI * pa * t + 0.3) * 0.18;
  const drone3 = Math.sin(2 * Math.PI * highSa * t + 0.7) * 0.12;
  
  // Flute melody tone with gentle vibrato
  const vibrato = Math.sin(2 * Math.PI * 4.5 * t) * 2;
  const fluteFreq = fluteHarmonic + vibrato;
  const fluteVolume = (Math.sin(2 * Math.PI * 0.2 * t) * 0.5 + 0.5) * 0.12;
  const flute = Math.sin(2 * Math.PI * fluteFreq * t) * fluteVolume;

  // Gentle bell shimmer every 3.75s
  const bellPeriod = 3.75;
  const bellPhase = t % bellPeriod;
  const bellEnv = Math.exp(-bellPhase * 4.5);
  const bellTone = (
    Math.sin(2 * Math.PI * 1056 * bellPhase) * 0.5 +
    Math.sin(2 * Math.PI * 2112 * bellPhase) * 0.25 +
    Math.sin(2 * Math.PI * 3168 * bellPhase) * 0.1
  ) * bellEnv * 0.15;

  const sampleVal = (drone1 + drone2 + drone3 + flute + bellTone) * loopEnv;
  const clampedVal = Math.max(-1, Math.min(1, sampleVal));
  const int16Val = Math.floor(clampedVal * 32767);

  // Left channel
  buffer.writeInt16LE(int16Val, offset);
  // Right channel (subtle stereo delay)
  buffer.writeInt16LE(int16Val, offset + 2);
  offset += 4;
}

const outputPath = path.resolve('public/audio/devotional_bg.mp3');
fs.writeFileSync(outputPath, buffer);
console.log('Created devotional audio track at:', outputPath);
