import { OptionGroup, OptionsBar, StartBar } from "../../components/BuilderBar";
import { Button } from "../../components/Button";
import { CheckboxField } from "../../components/CheckboxField";
import { PageIntro } from "../../components/PageIntro";
import { SubjectTopicPicker } from "../../components/SubjectTopicPicker";
import { plural } from "../../lib/format";
import type { QuizConfig } from "../../mcq/lib/quizConfig";
import { PICKER_SUBJECTS, UPCOMING_SUBJECTS } from "../../mcq/lib/topics";
import { useCustomQuiz } from "../hooks/useCustomQuiz";
import { CountPicker } from "./CountPicker";
import styles from "./CustomBuilder.module.css";

interface CustomBuilderProps {
  onBack: () => void;
  onStart: (config: QuizConfig) => void;
}

export function CustomBuilder({ onBack, onStart }: CustomBuilderProps) {
  const quiz = useCustomQuiz();

  return (
    <>
      <div className={styles.back}>
        <Button variant="text" onClick={onBack}>
          <span aria-hidden="true">&larr;</span> Back to Mock Tests
        </Button>
      </div>
      <PageIntro eyebrow="Custom test" title="Build Your Own Test">
        Tick a subject to include all its topics, then fine-tune if you want.
      </PageIntro>

      <SubjectTopicPicker
        subjects={PICKER_SUBJECTS}
        upcoming={UPCOMING_SUBJECTS}
        unit="question"
        value={quiz.topicsBySubject}
        onChange={quiz.setTopicsBySubject}
      />

      <OptionsBar label="Test options">
        {quiz.poolSize > 0 && (
          <OptionGroup label="Questions">
            <CountPicker
              value={quiz.count}
              max={quiz.poolSize}
              presets={[5, 10, 20, 50]}
              onChange={quiz.setQuestionCount}
            />
          </OptionGroup>
        )}
        <CheckboxField checked={quiz.shuffle} onChange={quiz.setShuffle}>
          Shuffle questions
        </CheckboxField>
      </OptionsBar>

      <StartBar
        summary={
          quiz.canStart ? (
            <>
              <strong>{quiz.count}</strong> {plural(quiz.count, "question")} in this test
              {quiz.count < quiz.poolSize && ` (of ${quiz.poolSize} available)`}
            </>
          ) : (
            "Select at least one subject to begin"
          )
        }
        actionLabel="Start Quiz"
        disabled={!quiz.canStart}
        onStart={() => onStart(quiz.getConfig())}
      />
    </>
  );
}
