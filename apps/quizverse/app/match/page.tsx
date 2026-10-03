"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>QUICK MATCH</p>
          <h1 className={styles.title}>Which belongs to which?</h1>
          <p className={styles.subtitle}>
            Pair each item with its partner, as fast as you can. Wrong matches cost 3 seconds, so
            think before you tap.
          </p>
        </header>

        <div className={styles.mode}>
          <span className={styles.modeLabel}>Mode</span>
          <SegmentedControl
            label="Mode"
            options={MODE_OPTIONS}
            value={mode}
            onChange={setMode}
          />
          <span className={styles.modeNote}>
            {mode === "timed"
              ? "Race the clock and chase your best time."
              : "No clock and no penalties. Best while you're still learning the pairs."}
          </span>
        </div>

        <SetList
          sets={matchSets}
          bests={bests}
          onStart={(set) => router.push(`/match/play?set=${set.id}&mode=${mode}`)}
        />
      </div>
    </main>
  );
}
