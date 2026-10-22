import type { Subject } from "../../lib/subject";

export type { Subject };

/**
 * Which existing content teaches a syllabus unit: a subject, optionally
 * narrowed to some topic names. A name matches a topic exactly, or as the
 * chapter of a "<name> – <subtopic>" topic, so "Historical Background" also
 * covers "Historical Background – Crown Rule (1858–1947)".
 */
export interface Coverage {
  subject: Subject;
  /** Topic names as the features use them; every topic of the subject when omitted. */
  topics?: string[];
  /** Narrows to these subtopics. Only MCQs have subtopics, so other content then doesn't match. */
  subtopics?: string[];
}

/** One item of the syllabus, e.g. "Indian Constitution" or "useEffect". */
export interface SyllabusUnit {
  title: string;
  /** The official wording, one line per point. */
  points?: string[];
  /** Content that teaches this unit. Leave it out until some exists. */
  covers?: Coverage[];
}

/** A block of the syllabus studied together: an exam paper, or a module of a course. */
export interface SyllabusModule {
  id: string;
  title: string;
  /** Short facts shown as tags, e.g. "250 marks" or "Qualifying". */
  facts?: string[];
  description?: string;
  units: SyllabusUnit[];
}

/** A stage of a track, e.g. "Prelims", "Mains", or "Fundamentals" for a course. */
export interface TrackStage {
  id: string;
  title: string;
  description: string;
  modules: SyllabusModule[];
}

/** Something you prepare for, with its own syllabus: an exam such as UPSC CSE, or a skill such as React. */
export interface Track {
  /** URL slug: the dashboard lives at /tracks/<id>. */
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stages: TrackStage[];
}
