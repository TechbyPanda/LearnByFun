import { useQuizQuestions } from "../hooks/useQuizQuestions";
import { useQuizSession } from "../hooks/useQuizSession";
import { EmptyState } from "./EmptyState";
import { QuizView } from "./QuizView";
import { ReviewScreen } from "./ReviewScreen";

export function QuizApp() {
  const initialQuestions = useQuizQuestions();
  const session = useQuizSession(initialQuestions);

  if (session.total === 0) return <EmptyState />;

  if (session.isFinished) {
    return (
      <ReviewScreen
        questions={session.questions}
        answers={session.answers}
        flagged={session.flagged}
        score={session.score}
        elapsedSeconds={session.elapsedSeconds}
        onRestart={session.restart}
        onRetryIncorrect={session.retryIncorrect}
      />
    );
  }

  return <QuizView session={session} />;
}
