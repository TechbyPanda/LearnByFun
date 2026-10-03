"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SegmentedControl, type SegmentedOption } from "../components/SegmentedControl";
import { CustomBuilder } from "./components/CustomBuilder";
import { SessionList } from "./components/SessionList";
import { buildSessionQuery, buildStudyQuery } from "./lib/deck";
import { TOTAL_CARDS } from "./lib/subjects";
import styles from "./page.module.css";

type Mode = "ready" | "custom";

const MODE_OPTIONS: SegmentedOption<Mode>[] = [
  { value: "ready", label: "Ready-made sessions" },
  { value: "custom", label: "Build your own" },
];

export default function FlashcardPicker() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("ready");

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>FLASHCARD REVIEW</p>
          <h1 className={styles.title}>What do you want to practise today?</h1>
          <p className={styles.subtitle}>
            Jump into a ready-made session, or build your own. {TOTAL_CARDS} cards are ready
            for you.
          </p>
        </header>

        <div className={styles.modeSwitch}>
          <SegmentedControl
            label="Session type"
            size="md"
            options={MODE_OPTIONS}
            value={mode}
            onChange={setMode}
          />
        </div>

        {mode === "ready" ? (
          <SessionList
            onStart={(session) =>
              router.push(`/flashcard/study?${buildSessionQuery(session)}`)
            }
          />
        ) : (
          <CustomBuilder
            onStart={(topics, options) =>
              router.push(`/flashcard/study?${buildStudyQuery(topics, options)}`)
            }
          />
        )}
      </div>
    </main>
  );
}
