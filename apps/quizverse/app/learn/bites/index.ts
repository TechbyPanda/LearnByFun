import type { Bite, LearningPath } from "./types";
import { polityHistoryBites, polityHistoryPath } from "./polityHistory";

export * from "./types";

export const allBites: Bite[] = [...polityHistoryBites];

export const learningPaths: LearningPath[] = [polityHistoryPath];

const biteById = new Map(allBites.map((bite) => [bite.id, bite]));

export function getBite(id: string | null): Bite | undefined {
  return id ? biteById.get(id) : undefined;
}
