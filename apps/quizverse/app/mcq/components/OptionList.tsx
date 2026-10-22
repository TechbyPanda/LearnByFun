import type { MCQQuestion } from "../data";
import styles from "./OptionList.module.css";

type OptionState = "idle" | "selected" | "correct" | "wrong";

interface OptionListProps {
  currentQuestion: MCQQuestion;
  selectedOptionId: string | null;
  isRevealed: boolean;
  handleSelectOption: (optionId: string) => void;
}

function getOptionState(isSelected: boolean, isCorrect: boolean, isRevealed: boolean): OptionState {
  if (isRevealed && isCorrect) return "correct";
  if (isRevealed && isSelected) return "wrong";
  return isSelected ? "selected" : "idle";
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
        const state = getOptionState(
          option.id === selectedOptionId,
          option.id === currentQuestion.correctOptionId,
          isRevealed,
        );

        return (
          <button
            key={option.id}
            type="button"
            className={styles.option}
            data-state={state}
            onClick={() => handleSelectOption(option.id)}
            disabled={isRevealed}
          >
            <span className={styles.letter}>{String.fromCharCode(65 + index)}</span>
            <span className={styles.text}>{option.text}</span>
            {state === "correct" && <span aria-hidden>✓</span>}
            {state === "wrong" && <span aria-hidden>✗</span>}
          </button>
        );
      })}
    </div>
  );
}
