import { flashcardsBySubject, type Flashcard } from "../../flashcard/data";
import { allQuestions, type MCQQuestion } from "../../mcq/data";
import type { Bite } from "../bites";

const flashcardById = new Map<string, Flashcard>(
  Object.values(flashcardsBySubject)
    .flat()
    .map((card) => [card.id, card]),
);
const questionById = new Map<string, MCQQuestion>(allQuestions.map((q) => [q.id, q]));

export function getBiteCards(bite: Bite): Flashcard[] {
  return bite.flashcardIds.flatMap((id) => flashcardById.get(id) ?? []);
}

export function getBiteQuestion(bite: Bite): MCQQuestion | undefined {
  return questionById.get(bite.questionId);
}

/** Lists every bite reference that doesn't resolve, so a typo in a bite file is easy to spot. */
export function findBrokenReferences(bites: Bite[]): string[] {
  return bites.flatMap((bite) => [
    ...bite.flashcardIds
      .filter((id) => !flashcardById.has(id))
      .map((id) => `${bite.id}: unknown flashcard "${id}"`),
    ...(questionById.has(bite.questionId)
      ? []
      : [`${bite.id}: unknown question "${bite.questionId}"`]),
  ]);
}
