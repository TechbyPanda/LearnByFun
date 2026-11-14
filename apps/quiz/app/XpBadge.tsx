"use client";

import RankPolicyButton from "./RankPolicy";
import { rankFor, useProgress } from "./game";

/** Rank, level and XP bar shown in the header. Click it to see the promotion rules. */
export default function XpBadge() {
  const progress = useProgress();
  const { rank, level, percent, needs } = rankFor(progress);

  return (
    <RankPolicyButton
      className="xp-badge"
      label={`Rank ${rank.name}, level ${level}. ${progress.xp} XP. ${needs}. See promotion rules`}
    >
      <span className="xp-level" aria-hidden="true">{level}</span>
      <span className="xp-info" aria-hidden="true">
        <span className="xp-rank">{rank.name}</span>
        <span className="xp-bar"><span style={{ width: `${percent}%` }} /></span>
      </span>
      <span className="xp-total" aria-hidden="true">{progress.xp} XP</span>
    </RankPolicyButton>
  );
}
