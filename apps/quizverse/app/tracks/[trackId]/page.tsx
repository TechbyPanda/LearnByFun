import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionRow } from "../../components/ActionRow";
import { ButtonLink } from "../../components/Button";
import { Page } from "../../components/Page";
import { PageIntro } from "../../components/PageIntro";
import { PRACTICE_MODES } from "../../lib/practiceModes";
import { TrackOverview } from "../components/TrackOverview";
import { StageExplorer } from "../components/StageExplorer";
import { getTrack, tracks } from "../data";
import { buildStageViews, countContent, getTrackCoverage } from "../lib/coverage";
import { contentLibrary } from "../lib/library";
import styles from "./page.module.css";

interface TrackPageProps {
  params: Promise<{ trackId: string }>;
}

export function generateStaticParams() {
  return tracks.map((track) => ({ trackId: track.id }));
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const track = getTrack((await params).trackId);
  return { title: track ? `${track.title} · Quizverse` : "Quizverse" };
}

/** A track's dashboard: its full syllabus, and how much of it the app's content reaches. */
export default async function TrackPage({ params }: TrackPageProps) {
  const track = getTrack((await params).trackId);
  if (!track) notFound();

  const stages = buildStageViews(track, contentLibrary);

  return (
    <Page width="wide">
      <PageIntro eyebrow={track.subtitle} title={track.title}>
        {track.description}
      </PageIntro>

      <div className={styles.sections}>
        <TrackOverview
          counts={countContent(contentLibrary, getTrackCoverage(track))}
          coveredUnits={stages.reduce((n, stage) => n + stage.coveredUnits, 0)}
          totalUnits={stages.reduce((n, stage) => n + stage.totalUnits, 0)}
        />

        <section aria-labelledby="practise-heading">
          <h2 id="practise-heading" className={styles.sectionTitle}>
            Practise
          </h2>
          <ActionRow>
            {PRACTICE_MODES.map((mode) => (
              <ButtonLink key={mode.href} href={mode.href} variant="secondary">
                {mode.title}
              </ButtonLink>
            ))}
          </ActionRow>
        </section>

        <StageExplorer stages={stages} />
      </div>
    </Page>
  );
}
