import type { MCQQuestion } from "../types";
import { politySyllabus } from "./syllabus";
import { historicalBackgroundQuestions } from "./historicalBackground";
import { makingOfTheConstitutionQuestions } from "./makingOfTheConstitution";
import { fundamentalRightsQuestions } from "./fundamentalRights";
import { dpspQuestions } from "./dpsp";
import { basicStructureQuestions } from "./basicStructure";
import { centreStateRelationsQuestions } from "./centreStateRelations";
import { interStateRelationsQuestions } from "./interStateRelations";
import { emergencyProvisionsQuestions } from "./emergencyProvisions";
import { parliamentQuestions } from "./parliament";
import { judiciaryQuestions } from "./judiciary";
import { localGovernmentQuestions } from "./localGovernment";
import { constitutionalBodiesQuestions } from "./constitutionalBodies";
import { lokpalQuestions } from "./lokpal";
import { governanceQuestions } from "./governance";

export { politySyllabus };

/** Every Polity question, chapter by chapter in syllabus order. */
export const polityQuestions: MCQQuestion[] = [
  ...historicalBackgroundQuestions,
  ...makingOfTheConstitutionQuestions,
  ...fundamentalRightsQuestions,
  ...dpspQuestions,
  ...basicStructureQuestions,
  ...centreStateRelationsQuestions,
  ...interStateRelationsQuestions,
  ...emergencyProvisionsQuestions,
  ...parliamentQuestions,
  ...judiciaryQuestions,
  ...localGovernmentQuestions,
  ...constitutionalBodiesQuestions,
  ...lokpalQuestions,
  ...governanceQuestions,
];
