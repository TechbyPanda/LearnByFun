import type { Subject } from "../data";

export interface TestPaperSection {
  subject: Subject;
  /** Chapters to draw from; all chapters when omitted. */
  topics?: string[];
  /** Narrows the chapters to these subtopics; every subtopic when omitted. */
  subtopics?: string[];
  count: number;
}

export type TestPaperCategory = "Quick" | "Full Length" | "Subject" | "Topic Drill";

export interface TestPaper {
  id: string;
  title: string;
  description: string;
  category: TestPaperCategory;
  sections: TestPaperSection[];
  shuffle: boolean;
}
