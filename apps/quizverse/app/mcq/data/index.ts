import type { MCQQuestion, Subject } from "./types";
import { polityQuestions } from "./polity";
import { economyQuestions } from "./economy";

export * from "./types";

export const allQuestions: MCQQuestion[] = [
  ...polityQuestions,
  ...economyQuestions,
];

export const questionsBySubject: Record<Subject, MCQQuestion[]> = {
  Polity: polityQuestions,
  Economy: economyQuestions,
  "Science & Technology": [],
  Environment: [],
  Geography: [],
  History: [],
  "Art & Culture": [],
  "International Relations": [],
  "Current Affairs": [],
};

export { polityQuestions, economyQuestions };
