import { flashcardsBySubject, type Subject } from "../data";

export function getTopicsForSubject(subject: Subject): string[] {
  const topics = new Set<string>();
  for (const card of flashcardsBySubject[subject] ?? []) {
    topics.add(card.topic);
  }
  return Array.from(topics);
}
