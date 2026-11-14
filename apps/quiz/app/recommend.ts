import { SYLLABUS } from "../data/series";
import { MASTER_PERCENT, PASS_PERCENT, REVISE_AFTER_DAYS, type PaperRecord, type Progress } from "./game";

export interface PaperSummary {
  id: string;
  name: string;
  tags: string[];
  subtags: string[];
  count: number;
  subject: string;
  /** Difficulty level, if the paper has one. */
  level: number | null;
  /** Topic the paper belongs to when it is one level of several. */
  series: string | null;
}

/**
 * What to do with a paper next:
 * retry    – played, best score below PASS_PERCENT: play it again
 * level-up – not played, and the level below it is cleared
 * revise   – mastered more than REVISE_AFTER_DAYS ago
 * start    – not played, nothing needed first
 * later    – not played, the level below it is not cleared yet
 * cleared  – cleared (2 stars), can still go for 3
 * mastered – 3 stars, recently played
 */
export type Step = "retry" | "level-up" | "revise" | "start" | "later" | "cleared" | "mastered";

export interface Planned {
  paper: PaperSummary;
  record?: PaperRecord;
  step: Step;
  /** One line for the student explaining the step. */
  reason: string;
  /** Higher = show earlier. */
  priority: number;
}

const BASE: Record<Step, number> = {
  retry: 600,
  "level-up": 500,
  revise: 400,
  start: 300,
  later: 200,
  cleared: 100,
  mastered: 0,
};

const DAY_MS = 24 * 60 * 60 * 1000;

/** Position of a topic in the syllabus (unlisted topics come after listed ones). */
function syllabusIndex(paper: PaperSummary) {
  const index = (SYLLABUS[paper.subject] ?? []).findIndex((topic) => topic.series === paper.series);
  return index === -1 ? 50 : index;
}

/** Decides the next step for every paper and sorts them: most useful first, mastered last. */
export function planPapers(papers: PaperSummary[], progress: Progress, now: number): Planned[] {
  const playedSubjects = new Set(
    papers.filter((paper) => progress.papers[paper.id]).map((paper) => paper.subject),
  );

  const planned = papers.map((paper): Planned => {
    const record = progress.papers[paper.id];
    const levelName = paper.level ? `Level ${paper.level}` : "this paper";
    let step: Step;
    let reason: string;

    if (record) {
      const daysAgo = Math.floor((now - record.at) / DAY_MS);
      if (record.best < PASS_PERCENT) {
        step = "retry";
        reason = `You scored ${record.last}%. Try ${levelName} again: ${PASS_PERCENT}% clears it.`;
      } else if (record.best < MASTER_PERCENT) {
        step = "cleared";
        reason = `Cleared with ${record.best}%. Score ${MASTER_PERCENT}% for 3 stars.`;
      } else if (now > 0 && daysAgo >= REVISE_AFTER_DAYS) {
        step = "revise";
        reason = `Mastered ${daysAgo} days ago. A quick revision keeps it fresh.`;
      } else {
        step = "mastered";
        reason = `Mastered with ${record.best}%.`;
      }
    } else {
      // The level just below this one in the same topic, if there is one.
      const below = papers
        .filter((other) => other.series && other.series === paper.series && (other.level ?? 0) < (paper.level ?? 0))
        .sort((a, b) => (b.level ?? 0) - (a.level ?? 0))[0];
      const belowBest = below ? progress.papers[below.id]?.best : undefined;
      if (!below) {
        step = "start";
        reason = playedSubjects.has(paper.subject) ? "New topic in a subject you are practising." : "New for you.";
      } else if (belowBest !== undefined && belowBest >= PASS_PERCENT) {
        step = "level-up";
        reason = `You cleared Level ${below.level} with ${belowBest}%. ${levelName} is ready!`;
      } else {
        step = "later";
        reason = `Clear Level ${below.level} first.`;
      }
    }

    const priority =
      BASE[step] +
      (step === "retry" && record ? Math.min(40, record.at / 1e12) : 0) + // most recent retry first
      (step === "start" && playedSubjects.has(paper.subject) ? 45 : 0) +
      (step === "start" || step === "later" ? 40 - Math.min(40, syllabusIndex(paper) * 0.5 + (paper.level ?? 5) * 3) : 0);
    return { paper, record, step, reason, priority };
  });

  return planned.sort((a, b) => b.priority - a.priority || a.paper.name.localeCompare(b.paper.name));
}

/** Top picks for the "Recommended" row: at most `max`, with new starts spread over subjects where possible. */
export function recommend(planned: Planned[], max = 3): Planned[] {
  const useful = planned.filter((item) => ["retry", "level-up", "revise", "start"].includes(item.step));
  const startSubjects = new Set<string>();
  const picks = useful.filter((item) => {
    if (item.step !== "start") return true;
    if (startSubjects.has(item.paper.subject)) return false; // one new start per subject first
    startSubjects.add(item.paper.subject);
    return true;
  });
  const rest = useful.filter((item) => !picks.includes(item));
  return [...picks, ...rest].slice(0, max);
}
