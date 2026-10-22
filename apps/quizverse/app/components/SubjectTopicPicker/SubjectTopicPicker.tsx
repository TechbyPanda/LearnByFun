import type { Subject, TopicsBySubject } from "../../lib/subject";
import { setSubjectTopics } from "../../lib/topicSelection";
import type { TopicStat } from "../../lib/topics";
import { Button } from "../Button";
import { SubjectPanel } from "./SubjectPanel";
import styles from "./SubjectTopicPicker.module.css";

/** A subject that has content, with its topics and how many items each holds. */
export interface PickerSubject {
  subject: Subject;
  topics: TopicStat[];
}

interface SubjectTopicPickerProps {
  subjects: PickerSubject[];
  /** Subjects still waiting for content, listed as "coming soon". */
  upcoming?: Subject[];
  /** What one item is called, e.g. "card" or "question". */
  unit: string;
  value: TopicsBySubject;
  onChange: (value: TopicsBySubject) => void;
}

/**
 * Pick subjects and topics. Each feature passes in its own subjects and topic
 * counts, so this knows nothing about questions or flashcards.
 */
export function SubjectTopicPicker({
  subjects,
  upcoming = [],
  unit,
  value,
  onChange,
}: SubjectTopicPickerProps) {
  function selectEverything() {
    onChange(
      Object.fromEntries(subjects.map(({ subject, topics }) => [subject, topics.map((t) => t.topic)])),
    );
  }

  return (
    <section className={styles.picker} aria-label="Choose subjects and topics">
      <div className={styles.header}>
        <h2 className={styles.title}>Subjects</h2>
        <div className={styles.actions}>
          <Button variant="text" onClick={selectEverything}>
            Select all
          </Button>
          <Button
            variant="text"
            onClick={() => onChange({})}
            disabled={Object.keys(value).length === 0}
          >
            Clear
          </Button>
        </div>
      </div>

      <div className={styles.list}>
        {subjects.map((option) => (
          <SubjectPanel
            key={option.subject}
            {...option}
            unit={unit}
            selectedTopics={value[option.subject] ?? []}
            onChange={(topics) => onChange(setSubjectTopics(value, option.subject, topics))}
          />
        ))}
      </div>

      {upcoming.length > 0 && (
        <div className={styles.upcoming}>
          <p className={styles.upcomingTitle}>More subjects coming soon</p>
          <p className={styles.upcomingList}>{upcoming.join("  /  ")}</p>
        </div>
      )}
    </section>
  );
}
