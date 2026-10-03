import { EMPTY_PROGRESS, type BiteRecord, type LearnProgress } from "./progress";

const STORAGE_KEY = "learn:progress";

export function saveProgress(progress: LearnProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage unavailable (private mode, quota) — persistence is best-effort.
  }
}

function isRecord(value: unknown): value is BiteRecord {
  const record = value as Partial<BiteRecord> | null;
  return (
    typeof record?.completedOn === "string" &&
    typeof record.times === "number" &&
    typeof record.lastCorrect === "boolean"
  );
}

export function loadProgress(): LearnProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const saved = JSON.parse(raw) as Partial<LearnProgress>;

    const completed = Object.fromEntries(
      Object.entries(saved.completed ?? {}).filter(([, record]) => isRecord(record)),
    );
    const activity = Object.fromEntries(
      Object.entries(saved.activity ?? {}).filter(([, count]) => typeof count === "number"),
    );
    return { completed, activity };
  } catch {
    return EMPTY_PROGRESS;
  }
}
