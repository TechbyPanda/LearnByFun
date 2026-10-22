import { useState } from "react";
import { plural } from "../../lib/format";
import { Button } from "../Button";
import { ChipGroup, ToggleChip } from "../ToggleChip";
import type { PickerSubject } from "./SubjectTopicPicker";
import styles from "./SubjectPanel.module.css";

// Only show the topic search once a subject has enough topics to need it.
const SEARCH_THRESHOLD = 8;

interface SubjectPanelProps extends PickerSubject {
  /** What one item is called, e.g. "card" or "question". */
  unit: string;
  selectedTopics: string[];
  onChange: (topics: string[]) => void;
}

/** One subject: a tri-state "pick everything" box, and its topic chips when expanded. */
export function SubjectPanel({
  subject,
  topics,
  unit,
  selectedTopics,
  onChange,
}: SubjectPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const allTopics = topics.map((stat) => stat.topic);
  const selected = new Set(selectedTopics);
  const isAll = selectedTopics.length === allTopics.length;
  const isNone = selectedTopics.length === 0;
  const totalItems = topics.reduce((sum, stat) => sum + stat.count, 0);
  const selectedItems = topics
    .filter((stat) => selected.has(stat.topic))
    .reduce((sum, stat) => sum + stat.count, 0);

  const normalized = query.trim().toLowerCase();
  const visible = normalized
    ? topics.filter((stat) => stat.topic.toLowerCase().includes(normalized))
    : topics;
  const visibleTopics = visible.map((stat) => stat.topic);

  const summary = isNone
    ? `${totalItems} ${plural(totalItems, unit)} · ${allTopics.length} topics`
    : `${selectedItems}/${totalItems} ${plural(totalItems, unit)} · ${selectedTopics.length}/${allTopics.length} topics`;

  function toggle(topic: string) {
    onChange(selected.has(topic) ? selectedTopics.filter((t) => t !== topic) : [...selectedTopics, topic]);
  }

  return (
    <div className={styles.group} data-selected={!isNone}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.checkbox}
          data-state={isAll ? "all" : isNone ? "none" : "some"}
          onClick={() => onChange(isAll ? [] : allTopics)}
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
            <Button
              variant="text"
              onClick={() => onChange([...new Set([...selectedTopics, ...visibleTopics])])}
            >
              {normalized ? "Select matches" : "Select all"}
            </Button>
            <Button
              variant="text"
              disabled={isNone}
              onClick={() => onChange(selectedTopics.filter((t) => !visibleTopics.includes(t)))}
            >
              {normalized ? "Clear matches" : "Clear"}
            </Button>
          </div>
          <div className={styles.chips}>
            <ChipGroup label={`${subject} topics`}>
              {visible.map(({ topic, count }) => (
                <ToggleChip
                  key={topic}
                  pressed={selected.has(topic)}
                  count={count}
                  onClick={() => toggle(topic)}
                >
                  {topic}
                </ToggleChip>
              ))}
            </ChipGroup>
            {visible.length === 0 && (
              <p className={styles.noMatch}>No topics match &ldquo;{query}&rdquo;.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
