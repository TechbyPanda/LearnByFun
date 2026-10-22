import { ProgressBar } from "../../components/ProgressBar";
import { Tag } from "../../components/Tag";
import type { ModuleView } from "../lib/coverage";
import styles from "./ModuleCard.module.css";
import { UnitRow } from "./UnitRow";

/** One paper (or course module): its facts, how much of it has content, and its units. */
export function ModuleCard({ module }: { module: ModuleView }) {
  const headingId = `module-${module.id}`;

  return (
    <section className={styles.card} aria-labelledby={headingId}>
      <header className={styles.header}>
        <h3 id={headingId} className={styles.title}>
          {module.title}
        </h3>
        {module.facts.length > 0 && (
          <div className={styles.facts}>
            {module.facts.map((fact) => (
              <Tag key={fact} tone="neutral">
                {fact}
              </Tag>
            ))}
          </div>
        )}
        {module.description && <p className={styles.description}>{module.description}</p>}
        <div className={styles.coverage}>
          <span className={styles.coverageText}>
            {module.coveredUnits} of {module.units.length} units have practice content
          </span>
          <ProgressBar
            value={module.coveredUnits}
            max={module.units.length}
            label={`${module.title}: units with practice content`}
          />
        </div>
      </header>
      <ul className={styles.units}>
        {module.units.map((unit) => (
          <UnitRow key={unit.title} unit={unit} />
        ))}
      </ul>
    </section>
  );
}
