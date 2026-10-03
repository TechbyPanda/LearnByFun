import type { Subject } from "../../lib/subject";

export type { Subject };

export interface Flashcard {
  id: string;
  subject: Subject;
  topic: string;
  front: string;
  back: string;
}
