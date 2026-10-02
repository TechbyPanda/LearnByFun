import type { useQuizSession } from "../hooks/useQuizSession";
import { useQuizShortcuts } from "../hooks/useQuizShortcuts";
import { Button } from "./Button";
import { QuestionCard } from "./QuestionCard";
import { QuestionPalette } from "./QuestionPalette";
import { QuizHeader } from "./QuizHeader";
import styles from "./quiz.module.css";

type Session = ReturnType<typeof useQuizSession>;

export function QuizView({ session }: { session: Session }) {
  const {
    total,
    currentIndex,
    currentQuestion,
    selectedOptionId,
    isRevealed,
    answers,
    flagged,
    attemptedCount,
    elapsedSeconds,
    instantFeedback,
    setInstantFeedback,
    goToQuestion,
    selectOption,
    clearAnswer,
    toggleFlag,
    finish,
  } = session;

  useQuizShortcuts({
    onSelectIndex: (i) => {
      const option = currentQuestion?.options[i];
      if (option) selectOption(option.id);
    },
    onPrevious: () => goToQuestion(currentIndex - 1),
    onNext: () => goToQuestion(currentIndex + 1),
    onToggleFlag: toggleFlag,
  });

  function handleFinish() {
    const unanswered = total - attemptedCount;
    if (
      unanswered > 0 &&
      !window.confirm(`${unanswered} question(s) unanswered. Finish anyway?`)
    ) {
      return;
    }
    finish();
  }

  if (!currentQuestion) return null;

  return (
    <div className={styles.page}>
      <QuizHeader
        currentIndex={currentIndex}
        total={total}
        attemptedCount={attemptedCount}
        elapsedSeconds={elapsedSeconds}
        instantFeedback={instantFeedback}
        onToggleFeedback={setInstantFeedback}
      />

      <div className={styles.layout}>
        <main className={styles.main}>
          <QuestionCard
            currentQuestion={currentQuestion}
            selectedOptionId={selectedOptionId}
            isRevealed={isRevealed}
            isFlagged={flagged[currentIndex] ?? false}
            handleSelectOption={selectOption}
            onToggleFlag={toggleFlag}
            onClear={clearAnswer}
          />

          <div className={styles.actions}>
            <Button
              variant="secondary"
              onClick={() => goToQuestion(currentIndex - 1)}
              disabled={currentIndex === 0}
            >
              ← Previous
            </Button>
            <div className={styles.actionsRight}>
              <Button
                variant="secondary"
                onClick={() => goToQuestion(currentIndex + 1)}
                disabled={currentIndex + 1 === total}
              >
                Next →
              </Button>
              <Button onClick={handleFinish}>Finish Test</Button>
            </div>
          </div>
        </main>

        <QuestionPalette
          total={total}
          currentIndex={currentIndex}
          answers={answers}
          flagged={flagged}
          goToQuestion={goToQuestion}
        />
      </div>
    </div>
  );
}
