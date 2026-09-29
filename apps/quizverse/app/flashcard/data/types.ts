import type { Subject } from "../../mcq/data/types";

export type { Subject };

export interface Flashcard {
  id: string;
  subject: Subject;
  topic: string;
  front: string;
  back: string;
}
