import { flashcardsBySubject, type Flashcard, type Subject } from "../data";
import { flashcardSessions, type FlashcardSession } from "../sessions";
import { shuffleArray } from "./shuffle";

export type TopicsBySubject = Partial<Record<Subject, string[]>>;

export function getSession(id: string | null): FlashcardSession | undefined {
  return flashcardSessions.find((session) => session.id === id);
}

export function buildSessionDeck(session: FlashcardSession): Flashcard[] {
  const drawn = session.sections.flatMap(({ subject, topics, count }) => {
    const matching = (flashcardsBySubject[subject] ?? []).filter(
      (card) => !topics || topics.includes(card.topic),
    );
    const ordered = session.shuffle ? shuffleArray(matching) : matching;
    return count === undefined ? ordered : ordered.slice(0, count);
  });
  return session.shuffle ? shuffleArray(drawn) : drawn;
}

export function countSessionCards(session: FlashcardSession): number {
  return session.sections.reduce((total, { subject, topics, count }) => {
    const available = (flashcardsBySubject[subject] ?? []).filter(
      (card) => !topics || topics.includes(card.topic),
    ).length;
    return total + (count === undefined ? available : Math.min(count, available));
  }, 0);
}

export interface DeckOptions {
  shuffle: boolean;
  /** Max cards per session; 0 means all matching cards. */
  limit: number;
}

export const SESSION_SIZES = [10, 25, 50, 0] as const;

export const DEFAULT_OPTIONS: DeckOptions = { shuffle: true, limit: 0 };

export function getMatchingCards(topicsBySubject: TopicsBySubject): Flashcard[] {
  return (Object.entries(topicsBySubject) as [Subject, string[]][]).flatMap(
    ([subject, topics]) =>
      (flashcardsBySubject[subject] ?? []).filter((card) => topics.includes(card.topic)),
  );
}

export function buildDeck(
  topicsBySubject: TopicsBySubject,
  { shuffle, limit }: DeckOptions,
): Flashcard[] {
  const matching = getMatchingCards(topicsBySubject);
  const ordered = shuffle ? shuffleArray(matching) : matching;
  return limit > 0 ? ordered.slice(0, limit) : ordered;
}

export function buildStudyQuery(
  topicsBySubject: TopicsBySubject,
  { shuffle, limit }: DeckOptions,
): string {
  return new URLSearchParams({
    topics: JSON.stringify(topicsBySubject),
    shuffle: shuffle ? "1" : "0",
    limit: String(limit),
  }).toString();
}

export function buildSessionQuery(session: FlashcardSession): string {
  return new URLSearchParams({ session: session.id }).toString();
}

/** Resolves a study URL to a deck: a ready-made `session` id, or custom topic params. */
export function buildDeckFromQuery(params: URLSearchParams): Flashcard[] {
  const session = getSession(params.get("session"));
  if (session) return buildSessionDeck(session);
  const { topicsBySubject, options } = parseStudyQuery(params);
  return buildDeck(topicsBySubject, options);
}

export function parseStudyQuery(params: URLSearchParams): {
  topicsBySubject: TopicsBySubject;
  options: DeckOptions;
} {
  let topicsBySubject: TopicsBySubject = {};
  try {
    const parsed: unknown = JSON.parse(params.get("topics") ?? "{}");
    if (parsed && typeof parsed === "object") topicsBySubject = parsed as TopicsBySubject;
  } catch {
    // Malformed query: fall through to an empty selection.
  }

  const limit = Number(params.get("limit"));
  return {
    topicsBySubject,
    options: {
      shuffle: params.get("shuffle") !== "0",
      limit: Number.isInteger(limit) && limit > 0 ? limit : 0,
    },
  };
}
