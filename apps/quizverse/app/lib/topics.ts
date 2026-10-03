export interface TopicStat {
  topic: string;
  count: number;
}

/** Distinct topics of any topic-tagged items (questions, flashcards), with how many items each has. */
export function countByTopic(items: { topic: string }[]): TopicStat[] {
  const counts = new Map<string, number>();
  for (const { topic } of items) {
    counts.set(topic, (counts.get(topic) ?? 0) + 1);
  }
  return Array.from(counts, ([topic, count]) => ({ topic, count }));
}
