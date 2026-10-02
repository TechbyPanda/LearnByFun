import type { MCQQuestion } from "../data";
import { OptionList } from "./OptionList";
import styles from "./quiz.module.css";

interface QuestionCardProps {
  currentQuestion: MCQQuestion;
  selectedOptionId: string | null;
  isRevealed: boolean;
  isFlagged: boolean;
  handleSelectOption: (optionId: string) => void;
  onToggleFlag: () => void;
  onClear: () => void;
}

export function QuestionCard({
  currentQuestion,
  selectedOptionId,
  isRevealed,
  isFlagged,
  handleSelectOption,
  onToggleFlag,
  onClear,
}: QuestionCardProps) {
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

  return (
    <section className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.topic}>
          {currentQuestion.subject} · {currentQuestion.topic}
        </span>
        <div className={styles.cardTools}>
          {selectedOptionId && !isRevealed && (
            <button className={styles.linkButton} onClick={onClear}>
              Clear
            </button>
          )}
          <button
            className={`${styles.linkButton} ${isFlagged ? styles.flagActive : ""}`}
            onClick={onToggleFlag}
            aria-pressed={isFlagged}
          >
            {isFlagged ? "⚑ Marked" : "⚐ Mark for review"}
          </button>
        </div>
      </div>

      <h1 className={styles.question}>{currentQuestion.question}</h1>

      <OptionList
        currentQuestion={currentQuestion}
        selectedOptionId={selectedOptionId}
        isRevealed={isRevealed}
        handleSelectOption={handleSelectOption}
      />

      {isRevealed && (
        <div
          className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}
        >
          <strong>{isCorrect ? "Correct!" : "Not quite."}</strong>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      <p className={styles.hint}>
        Shortcuts: 1–4 or A–D to answer · ← → to navigate · F to mark
      </p>
    </section>
  );
}
