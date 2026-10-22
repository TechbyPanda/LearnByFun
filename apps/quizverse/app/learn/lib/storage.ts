import { readStorage, writeStorage } from "../../lib/storage";
import { EMPTY_PROGRESS, type BiteRecord, type LearnProgress } from "./progress";

const STORAGE_KEY = "learn:progress";

export function saveProgress(progress: LearnProgress): void {
  writeStorage(STORAGE_KEY, progress);
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
  const saved = readStorage(STORAGE_KEY) as Partial<LearnProgress> | null;
  if (!saved) return EMPTY_PROGRESS;

  const completed = Object.fromEntries(
    Object.entries(saved.completed ?? {}).filter(([, record]) => isRecord(record)),
  );
  const activity = Object.fromEntries(
    Object.entries(saved.activity ?? {}).filter(([, count]) => typeof count === "number"),
  );
  return { completed, activity };
}
