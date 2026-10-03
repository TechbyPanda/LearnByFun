import type { Subject } from "../../lib/subject";

export type { Subject };

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion {
  id: string;
  subject: Subject;
  topic: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}
