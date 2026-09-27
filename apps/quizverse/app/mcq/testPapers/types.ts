import type { Subject } from "../data";

export interface TestPaperSection {
  subject: Subject;
  topics?: string[];
  count: number;
}

export interface TestPaper {
  id: string;
  title: string;
  description: string;
  sections: TestPaperSection[];
  shuffle: boolean;
}
