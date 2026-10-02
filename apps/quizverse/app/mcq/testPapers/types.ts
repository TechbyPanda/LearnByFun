import type { Subject } from "../data";

export interface TestPaperSection {
  subject: Subject;
  topics?: string[];
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
