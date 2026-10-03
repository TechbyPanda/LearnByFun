import type { Flashcard, Subject } from "./types";
import { polityFlashcards } from "./polity";
import { polityHistoryFlashcards } from "./polityHistory";
import { economyFlashcards } from "./economy";
import { environmentFlashCards } from "./environment";
import { polityCurrentAffairFlashcards } from "./polityCurrentAffair";

export * from "./types";

export const allFlashcards: Flashcard[] = [
  ...polityFlashcards,
  ...polityHistoryFlashcards,
  ...economyFlashcards,
  ...polityCurrentAffairFlashcards
];

export const flashcardsBySubject: Record<Subject, Flashcard[]> = {
  Polity: [...polityFlashcards, ...polityHistoryFlashcards, ...polityCurrentAffairFlashcards],
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
