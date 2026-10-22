import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Current affairs, grouped by kind of news. No questions yet.
export const currentAffairsSyllabus = [
  { title: "Government Schemes", subtopics: ["Central Schemes"] },
  { title: "Reports & Indices", subtopics: ["Global Indices", "National Reports"] },
  { title: "Summits & Conferences", subtopics: ["International Summits"] },
  { title: "Places in News", subtopics: ["India", "World"] },
  { title: "Persons & Awards", subtopics: ["Awards", "Appointments"] },
  { title: "Defence Exercises", subtopics: ["Bilateral & Multilateral Exercises"] },
  { title: "Species in News", subtopics: ["Flora & Fauna"] },
] as const satisfies Syllabus;

export const currentAffairsChapter = chapterBuilder("Current Affairs", currentAffairsSyllabus);
