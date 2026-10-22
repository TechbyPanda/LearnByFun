import { useState } from "react";
import { SelectCard, SelectCardGrid } from "../../components/SelectCard";
import { ChipGroup, ToggleChip } from "../../components/ToggleChip";
import { getPaperCapacity, getResolvedQuestionCount } from "../../mcq/lib/buildQuestionPool";
import { testPapers, type TestPaper, type TestPaperCategory } from "../../mcq/testPapers";
import styles from "./PaperGrid.module.css";

type CategoryFilter = TestPaperCategory | "All";

// Tabs are derived from the papers, so a new category appears automatically.
const CATEGORIES: CategoryFilter[] = ["All", ...new Set(testPapers.map((p) => p.category))];

interface PaperGridProps {
  onSelectPaper: (paper: TestPaper) => void;
  onCreateOwn: () => void;
}

export function PaperGrid({ onSelectPaper, onCreateOwn }: PaperGridProps) {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const visible = testPapers.filter((p) => category === "All" || p.category === category);

  return (
    <>
      <div className={styles.filters}>
        <ChipGroup label="Test category">
          {CATEGORIES.map((c) => (
            <ToggleChip key={c} pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </ToggleChip>
          ))}
        </ChipGroup>
      </div>

      <SelectCardGrid>
        {visible.map((paper) => {
          const questions = getResolvedQuestionCount(paper.sections);
          const customizable = getPaperCapacity(paper.sections) > questions;
          return (
            <SelectCard
              key={paper.id}
              tags={[...new Set(paper.sections.map((s) => s.subject))]}
              title={paper.title}
              description={paper.description}
              meta={`${questions} questions${customizable ? " · customizable" : ""}`}
              actionLabel="Start"
              onClick={() => onSelectPaper(paper)}
            />
          );
        })}

        <SelectCard
          tags={["Custom"]}
          title="Build Your Own Test"
          description="Pick subjects and topics, then choose how many questions."
          actionLabel="Build"
          dashed
          onClick={onCreateOwn}
        />
      </SelectCardGrid>
    </>
  );
}
