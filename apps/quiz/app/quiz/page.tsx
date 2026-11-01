import { notFound } from "next/navigation";
import { getPaper } from "../../data/papers";
import Quiz from "./Quiz";

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ paper?: string }>;
}) {
  const { paper: paperId } = await searchParams;
  const paper = paperId ? getPaper(paperId) : undefined;
  if (!paper) notFound();

  return <Quiz title={paper.name} questions={paper.questions} />;
}
