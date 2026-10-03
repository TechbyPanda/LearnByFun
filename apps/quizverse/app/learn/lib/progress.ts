export const DAILY_GOAL = 3;

export interface BiteRecord {
  /** Local date (YYYY-MM-DD) of the most recent completion. */
  completedOn: string;
  /** How many times it has been completed or refreshed. */
  times: number;
  lastCorrect: boolean;
}

export interface LearnProgress {
  completed: Record<string, BiteRecord>;
  /** Bites finished per local date. */
  activity: Record<string, number>;
}

export const EMPTY_PROGRESS: LearnProgress = { completed: {}, activity: {} };

/** Local calendar date as YYYY-MM-DD. */
export function toDateKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function daysBetween(from: string, to: string): number {
  const toUtc = (key: string) => {
    const [y, m, d] = key.split("-").map(Number);
    return Date.UTC(y ?? 0, (m ?? 1) - 1, d ?? 1);
  };
  return Math.round((toUtc(to) - toUtc(from)) / 86_400_000);
}

function shiftDate(key: string, days: number): string {
  const [y, m, d] = key.split("-").map(Number);
  return toDateKey(new Date(y ?? 0, (m ?? 1) - 1, (d ?? 1) + days));
}

/**
 * Records a finished bite. A miss resets `times` so the bite comes back for
 * a refresher tomorrow instead of drifting out to the longer gaps.
 */
export function recordBite(
  progress: LearnProgress,
  biteId: string,
  correct: boolean,
  today: string,
): LearnProgress {
  const previous = progress.completed[biteId];
  const times = correct ? (previous?.times ?? 0) + 1 : 1;
  return {
    completed: { ...progress.completed, [biteId]: { completedOn: today, times, lastCorrect: correct } },
    activity: { ...progress.activity, [today]: (progress.activity[today] ?? 0) + 1 },
  };
}

export function getTodayCount(progress: LearnProgress, today: string): number {
  return progress.activity[today] ?? 0;
}

/** Consecutive active days. The streak stays alive until a whole day is missed. */
export function getStreak(progress: LearnProgress, today: string): number {
  let day = getTodayCount(progress, today) > 0 ? today : shiftDate(today, -1);
  let streak = 0;
  while ((progress.activity[day] ?? 0) > 0) {
    streak += 1;
    day = shiftDate(day, -1);
  }
  return streak;
}

/** The last 7 days (oldest first) with how many bites were finished on each. */
export function getWeek(progress: LearnProgress, today: string): { date: string; count: number }[] {
  return Array.from({ length: 7 }, (_, i) => {
    const date = shiftDate(today, i - 6);
    return { date, count: progress.activity[date] ?? 0 };
  });
}
