import { ActionLink } from "../../components/ActionButton";
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
  const goalReached = todayCount >= goal;

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>BITE COMPLETE</p>
      <h1 className={styles.title}>
        {correct ? "Locked in." : "Good effort. This one will return tomorrow."}
      </h1>
      <p className={styles.note}>
        {correct
          ? "You'll see it again as a quick refresher so it stays fresh."
          : "Missing it now means you'll remember it better later. That's how it works."}
      </p>

      <div className={styles.stats}>
        <GoalRing value={todayCount} goal={goal} />
        <div>
          <p className={styles.statLine}>
            <strong>{streak}</strong> day{streak === 1 ? "" : "s"} in a row
          </p>
          <p className={styles.statSub}>
            {goalReached
              ? "Daily goal reached. Anything more is a bonus."
              : `${goal - todayCount} more ${goal - todayCount === 1 ? "bite" : "bites"} for today's goal`}
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        {next && (
          <ActionLink
            href={`/learn/bite?id=${next.bite.id}${next.mode === "refresh" ? "&mode=refresh" : ""}`}
          >
            Next: {next.bite.title}
          </ActionLink>
        )}
        <ActionLink variant="secondary" href="/learn">
          Back to Learn
        </ActionLink>
      </div>
    </section>
  );
}
