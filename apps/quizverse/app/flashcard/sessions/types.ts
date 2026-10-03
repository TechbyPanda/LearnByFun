import type { Subject } from "../data";

export interface FlashcardSessionSection {
  subject: Subject;
  /** Omit to include every topic in the subject. */
  topics?: string[];
  /** Max cards drawn from this section; omit to include all matching cards. */
  count?: number;
}

export type FlashcardSessionCategory = "Quick" | "Mixed" | "Subject" | "Topic Drill";

export interface FlashcardSession {
  id: string;
  title: string;
  description: string;
  category: FlashcardSessionCategory;
  sections: FlashcardSessionSection[];
  shuffle: boolean;
}
