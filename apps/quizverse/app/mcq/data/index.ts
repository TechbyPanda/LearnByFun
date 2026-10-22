import type { MCQQuestion, Subject, Syllabus } from "./types";
import { polityQuestions, politySyllabus } from "./polity";
import { economyQuestions, economySyllabus } from "./economy";
import { scienceTechQuestions, scienceTechSyllabus } from "./scienceTech";
import { environmentQuestions, environmentSyllabus } from "./environment";
import { geographyQuestions, geographySyllabus } from "./geography";
import { historyQuestions, historySyllabus } from "./history";
import { artCultureQuestions, artCultureSyllabus } from "./artCulture";
import { internationalRelationsQuestions, internationalRelationsSyllabus } from "./internationalRelations";
import { currentAffairsQuestions, currentAffairsSyllabus } from "./currentAffairs";

export * from "./types";

/** Every subject's chapters and subtopics, including chapters with no questions yet. */
export const syllabusBySubject: Record<Subject, Syllabus> = {
  Polity: politySyllabus,
  Economy: economySyllabus,
  "Science & Technology": scienceTechSyllabus,
  Environment: environmentSyllabus,
  Geography: geographySyllabus,
  History: historySyllabus,
  "Art & Culture": artCultureSyllabus,
  "International Relations": internationalRelationsSyllabus,
  "Current Affairs": currentAffairsSyllabus,
};

export const questionsBySubject: Record<Subject, MCQQuestion[]> = {
  Polity: polityQuestions,
  Economy: economyQuestions,
  "Science & Technology": scienceTechQuestions,
  Environment: environmentQuestions,
  Geography: geographyQuestions,
  History: historyQuestions,
  "Art & Culture": artCultureQuestions,
  "International Relations": internationalRelationsQuestions,
  "Current Affairs": currentAffairsQuestions,
};

export const allQuestions: MCQQuestion[] = Object.values(questionsBySubject).flat();
