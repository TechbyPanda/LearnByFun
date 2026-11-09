"use client";

import { getSettings } from "./settings";

/**
 * Game sounds, synthesised with the Web Audio API (no audio files to load).
 * Each sound is a list of notes: [frequency Hz, start s, length s].
 */
type Note = [number, number, number];

const SOUNDS: Record<string, { wave: OscillatorType; volume: number; notes: Note[] }> = {
  correct: { wave: "triangle", volume: 0.18, notes: [[660, 0, 0.09], [990, 0.08, 0.16]] },
  combo: { wave: "triangle", volume: 0.18, notes: [[660, 0, 0.07], [880, 0.06, 0.07], [1320, 0.12, 0.18]] },
  wrong: { wave: "sawtooth", volume: 0.07, notes: [[180, 0, 0.12], [140, 0.11, 0.22]] },
  tick: { wave: "square", volume: 0.04, notes: [[1200, 0, 0.04]] },
  levelup: {
    wave: "triangle",
    volume: 0.18,
    notes: [[523, 0, 0.1], [659, 0.1, 0.1], [784, 0.2, 0.1], [1047, 0.3, 0.32]],
  },
  finish: { wave: "triangle", volume: 0.16, notes: [[784, 0, 0.1], [988, 0.1, 0.1], [1175, 0.2, 0.28]] },
};

export type SoundName = keyof typeof SOUNDS;

let context: AudioContext | null = null;

export function playSound(name: SoundName) {
  if (!getSettings().sound) return;
  const sound = SOUNDS[name];
  if (!sound) return;
  try {
    context ??= new AudioContext();
    if (context.state === "suspended") void context.resume();
    const now = context.currentTime;
    for (const [frequency, start, length] of sound.notes) {
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.type = sound.wave;
      osc.frequency.value = frequency;
      // Quick fade in/out so notes don't click.
      gain.gain.setValueAtTime(0, now + start);
      gain.gain.linearRampToValueAtTime(sound.volume, now + start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + start + length);
      osc.connect(gain).connect(context.destination);
      osc.start(now + start);
      osc.stop(now + start + length + 0.02);
    }
  } catch {
    // Audio not available: stay silent.
  }
}
