import { flashcardsBySubject, type Subject } from "../data";
import { DEFAULT_OPTIONS, type DeckOptions, type TopicsBySubject } from "./deck";
import { getTopicsForSubject } from "./topics";

const STORAGE_KEY = "flashcard:lastSetup";

export interface SavedSetup {
  topicsBySubject: TopicsBySubject;
  options: DeckOptions;
}

export function saveSetup(setup: SavedSetup): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(setup));
  } catch {
    // Storage unavailable (private mode, quota) — persistence is best-effort.
  }
}

/** Loads the last setup, dropping subjects/topics that no longer exist in the data. */
export function loadSetup(): SavedSetup | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<SavedSetup>;

    const topicsBySubject: TopicsBySubject = {};
    for (const [subject, topics] of Object.entries(saved.topicsBySubject ?? {})) {
      if (!(subject in flashcardsBySubject) || !Array.isArray(topics)) continue;
      const valid = getTopicsForSubject(subject as Subject);
      const kept = topics.filter((topic) => valid.includes(topic));
      if (kept.length > 0) topicsBySubject[subject as Subject] = kept;
    }

    return {
      topicsBySubject,
      options: {
        shuffle: saved.options?.shuffle ?? DEFAULT_OPTIONS.shuffle,
        limit: saved.options?.limit ?? DEFAULT_OPTIONS.limit,
      },
    };
  } catch {
    return null;
  }
}
