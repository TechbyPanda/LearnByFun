import type { Flashcard, Subject } from "./types";
import { polityFlashcards } from "./polity";
import { polityHistoryFlashcards } from "./polityHistory";
import { economyFlashcards } from "./economy";
import { environmentFlashCards } from "./environment";

export * from "./types";

export const allFlashcards: Flashcard[] = [
  ...polityFlashcards,
  ...polityHistoryFlashcards,
  ...economyFlashcards,
];

export const flashcardsBySubject: Record<Subject, Flashcard[]> = {
  Polity: [...polityFlashcards, ...polityHistoryFlashcards],
  Economy: economyFlashcards,
  "Science & Technology": [],
  Environment: environmentFlashCards,
  Geography: [],
  History: [],
  "Art & Culture": [],
  "International Relations": [],
  "Current Affairs": [],
};

export { polityFlashcards, economyFlashcards, environmentFlashCards };
