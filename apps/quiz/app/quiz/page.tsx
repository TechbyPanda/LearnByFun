import { notFound } from "next/navigation";
import { getPaper } from "../../data/papers";
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

  return <Quiz paperId={paper.id} title={paper.name} questions={paper.questions} />;
}
