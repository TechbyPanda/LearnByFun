import type { QuizConfig } from "./quizConfig";

export interface PaperOverrides {
  count?: number;
  shuffle?: boolean;
}

export function buildPaperUrl(paperId: string, overrides: PaperOverrides = {}): string {
  const params = new URLSearchParams({ paperId });
  if (overrides.count !== undefined) params.set("count", String(overrides.count));
  if (overrides.shuffle !== undefined) params.set("shuffle", String(overrides.shuffle));
  return `/mcq?${params.toString()}`;
}

export function buildCustomUrl(config: QuizConfig): string {
  const params = new URLSearchParams({
    topics: JSON.stringify(config.topicsBySubject),
    count: String(config.questionCount),
    shuffle: String(config.shuffle),
  });
  return `/mcq?${params.toString()}`;
}
