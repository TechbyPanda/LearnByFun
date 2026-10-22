import { ActionRow } from "../../components/ActionRow";
import { Button } from "../../components/Button";
import { Callout } from "../../components/Callout";
import { Panel } from "../../components/Panel";
import type { Bite } from "../bites";
import styles from "./LessonStep.module.css";

interface LessonStepProps {
  bite: Bite;
  onContinue: () => void;
}

export function LessonStep({ bite, onContinue }: LessonStepProps) {
  return (
    <Panel eyebrow={bite.topic} title={bite.title}>
      <ul className={styles.lines}>
        {bite.lesson.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {bite.mnemonic && (
        <Callout tone="warning" title="Memory hook">
          {bite.mnemonic}
        </Callout>
      )}

      <ActionRow>
        <Button onClick={onContinue}>
          Got it, test me <span aria-hidden="true">-&gt;</span>
        </Button>
      </ActionRow>
    </Panel>
  );
}
