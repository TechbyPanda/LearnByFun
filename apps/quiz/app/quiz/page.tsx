import { notFound } from "next/navigation";
import { getPaper, getPapers } from "../../data/papers";
import { paperMeta } from "../../data/series";
import Quiz from "./Quiz";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ paper?: string }>;
}) {
  const { paper: paperId } = await searchParams;
  const paper = paperId ? getPaper(paperId) : undefined;
  return { title: paper?.name ?? "Practice" };
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ paper?: string }>;
}) {
  const { paper: paperId } = await searchParams;
  const paper = paperId ? getPaper(paperId) : undefined;
  if (!paper) notFound();

  // The next level of the same topic, offered on the results screen once this one is cleared.
  const { level, series } = paperMeta(paper.id, paper.tags);
  const next = series
    ? getPapers()
        .map((other) => ({ id: other.id, ...paperMeta(other.id, other.tags) }))
        .filter((other) => other.series === series && (other.level ?? 0) > (level ?? 0))
        .sort((a, b) => (a.level ?? 0) - (b.level ?? 0))[0]
    : undefined;

  return (
    <Quiz
      key={paper.id}
      paperId={paper.id}
      title={paper.name}
      questions={paper.questions}
      level={level}
      next={next ? { id: next.id, level: next.level! } : null}
    />
  );
}
