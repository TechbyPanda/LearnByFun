import { questionsBySubject, type Subject } from "../../mcq/data";
import { getTopicsForSubject } from "../../mcq/lib/topics";
import type { QuizConfig } from "../../mcq/lib/quizConfig";
import { useCustomQuiz } from "../hooks/useCustomQuiz";
import { CountPicker } from "./CountPicker";
import styles from "../quiz.module.css";

const ALL_SUBJECTS = Object.keys(questionsBySubject) as Subject[];

interface CustomBuilderProps {
  onBack: () => void;
  onStart: (config: QuizConfig) => void;
}

export function CustomBuilder({ onBack, onStart }: CustomBuilderProps) {
  const quiz = useCustomQuiz();
  const selectedSubjects = Object.keys(quiz.topicsBySubject).length;

  return (
    <>
      <button className={styles.backLink} onClick={onBack}>
        &larr; Back to Mock Tests
      </button>
      <h1 className={styles.title}>Build Your Own Test</h1>
      <p className={styles.subtitle}>
        Tick a subject to include all its topics, then fine-tune if you want.
      </p>

      <div className={styles.builder}>
        <div className={styles.subjects}>
          <div className={styles.quickRow}>
            <button className={styles.linkButton} onClick={quiz.selectEverything}>
              Select all
            </button>
            <button className={styles.linkButton} onClick={quiz.clear}>
              Clear
            </button>
          </div>

          {ALL_SUBJECTS.map((subject) => {
            const total = questionsBySubject[subject]?.length ?? 0;
            const topics = getTopicsForSubject(subject);
            const selected = quiz.topicsBySubject[subject];
            const isOn = selected !== undefined;

            return (
              <section
                key={subject}
                className={`${styles.subjectCard} ${isOn ? styles.subjectCardOn : ""} ${total === 0 ? styles.subjectCardOff : ""}`}
              >
                <button
                  className={styles.subjectHeader}
                  disabled={total === 0}
                  onClick={() => quiz.toggleSubject(subject)}
                  aria-pressed={isOn}
                >
                  <span className={styles.check}>{isOn ? "✓" : ""}</span>
                  <span className={styles.subjectName}>{subject}</span>
                  <span className={styles.hint}>
                    {total === 0 ? "Coming soon" : `${total} questions · ${topics.length} topics`}
                  </span>
                </button>

                {isOn && (
                  <div className={styles.topicBlock}>
                    <div className={styles.chipRow}>
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          className={`${styles.pill} ${selected.includes(topic) ? styles.pillActive : ""}`}
                          onClick={() => quiz.toggleTopic(subject, topic)}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                    <div className={styles.quickRow}>
                      <button
                        className={styles.linkButton}
                        onClick={() => quiz.setAllTopics(subject, true)}
                      >
                        All topics
                      </button>
                      <button
                        className={styles.linkButton}
                        onClick={() => quiz.setAllTopics(subject, false)}
                      >
                        None
                      </button>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <aside className={styles.summaryCard}>
          <h3 className={styles.fieldLabel}>Your test</h3>
          <p className={styles.summaryText}>
            {quiz.poolSize === 0
              ? "Select at least one subject to begin."
              : `${selectedSubjects} subject${selectedSubjects > 1 ? "s" : ""} · ${quiz.poolSize} questions available`}
          </p>

          {quiz.poolSize > 0 && (
            <>
              <h3 className={styles.fieldLabel}>Questions</h3>
              <CountPicker
                value={quiz.count}
                max={quiz.poolSize}
                presets={[5, 10, 20, 50]}
                onChange={quiz.setQuestionCount}
              />
            </>
          )}

          <label className={styles.checkRow}>
            <input
              type="checkbox"
              checked={quiz.shuffle}
              onChange={(e) => quiz.setShuffle(e.target.checked)}
            />
            Shuffle questions
          </label>

          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnWide}`}
            disabled={!quiz.canStart}
            onClick={() => onStart(quiz.getConfig())}
          >
            Start Quiz
          </button>
        </aside>
      </div>
    </>
  );
}
