import { useMemo, useState } from "react";
import { flashcardsBySubject, type Subject } from "../data";
import { getTopicStats } from "../lib/topics";
import { TextButton } from "./TextButton";
import styles from "./SubjectPanel.module.css";

// Only show the topic search once a subject has enough topics to need it.
const SEARCH_THRESHOLD = 8;

interface SubjectPanelProps {
  subject: Subject;
  selectedTopics: string[];
  onSetTopics: (topics: string[]) => void;
  onToggleTopic: (topic: string) => void;
}

export function SubjectPanel({
  subject,
  selectedTopics,
  onSetTopics,
  onToggleTopic,
}: SubjectPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const stats = useMemo(() => getTopicStats(subject), [subject]);

  const allTopics = stats.map((stat) => stat.topic);
  const selected = new Set(selectedTopics);
  const isAll = selectedTopics.length === allTopics.length;
  const isNone = selectedTopics.length === 0;
  const totalCards = flashcardsBySubject[subject]?.length ?? 0;
  const selectedCards = stats
    .filter((stat) => selected.has(stat.topic))
    .reduce((sum, stat) => sum + stat.count, 0);

  const normalized = query.trim().toLowerCase();
  const visible = normalized
    ? stats.filter((stat) => stat.topic.toLowerCase().includes(normalized))
    : stats;
  const visibleTopics = visible.map((stat) => stat.topic);

  const summary = isNone
    ? `${totalCards} cards · ${allTopics.length} topics`
    : `${selectedCards}/${totalCards} cards · ${selectedTopics.length}/${allTopics.length} topics`;

  return (
    <div className={styles.group} data-selected={!isNone}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.checkbox}
          data-state={isAll ? "all" : isNone ? "none" : "some"}
          onClick={() => onSetTopics(isAll ? [] : allTopics)}
          aria-pressed={isAll}
          aria-label={`${isAll ? "Deselect" : "Select"} all ${subject} topics`}
        >
          {isAll ? "✓" : isNone ? "" : "−"}
        </button>
        <button
          type="button"
          className={styles.name}
          onClick={() => setIsExpanded((open) => !open)}
          aria-expanded={isExpanded}
        >
          <span className={styles.title}>{subject}</span>
          <span className={styles.meta}>{summary}</span>
          <span className={styles.chevron} aria-hidden="true">
            &#9662;
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className={styles.topics}>
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
          <div className={styles.actions}>
            <TextButton
              onClick={() => onSetTopics([...new Set([...selectedTopics, ...visibleTopics])])}
            >
              {normalized ? "Select matches" : "Select all"}
            </TextButton>
            <TextButton
              disabled={isNone}
              onClick={() => onSetTopics(selectedTopics.filter((t) => !visibleTopics.includes(t)))}
            >
              {normalized ? "Clear matches" : "Clear"}
            </TextButton>
          </div>
          <div className={styles.chips} role="group" aria-label={`${subject} topics`}>
            {visible.map(({ topic, count }) => (
              <button
                key={topic}
                type="button"
                className={styles.chip}
                aria-pressed={selected.has(topic)}
                onClick={() => onToggleTopic(topic)}
              >
                {topic}
                <span className={styles.chipCount}>{count}</span>
              </button>
            ))}
            {visible.length === 0 && (
              <p className={styles.noMatch}>No topics match &ldquo;{query}&rdquo;.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
