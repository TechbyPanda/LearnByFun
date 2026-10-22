import type { MCQQuestion } from "../data";

export type AnswerStatus = "correct" | "wrong" | "skipped";

export type ReviewFilter = "all" | "incorrect" | "flagged" | "unattempted";

export interface ReviewRow {
  question: MCQQuestion;
  index: number;
  answer: string | null;
  flagged: boolean;
  status: AnswerStatus;
}

export function getAnswerStatus(question: MCQQuestion, answer: string | null): AnswerStatus {
  if (answer === null) return "skipped";
  return answer === question.correctOptionId ? "correct" : "wrong";
}

export function buildReviewRows(
  questions: MCQQuestion[],
  answers: (string | null)[],
  flagged: boolean[],
): ReviewRow[] {
  return questions.map((question, index) => {
    const answer = answers[index] ?? null;
    return {
      question,
      index,
      answer,
      flagged: flagged[index] ?? false,
      status: getAnswerStatus(question, answer),
    };
  });
}

export function filterReviewRows(rows: ReviewRow[], filter: ReviewFilter): ReviewRow[] {
  switch (filter) {
    case "incorrect":
      return rows.filter((row) => row.status === "wrong");
    case "flagged":
      return rows.filter((row) => row.flagged);
    case "unattempted":
      return rows.filter((row) => row.status === "skipped");
    default:
      return rows;
  }
}
