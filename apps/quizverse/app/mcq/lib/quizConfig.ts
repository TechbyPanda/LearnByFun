import { readStorage, writeStorage } from "../../lib/storage";
import type { TopicsBySubject } from "../../lib/subject";

export interface QuizConfig {
  topicsBySubject: TopicsBySubject;
  questionCount: number;
  shuffle: boolean;
}

const STORAGE_KEY = "mcq:lastQuizConfig";

export function saveQuizConfig(config: QuizConfig): void {
  writeStorage(STORAGE_KEY, config);
}

export function loadQuizConfig(): QuizConfig | null {
  const saved = readStorage(STORAGE_KEY) as Partial<QuizConfig> | null;
  if (
    !saved ||
    typeof saved.topicsBySubject !== "object" ||
    typeof saved.questionCount !== "number" ||
    typeof saved.shuffle !== "boolean"
  ) {
    return null;
  }
  return saved as QuizConfig;
}
