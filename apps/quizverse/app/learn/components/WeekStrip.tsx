import styles from "./WeekStrip.module.css";

interface WeekStripProps {
  days: { date: string; count: number }[];
  today: string;
}

function weekdayInitial(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y ?? 0, (m ?? 1) - 1, d ?? 1).toLocaleDateString("en", { weekday: "narrow" });
}

export function WeekStrip({ days, today }: WeekStripProps) {
  return (
    <ol className={styles.strip} aria-label="Last 7 days">
      {days.map(({ date, count }) => (
        <li
          key={date}
          className={styles.day}
          data-active={count > 0}
          data-today={date === today}
          aria-label={`${date}: ${count} ${count === 1 ? "bite" : "bites"}`}
        >
          <span className={styles.dot}>{count > 0 ? "✓" : ""}</span>
          <span className={styles.initial}>{weekdayInitial(date)}</span>
        </li>
      ))}
    </ol>
  );
}
