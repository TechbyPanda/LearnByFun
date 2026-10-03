"use client";

import { GoalRing } from "./components/GoalRing";
import { PathCard } from "./components/PathCard";
import { UpNextList } from "./components/UpNextList";
import { WeekStrip } from "./components/WeekStrip";
import { learningPaths } from "./bites";
import { useLearnProgress } from "./hooks/useLearnProgress";
import { DAILY_GOAL, getStreak, getTodayCount, getWeek } from "./lib/progress";
import { getNextBite, getPathProgress, getUpNext } from "./lib/schedule";
import styles from "./page.module.css";

export default function LearnPage() {
  const { progress, today } = useLearnProgress();

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>MICROLEARNING</p>
          <h1 className={styles.title}>Learn in bites</h1>
          <p className={styles.subtitle}>
            One idea, about three minutes. Small daily sessions beat long cramming.
          </p>
        </header>

        {/* Progress lives in the browser, so wait for it before drawing anything personal. */}
        {today !== null && (
          <>
            <section className={styles.today} aria-label="Today">
              <GoalRing value={getTodayCount(progress, today)} goal={DAILY_GOAL} />
              <div className={styles.todayText}>
                <p className={styles.streak}>
                  <strong>{getStreak(progress, today)}</strong> day streak
                </p>
                <p className={styles.goalText}>
                  Goal: {DAILY_GOAL} bites a day
                </p>
              </div>
              <WeekStrip days={getWeek(progress, today)} today={today} />
            </section>

            <section aria-label="Up next">
              <h2 className={styles.sectionTitle}>Up next</h2>
              <UpNextList items={getUpNext(learningPaths, progress, today)} />
            </section>

            <section aria-label="Learning paths">
              <h2 className={styles.sectionTitle}>Learning paths</h2>
              <div className={styles.paths}>
                {learningPaths.map((path) => (
                  <PathCard
                    key={path.id}
                    path={path}
                    {...getPathProgress(path, progress)}
                    nextBite={getNextBite(path, progress)}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
