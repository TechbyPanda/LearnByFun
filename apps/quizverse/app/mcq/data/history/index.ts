import type { MCQQuestion } from "../types";
import { historySyllabus } from "./syllabus";
import { modernWarsAndBattlesQuestions } from "./modernWarsAndBattles";
import { modernAdministrationQuestions } from "./modernAdministration";

export { historySyllabus };

/** Every History question, chapter by chapter in syllabus order. */
export const historyQuestions: MCQQuestion[] = [
  ...modernWarsAndBattlesQuestions,
  ...modernAdministrationQuestions,
];
