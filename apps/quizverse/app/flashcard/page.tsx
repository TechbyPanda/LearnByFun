"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { flashcardsBySubject, type Subject } from "./data";
import { SessionList } from "./components/SessionList";
import type { FlashcardSession } from "./sessions";
import {
  DEFAULT_OPTIONS,
  SESSION_SIZES,
  buildSessionQuery,
  buildStudyQuery,
  getMatchingCards,
  type DeckOptions,
  type TopicsBySubject,
} from "./lib/deck";
import { loadSetup, saveSetup } from "./lib/storage";
import { getTopicStats } from "./lib/topics";
import styles from "./page.module.css";

const ALL_SUBJECTS = Object.keys(flashcardsBySubject) as Subject[];
const SEARCH_THRESHOLD = 8;

type Mode = "ready" | "custom";

export default function FlashcardPicker() {
  const router = useRouter();
  const [topicsBySubject, setTopicsBySubject] = useState<TopicsBySubject>({});
  const [options, setOptions] = useState<DeckOptions>(DEFAULT_OPTIONS);
  const [expanded, setExpanded] = useState<Set<Subject>>(new Set());
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState<Mode>("ready");

  const availableSubjects = ALL_SUBJECTS.filter(
    (subject) => (flashcardsBySubject[subject]?.length ?? 0) > 0,
  );
  const upcomingSubjects = ALL_SUBJECTS.filter(
    (subject) => (flashcardsBySubject[subject]?.length ?? 0) === 0,
  );
  const totalCards = availableSubjects.reduce(
    (sum, subject) => sum + (flashcardsBySubject[subject]?.length ?? 0),
    0,
  );

  // Restore the last setup after mount (localStorage is unavailable during SSR).
  useEffect(() => {
    const saved = loadSetup();
    if (saved) {
      setTopicsBySubject(saved.topicsBySubject);
      setOptions(saved.options);
      setExpanded(new Set(Object.keys(saved.topicsBySubject) as Subject[]));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveSetup({ topicsBySubject, options });
  }, [loaded, topicsBySubject, options]);

  const cardCount = useMemo(
    () => getMatchingCards(topicsBySubject).length,
    [topicsBySubject],
  );
  const sessionCount =
    options.limit > 0 ? Math.min(cardCount, options.limit) : cardCount;
  const canStart = sessionCount > 0;
  const hasSelection = Object.keys(topicsBySubject).length > 0;

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
      current.includes(topic)
        ? current.filter((t) => t !== topic)
        : [...current, topic],
    );
  }

  function toggleExpanded(subject: Subject) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(subject)) next.delete(subject);
      else next.add(subject);
      return next;
    });
  }

  function selectEverything() {
    const all: TopicsBySubject = {};
    for (const subject of availableSubjects) {
      all[subject] = getTopicStats(subject).map((stat) => stat.topic);
    }
    setTopicsBySubject(all);
  }

  function handleStartSession(session: FlashcardSession) {
    router.push(`/flashcard/study?${buildSessionQuery(session)}`);
  }

  function handleStart() {
    if (!canStart) return;
    router.push(
      `/flashcard/study?${buildStudyQuery(topicsBySubject, options)}`,
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>FLASHCARD REVIEW</p>
          <h1 className={styles.title}>What do you want to practise today?</h1>
          <p className={styles.subtitle}>
            Jump into a ready-made session, or build your own. {totalCards}{" "}
            cards are ready for you.
          </p>
        </header>

        <div
          className={styles.modeSwitch}
          role="tablist"
          aria-label="Session type"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "ready"}
            className={`${styles.modeTab} ${mode === "ready" ? styles.modeTabActive : ""}`}
            onClick={() => setMode("ready")}
          >
            Ready-made sessions
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "custom"}
            className={`${styles.modeTab} ${mode === "custom" ? styles.modeTabActive : ""}`}
            onClick={() => setMode("custom")}
          >
            Build your own
          </button>
        </div>

        {mode === "ready" ? (
          <SessionList onStart={handleStartSession} />
        ) : (
          <>
            <section
              className={styles.selection}
              aria-label="Choose flashcard topics"
            >
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Subjects</h2>
                <div className={styles.headerActions}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={selectEverything}
                  >
                    Select all
                  </button>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => setTopicsBySubject({})}
                    disabled={!hasSelection}
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className={styles.subjectList}>
                {availableSubjects.map((subject) => (
                  <SubjectPanel
                    key={subject}
                    subject={subject}
                    selectedTopics={topicsBySubject[subject] ?? []}
                    isExpanded={expanded.has(subject)}
                    onToggleExpanded={() => toggleExpanded(subject)}
                    onSetTopics={(topics) => setSubjectTopics(subject, topics)}
                    onToggleTopic={(topic) => toggleTopic(subject, topic)}
                  />
                ))}
              </div>

              {upcomingSubjects.length > 0 && (
                <div className={styles.upcoming}>
                  <p className={styles.upcomingTitle}>
                    More subjects coming soon
                  </p>
                  <p className={styles.upcomingList}>
                    {upcomingSubjects.join("  /  ")}
                  </p>
                </div>
              )}
            </section>

            <section className={styles.options} aria-label="Session options">
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Session size</span>
                <div
                  className={styles.segmented}
                  role="group"
                  aria-label="Session size"
                >
                  {SESSION_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`${styles.segment} ${options.limit === size ? styles.segmentActive : ""}`}
                      aria-pressed={options.limit === size}
                      onClick={() =>
                        setOptions((prev) => ({ ...prev, limit: size }))
                      }
                    >
                      {size === 0 ? "All" : size}
                    </button>
                  ))}
                </div>
              </div>

              <label className={styles.switchRow}>
                <input
                  type="checkbox"
                  checked={options.shuffle}
                  onChange={(event) =>
                    setOptions((prev) => ({
                      ...prev,
                      shuffle: event.target.checked,
                    }))
                  }
                />
                <span>Shuffle cards</span>
              </label>
            </section>

            <footer className={styles.actionBar}>
              <p className={styles.hint} aria-live="polite">
                {canStart ? (
                  <>
                    <span className={styles.selectedCount}>{sessionCount}</span>
                    {sessionCount === 1 ? " card" : " cards"} in this session
                    {sessionCount < cardCount && ` (of ${cardCount} selected)`}
                  </>
                ) : (
                  "Pick a subject or topic to begin"
                )}
              </p>
              <button
                className={styles.startButton}
                onClick={handleStart}
                disabled={!canStart}
              >
                Start session <span aria-hidden="true">-&gt;</span>
              </button>
            </footer>
          </>
        )}
      </div>
    </main>
  );
}

interface SubjectPanelProps {
  subject: Subject;
  selectedTopics: string[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onSetTopics: (topics: string[]) => void;
  onToggleTopic: (topic: string) => void;
}

function SubjectPanel({
  subject,
  selectedTopics,
  isExpanded,
  onToggleExpanded,
  onSetTopics,
  onToggleTopic,
}: SubjectPanelProps) {
  const [query, setQuery] = useState("");
  const stats = useMemo(() => getTopicStats(subject), [subject]);
  const allTopics = stats.map((stat) => stat.topic);

  const selectedSet = new Set(selectedTopics);
  const isAll = selectedTopics.length === allTopics.length;
  const isNone = selectedTopics.length === 0;
  const totalCards = flashcardsBySubject[subject]?.length ?? 0;
  const selectedCards = stats
    .filter((stat) => selectedSet.has(stat.topic))
    .reduce((sum, stat) => sum + stat.count, 0);

  const normalized = query.trim().toLowerCase();
  const visibleStats = normalized
    ? stats.filter((stat) => stat.topic.toLowerCase().includes(normalized))
    : stats;

  function handleSubjectClick() {
    onSetTopics(isAll ? [] : allTopics);
  }

  function selectVisible() {
    onSetTopics(
      Array.from(
        new Set([...selectedTopics, ...visibleStats.map((s) => s.topic)]),
      ),
    );
  }

  function clearVisible() {
    const hidden = new Set(visibleStats.map((s) => s.topic));
    onSetTopics(selectedTopics.filter((topic) => !hidden.has(topic)));
  }

  return (
    <div
      className={`${styles.subjectGroup} ${isNone ? "" : styles.subjectGroupSelected}`}
    >
      <div className={styles.subjectHeader}>
        <button
          type="button"
          className={`${styles.subjectToggle} ${isAll ? styles.subjectToggleAll : ""} ${!isNone && !isAll ? styles.subjectTogglePartial : ""}`}
          onClick={handleSubjectClick}
          aria-pressed={isAll}
          aria-label={
            isAll
              ? `Deselect all ${subject} topics`
              : `Select all ${subject} topics`
          }
        >
          {isAll ? "✓" : isNone ? "" : "−"}
        </button>
        <button
          type="button"
          className={styles.subjectName}
          onClick={onToggleExpanded}
          aria-expanded={isExpanded}
        >
          <span className={styles.subjectTitle}>{subject}</span>
          <span className={styles.subjectMeta}>
            {isNone
              ? `${totalCards} cards · ${allTopics.length} topics`
              : `${selectedCards}/${totalCards} cards · ${selectedTopics.length}/${allTopics.length} topics`}
          </span>
          <span
            className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`}
            aria-hidden="true"
          >
            &#9662;
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className={styles.topicPanel}>
          {allTopics.length > SEARCH_THRESHOLD && (
            <input
              type="search"
              className={styles.search}
              placeholder={`Search ${allTopics.length} topics`}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={`Search ${subject} topics`}
            />
          )}
          <div className={styles.topicActions}>
            <button
              type="button"
              className={styles.linkButton}
              onClick={selectVisible}
            >
              {normalized ? "Select matches" : "Select all"}
            </button>
            <button
              type="button"
              className={styles.linkButton}
              onClick={clearVisible}
              disabled={isNone}
            >
              {normalized ? "Clear matches" : "Clear"}
            </button>
          </div>
          <div
            className={styles.chips}
            role="group"
            aria-label={`${subject} topics`}
          >
            {visibleStats.map(({ topic, count }) => {
              const active = selectedSet.has(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  className={`${styles.chip} ${active ? styles.chipActive : ""}`}
                  aria-pressed={active}
                  onClick={() => onToggleTopic(topic)}
                >
                  {topic}
                  <span className={styles.chipCount}>{count}</span>
                </button>
              );
            })}
            {visibleStats.length === 0 && (
              <p className={styles.noMatch}>
                No topics match &ldquo;{query}&rdquo;.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
