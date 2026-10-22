import type { PickerSubject } from "../../components/SubjectTopicPicker";
import { flashcardsBySubject, type Subject } from "../data";
import { getTopicStats } from "./topics";

const ALL_SUBJECTS = Object.keys(flashcardsBySubject) as Subject[];

/** Subjects that already have flashcards. */
export const AVAILABLE_SUBJECTS = ALL_SUBJECTS.filter(
  (subject) => (flashcardsBySubject[subject]?.length ?? 0) > 0,
);

/** Subjects still waiting for content. */
export const UPCOMING_SUBJECTS = ALL_SUBJECTS.filter(
  (subject) => !AVAILABLE_SUBJECTS.includes(subject),
);

/** The available subjects with their topic counts, as the topic picker wants them. */
export const PICKER_SUBJECTS: PickerSubject[] = AVAILABLE_SUBJECTS.map((subject) => ({
  subject,
  topics: getTopicStats(subject),
}));

export const TOTAL_CARDS = AVAILABLE_SUBJECTS.reduce(
  (sum, subject) => sum + (flashcardsBySubject[subject]?.length ?? 0),
  0,
);
