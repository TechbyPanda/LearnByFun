"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questionsBySubject, type Subject } from "./mcq/data";
import { getTopicsForSubject } from "./mcq/lib/topics";
import { loadQuizConfig, saveQuizConfig } from "./mcq/lib/quizConfig";
import styles from "./page.module.css";

const ALL_SUBJECTS = Object.keys(questionsBySubject) as Subject[];
const DEFAULT_QUESTION_COUNT = 10;

type TopicsBySubject = Partial<Record<Subject, string[]>>;

export default function Home() {
  const router = useRouter();
  const [topicsBySubject, setTopicsBySubject] = useState<TopicsBySubject>({});
  const [questionCount, setQuestionCount] = useState(DEFAULT_QUESTION_COUNT);
  const [shuffle, setShuffle] = useState(true);

  useEffect(() => {
    const savedConfig = loadQuizConfig();
    if (!savedConfig) return;

    const restored: TopicsBySubject = {};
    for (const subject of Object.keys(savedConfig.topicsBySubject) as Subject[]) {
      const availableTopics = getTopicsForSubject(subject);
      if (availableTopics.length === 0) continue;
      const savedTopics = savedConfig.topicsBySubject[subject] ?? [];
      const validTopics = savedTopics.filter((topic) => availableTopics.includes(topic));
      if (validTopics.length > 0) restored[subject] = validTopics;
    }

    setTopicsBySubject(restored);
    setQuestionCount(savedConfig.questionCount);
    setShuffle(savedConfig.shuffle);
  }, []);

  const poolSize = useMemo(
    () =>
      (Object.entries(topicsBySubject) as [Subject, string[]][]).reduce(
        (total, [subject, topics]) =>
          total +
          (questionsBySubject[subject] ?? []).filter((question) =>
            topics.includes(question.topic),
          ).length,
        0,
      ),
    [topicsBySubject],
  );

  const clampedQuestionCount = poolSize > 0 ? Math.min(questionCount, poolSize) : 0;
  const canStart = Object.keys(topicsBySubject).length > 0 && clampedQuestionCount >= 1;

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
      const currentTopics = prev[subject] ?? [];
      const nextTopics = currentTopics.includes(topic)
        ? currentTopics.filter((t) => t !== topic)
        : [...currentTopics, topic];
      return { ...prev, [subject]: nextTopics };
    });
  }

  function handleStart() {
    if (!canStart) return;

    const config = {
      topicsBySubject,
      questionCount: clampedQuestionCount,
      shuffle,
    };
    saveQuizConfig(config);

    const params = new URLSearchParams({
      topics: JSON.stringify(config.topicsBySubject),
      count: String(config.questionCount),
      shuffle: String(config.shuffle),
    });
    router.push(`/mcq?${params.toString()}`);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>UPSC CSE Practice</h1>
      <p className={styles.subtitle}>Pick subjects, topics, and how many questions to attempt.</p>

      <div className={styles.subjectList}>
        {ALL_SUBJECTS.map((subject) => {
          const available = questionsBySubject[subject]?.length ?? 0;
          const isDisabled = available === 0;
          const isSelected = subject in topicsBySubject;
          const topics = getTopicsForSubject(subject);
          const selectedTopics = topicsBySubject[subject] ?? [];

          return (
            <div key={subject} className={styles.subjectGroup}>
              <label
                className={`${styles.subjectItem} ${isDisabled ? styles.subjectItemDisabled : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => toggleSubject(subject)}
                />
                <span>{subject}</span>
                <span className={styles.subjectCount}>({available} available)</span>
              </label>

              {isSelected && topics.length > 0 && (
                <div className={styles.topicList}>
                  {topics.map((topic) => (
                    <label key={topic} className={styles.topicItem}>
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic)}
                        onChange={() => toggleTopic(subject, topic)}
                      />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.field}>
        <label htmlFor="questionCount">Number of questions</label>
        <input
          id="questionCount"
          type="number"
          min={1}
          max={poolSize || 1}
          value={clampedQuestionCount}
          disabled={poolSize === 0}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
        />
        <span className={styles.hint}>
          {poolSize > 0 ? `Up to ${poolSize} available` : "Select at least one topic"}
        </span>
      </div>

      <label className={styles.field}>
        <input
          type="checkbox"
          checked={shuffle}
          onChange={(e) => setShuffle(e.target.checked)}
        />
        Shuffle questions
      </label>

      <button className={styles.startButton} onClick={handleStart} disabled={!canStart}>
        Start Quiz
      </button>
    </div>
  );
}
