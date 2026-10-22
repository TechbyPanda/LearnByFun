import type { MCQQuestion } from "../types";
import { economySyllabus } from "./syllabus";
import { nationalIncomeQuestions } from "./nationalIncome";
import { inflationQuestions } from "./inflation";
import { moneyAndBankingQuestions } from "./moneyAndBanking";
import { publicFinanceQuestions } from "./publicFinance";
import { externalSectorQuestions } from "./externalSector";
import { internationalOrganisationsQuestions } from "./internationalOrganisations";
import { industryAndInfrastructureQuestions } from "./industryAndInfrastructure";

export { economySyllabus };

/** Every Economy question, chapter by chapter in syllabus order. */
export const economyQuestions: MCQQuestion[] = [
  ...nationalIncomeQuestions,
  ...inflationQuestions,
  ...moneyAndBankingQuestions,
  ...publicFinanceQuestions,
  ...externalSectorQuestions,
  ...internationalOrganisationsQuestions,
  ...industryAndInfrastructureQuestions,
];
