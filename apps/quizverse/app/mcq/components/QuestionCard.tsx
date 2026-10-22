import { Button } from "../../components/Button";
import { Eyebrow } from "../../components/Eyebrow";
import { Panel } from "../../components/Panel";
import type { MCQQuestion } from "../data";
import { AnswerFeedback } from "./AnswerFeedback";
import { OptionList } from "./OptionList";
import styles from "./QuestionCard.module.css";

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
  return (
    <Panel>
      <div className={styles.top}>
        <Eyebrow as="span">
          {currentQuestion.subject} · {currentQuestion.topic} · {currentQuestion.subtopic}
        </Eyebrow>
        <div className={styles.tools}>
          {selectedOptionId && !isRevealed && (
            <Button variant="text" onClick={onClear}>
              Clear
            </Button>
          )}
          <Button variant="text" onClick={onToggleFlag} aria-pressed={isFlagged}>
            {isFlagged ? "⚑ Marked" : "⚐ Mark for review"}
          </Button>
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
        <AnswerFeedback
          isCorrect={selectedOptionId === currentQuestion.correctOptionId}
          explanation={currentQuestion.explanation}
        />
      )}

      <p className={styles.hint}>Shortcuts: 1–4 or A–D to answer · ← → to navigate · F to mark</p>
    </Panel>
  );
}
