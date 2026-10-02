import type { MCQQuestion, Subject } from "./types";
import { polityQuestions } from "./polity";
import { polityHistoryQuestions } from "./polityHistory";
import { economyQuestions } from "./economy";
import { environmentQuestions } from "./environment";

export * from "./types";

export const allQuestions: MCQQuestion[] = [
  ...polityQuestions,
  ...polityHistoryQuestions,
  ...economyQuestions,
  ...environmentQuestions,
];

export const questionsBySubject: Record<Subject, MCQQuestion[]> = {
  Polity: [...polityQuestions, ...polityHistoryQuestions],
  Economy: economyQuestions,
  "Science & Technology": [],
  Environment: environmentQuestions,
  Geography: [],
  History: [],
  "Art & Culture": [],
  "International Relations": [],
  "Current Affairs": [],
};

export { polityQuestions, economyQuestions, environmentQuestions };
