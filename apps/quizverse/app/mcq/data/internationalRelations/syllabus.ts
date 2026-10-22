import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// India and the world. No questions yet.
export const internationalRelationsSyllabus = [
  { title: "India & Its Neighbourhood", subtopics: ["South Asia", "China"] },
  { title: "India & Major Powers", subtopics: ["USA", "Russia", "Europe & Japan"] },
  { title: "India & Extended Neighbourhood", subtopics: ["West Asia", "Indo-Pacific & ASEAN", "Africa & Latin America"] },
  { title: "Regional Groupings", subtopics: ["SAARC & BIMSTEC", "SCO, BRICS & QUAD"] },
  { title: "International Organisations", subtopics: ["United Nations", "G20 & Other Fora"] },
  { title: "Indian Diaspora & Foreign Policy", subtopics: ["Diaspora", "Doctrines & Agreements"] },
] as const satisfies Syllabus;

export const internationalRelationsChapter = chapterBuilder("International Relations", internationalRelationsSyllabus);
