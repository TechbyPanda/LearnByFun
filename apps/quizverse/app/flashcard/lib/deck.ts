import { flashcardsBySubject, type Flashcard, type Subject } from "../data";
import {
  flashcardSessions,
  type FlashcardSession,
  type FlashcardSessionSection,
} from "../sessions";
import { shuffleArray } from "../../lib/shuffle";

export type TopicsBySubject = Partial<Record<Subject, string[]>>;

export interface DeckOptions {
  shuffle: boolean;
  /** Max cards per session; 0 means all matching cards. */
  limit: number;
}

export const SESSION_SIZES = [10, 25, 50, 0] as const;

export const DEFAULT_OPTIONS: DeckOptions = { shuffle: true, limit: 0 };

// ---- Custom decks (built from topic picks) ----

export function getMatchingCards(topicsBySubject: TopicsBySubject): Flashcard[] {
  return (Object.entries(topicsBySubject) as [Subject, string[]][]).flatMap(
    ([subject, topics]) =>
      (flashcardsBySubject[subject] ?? []).filter((card) => topics.includes(card.topic)),
  );
}

export function buildDeck(topicsBySubject: TopicsBySubject, options: DeckOptions): Flashcard[] {
  const matching = getMatchingCards(topicsBySubject);
  const ordered = options.shuffle ? shuffleArray(matching) : matching;
  return options.limit > 0 ? ordered.slice(0, options.limit) : ordered;
}

/** How many cards a custom deck will actually contain once the size limit is applied. */
export function countDeck(topicsBySubject: TopicsBySubject, { limit }: DeckOptions): number {
  const matching = getMatchingCards(topicsBySubject).length;
  return limit > 0 ? Math.min(matching, limit) : matching;
}

// ---- Ready-made sessions ----

export function getSession(id: string | null): FlashcardSession | undefined {
  return flashcardSessions.find((session) => session.id === id);
}

function getSectionCards({ subject, topics }: FlashcardSessionSection): Flashcard[] {
  return (flashcardsBySubject[subject] ?? []).filter(
    (card) => !topics || topics.includes(card.topic),
  );
}

export function buildSessionDeck(session: FlashcardSession): Flashcard[] {
  const drawn = session.sections.flatMap((section) => {
    const cards = getSectionCards(section);
    const ordered = session.shuffle ? shuffleArray(cards) : cards;
    return section.count === undefined ? ordered : ordered.slice(0, section.count);
  });
  return session.shuffle ? shuffleArray(drawn) : drawn;
}

export function countSessionCards(session: FlashcardSession): number {
  return session.sections.reduce((total, section) => {
    const available = getSectionCards(section).length;
    return total + (section.count === undefined ? available : Math.min(section.count, available));
  }, 0);
}

// ---- URL <-> deck ----

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

function parseStudyQuery(params: URLSearchParams): {
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

/** Resolves a study URL to a deck: a ready-made `session` id, or custom topic params. */
export function buildDeckFromQuery(params: URLSearchParams): Flashcard[] {
  const session = getSession(params.get("session"));
  if (session) return buildSessionDeck(session);
  const { topicsBySubject, options } = parseStudyQuery(params);
  return buildDeck(topicsBySubject, options);
}
