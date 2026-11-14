"use client";

import type { CSSProperties } from "react";
import RankPolicyButton from "./RankPolicy";
import { DAILY_GOAL, dayKey, dayStreak, rankFor, useProgress, useToday } from "./game";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

/** The student's rank, daily goal, streak and last 7 days, shown on the dashboard. */
export default function PlayerCard() {
  const progress = useProgress();
  const today = useToday(); // "" on the server
  const { rank, level, percent, needs, cleared } = rankFor(progress);

  const todayCount = today ? progress.activity[today] ?? 0 : 0;
  const streak = today ? dayStreak(progress.activity) : 0;
  const accuracy = progress.answered ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const goalPercent = Math.min(100, (todayCount / DAILY_GOAL) * 100);

  const week = today
    ? Array.from({ length: 7 }, (_, i) => {
        const daysAgo = 6 - i;
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return { letter: WEEKDAYS[date.getDay()]!, count: progress.activity[dayKey(daysAgo)] ?? 0, isToday: daysAgo === 0 };
      })
    : [];
  const weekMax = Math.max(DAILY_GOAL, ...week.map((day) => day.count));

  return (
    <aside className="player-card" aria-label="Your progress">
      <div className="player-rank">
        <span className="player-emblem" aria-hidden="true">{rank.icon}</span>
        <div className="player-rank-copy">
          <span className="player-level">RANK {level}</span>
          <strong>{rank.name}</strong>
          <span className="player-bar"><span style={{ width: `${percent}%` }} /></span>
          <span className="player-needs">{progress.xp} XP · {needs}</span>
        </div>
      </div>

      <div className="player-stats">
        <div
          className={goalPercent >= 100 ? "goal-ring done" : "goal-ring"}
          style={{ "--p": `${goalPercent}%` } as CSSProperties}
          role="img"
          aria-label={`Today's goal: ${todayCount} of ${DAILY_GOAL} questions`}
        >
          <span>
            <strong>{goalPercent >= 100 ? "✓" : todayCount}</strong>
            <small>/ {DAILY_GOAL} today</small>
          </span>
        </div>
        <dl className="player-tiles">
          <div><dt>🔥 Day streak</dt><dd>{streak}</dd></div>
          <div><dt>📄 Papers cleared</dt><dd>{cleared}</dd></div>
          <div><dt>🎯 Accuracy</dt><dd>{progress.answered ? `${accuracy}%` : "–"}</dd></div>
          <div><dt>✅ Solved</dt><dd>{progress.solved.length}</dd></div>
        </dl>
      </div>

      <div className="week-chart" role="img" aria-label="Questions answered in the last 7 days">
        {week.map((day, i) => (
          <span key={i} className={day.isToday ? "week-day today" : "week-day"} title={`${day.count} questions`}>
            <i className={day.count >= DAILY_GOAL ? "goal" : ""} style={{ height: `${Math.max(6, (day.count / weekMax) * 100)}%` }} />
            <small>{day.letter}</small>
          </span>
        ))}
      </div>

      <RankPolicyButton className="link-button player-rules">How do promotions work? →</RankPolicyButton>
    </aside>
  );
}
