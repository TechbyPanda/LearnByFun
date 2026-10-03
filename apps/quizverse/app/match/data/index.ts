import type { MatchSet } from "./types";
import { fundamentalRightsMatchSets } from "./fundamentalRights";

export * from "./types";

export const matchSets: MatchSet[] = [...fundamentalRightsMatchSets];

export function getMatchSet(id: string | null): MatchSet | undefined {
  return matchSets.find((set) => set.id === id);
}
