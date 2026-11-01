import { getPapers } from "../data/papers";
import PaperGrid from "./PaperGrid";
import Link from "next/link";

// Re-read data/papers on every visit so new papers show up without a rebuild.
export const dynamic = "force-dynamic";

export default function Dashboard() {
  // Send only what the grid needs, not every question.
  const papers = getPapers().map(({ id, name, tags, subtags, questions }) => ({
    id,
    name,
    tags,
    subtags,
    count: questions.length,
  }));
  const questionCount = papers.reduce((total, paper) => total + paper.count, 0);

  return (
    <div className="dashboard">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Learn by Fun home">
          <span className="brand-mark">LF</span>
          <span className="brand-copy">Learn by Fun<span>UPSC practice</span></span>
        </Link>
        <span className="header-note">Focused practice. Better recall.</span>
      </header>

      <section className="dashboard-hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR UPSC PRACTICE SPACE</p>
          <h1>Make every question count.</h1>
          <p className="hero-description">
            Pick a topic, test what you know, and learn from every answer.
          </p>
        </div>
        <div className="hero-stat" aria-label={`${papers.length} papers and ${questionCount} questions`}>
          <span className="hero-stat-value">{papers.length}</span>
          <span className="hero-stat-label">practice papers</span>
          <span className="hero-stat-divider" />
          <span className="hero-stat-value">{questionCount}</span>
          <span className="hero-stat-label">questions to explore</span>
        </div>
      </section>

      <PaperGrid papers={papers} />
      <footer className="page-footer">Small steps, strong preparation.</footer>
    </div>
  );
}
