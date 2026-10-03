import styles from "./GoalRing.module.css";

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface GoalRingProps {
  value: number;
  goal: number;
}

export function GoalRing({ value, goal }: GoalRingProps) {
  const fraction = Math.min(value / goal, 1);
  const reached = value >= goal;

  return (
    <div className={styles.ring} data-reached={reached}>
      <svg viewBox="0 0 80 80" role="img" aria-label={`${value} of ${goal} bites today`}>
        <circle className={styles.track} cx="40" cy="40" r={RADIUS} />
        <circle
          className={styles.fill}
          cx="40"
          cy="40"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - fraction)}
        />
      </svg>
      <span className={styles.value}>
        {reached ? "✓" : `${value}/${goal}`}
      </span>
    </div>
  );
}
