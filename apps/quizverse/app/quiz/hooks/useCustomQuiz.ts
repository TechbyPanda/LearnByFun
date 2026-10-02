import { useEffect, useMemo, useState } from "react";
import { questionsBySubject, type Subject } from "../../mcq/data";
import { getTopicsForSubject } from "../../mcq/lib/topics";
import { loadQuizConfig, saveQuizConfig, type QuizConfig } from "../../mcq/lib/quizConfig";

type TopicsBySubject = Partial<Record<Subject, string[]>>;

const DEFAULT_COUNT = 10;

/** State and derived values for the "build your own test" form. */
export function useCustomQuiz() {
  const [topicsBySubject, setTopicsBySubject] = useState<TopicsBySubject>({});
  const [questionCount, setQuestionCount] = useState(DEFAULT_COUNT);
  const [shuffle, setShuffle] = useState(true);

  // Restore the last-used config, dropping subjects/topics that no longer exist.
  useEffect(() => {
    const saved = loadQuizConfig();
    if (!saved) return;

    const restored: TopicsBySubject = {};
    for (const subject of Object.keys(saved.topicsBySubject) as Subject[]) {
      const available = getTopicsForSubject(subject);
      const valid = (saved.topicsBySubject[subject] ?? []).filter((t) => available.includes(t));
      if (valid.length > 0) restored[subject] = valid;
    }
    setTopicsBySubject(restored);
    setQuestionCount(saved.questionCount);
    setShuffle(saved.shuffle);
  }, []);

  const poolSize = useMemo(
    () =>
      (Object.entries(topicsBySubject) as [Subject, string[]][]).reduce(
        (total, [subject, topics]) =>
          total +
          (questionsBySubject[subject] ?? []).filter((q) => topics.includes(q.topic)).length,
        0,
      ),
    [topicsBySubject],
  );

  const count = poolSize > 0 ? Math.min(questionCount, poolSize) : 0;

  function toggleSubject(subject: Subject) {
    setTopicsBySubject((prev) => {
      if (subject in prev) {
        const next = { ...prev };
        delete next[subject];
        return next;
      }
      return { ...prev, [subject]: getTopicsForSubject(subject) };
    });
  }

  function toggleTopic(subject: Subject, topic: string) {
    setTopicsBySubject((prev) => {
      const current = prev[subject] ?? [];
      const next = current.includes(topic)
        ? current.filter((t) => t !== topic)
        : [...current, topic];
      // A subject with no topics left is simply deselected.
      if (next.length === 0) {
        const { [subject]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [subject]: next };
    });
  }

  function setAllTopics(subject: Subject, selectAll: boolean) {
    setTopicsBySubject((prev) => {
      if (selectAll) return { ...prev, [subject]: getTopicsForSubject(subject) };
      const { [subject]: _removed, ...rest } = prev;
      return rest;
    });
  }

  function selectEverything() {
    const all: TopicsBySubject = {};
    for (const subject of Object.keys(questionsBySubject) as Subject[]) {
      if ((questionsBySubject[subject]?.length ?? 0) > 0) {
        all[subject] = getTopicsForSubject(subject);
      }
    }
    setTopicsBySubject(all);
  }

  function getConfig(): QuizConfig {
    const config = { topicsBySubject, questionCount: count, shuffle };
    saveQuizConfig(config);
    return config;
  }

  return {
    topicsBySubject,
    poolSize,
    count,
    shuffle,
    canStart: count >= 1,
    setQuestionCount,
    setShuffle,
    toggleSubject,
    toggleTopic,
    setAllTopics,
    selectEverything,
    clear: () => setTopicsBySubject({}),
    getConfig,
  };
}
