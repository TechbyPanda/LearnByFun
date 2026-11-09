"use client";

import { rankFor, useProgress } from "./game";

/** Rank, level and XP bar shown in the header. */
export default function XpBadge() {
  const { xp } = useProgress();
  const { rank, level, next, percent } = rankFor(xp);
  const title = next
    ? `${xp} XP · ${next.xp - xp} XP to ${next.name}`
    : `${xp} XP · Highest rank reached`;

  return (
    <div className="xp-badge" title={title} aria-label={`Rank ${rank.name}, level ${level}. ${title}`}>
      <span className="xp-level" aria-hidden="true">{level}</span>
      <span className="xp-info" aria-hidden="true">
        <span className="xp-rank">{rank.name}</span>
        <span className="xp-bar"><span style={{ width: `${percent}%` }} /></span>
      </span>
      <span className="xp-total" aria-hidden="true">{xp} XP</span>
    </div>
  );
}
