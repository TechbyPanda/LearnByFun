import { flashcardsBySubject, type Subject } from "../data";

export interface TopicStat {
  topic: string;
  count: number;
}

export function getTopicStats(subject: Subject): TopicStat[] {
  const counts = new Map<string, number>();
  for (const card of flashcardsBySubject[subject] ?? []) {
    counts.set(card.topic, (counts.get(card.topic) ?? 0) + 1);
  }
  return Array.from(counts, ([topic, count]) => ({ topic, count }));
}

export function getTopicsForSubject(subject: Subject): string[] {
  return getTopicStats(subject).map((stat) => stat.topic);
}
