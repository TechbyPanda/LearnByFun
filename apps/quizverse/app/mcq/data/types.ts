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
