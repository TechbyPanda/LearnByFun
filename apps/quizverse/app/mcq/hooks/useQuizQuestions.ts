import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { MCQQuestion, questionsBySubject, type Subject } from "../data";
import { testPapers } from "../testPapers";
import { buildQuestionPool } from "../lib/buildQuestionPool";
import { shuffleArray } from "../lib/shuffle";

export function useQuizQuestions(): MCQQuestion[] {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const paperId = searchParams.get("paperId");
    if (paperId) {
      const paper = testPapers.find((p) => p.id === paperId);
      if (!paper) return [];
      return buildQuestionPool(paper.sections, paper.shuffle);
    }

    const topicsParam = searchParams.get("topics");
    const countParam = searchParams.get("count");
    const shuffleParam = searchParams.get("shuffle") === "true";

    if (!topicsParam || !countParam) return [];

    const count = parseInt(countParam, 10);
    if (!Number.isFinite(count) || count < 1) return [];

    let topicsBySubject: Partial<Record<Subject, string[]>>;
    try {
      topicsBySubject = JSON.parse(topicsParam);
    } catch {
      return [];
    }

    const pool = (Object.entries(topicsBySubject) as [Subject, string[]][]).flatMap(
      ([subject, topics]) =>
        (questionsBySubject[subject] ?? []).filter((question) =>
          topics.includes(question.topic),
        ),
    );
    const orderedPool = shuffleParam ? shuffleArray(pool) : pool;
    return orderedPool.slice(0, count);
  }, [searchParams]);
}
