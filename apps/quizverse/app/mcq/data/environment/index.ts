import type { MCQQuestion } from "../types";
import { environmentSyllabus } from "./syllabus";
import { ecologyBasicsQuestions } from "./ecologyBasics";
import { ecosystemFunctionsQuestions } from "./ecosystemFunctions";
import { biodiversityQuestions } from "./biodiversity";
import { protectedAreasQuestions } from "./protectedAreas";
import { wildlifeConservationQuestions } from "./wildlifeConservation";

export { environmentSyllabus };

/** Every Environment question, chapter by chapter in syllabus order. */
export const environmentQuestions: MCQQuestion[] = [
  ...ecologyBasicsQuestions,
  ...ecosystemFunctionsQuestions,
  ...biodiversityQuestions,
  ...protectedAreasQuestions,
  ...wildlifeConservationQuestions,
];
