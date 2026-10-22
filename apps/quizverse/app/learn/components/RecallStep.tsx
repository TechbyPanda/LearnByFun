import { ActionRow } from "../../components/ActionRow";
import { Button } from "../../components/Button";
import { Panel } from "../../components/Panel";
import type { Flashcard } from "../../flashcard/data";
import { RateButtons } from "../../flashcard/study/components/RateButtons";
import { StudyCard } from "../../flashcard/study/components/StudyCard";
import { useStudySession } from "../../flashcard/study/hooks/useStudySession";
import styles from "./RecallStep.module.css";

interface RecallStepProps {
  cards: Flashcard[];
  continueLabel: string;
  /** Called with how many cards the user marked "Still learning". */
  onDone: (missed: number) => void;
}

export function RecallStep({ cards, continueLabel, onDone }: RecallStepProps) {
  const session = useStudySession(cards);

  if (!session.card) {
    return (
      <Panel title={`${session.known.length} of ${session.total} recalled`}>
        <p className={styles.note}>
          {session.missed.length === 0
            ? "Clean sweep. That's retrieval doing its job."
            : "Struggling a little is the point. It's what makes memories stick."}
        </p>
        <ActionRow>
          <Button onClick={() => onDone(session.missed.length)}>{continueLabel}</Button>
        </ActionRow>
      </Panel>
    );
  }

  return (
    <>
      <p className={styles.prompt}>
        Try to recall it before you flip. Card {session.index + 1} of {session.total}
      </p>
      <StudyCard
        key={session.card.id}
        card={session.card}
        isFlipped={session.isFlipped}
        onFlip={session.flip}
      />
      <RateButtons visible={session.isFlipped} onRate={session.rate} />
    </>
  );
}
