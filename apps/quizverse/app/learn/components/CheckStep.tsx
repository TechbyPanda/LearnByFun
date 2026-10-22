import { useState } from "react";
import { ActionRow } from "../../components/ActionRow";
import { Button } from "../../components/Button";
import { Panel } from "../../components/Panel";
import { AnswerFeedback } from "../../mcq/components/AnswerFeedback";
import { OptionList } from "../../mcq/components/OptionList";
import type { MCQQuestion } from "../../mcq/data";
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
    <Panel eyebrow="Quick check">
      <h1 className={styles.question}>{question.question}</h1>

      <OptionList
        currentQuestion={question}
        selectedOptionId={selectedOptionId}
        isRevealed={isRevealed}
        handleSelectOption={(id) => setSelectedOptionId((prev) => prev ?? id)}
      />

      {isRevealed && (
        <>
          <AnswerFeedback isCorrect={isCorrect} explanation={question.explanation} />
          <ActionRow>
            <Button onClick={() => onFinish(isCorrect)}>Finish bite</Button>
          </ActionRow>
        </>
      )}
    </Panel>
  );
}
