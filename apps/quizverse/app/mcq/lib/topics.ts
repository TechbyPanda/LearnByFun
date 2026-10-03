import { questionsBySubject, type Subject } from "../data";
import { countByTopic } from "../../lib/topics";

export function getTopicsForSubject(subject: Subject): string[] {
  return countByTopic(questionsBySubject[subject] ?? []).map((stat) => stat.topic);
}
