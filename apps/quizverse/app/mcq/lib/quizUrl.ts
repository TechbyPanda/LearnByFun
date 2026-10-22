import { shuffleArray } from "../../lib/shuffle";
import { pruneSelection } from "../../lib/topicSelection";
import type { MCQQuestion } from "../data";
import { testPapers } from "../testPapers";
import { buildQuestionPool, getQuestionsForTopics } from "./buildQuestionPool";
import type { QuizConfig } from "./quizConfig";
import { getTopicsForSubject } from "./topics";

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

function parsePositiveInt(value: string | null): number | undefined {
  const parsed = parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

/** Resolves a quiz URL to its questions: a test paper (`paperId`), or custom topic params. */
export function resolveQuizQuestions(params: URLSearchParams): MCQQuestion[] {
  const paperId = params.get("paperId");
  if (paperId) {
    const paper = testPapers.find((p) => p.id === paperId);
    if (!paper) return [];
    // Optional overrides from the paper launch panel.
    const shuffle = params.get("shuffle");
    return buildQuestionPool(
      paper.sections,
      shuffle === null ? paper.shuffle : shuffle === "true",
      parsePositiveInt(params.get("count")),
    );
  }

  const count = parsePositiveInt(params.get("count"));
  if (count === undefined) return [];

  let topics: unknown;
  try {
    topics = JSON.parse(params.get("topics") ?? "");
  } catch {
    return [];
  }

  const pool = getQuestionsForTopics(pruneSelection(topics, getTopicsForSubject));
  const ordered = params.get("shuffle") === "true" ? shuffleArray(pool) : pool;
  return ordered.slice(0, count);
}
