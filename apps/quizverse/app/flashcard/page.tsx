"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { flashcardsBySubject, type Subject } from "./data";
import { getTopicsForSubject } from "./lib/topics";
import styles from "./page.module.css";

const ALL_SUBJECTS = Object.keys(flashcardsBySubject) as Subject[];

type TopicsBySubject = Partial<Record<Subject, string[]>>;

export default function FlashcardPicker() {
  const router = useRouter();
  const [topicsBySubject, setTopicsBySubject] = useState<TopicsBySubject>({});

  const availableSubjects = ALL_SUBJECTS.filter(
    (subject) => (flashcardsBySubject[subject]?.length ?? 0) > 0,
  );
  const upcomingSubjects = ALL_SUBJECTS.filter(
    (subject) => (flashcardsBySubject[subject]?.length ?? 0) === 0,
  );

  const cardCount = useMemo(
    () =>
      (Object.entries(topicsBySubject) as [Subject, string[]][]).reduce(
        (total, [subject, topics]) =>
          total +
          (flashcardsBySubject[subject] ?? []).filter((card) =>
            topics.includes(card.topic),
          ).length,
        0,
      ),
    [topicsBySubject],
  );

  const canStart = cardCount > 0;
  const hasSelection = Object.keys(topicsBySubject).length > 0;

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

  function clearSelection() {
    setTopicsBySubject({});
  }

  function handleStart() {
    if (!canStart) return;
    const params = new URLSearchParams({ topics: JSON.stringify(topicsBySubject) });
    router.push(`/flashcard/study?${params.toString()}`);
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>FLASHCARD REVIEW</p>
          <h1 className={styles.title}>Build your review set</h1>
          <p className={styles.subtitle}>
            Choose the subjects and topics you want to revisit.
          </p>
        </header>

        <section className={styles.selection} aria-label="Choose flashcard topics">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Subjects</h2>
            <button
              type="button"
              className={styles.clearButton}
              onClick={clearSelection}
              disabled={!hasSelection}
            >
              Clear selection
            </button>
          </div>

          <div className={styles.subjectList}>
            {availableSubjects.map((subject) => {
              const available = flashcardsBySubject[subject]?.length ?? 0;
          const isSelected = subject in topicsBySubject;
          const topics = getTopicsForSubject(subject);
          const selectedTopics = topicsBySubject[subject] ?? [];

          return (
            <div
              key={subject}
              className={`${styles.subjectGroup} ${isSelected ? styles.subjectGroupSelected : ""}`}
            >
              <label
                className={styles.subjectItem}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSubject(subject)}
                />
                <span>{subject}</span>
                <span className={styles.subjectCount}>{available} cards</span>
              </label>

              {isSelected && topics.length > 0 && (
                <div className={styles.topicList} aria-label={`${subject} topics`}>
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

          <div className={styles.upcoming}>
            <p className={styles.upcomingTitle}>More subjects coming soon</p>
            <p className={styles.upcomingList}>{upcomingSubjects.join("  /  ")}</p>
          </div>
        </section>

        <footer className={styles.actionBar}>
          <p className={styles.hint} aria-live="polite">
            <span className={styles.selectedCount}>{cardCount}</span>
            {cardCount === 1 ? " flashcard selected" : " flashcards selected"}
          </p>
          <button
            className={styles.startButton}
            onClick={handleStart}
            disabled={!canStart}
          >
            Review flashcards <span aria-hidden="true">-&gt;</span>
          </button>
        </footer>
      </div>
    </main>
  );
}
