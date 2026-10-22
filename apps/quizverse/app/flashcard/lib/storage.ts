import { readStorage, writeStorage } from "../../lib/storage";
import type { TopicsBySubject } from "../../lib/subject";
import { pruneSelection } from "../../lib/topicSelection";
import { DEFAULT_OPTIONS, type DeckOptions } from "./deck";
import { getTopicsForSubject } from "./topics";

const STORAGE_KEY = "flashcard:lastSetup";

export interface SavedSetup {
  topicsBySubject: TopicsBySubject;
  options: DeckOptions;
}

export function saveSetup(setup: SavedSetup): void {
  writeStorage(STORAGE_KEY, setup);
}

/** Loads the last setup, dropping subjects/topics that no longer exist in the data. */
export function loadSetup(): SavedSetup | null {
  const saved = readStorage(STORAGE_KEY) as Partial<SavedSetup> | null;
  if (!saved) return null;
  return {
    topicsBySubject: pruneSelection(saved.topicsBySubject, getTopicsForSubject),
    options: {
      shuffle: saved.options?.shuffle ?? DEFAULT_OPTIONS.shuffle,
      limit: saved.options?.limit ?? DEFAULT_OPTIONS.limit,
    },
  };
}
