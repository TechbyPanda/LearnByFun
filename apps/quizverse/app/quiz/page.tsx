"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { TestPaper } from "../mcq/testPapers";
import { buildCustomUrl, buildPaperUrl } from "../mcq/lib/quizUrl";
import { CustomBuilder } from "./components/CustomBuilder";
import { PaperGrid } from "./components/PaperGrid";
import { PaperLaunchPanel } from "./components/PaperLaunchPanel";
import styles from "./quiz.module.css";

export default function QuizDashboard() {
  const router = useRouter();
  const [isBuilding, setIsBuilding] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<TestPaper | null>(null);

  return (
    <div className={styles.page}>
      {isBuilding ? (
        <CustomBuilder
          onBack={() => setIsBuilding(false)}
          onStart={(config) => router.push(buildCustomUrl(config))}
        />
      ) : (
        <>
          <h1 className={styles.title}>UPSC CSE Practice</h1>
          <p className={styles.subtitle}>
            Pick a mock test, tweak it if you like, or build your own.
          </p>
          <PaperGrid onSelectPaper={setSelectedPaper} onCreateOwn={() => setIsBuilding(true)} />
        </>
      )}

      {selectedPaper && (
        <PaperLaunchPanel
          paper={selectedPaper}
          onClose={() => setSelectedPaper(null)}
          onStart={(overrides) => router.push(buildPaperUrl(selectedPaper.id, overrides))}
        />
      )}
    </div>
  );
}
