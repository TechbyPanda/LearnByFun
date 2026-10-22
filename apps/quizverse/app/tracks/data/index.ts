import type { Track } from "./types";
import { upscCse } from "./upscCse";

export * from "./types";

/**
 * Every track, in the order the home page lists them. Add a track (say React or
 * System Design) by adding a folder like upscCse/ and one entry here.
 */
export const tracks: Track[] = [upscCse];

export function getTrack(id: string): Track | undefined {
  return tracks.find((track) => track.id === id);
}
