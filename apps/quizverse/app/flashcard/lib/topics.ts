import { flashcardsBySubject, type Subject } from "../data";
import { countByTopic, type TopicStat } from "../../lib/topics";

export type { TopicStat };

export function getTopicStats(subject: Subject): TopicStat[] {
  return countByTopic(flashcardsBySubject[subject] ?? []);
}

export function getTopicsForSubject(subject: Subject): string[] {
  return getTopicStats(subject).map((stat) => stat.topic);
}
