"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ActionLink } from "../../components/ActionButton";
import { MatchResults } from "../components/MatchResults";
import { MatchRound } from "../components/MatchRound";
import { getMatchSet, type MatchSet } from "../data";
import { useMatchGame } from "../hooks/useMatchGame";
import styles from "./page.module.css";

export default function MatchPlayPage() {
  return (
    <Suspense fallback={null}>
      <MatchLoader />
    </Suspense>
  );
}

function MatchLoader() {
  const params = useSearchParams();
  const set = getMatchSet(params.get("set"));
  const timed = params.get("mode") !== "relaxed";

  if (!set) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <h1>Set not found</h1>
          <p>That match set doesn&apos;t exist any more.</p>
          <ActionLink href="/match">Back to Quick Match</ActionLink>
        </div>
      </div>
    );
  }

  return <MatchGame set={set} timed={timed} />;
}

function MatchGame({ set, timed }: { set: MatchSet; timed: boolean }) {
  const game = useMatchGame(set, timed);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link className={styles.backLink} href="/match">
          <span aria-hidden="true">&larr;</span> All sets
        </Link>
        <p className={styles.meta}>{set.title}</p>
      </div>

      {game.outcome ? (
        <MatchResults
          timed={timed}
          result={game.outcome.result}
          best={game.outcome.best}
          mixups={game.mixups}
          onRetryMissed={game.mixups.length > 0 ? game.retryMixups : undefined}
          onNewRound={game.newRound}
        />
      ) : (
        <MatchRound
          key={game.round.id}
          round={game.round.data}
          set={set}
          timed={timed}
          onComplete={game.handleComplete}
        />
      )}
    </div>
  );
}
