import { questionsBySubject, type MCQQuestion } from "../data";
import type { TestPaperSection } from "../testPapers";
import { shuffleArray } from "../../lib/shuffle";

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

/** Every distinct question the sections could draw from, ignoring each section's count. */
function getFullPool(sections: TestPaperSection[]): MCQQuestion[] {
  const byId = new Map<string, MCQQuestion>();
  for (const section of sections) {
    for (const question of getSectionQuestions(section)) byId.set(question.id, question);
  }
  return Array.from(byId.values());
}

export function getPaperCapacity(sections: TestPaperSection[]): number {
  return getFullPool(sections).length;
}

/**
 * Builds a paper's questions. By default each section contributes its own `count`.
 * With `countOverride` the user picked their own size, so we draw from the whole pool.
 */
export function buildQuestionPool(
  sections: TestPaperSection[],
  shuffle: boolean,
  countOverride?: number,
): MCQQuestion[] {
  if (countOverride !== undefined) {
    const all = getFullPool(sections);
    return (shuffle ? shuffleArray(all) : all).slice(0, countOverride);
  }

  const pool = sections.flatMap((section) => {
    const sectionQuestions = getSectionQuestions(section);
    const ordered = shuffle ? shuffleArray(sectionQuestions) : sectionQuestions;
    return ordered.slice(0, section.count);
  });

  return shuffle ? shuffleArray(pool) : pool;
}
