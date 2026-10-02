import type { MCQQuestion } from "../data";
import styles from "./quiz.module.css";

interface OptionListProps {
  currentQuestion: MCQQuestion;
  selectedOptionId: string | null;
  isRevealed: boolean;
  handleSelectOption: (optionId: string) => void;
}

export function OptionList({
  currentQuestion,
  selectedOptionId,
  isRevealed,
  handleSelectOption,
}: OptionListProps) {
  return (
    <div className={styles.options}>
      {currentQuestion.options.map((option, index) => {
        const isSelected = option.id === selectedOptionId;
        const isCorrect = option.id === currentQuestion.correctOptionId;

        let stateClass = "";
        if (isRevealed && isCorrect) stateClass = styles.optionCorrect ?? "";
        else if (isRevealed && isSelected) stateClass = styles.optionWrong ?? "";
        else if (isSelected) stateClass = styles.optionSelected ?? "";

        return (
          <button
            key={option.id}
            className={`${styles.option} ${stateClass}`}
            onClick={() => handleSelectOption(option.id)}
            disabled={isRevealed}
          >
            <span className={styles.optionLetter}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className={styles.optionText}>{option.text}</span>
            {isRevealed && isCorrect && <span aria-hidden>✓</span>}
            {isRevealed && isSelected && !isCorrect && <span aria-hidden>✗</span>}
          </button>
        );
      })}
    </div>
  );
}
