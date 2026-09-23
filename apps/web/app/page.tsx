"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questionsBySubject, type Subject } from "./mcq/data";
import { loadQuizConfig, saveQuizConfig } from "./mcq/lib/quizConfig";
import styles from "./page.module.css";

const ALL_SUBJECTS = Object.keys(questionsBySubject) as Subject[];
const DEFAULT_QUESTION_COUNT = 10;

export default function Home() {
  const router = useRouter();
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [questionCount, setQuestionCount] = useState(DEFAULT_QUESTION_COUNT);
  const [shuffle, setShuffle] = useState(true);

  useEffect(() => {
    const savedConfig = loadQuizConfig();
    if (savedConfig) {
      setSelectedSubjects(savedConfig.subjects);
      setQuestionCount(savedConfig.questionCount);
      setShuffle(savedConfig.shuffle);
    }
  }, []);

  const poolSize = useMemo(
    () =>
      selectedSubjects.reduce(
        (total, subject) => total + (questionsBySubject[subject]?.length ?? 0),
        0,
      ),
    [selectedSubjects],
  );

  const clampedQuestionCount = poolSize > 0 ? Math.min(questionCount, poolSize) : 0;
  const canStart = selectedSubjects.length > 0 && clampedQuestionCount >= 1;

  function toggleSubject(subject: Subject) {
    setSelectedSubjects((prev) =>
      prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject],
    );
  }

  function handleStart() {
    if (!canStart) return;

    const config = {
      subjects: selectedSubjects,
      questionCount: clampedQuestionCount,
      shuffle,
    };
    saveQuizConfig(config);

    const params = new URLSearchParams({
      subjects: config.subjects.join(","),
      count: String(config.questionCount),
      shuffle: String(config.shuffle),
    });
    router.push(`/mcq?${params.toString()}`);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>UPSC CSE Practice</h1>
      <p className={styles.subtitle}>Pick subjects and how many questions to attempt.</p>

      <div className={styles.subjectList}>
        {ALL_SUBJECTS.map((subject) => {
          const available = questionsBySubject[subject]?.length ?? 0;
          const isDisabled = available === 0;
          return (
            <label
              key={subject}
              className={`${styles.subjectItem} ${isDisabled ? styles.subjectItemDisabled : ""}`}
            >
              <input
                type="checkbox"
                checked={selectedSubjects.includes(subject)}
                disabled={isDisabled}
                onChange={() => toggleSubject(subject)}
              />
              <span>{subject}</span>
              <span className={styles.subjectCount}>({available} available)</span>
            </label>
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
          {poolSize > 0 ? `Up to ${poolSize} available` : "Select at least one subject"}
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
