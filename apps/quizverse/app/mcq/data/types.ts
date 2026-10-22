import type { Subject } from "../../lib/subject";

export type { Subject };

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQQuestion {
  id: string;
  subject: Subject;
  /** The chapter, e.g. "Fundamental Rights". This is the topic every picker and mock test filters on. */
  topic: string;
  /** A section within the chapter, e.g. "Right to Equality". */
  subtopic: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
}

/** One chapter of a subject's syllabus and the subtopics it is split into. */
export interface Chapter {
  title: string;
  subtopics: readonly string[];
}

/** A subject's chapters, in study order. Chapters may have no questions yet. */
export type Syllabus = readonly Chapter[];
