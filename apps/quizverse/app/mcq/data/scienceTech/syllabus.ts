import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Science & Technology for current-affairs-led questions. No questions yet.
export const scienceTechSyllabus = [
  { title: "Biotechnology & Genetics", subtopics: ["Genetic Engineering", "Stem Cells & Cloning"] },
  { title: "Health & Diseases", subtopics: ["Communicable Diseases", "Vaccines & Drugs"] },
  { title: "Space Technology", subtopics: ["Launch Vehicles & Satellites", "Space Missions"] },
  { title: "Defence Technology", subtopics: ["Missiles", "Defence Platforms"] },
  { title: "Nuclear Technology", subtopics: ["Nuclear Power", "Nuclear Policy"] },
  { title: "ICT, AI & Emerging Technologies", subtopics: ["Artificial Intelligence", "Quantum & Semiconductors", "Telecom & Internet"] },
  { title: "Nanotechnology & New Materials", subtopics: ["Nanotechnology"] },
  { title: "Intellectual Property Rights", subtopics: ["Patents, Copyrights & GIs"] },
] as const satisfies Syllabus;

export const scienceTechChapter = chapterBuilder("Science & Technology", scienceTechSyllabus);
