import type { PickerSubject } from "../../components/SubjectTopicPicker";
import { countByTopic } from "../../lib/topics";
import { questionsBySubject, type Subject } from "../data";

export function getTopicsForSubject(subject: Subject): string[] {
  return countByTopic(questionsBySubject[subject] ?? []).map((stat) => stat.topic);
}

const ALL_SUBJECTS = Object.keys(questionsBySubject) as Subject[];

const hasQuestions = (subject: Subject) => (questionsBySubject[subject]?.length ?? 0) > 0;

/** Subjects that have questions, with their topic counts, as the topic picker wants them. */
export const PICKER_SUBJECTS: PickerSubject[] = ALL_SUBJECTS.filter(hasQuestions).map(
  (subject) => ({ subject, topics: countByTopic(questionsBySubject[subject] ?? []) }),
);

/** Subjects still waiting for questions. */
export const UPCOMING_SUBJECTS = ALL_SUBJECTS.filter((subject) => !hasQuestions(subject));
