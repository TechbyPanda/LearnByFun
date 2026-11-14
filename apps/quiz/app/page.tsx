import { getPapers } from "../data/papers";
import { paperMeta } from "../data/series";
import PaperGrid from "./PaperGrid";
import PlayerCard from "./PlayerCard";
import SettingsButton from "./SettingsButton";
import XpBadge from "./XpBadge";
import { Brand, SITE_NAME } from "./brand";

// Re-read data/papers on every visit so new papers show up without a rebuild.
export const dynamic = "force-dynamic";

const FEATURES = [
  {
    icon: "⏱",
    title: "Timed recall",
    text: "Set a timer per question in Settings and drill facts until they stick.",
  },
  {
    icon: "🔍",
    title: "Spot the trap",
    text: "UPSC-style statements where one small word changes the answer.",
  },
  {
    icon: "💡",
    title: "Learn from every answer",
    text: "Each question explains why the answer is right and the others are wrong.",
  },
];

export default function Dashboard() {
  // Send only what the grid needs, not every question.
  const papers = getPapers().map(({ id, name, tags, subtags, questions }) => ({
    id,
    name,
    tags,
    subtags,
    count: questions.length,
    ...paperMeta(id, tags),
  }));
  const questionCount = papers.reduce((total, paper) => total + paper.count, 0);

  return (
    <div className="dashboard">
      <header className="site-header">
        <Brand />
        <div className="header-actions">
          <a href="#papers" className="header-link">Papers</a>
          <XpBadge />
          <SettingsButton />
        </div>
      </header>

      <section className="dashboard-hero">
        <div className="hero-siren" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> UPSC PRELIMS PRACTICE</p>
          <h1>Spot the trap <span className="hero-accent">before the exam does.</span></h1>
          <p className="hero-description">
            Clear missions, earn XP, climb from Cadet to DGP. Every answer comes with an explanation.
          </p>
          <div className="hero-actions">
            <a href="#papers" className="button">Start practising <span aria-hidden="true">→</span></a>
            <span className="hero-note">{papers.length} papers · {questionCount} questions · Free</span>
          </div>
        </div>
        <PlayerCard />
      </section>


      <PaperGrid papers={papers} />

      <ul className="feature-strip" aria-label="Why practise here">
        {FEATURES.map((feature) => (
          <li key={feature.title}>
            <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
            <div>
              <strong>{feature.title}</strong>
              <p>{feature.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
        <span>Small steps, strong preparation.</span>
      </footer>
    </div>
  );
}
