import type { MCQQuestion, Subject, Syllabus } from "./types";

type OptionId = "a" | "b" | "c" | "d";

type ChapterTitle<S extends Syllabus> = S[number]["title"];

type SubtopicOf<S extends Syllabus, T extends string> = Extract<
  S[number],
  { title: T }
>["subtopics"][number];

/** How a question is written in a chapter file. Options are lettered a–d in order. */
export interface QuestionInput<Subtopic extends string> {
  id: string;
  subtopic: Subtopic;
  question: string;
  options: [string, string, string, string];
  correctOptionId: OptionId;
  explanation: string;
}

/**
 * Returns a helper that turns one chapter's questions into `MCQQuestion`s.
 * The chapter title and each subtopic are checked against the syllabus at
 * compile time, so a question can only be filed under a listed subtopic.
 */
export function chapterBuilder<const S extends Syllabus>(subject: Subject, _syllabus: S) {
  return <T extends ChapterTitle<S>>(
    chapter: T,
    questions: readonly QuestionInput<NoInfer<SubtopicOf<S, T>>>[],
  ): MCQQuestion[] =>
    questions.map(({ id, subtopic, question, options, correctOptionId, explanation }) => ({
      id,
      subject,
      topic: chapter,
      subtopic,
      question,
      options: options.map((text, i) => ({ id: String.fromCharCode(97 + i), text })),
      correctOptionId,
      explanation,
    }));
}
