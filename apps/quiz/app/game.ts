"use client";

import { useSyncExternalStore } from "react";

/** Ranks a student climbs by earning XP. `xp` is the total needed to reach that rank. */
export const RANKS = [
  { name: "Cadet", xp: 0 },
  { name: "Constable", xp: 100 },
  { name: "Head Constable", xp: 250 },
  { name: "Sub-Inspector", xp: 500 },
  { name: "Inspector", xp: 900 },
  { name: "DSP", xp: 1500 },
  { name: "SP", xp: 2400 },
  { name: "DIG", xp: 3600 },
  { name: "IG", xp: 5200 },
  { name: "DGP", xp: 7500 },
] as const;

export type Rank = (typeof RANKS)[number];

/** XP rules, in one place so they're easy to tune. */
export const XP = {
  firstCorrect: 10, // first time a question is answered correctly
  repeatCorrect: 2, // same question correct again (stops farming one paper)
  streakBonus: 5, // extra per correct answer once the streak is 3 or more
  streakFrom: 3,
};

export interface Progress {
  xp: number;
  /** Questions ever answered correctly, as "paperId:questionIndex". */
  solved: string[];
  bestStreak: number;
}

const EMPTY: Progress = { xp: 0, solved: [], bestStreak: 0 };
const STORAGE_KEY = "siren-progress";
const listeners = new Set<() => void>();
let cached: Progress | null = null;

function read(): Progress {
  if (cached) return cached;
  try {
    cached = { ...EMPTY, ...JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") };
  } catch {
    cached = EMPTY;
  }
  return cached!;
}

function write(next: Progress) {
  cached = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage blocked: progress still counts for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    cached = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function rankFor(xp: number) {
  let level = 0;
  RANKS.forEach((rank, i) => {
    if (xp >= rank.xp) level = i;
  });
  const rank = RANKS[level]!;
  const next = RANKS[level + 1];
  const percent = next ? ((xp - rank.xp) / (next.xp - rank.xp)) * 100 : 100;
  return { rank, level: level + 1, next, percent };
}

/** Records one answer and returns the XP gained and the new rank if the student was promoted. */
export function recordAnswer(key: string, correct: boolean, streak: number) {
  const progress = read();
  if (!correct) {
    return { gained: 0, promotedTo: null as Rank | null };
  }
  const isNew = !progress.solved.includes(key);
  const gained =
    (isNew ? XP.firstCorrect : XP.repeatCorrect) + (streak >= XP.streakFrom ? XP.streakBonus : 0);
  const before = rankFor(progress.xp).level;
  const xp = progress.xp + gained;
  const after = rankFor(xp);
  write({
    xp,
    solved: isNew ? [...progress.solved, key] : progress.solved,
    bestStreak: Math.max(progress.bestStreak, streak),
  });
  return { gained, promotedTo: after.level > before ? after.rank : null };
}

export function resetProgress() {
  write(EMPTY);
}
