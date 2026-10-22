"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { EmptyState } from "../../components/EmptyState";
import { Page } from "../../components/Page";
import { SessionHeader } from "../../components/SessionHeader";
import { MatchResults } from "../components/MatchResults";
import { MatchRound } from "../components/MatchRound";
import { getMatchSet, type MatchSet } from "../data";
import { useMatchGame } from "../hooks/useMatchGame";

export default function MatchPlayPage() {
  return (
    <Suspense fallback={null}>
      <Page width="narrow" compact>
        <MatchLoader />
      </Page>
    </Suspense>
  );
}

function MatchLoader() {
  const params = useSearchParams();
  const set = getMatchSet(params.get("set"));
  const timed = params.get("mode") !== "relaxed";

  if (!set) {
    return (
      <EmptyState
        title="Set not found"
        message="That match set doesn't exist any more."
        actionHref="/match"
        actionLabel="Back to Quick Match"
      />
    );
  }

  return <MatchGame set={set} timed={timed} />;
}

function MatchGame({ set, timed }: { set: MatchSet; timed: boolean }) {
  const game = useMatchGame(set, timed);

  return (
    <>
      <SessionHeader backHref="/match" backLabel="All sets">
        {set.title}
      </SessionHeader>

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
    </>
  );
}
