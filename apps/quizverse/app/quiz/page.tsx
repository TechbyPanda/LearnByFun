"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Page } from "../components/Page";
import { PageIntro } from "../components/PageIntro";
import { buildCustomUrl, buildPaperUrl } from "../mcq/lib/quizUrl";
import type { TestPaper } from "../mcq/testPapers";
import { CustomBuilder } from "./components/CustomBuilder";
import { PaperGrid } from "./components/PaperGrid";
import { PaperLaunchPanel } from "./components/PaperLaunchPanel";

export default function QuizDashboard() {
  const router = useRouter();
  const [isBuilding, setIsBuilding] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<TestPaper | null>(null);

  return (
    <Page>
      {isBuilding ? (
        <CustomBuilder
          onBack={() => setIsBuilding(false)}
          onStart={(config) => router.push(buildCustomUrl(config))}
        />
      ) : (
        <>
          <PageIntro eyebrow="Mock tests" title="UPSC CSE Practice">
            Pick a mock test, tweak it if you like, or build your own.
          </PageIntro>
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
    </Page>
  );
}
