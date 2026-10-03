import { flashcardsBySubject, type Subject } from "../data";

const ALL_SUBJECTS = Object.keys(flashcardsBySubject) as Subject[];

/** Subjects that already have flashcards. */
export const AVAILABLE_SUBJECTS = ALL_SUBJECTS.filter(
  (subject) => (flashcardsBySubject[subject]?.length ?? 0) > 0,
);

/** Subjects still waiting for content. */
export const UPCOMING_SUBJECTS = ALL_SUBJECTS.filter(
  (subject) => !AVAILABLE_SUBJECTS.includes(subject),
);

export const TOTAL_CARDS = AVAILABLE_SUBJECTS.reduce(
  (sum, subject) => sum + (flashcardsBySubject[subject]?.length ?? 0),
  0,
);
