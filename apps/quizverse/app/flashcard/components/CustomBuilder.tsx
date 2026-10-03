import { SegmentedControl } from "../../components/SegmentedControl";
import { useCardSelection } from "../hooks/useCardSelection";
import { SESSION_SIZES, type DeckOptions, type TopicsBySubject } from "../lib/deck";
import { AVAILABLE_SUBJECTS, UPCOMING_SUBJECTS } from "../lib/subjects";
import { SubjectPanel } from "./SubjectPanel";
import { TextButton } from "./TextButton";
import styles from "./CustomBuilder.module.css";

const SIZE_OPTIONS = SESSION_SIZES.map((size) => ({
  value: size,
  label: size === 0 ? "All" : String(size),
}));

interface CustomBuilderProps {
  onStart: (topicsBySubject: TopicsBySubject, options: DeckOptions) => void;
}

export function CustomBuilder({ onStart }: CustomBuilderProps) {
  const selection = useCardSelection();
  const { deckSize, cardCount, options } = selection;

  return (
    <>
      <section className={styles.selection} aria-label="Choose flashcard topics">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Subjects</h2>
          <div className={styles.headerActions}>
            <TextButton onClick={selection.selectEverything}>Select all</TextButton>
            <TextButton onClick={selection.clear} disabled={!selection.hasSelection}>
              Clear
            </TextButton>
          </div>
        </div>

        <div className={styles.subjectList}>
          {AVAILABLE_SUBJECTS.map((subject) => (
            <SubjectPanel
              key={subject}
              subject={subject}
              selectedTopics={selection.topicsBySubject[subject] ?? []}
              onSetTopics={(topics) => selection.setSubjectTopics(subject, topics)}
              onToggleTopic={(topic) => selection.toggleTopic(subject, topic)}
            />
          ))}
        </div>

        {UPCOMING_SUBJECTS.length > 0 && (
          <div className={styles.upcoming}>
            <p className={styles.upcomingTitle}>More subjects coming soon</p>
            <p className={styles.upcomingList}>{UPCOMING_SUBJECTS.join("  /  ")}</p>
          </div>
        )}
      </section>

      <section className={styles.options} aria-label="Session options">
        <div className={styles.optionGroup}>
          <span className={styles.optionLabel}>Session size</span>
          <SegmentedControl
            label="Session size"
            options={SIZE_OPTIONS}
            value={options.limit}
            onChange={(limit) => selection.setOptions({ ...options, limit })}
          />
        </div>

        <label className={styles.switchRow}>
          <input
            type="checkbox"
            checked={options.shuffle}
            onChange={(event) =>
              selection.setOptions({ ...options, shuffle: event.target.checked })
            }
          />
          <span>Shuffle cards</span>
        </label>
      </section>

      <footer className={styles.actionBar}>
        <p className={styles.hint} aria-live="polite">
          {selection.canStart ? (
            <>
              <span className={styles.selectedCount}>{deckSize}</span>
              {deckSize === 1 ? " card" : " cards"} in this session
              {deckSize < cardCount && ` (of ${cardCount} selected)`}
            </>
          ) : (
            "Pick a subject or topic to begin"
          )}
        </p>
        <button
          className={styles.startButton}
          disabled={!selection.canStart}
          onClick={() => onStart(selection.topicsBySubject, options)}
        >
          Start session <span aria-hidden="true">-&gt;</span>
        </button>
      </footer>
    </>
  );
}
