import type { Subject } from "../../lib/subject";
import type { Coverage, SyllabusModule, Track, TrackStage } from "../data";

/** The kinds of content a syllabus unit can be covered by, one per feature. */
export const CONTENT_KINDS = ["mcq", "flashcard", "bite", "match"] as const;
export type ContentKind = (typeof CONTENT_KINDS)[number];

export const CONTENT_LABELS: Record<ContentKind, { one: string; many: string }> = {
  mcq: { one: "MCQ", many: "MCQs" },
  flashcard: { one: "flashcard", many: "flashcards" },
  bite: { one: "bite", many: "bites" },
  match: { one: "match set", many: "match sets" },
};

export type ContentCounts = Record<ContentKind, number>;

/** Any topic-tagged item: a question, a flashcard, a bite or a match set. */
export interface TaggedItem {
  subject: Subject;
  topic: string;
  subtopic?: string;
}

/** Every piece of content in the app, by kind. */
export type ContentLibrary = Record<ContentKind, readonly TaggedItem[]>;

export interface UnitView {
  title: string;
  points: string[];
  counts: ContentCounts;
  total: number;
}

export interface ModuleView {
  id: string;
  title: string;
  facts: string[];
  description?: string;
  units: UnitView[];
  /** Units with at least one piece of content. */
  coveredUnits: number;
}

export interface StageView {
  id: string;
  title: string;
  description: string;
  modules: ModuleView[];
  coveredUnits: number;
  totalUnits: number;
}

function topicMatches(topic: string, names: string[]): boolean {
  return names.some((name) => topic === name || topic.startsWith(`${name} – `));
}

export function isCovered(item: TaggedItem, covers: readonly Coverage[]): boolean {
  return covers.some(
    ({ subject, topics, subtopics }) =>
      item.subject === subject &&
      (!topics || topicMatches(item.topic, topics)) &&
      (!subtopics || (item.subtopic !== undefined && subtopics.includes(item.subtopic))),
  );
}

export function countContent(library: ContentLibrary, covers: readonly Coverage[]): ContentCounts {
  const counts = {} as ContentCounts;
  for (const kind of CONTENT_KINDS) {
    counts[kind] = covers.length ? library[kind].filter((item) => isCovered(item, covers)).length : 0;
  }
  return counts;
}

export function sumCounts(counts: ContentCounts): number {
  return CONTENT_KINDS.reduce((total, kind) => total + counts[kind], 0);
}

function buildModuleView(module: SyllabusModule, library: ContentLibrary): ModuleView {
  const units = module.units.map((unit) => {
    const counts = countContent(library, unit.covers ?? []);
    return { title: unit.title, points: unit.points ?? [], counts, total: sumCounts(counts) };
  });
  return {
    id: module.id,
    title: module.title,
    facts: module.facts ?? [],
    description: module.description,
    units,
    coveredUnits: units.filter((unit) => unit.total > 0).length,
  };
}

function buildStageView(stage: TrackStage, library: ContentLibrary): StageView {
  const modules = stage.modules.map((module) => buildModuleView(module, library));
  return {
    id: stage.id,
    title: stage.title,
    description: stage.description,
    modules,
    coveredUnits: modules.reduce((n, m) => n + m.coveredUnits, 0),
    totalUnits: modules.reduce((n, m) => n + m.units.length, 0),
  };
}

/** A track's syllabus with, for every unit, how much content the app has for it. */
export function buildStageViews(track: Track, library: ContentLibrary): StageView[] {
  return track.stages.map((stage) => buildStageView(stage, library));
}

/** Every distinct coverage rule in a track, i.e. all content that belongs to it. */
export function getTrackCoverage(track: Track): Coverage[] {
  return track.stages.flatMap((stage) =>
    stage.modules.flatMap((module) => module.units.flatMap((unit) => unit.covers ?? [])),
  );
}
