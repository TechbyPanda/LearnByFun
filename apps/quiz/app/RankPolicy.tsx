"use client";

import { useRef, type ReactNode } from "react";
import {
  badgesFor,
  DAILY_GOAL,
  MASTER_PERCENT,
  PASS_PERCENT,
  rankFor,
  RANKS,
  REVISE_AFTER_DAYS,
  useProgress,
  XP,
} from "./game";

const XP_RULES = [
  { icon: "✅", text: "Correct answer (first time)", xp: XP.firstCorrect },
  { icon: "🔁", text: "Correct answer on a question you already solved", xp: XP.repeatCorrect },
  { icon: "🔥", text: `Each correct answer in a streak of ${XP.streakFrom} or more`, xp: XP.streakBonus },
  { icon: "📄", text: `Clear a paper for the first time (${PASS_PERCENT}% or more)`, xp: XP.paperCleared },
  { icon: "🌟", text: `Master a paper for the first time (${MASTER_PERCENT}% or more)`, xp: XP.paperMastered },
  { icon: "🎯", text: `Daily goal: answer ${DAILY_GOAL} questions in a day`, xp: XP.dailyGoal },
];

/** A button that opens the promotion rules: rank ladder, XP rules, stars and badges. */
export default function RankPolicyButton({
  children,
  className,
  label = "See promotion rules",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const progress = useProgress();
  const { level, next, needs, cleared } = rankFor(progress);
  const badges = badgesFor(progress);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={label}
        title={label}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>

      <dialog
        ref={dialog}
        className="settings-dialog policy-dialog"
        aria-labelledby="policy-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close(); // backdrop click
        }}
      >
        <div className="settings-body">
          <div className="settings-heading">
            <h2 id="policy-title">🎖 Promotion rules</h2>
            <button
              type="button"
              className="settings-close"
              aria-label="Close promotion rules"
              onClick={() => dialog.current?.close()}
            >
              ✕
            </button>
          </div>

          <p className="policy-now">
            You have <strong>{progress.xp} XP</strong> and <strong>{cleared}</strong>{" "}
            {cleared === 1 ? "paper" : "papers"} cleared.{" "}
            {next ? <>Next: <strong>{needs}</strong>.</> : "You hold the highest rank!"}
          </p>

          <section>
            <h3>Rank ladder</h3>
            <p className="muted policy-note">
              To be promoted you need both the XP and the cleared papers of the next rank.
            </p>
            <ol className="rank-ladder">
              {RANKS.map((rank, i) => {
                const state = i + 1 < level ? "done" : i + 1 === level ? "current" : "locked";
                return (
                  <li key={rank.name} className={`rank-row ${state}`}>
                    <span className="rank-icon" aria-hidden="true">{rank.icon}</span>
                    <span className="rank-name">
                      {rank.name}
                      {state === "current" && <em>You are here</em>}
                    </span>
                    <span className="rank-need">
                      {i === 0 ? "Start" : (
                        <>
                          <b className={progress.xp >= rank.xp ? "met" : ""}>{rank.xp} XP</b>
                          <b className={cleared >= rank.papers ? "met" : ""}>
                            {rank.papers} {rank.papers === 1 ? "paper" : "papers"}
                          </b>
                        </>
                      )}
                    </span>
                    <span className="rank-state" aria-hidden="true">
                      {state === "done" ? "✓" : state === "current" ? "●" : "🔒"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          <section>
            <h3>How you earn XP</h3>
            <ul className="xp-rules">
              {XP_RULES.map((rule) => (
                <li key={rule.text}>
                  <span aria-hidden="true">{rule.icon}</span>
                  <span>{rule.text}</span>
                  <strong>+{rule.xp}</strong>
                </li>
              ))}
            </ul>
            <p className="muted policy-note">A wrong answer never takes XP away. It only ends your streak.</p>
          </section>

          <section>
            <h3>Stars and levels</h3>
            <ul className="policy-list">
              <li><span className="mini-stars">★☆☆</span> 30% or more</li>
              <li><span className="mini-stars">★★☆</span> {PASS_PERCENT}% or more: paper <strong>cleared</strong>, the next level opens</li>
              <li><span className="mini-stars">★★★</span> {MASTER_PERCENT}% or more: paper <strong>mastered</strong></li>
              <li>Below {PASS_PERCENT}%? The paper comes back in <strong>Recommended</strong> so you can try that level again.</li>
              <li>Mastered papers move to the end of the list, and return for revision after {REVISE_AFTER_DAYS} days.</li>
              <li>Only full attempts count for stars. “Retry wrong ones” is extra practice (it still gives XP).</li>
            </ul>
          </section>

          <section>
            <h3>Badges <span className="muted">{badges.filter((b) => b.earned).length}/{badges.length}</span></h3>
            <ul className="badge-grid">
              {badges.map((badge) => (
                <li key={badge.name} className={badge.earned ? "badge earned" : "badge"} title={badge.how}>
                  <span className="badge-icon" aria-hidden="true">{badge.icon}</span>
                  <strong>{badge.name}</strong>
                  <span>{badge.how}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="settings-footer">
            <button type="button" className="button" onClick={() => dialog.current?.close()}>
              Got it
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
