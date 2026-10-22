"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OptionGroup } from "../components/BuilderBar";
import { Page } from "../components/Page";
import { PageIntro } from "../components/PageIntro";
import { SegmentedControl, type SegmentedOption } from "../components/SegmentedControl";
import { SetList } from "./components/SetList";
import { matchSets } from "./data";
import { useBestTimes } from "./hooks/useBestTimes";
import styles from "./page.module.css";

type Mode = "timed" | "relaxed";

const MODE_OPTIONS: SegmentedOption<Mode>[] = [
  { value: "timed", label: "Timed" },
  { value: "relaxed", label: "Relaxed" },
];

export default function MatchPage() {
  const router = useRouter();
  const { bests } = useBestTimes();
  const [mode, setMode] = useState<Mode>("timed");

  return (
    <Page>
      <PageIntro eyebrow="Quick match" title="Which belongs to which?">
        Pair each item with its partner, as fast as you can. Wrong matches cost 3 seconds, so
        think before you tap.
      </PageIntro>

      <div className={styles.mode}>
        <OptionGroup label="Mode">
          <SegmentedControl label="Mode" options={MODE_OPTIONS} value={mode} onChange={setMode} />
          <span className={styles.modeNote}>
            {mode === "timed"
              ? "Race the clock and chase your best time."
              : "No clock and no penalties. Best while you're still learning the pairs."}
          </span>
        </OptionGroup>
      </div>

      <SetList
        sets={matchSets}
        bests={bests}
        onStart={(set) => router.push(`/match/play?set=${set.id}&mode=${mode}`)}
      />
    </Page>
  );
}
