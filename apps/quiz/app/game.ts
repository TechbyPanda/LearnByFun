"use client";

import { useSyncExternalStore } from "react";

/**
 * Ranks a student climbs. To reach a rank you need BOTH its total `xp` and that many
 * `papers` cleared (best score of PASS_PERCENT or more). Shown to the student in RankPolicy.tsx.
 */
export const RANKS = [
  { name: "Cadet", icon: "🎒", xp: 0, papers: 0 },
  { name: "Constable", icon: "🪖", xp: 100, papers: 1 },
  { name: "Head Constable", icon: "🎗️", xp: 250, papers: 2 },
  { name: "Sub-Inspector", icon: "⭐", xp: 500, papers: 4 },
  { name: "Inspector", icon: "🌟", xp: 900, papers: 7 },
  { name: "DSP", icon: "🛡️", xp: 1500, papers: 10 },
  { name: "SP", icon: "🦁", xp: 2400, papers: 14 },
  { name: "DIG", icon: "⚔️", xp: 3600, papers: 19 },
  { name: "IG", icon: "🏅", xp: 5200, papers: 25 },
  { name: "DGP", icon: "👑", xp: 7500, papers: 32 },
] as const;

export type Rank = (typeof RANKS)[number];

/** XP rules, in one place so they're easy to tune. */
export const XP = {
  firstCorrect: 10, // first time a question is answered correctly
  repeatCorrect: 2, // same question correct again (stops farming one paper)
  streakBonus: 5, // extra per correct answer once the streak is 3 or more
  streakFrom: 3,
  paperCleared: 25, // first time a paper is finished with PASS_PERCENT or more
  paperMastered: 25, // first time a paper is finished with MASTER_PERCENT or more
  dailyGoal: 20, // once a day, on answering DAILY_GOAL questions
};

/** Score needed to clear a paper (2 stars) and to master it (3 stars). */
export const PASS_PERCENT = 60;
export const MASTER_PERCENT = 90;
/** Questions to answer per day. */
export const DAILY_GOAL = 20;
/** A mastered paper is suggested for revision after this many days. */
export const REVISE_AFTER_DAYS = 7;

export function starsFor(percent: number) {
  return percent >= MASTER_PERCENT ? 3 : percent >= PASS_PERCENT ? 2 : percent >= 30 ? 1 : 0;
}

/** What the student has done with one paper (full attempts only). */
export interface PaperRecord {
  plays: number;
  /** Best and latest score, in percent. */
  best: number;
  last: number;
  /** Time of the latest attempt (ms). */
  at: number;
}

export interface Progress {
  xp: number;
  /** Questions ever answered correctly, as "paperId:questionIndex". */
  solved: string[];
  bestStreak: number;
  /** Attempted papers by paper id. */
  papers: Record<string, PaperRecord>;
  /** Questions answered per day, as "YYYY-MM-DD" → count (last 60 days). */
  activity: Record<string, number>;
  answered: number;
  correct: number;
  bestDayStreak: number;
  /** Last day the daily-goal bonus was paid. */
  goalDay: string;
}

const EMPTY: Progress = {
  xp: 0,
  solved: [],
  bestStreak: 0,
  papers: {},
  activity: {},
  answered: 0,
  correct: 0,
  bestDayStreak: 0,
  goalDay: "",
};
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

/** Local date as "YYYY-MM-DD", `daysAgo` days before today. */
export function dayKey(daysAgo = 0) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const two = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())}`;
}

const noSubscribe = () => () => {};

/** Today's dayKey, or "" while rendering on the server (dates differ by time zone). */
export function useToday() {
  return useSyncExternalStore(noSubscribe, () => dayKey(), () => "");
}

/** Days in a row with practice, counting back from today (or yesterday if today is still empty). */
export function dayStreak(activity: Progress["activity"]) {
  let back = activity[dayKey()] ? 0 : 1;
  let streak = 0;
  while (activity[dayKey(back)]) {
    streak++;
    back++;
  }
  return streak;
}

export function clearedCount(progress: Progress) {
  return Object.values(progress.papers).filter((paper) => paper.best >= PASS_PERCENT).length;
}

export function rankFor(progress: Progress) {
  const cleared = clearedCount(progress);
  let index = 0;
  while (
    index + 1 < RANKS.length &&
    progress.xp >= RANKS[index + 1]!.xp &&
    cleared >= RANKS[index + 1]!.papers
  ) {
    index++;
  }
  const rank = RANKS[index]!;
  const next = RANKS[index + 1];
  const xpLeft = next ? Math.max(0, next.xp - progress.xp) : 0;
  const papersLeft = next ? Math.max(0, next.papers - cleared) : 0;
  const percent = next ? Math.min(100, ((progress.xp - rank.xp) / (next.xp - rank.xp)) * 100) : 100;
  /** One line saying what is still needed for the next rank. */
  const needs = !next
    ? "Highest rank reached"
    : [
        xpLeft > 0 ? `${xpLeft} XP` : "",
        papersLeft > 0 ? `clear ${papersLeft} more ${papersLeft === 1 ? "paper" : "papers"}` : "",
      ]
        .filter(Boolean)
        .join(" + ") + ` to ${next.name}`;
  return { rank, level: index + 1, next, percent, cleared, xpLeft, papersLeft, needs };
}

/** Records one answer and returns the XP gained and the new rank if the student was promoted. */
export function recordAnswer(key: string, correct: boolean, streak: number) {
  const progress = read();
  const today = dayKey();
  const todayCount = (progress.activity[today] ?? 0) + 1;
  const activity = Object.fromEntries(
    Object.entries({ ...progress.activity, [today]: todayCount }).sort().slice(-60),
  );
  const goalReached = todayCount >= DAILY_GOAL && progress.goalDay !== today;

  const isNew = correct && !progress.solved.includes(key);
  const gained =
    (correct
      ? (isNew ? XP.firstCorrect : XP.repeatCorrect) + (streak >= XP.streakFrom ? XP.streakBonus : 0)
      : 0) + (goalReached ? XP.dailyGoal : 0);

  const next: Progress = {
    ...progress,
    xp: progress.xp + gained,
    solved: isNew ? [...progress.solved, key] : progress.solved,
    bestStreak: Math.max(progress.bestStreak, streak),
    activity,
    answered: progress.answered + 1,
    correct: progress.correct + (correct ? 1 : 0),
    bestDayStreak: Math.max(progress.bestDayStreak, dayStreak(activity)),
    goalDay: goalReached ? today : progress.goalDay,
  };
  const before = rankFor(progress).level;
  const after = rankFor(next);
  write(next);
  return { gained, goalReached, promotedTo: after.level > before ? after.rank : null };
}

/** Records a finished full attempt of a paper. Returns bonus XP and the new rank if promoted. */
export function recordAttempt(paperId: string, score: number, total: number) {
  const progress = read();
  const percent = Math.round((score / total) * 100);
  const previous = progress.papers[paperId];
  const previousBest = previous?.best ?? -1;
  const firstClear = previousBest < PASS_PERCENT && percent >= PASS_PERCENT;
  const firstMaster = previousBest < MASTER_PERCENT && percent >= MASTER_PERCENT;
  const bonus = (firstClear ? XP.paperCleared : 0) + (firstMaster ? XP.paperMastered : 0);

  const next: Progress = {
    ...progress,
    xp: progress.xp + bonus,
    papers: {
      ...progress.papers,
      [paperId]: {
        plays: (previous?.plays ?? 0) + 1,
        best: Math.max(previousBest, percent),
        last: percent,
        at: Date.now(),
      },
    },
  };
  const before = rankFor(progress).level;
  const after = rankFor(next);
  write(next);
  return {
    bonus,
    firstClear,
    newBest: previous !== undefined && percent > previousBest,
    promotedTo: after.level > before ? after.rank : null,
  };
}

/** Badges, worked out from progress (nothing extra is stored). */
export function badgesFor(progress: Progress) {
  const records = Object.values(progress.papers);
  const cleared = clearedCount(progress);
  return [
    { icon: "🚀", name: "First step", how: "Answer your first question", earned: progress.answered >= 1 },
    { icon: "🔥", name: "On fire", how: "5 correct answers in a row", earned: progress.bestStreak >= 5 },
    { icon: "⚡", name: "Unstoppable", how: "10 correct answers in a row", earned: progress.bestStreak >= 10 },
    { icon: "📄", name: "Case closed", how: "Clear your first paper", earned: cleared >= 1 },
    { icon: "🗂️", name: "Detective", how: "Clear 5 papers", earned: cleared >= 5 },
    { icon: "💎", name: "Flawless", how: "Score 100% in a paper", earned: records.some((r) => r.best === 100) },
    { icon: "🎯", name: "Goal getter", how: `Answer ${DAILY_GOAL} questions in a day`, earned: progress.goalDay !== "" },
    { icon: "📅", name: "Regular", how: "Practise 3 days in a row", earned: progress.bestDayStreak >= 3 },
    { icon: "🏆", name: "Week warrior", how: "Practise 7 days in a row", earned: progress.bestDayStreak >= 7 },
    { icon: "💯", name: "Century", how: "Get 100 different questions right", earned: progress.solved.length >= 100 },
  ];
}

export function resetProgress() {
  write(EMPTY);
}
