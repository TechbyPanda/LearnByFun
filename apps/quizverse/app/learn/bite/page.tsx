"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ActionLink } from "../../components/ActionButton";
import { getBite, learningPaths, type Bite } from "../bites";
import { BiteComplete } from "../components/BiteComplete";
import { CheckStep } from "../components/CheckStep";
import { LessonStep } from "../components/LessonStep";
import { RecallStep } from "../components/RecallStep";
import { StepIndicator } from "../components/StepIndicator";
import { useBiteFlow } from "../hooks/useBiteFlow";
import { useLearnProgress } from "../hooks/useLearnProgress";
import { getBiteCards, getBiteQuestion } from "../lib/content";
import { DAILY_GOAL, getStreak, getTodayCount } from "../lib/progress";
import { getUpNext, type BiteMode } from "../lib/schedule";
import styles from "./page.module.css";

export default function BitePage() {
  return (
    <Suspense fallback={null}>
      <BiteLoader />
    </Suspense>
  );
}

function BiteLoader() {
  const params = useSearchParams();
  const bite = getBite(params.get("id"));
  const mode: BiteMode = params.get("mode") === "refresh" ? "refresh" : "full";

  if (!bite) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <h1>Bite not found</h1>
          <p>That bite doesn&apos;t exist any more.</p>
          <ActionLink href="/learn">Back to Learn</ActionLink>
        </div>
      </div>
    );
  }

  // Keyed so moving to another bite starts with a clean flow.
  return <BiteRunner key={`${bite.id}-${mode}`} bite={bite} mode={mode} />;
}

function BiteRunner({ bite, mode }: { bite: Bite; mode: BiteMode }) {
  const { progress, today, completeBite } = useLearnProgress();
  const flow = useBiteFlow(mode, (correct) => completeBite(bite.id, correct));

  const cards = getBiteCards(bite);
  const question = getBiteQuestion(bite);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link className={styles.backLink} href="/learn">
          <span aria-hidden="true">&larr;</span> Exit
        </Link>
        <p className={styles.meta}>{mode === "refresh" ? "Refresher" : bite.title}</p>
      </div>

      {flow.step !== "done" && <StepIndicator steps={flow.visibleSteps} current={flow.step} />}

      {flow.step === "learn" && <LessonStep bite={bite} onContinue={flow.continueFromLesson} />}

      {flow.step === "recall" && (
        <RecallStep
          cards={cards}
          continueLabel={mode === "full" ? "Continue to the check" : "Finish refresher"}
          onDone={flow.finishRecall}
        />
      )}

      {flow.step === "check" &&
        (question ? (
          <CheckStep question={question} onFinish={flow.finishCheck} />
        ) : (
          <p>This bite&apos;s question is missing.</p>
        ))}

      {flow.step === "done" && today !== null && (
        <BiteComplete
          correct={flow.correct}
          streak={getStreak(progress, today)}
          todayCount={getTodayCount(progress, today)}
          goal={DAILY_GOAL}
          next={getUpNext(learningPaths, progress, today)[0]}
        />
      )}
    </div>
  );
}
