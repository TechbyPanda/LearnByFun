import type { Subject } from "../data";

export interface QuizConfig {
  subjects: Subject[];
  questionCount: number;
  shuffle: boolean;
}

const STORAGE_KEY = "mcq:lastQuizConfig";

export function saveQuizConfig(config: QuizConfig): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — safe to ignore
  }
}

export function loadQuizConfig(): QuizConfig | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      !Array.isArray(parsed.subjects) ||
      typeof parsed.questionCount !== "number" ||
      typeof parsed.shuffle !== "boolean"
    ) {
      return null;
    }
    return parsed as QuizConfig;
  } catch {
    return null;
  }
}
