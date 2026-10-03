import { getBite, type Bite, type LearningPath } from "../bites";
import { daysBetween, type LearnProgress } from "./progress";

/** Days to wait after the 1st, 2nd and 3rd completion before a refresher is due. */
const REFRESH_GAPS = [1, 3, 7];
const MAX_REFRESHERS = 2;
const NEW_BITES_SHOWN = 3;

export type BiteMode = "full" | "refresh";

export interface UpNextItem {
  bite: Bite;
  mode: BiteMode;
}

export function isRefresherDue(progress: LearnProgress, biteId: string, today: string): boolean {
  const record = progress.completed[biteId];
  const gap = record ? REFRESH_GAPS[record.times - 1] : undefined;
  return record !== undefined && gap !== undefined && daysBetween(record.completedOn, today) >= gap;
}

/** The first bite in a path that hasn't been completed yet. */
export function getNextBite(path: LearningPath, progress: LearnProgress): Bite | undefined {
  const nextId = path.biteIds.find((id) => !progress.completed[id]);
  return getBite(nextId ?? null);
}

export function getPathProgress(path: LearningPath, progress: LearnProgress) {
  const done = path.biteIds.filter((id) => progress.completed[id]).length;
  return { done, total: path.biteIds.length };
}

/** Due refreshers first (quick wins), then the next new bite of each path. */
export function getUpNext(
  paths: LearningPath[],
  progress: LearnProgress,
  today: string,
): UpNextItem[] {
  const refreshers = Object.keys(progress.completed)
    .filter((id) => isRefresherDue(progress, id, today))
    .slice(0, MAX_REFRESHERS)
    .flatMap((id) => getBite(id) ?? [])
    .map((bite): UpNextItem => ({ bite, mode: "refresh" }));

  const fresh = paths
    .flatMap((path) =>
      path.biteIds.filter((id) => !progress.completed[id]).slice(0, NEW_BITES_SHOWN),
    )
    .slice(0, NEW_BITES_SHOWN)
    .flatMap((id) => getBite(id) ?? [])
    .map((bite): UpNextItem => ({ bite, mode: "full" }));

  return [...refreshers, ...fresh];
}
