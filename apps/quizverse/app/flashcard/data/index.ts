import type { Flashcard, Subject } from "./types";
import { polityFlashcards } from "./polity";
import { economyFlashcards } from "./economy";
import { environmentFlashCards } from "./environment";

export * from "./types";

export const allFlashcards: Flashcard[] = [...polityFlashcards, ...economyFlashcards];

export const flashcardsBySubject: Record<Subject, Flashcard[]> = {
  Polity: polityFlashcards,
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
