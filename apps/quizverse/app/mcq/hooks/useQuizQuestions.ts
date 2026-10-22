import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { MCQQuestion } from "../data";
import { resolveQuizQuestions } from "../lib/quizUrl";

export function useQuizQuestions(): MCQQuestion[] {
  const searchParams = useSearchParams();
  return useMemo(() => resolveQuizQuestions(searchParams), [searchParams]);
}
