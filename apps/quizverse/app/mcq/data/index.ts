import type { MCQQuestion, Subject } from "./types";
import { polityQuestions } from "./polity";
import { polityHistoryQuestions } from "./polityHistory";
import { polityDpspQuestions } from "./polityDpsp";
import { polityGovernanceQuestions } from "./polityGovernance";
import { economyQuestions } from "./economy";
import { environmentQuestions } from "./environment";
import { historyModernBattlesQuestions } from "./historyModernBattles";
import { historyModernGovernanceQuestions } from "./historyModernGovernance";

export * from "./types";

export const allQuestions: MCQQuestion[] = [
  ...polityQuestions,
  ...polityHistoryQuestions,
  ...polityDpspQuestions,
  ...polityGovernanceQuestions,
  ...economyQuestions,
  ...environmentQuestions,
  ...historyModernBattlesQuestions,
  ...historyModernGovernanceQuestions,
];

export const questionsBySubject: Record<Subject, MCQQuestion[]> = {
  Polity: [
    ...polityQuestions,
    ...polityHistoryQuestions,
    ...polityDpspQuestions,
    ...polityGovernanceQuestions,
  ],
  Economy: economyQuestions,
  "Science & Technology": [],
  Environment: environmentQuestions,
  Geography: [],
  History: [...historyModernBattlesQuestions, ...historyModernGovernanceQuestions],
  "Art & Culture": [],
  "International Relations": [],
  "Current Affairs": [],
};

export { polityQuestions, economyQuestions, environmentQuestions };
