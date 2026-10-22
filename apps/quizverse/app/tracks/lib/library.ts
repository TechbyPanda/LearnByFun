import { allFlashcards } from "../../flashcard/data";
import { allBites } from "../../learn/bites";
import { matchSets } from "../../match/data";
import { allQuestions, syllabusBySubject } from "../../mcq/data";
import type { Track } from "../data";
import { CONTENT_KINDS, getTrackCoverage, type ContentLibrary } from "./coverage";

/**
 * All content from every feature, by kind. This is the one place `tracks`
 * reaches into the features; everything else works on this library.
 * When a new feature is added, add its content here and a kind in coverage.ts.
 */
export const contentLibrary: ContentLibrary = {
  mcq: allQuestions,
  flashcard: allFlashcards,
  bite: allBites,
  match: matchSets,
};

/**
 * Lists every topic or subtopic a track's coverage names that no content uses
 * and no MCQ syllabus lists, so a typo in a track file is easy to spot.
 */
export function findUnknownCoverage(track: Track): string[] {
  const topics = new Set<string>();
  const subtopics = new Set<string>();
  for (const kind of CONTENT_KINDS) {
    for (const item of contentLibrary[kind]) {
      topics.add(`${item.subject}::${item.topic}`);
      topics.add(`${item.subject}::${item.topic.split(" – ")[0]}`);
      if (item.subtopic) subtopics.add(`${item.subject}::${item.subtopic}`);
    }
  }
  for (const [subject, chapters] of Object.entries(syllabusBySubject)) {
    for (const chapter of chapters) {
      topics.add(`${subject}::${chapter.title}`);
      topics.add(`${subject}::${chapter.title.split(" – ")[0]}`);
      for (const subtopic of chapter.subtopics) subtopics.add(`${subject}::${subtopic}`);
    }
  }
  return getTrackCoverage(track).flatMap(({ subject, topics: names = [], subtopics: subs = [] }) => [
    ...names.filter((name) => !topics.has(`${subject}::${name}`)).map((name) => `${subject}: unknown topic "${name}"`),
    ...subs.filter((sub) => !subtopics.has(`${subject}::${sub}`)).map((sub) => `${subject}: unknown subtopic "${sub}"`),
  ]);
}
