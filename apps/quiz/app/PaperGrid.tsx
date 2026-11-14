"use client";

import Link from "next/link";
import { useState } from "react";
import { label, SUBJECT_ICONS, SYLLABUS, topicTitle } from "../data/series";
import { PASS_PERCENT, starsFor, useProgress, useToday } from "./game";
import { planPapers, recommend, type PaperSummary, type Planned, type Step } from "./recommend";

export type { PaperSummary };

const STEP_LABEL: Record<Step, string> = {
  retry: "Try again",
  "level-up": "Level up!",
  revise: "Revise",
  start: "New",
  later: "Later",
  cleared: "Cleared",
  mastered: "Mastered",
};

const STEP_ACTION: Record<Step, string> = {
  retry: "Try again",
  "level-up": "Play next level",
  revise: "Revise now",
  start: "Start mission",
  later: "Start anyway",
  cleared: "Go for 3 stars",
  mastered: "Play again",
};

const quizLink = (id: string) => `/quiz?paper=${encodeURIComponent(id)}`;

function Stars({ percent }: { percent: number | undefined }) {
  const stars = percent === undefined ? 0 : starsFor(percent);
  return (
    <span className="mini-stars" aria-label={`${stars} of 3 stars`}>
      {[1, 2, 3].map((star) => (
        <i key={star} className={star <= stars ? "on" : ""} aria-hidden="true">★</i>
      ))}
    </span>
  );
}

export default function PaperGrid({ papers }: { papers: PaperSummary[] }) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");
  const progress = useProgress();
  const today = useToday();

  // Every paper with its next step, best first. `today` is "" on the server, where no progress exists anyway.
  const planned = planPapers(papers, progress, today ? Date.now() : 0);
  const picks = recommend(planned);

  const subjects = [...new Set(papers.map((paper) => paper.subject))].sort();
  const levels = [...new Set(papers.flatMap((paper) => (paper.level ? [paper.level] : [])))].sort((a, b) => a - b);
  const shown = planned.filter(({ paper }) => {
    const searchable = [paper.name, ...paper.tags, ...paper.subtags].join(" ").toLowerCase();
    return (
      (!subject || paper.subject === subject) &&
      (!level || paper.level === Number(level)) &&
      searchable.includes(search.trim().toLowerCase())
    );
  });
  const clearFilters = () => {
    setSubject("");
    setLevel("");
    setSearch("");
  };

  return (
    <>
      <section className="library" aria-labelledby="recommended-title">
        <div className="library-heading">
          <div>
            <p className="eyebrow">PICKED FOR YOU</p>
            <h2 id="recommended-title">Your next missions</h2>
          </div>
        </div>
        <div className="mission-row">
          {picks.map((item, i) => (
            <Link key={item.paper.id} href={quizLink(item.paper.id)} className={`mission-card step-${item.step}`}>
              <span className="mission-top">
                <span className="mission-badge">{i === 0 ? "▶ UP NEXT" : STEP_LABEL[item.step].toUpperCase()}</span>
                {item.paper.level && <span className="level-chip">Level {item.paper.level}</span>}
              </span>
              <span className="mission-name">
                <span aria-hidden="true">{SUBJECT_ICONS[item.paper.subject] ?? "📘"} </span>
                {item.paper.name}
              </span>
              <span className="mission-reason">{item.reason}</span>
              <span className="mission-go">{STEP_ACTION[item.step]} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
          {picks.length === 0 && (
            <p className="muted">You have mastered everything here. Replay any paper to keep it fresh!</p>
          )}
        </div>
      </section>

      <TopicMap planned={planned} />

      <section id="papers" className="library papers-anchor" aria-labelledby="library-title">
        <div className="library-heading">
          <div>
            <p className="eyebrow">ALL MISSIONS</p>
            <h2 id="library-title">Question papers</h2>
          </div>
          <p className="muted library-note">Sorted for you: retries and new levels first, mastered papers last.</p>
        </div>

        <div className="subject-chips" role="group" aria-label="Filter by subject">
          <button className={subject ? "chip" : "chip active"} onClick={() => setSubject("")}>All</button>
          {subjects.map((option) => (
            <button
              key={option}
              className={subject === option ? "chip active" : "chip"}
              aria-pressed={subject === option}
              onClick={() => setSubject(subject === option ? "" : option)}
            >
              <span aria-hidden="true">{SUBJECT_ICONS[option] ?? "📘"}</span> {label(option)}
            </button>
          ))}
        </div>

        <div className="library-tools">
          <div className="filter-controls" role="group" aria-label="Filter papers">
            <label className="select-field">
              <span>Level</span>
              <select value={level} onChange={(event) => setLevel(event.target.value)}>
                <option value="">All levels</option>
                {levels.map((option) => <option key={option} value={option}>Level {option}</option>)}
              </select>
            </label>
            <label className="search-field">
              <span className="sr-only">Search papers and topics</span>
              <span aria-hidden="true" className="search-icon">⌕</span>
              <input
                type="search"
                placeholder="Search papers or topics"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            {(subject || level || search) && (
              <button className="link-button clear-filters" onClick={clearFilters}>Clear filters</button>
            )}
          </div>
        </div>

        <div className="paper-results">
          <div className="results-heading">
            <p className="muted">
              <strong>{shown.length}</strong> {shown.length === 1 ? "paper" : "papers"} available
            </p>
            <span className="results-total">of {papers.length}</span>
          </div>

          {shown.length > 0 ? (
            <div className="paper-grid">
              {shown.map((item) => <PaperCard key={item.paper.id} item={item} />)}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state-icon" aria-hidden="true">?</span>
              <h3>No papers found</h3>
              <p>Try another search or clear your filters to see all available papers.</p>
              <button className="button secondary" onClick={clearFilters}>Show all papers</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function PaperCard({ item }: { item: Planned }) {
  const { paper, record, step } = item;
  return (
    <Link href={quizLink(paper.id)} className={`card paper step-${step}`}>
      <span className="paper-card-top">
        <span className="paper-icon" aria-hidden="true">{SUBJECT_ICONS[paper.subject] ?? "📘"}</span>
        <span className={`status-pill step-${step}`}>{STEP_LABEL[step]}</span>
      </span>
      <span>
        <span className="paper-name">{paper.name}</span>
        <span className="tags">
          <span className="tag main">{label(paper.subject)}</span>
          {paper.level && <span className="tag">Level {paper.level}</span>}
          <span className="tag">{paper.count} questions</span>
        </span>
      </span>
      <span className="paper-footer">
        {record ? (
          <span className="paper-best">
            <Stars percent={record.best} /> Best {record.best}%
          </span>
        ) : (
          <span className="paper-best muted">{step === "later" ? item.reason : "Not played yet"}</span>
        )}
        <span className="paper-start">{STEP_ACTION[step]} <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}

/** Topics with levels, drawn as a path of level nodes: clear one to open the next. */
function TopicMap({ planned }: { planned: Planned[] }) {
  const bySeries = new Map<string, Planned[]>();
  for (const item of planned) {
    if (!item.paper.series) continue;
    bySeries.set(item.paper.series, [...(bySeries.get(item.paper.series) ?? []), item]);
  }
  const subjects = [...new Set([...bySeries.values()].map((items) => items[0]!.paper.subject))].sort();
  const [picked, setPicked] = useState("");
  const subject = subjects.includes(picked) ? picked : subjects[0];
  if (!subject) return null;

  const order = SYLLABUS[subject] ?? [];
  const position = (series: string) => {
    const index = order.findIndex((topic) => topic.series === series);
    return index === -1 ? order.length : index;
  };
  const topics = [...bySeries.entries()]
    .filter(([, items]) => items[0]!.paper.subject === subject)
    .sort(([a], [b]) => position(a) - position(b) || a.localeCompare(b))
    .map(([series, items]) => ({
      series,
      icon: order.find((topic) => topic.series === series)?.icon ?? SUBJECT_ICONS[subject] ?? "📘",
      title: topicTitle(items[0]!.paper.name),
      levels: items.sort((a, b) => (a.paper.level ?? 0) - (b.paper.level ?? 0)),
    }));
  const allLevels = topics.flatMap((topic) => topic.levels);
  const clearedLevels = allLevels.filter((item) => (item.record?.best ?? 0) >= PASS_PERCENT).length;

  return (
    <section className="library" aria-labelledby="map-title">
      <div className="library-heading">
        <div>
          <p className="eyebrow">TOPIC MAP</p>
          <h2 id="map-title">{label(subject)} journey</h2>
        </div>
        <div className="map-progress">
          <span><strong>{clearedLevels}</strong> of {allLevels.length} levels cleared</span>
          <span className="progress-track"><span style={{ width: `${(clearedLevels / allLevels.length) * 100}%` }} /></span>
        </div>
      </div>

      {subjects.length > 1 && (
        <div className="subject-chips" role="group" aria-label="Choose a subject for the topic map">
          {subjects.map((option) => (
            <button
              key={option}
              className={option === subject ? "chip active" : "chip"}
              aria-pressed={option === subject}
              onClick={() => setPicked(option)}
            >
              <span aria-hidden="true">{SUBJECT_ICONS[option] ?? "📘"}</span> {label(option)}
            </button>
          ))}
        </div>
      )}

      <ol className="topic-map">
        {topics.map((topic, i) => {
          const done = topic.levels.filter((item) => (item.record?.best ?? 0) >= PASS_PERCENT).length;
          return (
            <li key={topic.series} className={done === topic.levels.length ? "topic complete" : "topic"}>
              <span className="topic-icon" aria-hidden="true">{topic.icon}</span>
              <div className="topic-copy">
                <span className="topic-number">TOPIC {i + 1}</span>
                <strong>{topic.title}</strong>
                <span className="muted">{done}/{topic.levels.length} levels cleared</span>
              </div>
              <div className="level-path">
                {topic.levels.map((item) => (
                  <Link
                    key={item.paper.id}
                    href={quizLink(item.paper.id)}
                    className={`level-node step-${item.step}`}
                    title={`${item.paper.name}. ${item.reason}`}
                    aria-label={`Level ${item.paper.level}: ${STEP_LABEL[item.step]}. ${item.reason}`}
                  >
                    <span className="level-dot">
                      {item.step === "later" ? "🔒" : item.step === "mastered" || item.step === "revise" ? "★" : item.paper.level}
                    </span>
                    <Stars percent={item.record?.best} />
                    <small>{item.step === "retry" || item.step === "level-up" ? STEP_LABEL[item.step] : `Level ${item.paper.level}`}</small>
                  </Link>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
