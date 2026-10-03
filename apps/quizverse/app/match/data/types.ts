import type { Subject } from "../../lib/subject";

export type { Subject };

/** One correct association, e.g. "Art. 14" <-> "Equality before law & equal protection of laws". */
export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchSet {
  id: string;
  subject: Subject;
  /** Free-text topic name; the only thing shared with the quiz and flashcard content. */
  topic: string;
  title: string;
  description: string;
  /** Column headings, e.g. "Article" and "Provision". */
  leftLabel: string;
  rightLabel: string;
  pairs: MatchPair[];
}
