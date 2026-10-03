import { useEffect, useMemo, useState } from "react";
import type { Subject } from "../data";
import {
  DEFAULT_OPTIONS,
  countDeck,
  type DeckOptions,
  type TopicsBySubject,
} from "../lib/deck";
import { loadSetup, saveSetup } from "../lib/storage";
import { AVAILABLE_SUBJECTS } from "../lib/subjects";
import { getTopicsForSubject } from "../lib/topics";

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

  function setSubjectTopics(subject: Subject, topics: string[]) {
    setTopicsBySubject((prev) => {
      const next = { ...prev };
      if (topics.length === 0) delete next[subject];
      else next[subject] = topics;
      return next;
    });
  }

  function toggleTopic(subject: Subject, topic: string) {
    const current = topicsBySubject[subject] ?? [];
    setSubjectTopics(
      subject,
      current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic],
    );
  }

  function selectEverything() {
    const all: TopicsBySubject = {};
    for (const subject of AVAILABLE_SUBJECTS) all[subject] = getTopicsForSubject(subject);
    setTopicsBySubject(all);
  }

  return {
    topicsBySubject,
    options,
    cardCount,
    deckSize,
    canStart: deckSize > 0,
    hasSelection: Object.keys(topicsBySubject).length > 0,
    setOptions,
    setSubjectTopics,
    toggleTopic,
    selectEverything,
    clear: () => setTopicsBySubject({}),
  };
}
