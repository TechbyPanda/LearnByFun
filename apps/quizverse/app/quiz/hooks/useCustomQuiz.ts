import { useEffect, useMemo, useState } from "react";
import type { TopicsBySubject } from "../../lib/subject";
import { pruneSelection } from "../../lib/topicSelection";
import { getQuestionsForTopics } from "../../mcq/lib/buildQuestionPool";
import { loadQuizConfig, saveQuizConfig, type QuizConfig } from "../../mcq/lib/quizConfig";
import { getTopicsForSubject } from "../../mcq/lib/topics";

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
    setTopicsBySubject(pruneSelection(saved.topicsBySubject, getTopicsForSubject));
    setQuestionCount(saved.questionCount);
    setShuffle(saved.shuffle);
  }, []);

  const poolSize = useMemo(() => getQuestionsForTopics(topicsBySubject).length, [topicsBySubject]);
  const count = poolSize > 0 ? Math.min(questionCount, poolSize) : 0;

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
    setTopicsBySubject,
    setQuestionCount,
    setShuffle,
    getConfig,
  };
}
