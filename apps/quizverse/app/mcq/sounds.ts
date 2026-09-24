let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

function playTone(
  frequencies: number[],
  { duration = 0.15, gap = 0.05, type = "sine" }: { duration?: number; gap?: number; type?: OscillatorType } = {},
) {
  const ctx = getAudioContext();
  if (!ctx) return;

  frequencies.forEach((frequency, index) => {
    const startTime = ctx.currentTime + index * (duration + gap);
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0.15, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  });
}

export function playCorrectSound() {
  playTone([523.25, 783.99], { duration: 0.15, type: "sine" });
}

export function playIncorrectSound() {
  playTone([220, 164.81], { duration: 0.2, type: "sawtooth" });
}

export function playFinishSound() {
  playTone([523.25, 659.25, 783.99, 1046.5], { duration: 0.15, gap: 0.02, type: "triangle" });
}
