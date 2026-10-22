import { Callout } from "../../components/Callout";

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
}

/** "Correct!" / "Not quite." with the question's explanation, once an answer is revealed. */
export function AnswerFeedback({ isCorrect, explanation }: AnswerFeedbackProps) {
  return (
    <Callout tone={isCorrect ? "success" : "danger"} title={isCorrect ? "Correct!" : "Not quite."}>
      {explanation}
    </Callout>
  );
}
