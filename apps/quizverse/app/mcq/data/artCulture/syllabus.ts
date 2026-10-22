import { chapterBuilder } from "../build";
import type { Syllabus } from "../types";

// Indian Art & Culture. No questions yet.
export const artCultureSyllabus = [
  { title: "Architecture & Sculpture", subtopics: ["Temple Architecture", "Indo-Islamic Architecture", "Buddhist & Rock-Cut Architecture"] },
  { title: "Painting", subtopics: ["Mural Traditions", "Miniature Schools", "Folk Paintings"] },
  { title: "Performing Arts", subtopics: ["Classical Dances", "Music", "Theatre & Puppetry"] },
  { title: "Languages & Literature", subtopics: ["Classical Languages", "Literature"] },
  { title: "Religion & Philosophy", subtopics: ["Schools of Philosophy", "Religious Traditions"] },
  { title: "Fairs, Festivals & Crafts", subtopics: ["Festivals", "Handicrafts & GI Crafts"] },
  { title: "Heritage & Institutions", subtopics: ["UNESCO Heritage Sites", "Cultural Institutions & Awards"] },
] as const satisfies Syllabus;

export const artCultureChapter = chapterBuilder("Art & Culture", artCultureSyllabus);
