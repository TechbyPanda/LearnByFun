export interface Question {
  question: string;
  options: [string, string, string, string];
  /** Index (0-3) of the correct option. */
  answer: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface Paper {
  id: string;
  name: string;
  /** Main tags: the subject first, then an optional source (e.g. ["polity", "pyq-2026"]). */
  tags: string[];
  /** Topics covered (e.g. ["parliament", "money-bills"]). Shown as a second filter. */
  subtags: string[];
  questions: Question[];
}
