/**
 * The one vocabulary every feature (quiz, flashcard, match, learn) shares.
 * Features never import each other's data; they only agree on subject names
 * here, and on free-text topic names inside each subject.
 */
export type Subject =
  | "Polity"
  | "Economy"
  | "Science & Technology"
  | "Environment"
  | "Geography"
  | "History"
  | "Art & Culture"
  | "International Relations"
  | "Current Affairs";
