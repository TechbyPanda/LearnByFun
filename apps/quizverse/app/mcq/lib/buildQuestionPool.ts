import { questionsBySubject, type MCQQuestion } from "../data";
import type { TestPaperSection } from "../testPapers";
import { shuffleArray } from "./shuffle";

function getSectionQuestions(section: TestPaperSection): MCQQuestion[] {
  const subjectQuestions = questionsBySubject[section.subject] ?? [];
  return section.topics
    ? subjectQuestions.filter((question) => section.topics!.includes(question.topic))
    : subjectQuestions;
}

export function getAvailableCountForSection(section: TestPaperSection): number {
  return getSectionQuestions(section).length;
}

export function getResolvedQuestionCount(sections: TestPaperSection[]): number {
  return sections.reduce(
    (total, section) => total + Math.min(section.count, getAvailableCountForSection(section)),
    0,
  );
}

export function buildQuestionPool(
  sections: TestPaperSection[],
  shuffle: boolean,
): MCQQuestion[] {
  const pool = sections.flatMap((section) => {
    const sectionQuestions = getSectionQuestions(section);
    const ordered = shuffle ? shuffleArray(sectionQuestions) : sectionQuestions;
    return ordered.slice(0, section.count);
  });

  return shuffle ? shuffleArray(pool) : pool;
}
