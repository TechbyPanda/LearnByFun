"use client";

import { useState } from "react";
import { SegmentedControl } from "../../components/SegmentedControl";
import type { StageView } from "../lib/coverage";
import { ModuleCard } from "./ModuleCard";
import styles from "./StageExplorer.module.css";

/** The syllabus, one stage at a time (e.g. Prelims, Mains, Optional). */
export function StageExplorer({ stages }: { stages: StageView[] }) {
  const [stageId, setStageId] = useState(stages[0]?.id);
  const stage = stages.find((s) => s.id === stageId) ?? stages[0];
  if (!stage) return null;

  return (
    <section className={styles.explorer} aria-labelledby="syllabus-heading">
      <div className={styles.toolbar}>
        <h2 id="syllabus-heading" className={styles.heading}>
          Syllabus
        </h2>
        <SegmentedControl
          options={stages.map((s) => ({ value: s.id, label: s.title }))}
          value={stage.id}
          onChange={setStageId}
          label="Syllabus stage"
          size="md"
        />
      </div>
      <p className={styles.description}>
        {stage.description}{" "}
        <span className={styles.stageCoverage}>
          {stage.coveredUnits} of {stage.totalUnits} units have practice content.
        </span>
      </p>
      <div className={styles.modules}>
        {stage.modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </section>
  );
}
