import { useState } from "react";
import { ChipGroup, ToggleChip } from "../../components/ToggleChip";
import type { MCQQuestion } from "../data";
import { buildReviewRows, filterReviewRows, type ReviewFilter } from "../lib/review";
import { ReviewItem } from "./ReviewItem";
import { ScoreSummary } from "./ScoreSummary";
import styles from "./ReviewScreen.module.css";

interface ReviewScreenProps {
  questions: MCQQuestion[];
  answers: (string | null)[];
  flagged: boolean[];
  score: number;
  elapsedSeconds: number;
  onRestart: () => void;
  onRetryIncorrect: () => void;
}

export function ReviewScreen({
  questions,
  answers,
  flagged,
  score,
  elapsedSeconds,
  onRestart,
  onRetryIncorrect,
}: ReviewScreenProps) {
  const [filter, setFilter] = useState<ReviewFilter>("all");

  const rows = buildReviewRows(questions, answers, flagged);
  const incorrect = filterReviewRows(rows, "incorrect").length;
  const skipped = filterReviewRows(rows, "unattempted").length;
  const visible = filterReviewRows(rows, filter);

  const filters: { key: ReviewFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "incorrect", label: `Incorrect (${incorrect})` },
    { key: "flagged", label: `Marked (${filterReviewRows(rows, "flagged").length})` },
    { key: "unattempted", label: `Skipped (${skipped})` },
  ];

  return (
    <>
      <ScoreSummary
        score={score}
        total={questions.length}
        incorrect={incorrect}
        skipped={skipped}
        elapsedSeconds={elapsedSeconds}
        onRestart={onRestart}
        onRetryIncorrect={onRetryIncorrect}
      />

      <div className={styles.filters}>
        <ChipGroup label="Filter questions">
          {filters.map(({ key, label }) => (
            <ToggleChip key={key} pressed={filter === key} onClick={() => setFilter(key)}>
              {label}
            </ToggleChip>
          ))}
        </ChipGroup>
      </div>

      <div className={styles.list}>
        {visible.length === 0 && <p className={styles.empty}>Nothing to show here.</p>}
        {visible.map((row) => (
          <ReviewItem key={row.question.id} row={row} />
        ))}
      </div>
    </>
  );
}
