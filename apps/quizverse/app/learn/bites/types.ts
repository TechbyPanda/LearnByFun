import type { Subject } from "../../mcq/data/types";

/** One idea, about three minutes: learn it, recall it, then check it. */
export interface Bite {
  id: string;
  subject: Subject;
  topic: string;
  title: string;
  /** 3-5 short lines about a single idea. */
  lesson: string[];
  mnemonic?: string;
  /** 1-3 existing flashcard ids, used for the recall step. */
  flashcardIds: string[];
  /** One existing MCQ id, used for the check step. */
  questionId: string;
}

/** An ordered series of bites on one theme. */
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  biteIds: string[];
}
