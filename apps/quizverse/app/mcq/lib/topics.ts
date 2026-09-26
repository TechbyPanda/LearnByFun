import { questionsBySubject, type Subject } from "../data";

export function getTopicsForSubject(subject: Subject): string[] {
  const topics = new Set<string>();
  for (const question of questionsBySubject[subject] ?? []) {
    topics.add(question.topic);
  }
  return Array.from(topics);
}
