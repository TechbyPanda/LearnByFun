import { useEffect, useMemo, useState } from "react";
import type { TopicsBySubject } from "../../lib/subject";
import { DEFAULT_OPTIONS, countDeck, type DeckOptions } from "../lib/deck";
import { loadSetup, saveSetup } from "../lib/storage";

/** Custom-deck selection state: which topics are picked, deck options, and persistence. */
export function useCardSelection() {
  const [topicsBySubject, setTopicsBySubject] = useState<TopicsBySubject>({});
  const [options, setOptions] = useState<DeckOptions>(DEFAULT_OPTIONS);
  const [loaded, setLoaded] = useState(false);

  // Restore the last setup after mount (localStorage is unavailable during SSR).
  useEffect(() => {
    const saved = loadSetup();
    if (saved) {
      setTopicsBySubject(saved.topicsBySubject);
      setOptions(saved.options);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveSetup({ topicsBySubject, options });
  }, [loaded, topicsBySubject, options]);

  const cardCount = useMemo(
    () => countDeck(topicsBySubject, { ...options, limit: 0 }),
    [topicsBySubject, options],
  );
  const deckSize = useMemo(() => countDeck(topicsBySubject, options), [topicsBySubject, options]);

  return {
    topicsBySubject,
    options,
    cardCount,
    deckSize,
    canStart: deckSize > 0,
    setTopicsBySubject,
    setOptions,
  };
}
