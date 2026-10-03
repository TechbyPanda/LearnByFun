import { useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import type { MCQQuestion } from "../../mcq/data";
import { OptionList } from "../../mcq/components/OptionList";
import styles from "./CheckStep.module.css";

interface CheckStepProps {
  question: MCQQuestion;
  onFinish: (correct: boolean) => void;
}

export function CheckStep({ question, onFinish }: CheckStepProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const isRevealed = selectedOptionId !== null;
  const isCorrect = selectedOptionId === question.correctOptionId;

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>QUICK CHECK</p>
      <h1 className={styles.question}>{question.question}</h1>

      <div className={styles.options}>
        <OptionList
          currentQuestion={question}
          selectedOptionId={selectedOptionId}
          isRevealed={isRevealed}
          handleSelectOption={(id) => setSelectedOptionId((prev) => prev ?? id)}
        />
      </div>

      {isRevealed && (
        <>
          <div className={styles.feedback} data-correct={isCorrect}>
            <strong>{isCorrect ? "Correct!" : "Not quite."}</strong>
            <p>{question.explanation}</p>
          </div>
          <ActionButton onClick={() => onFinish(isCorrect)}>Finish bite</ActionButton>
        </>
      )}
    </section>
  );
}
