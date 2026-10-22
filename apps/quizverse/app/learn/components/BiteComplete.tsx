import { ActionRow } from "../../components/ActionRow";
import { ButtonLink } from "../../components/Button";
import { Panel } from "../../components/Panel";
import { plural } from "../../lib/format";
import { biteHref } from "../lib/links";
import type { UpNextItem } from "../lib/schedule";
import { GoalRing } from "./GoalRing";
import styles from "./BiteComplete.module.css";

interface BiteCompleteProps {
  correct: boolean;
  streak: number;
  todayCount: number;
  goal: number;
  /** The next suggested bite, if there is one. */
  next?: UpNextItem;
}

export function BiteComplete({ correct, streak, todayCount, goal, next }: BiteCompleteProps) {
  const remaining = goal - todayCount;

  return (
    <Panel
      eyebrow="Bite complete"
      title={correct ? "Locked in." : "Good effort. This one will return tomorrow."}
    >
      <p className={styles.note}>
        {correct
          ? "You'll see it again as a quick refresher so it stays fresh."
          : "Missing it now means you'll remember it better later. That's how it works."}
      </p>

      <div className={styles.stats}>
        <GoalRing value={todayCount} goal={goal} />
        <div>
          <p className={styles.statLine}>
            <strong>{streak}</strong> {plural(streak, "day")} in a row
          </p>
          <p className={styles.statSub}>
            {remaining <= 0
              ? "Daily goal reached. Anything more is a bonus."
              : `${remaining} more ${plural(remaining, "bite")} for today's goal`}
          </p>
        </div>
      </div>

      <ActionRow>
        {next && (
          <ButtonLink href={biteHref(next.bite.id, next.mode)}>Next: {next.bite.title}</ButtonLink>
        )}
        <ButtonLink variant="secondary" href="/learn">
          Back to Learn
        </ButtonLink>
      </ActionRow>
    </Panel>
  );
}
