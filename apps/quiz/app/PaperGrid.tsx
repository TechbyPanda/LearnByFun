"use client";

import Link from "next/link";
import { useState } from "react";

export interface PaperSummary {
  id: string;
  name: string;
  tags: string[];
  subtags: string[];
  count: number;
}

const uniqueSorted = (lists: string[][]) => [...new Set(lists.flat())].sort();

export default function PaperGrid({ papers }: { papers: PaperSummary[] }) {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [search, setSearch] = useState("");

  const tagMatches = papers.filter((paper) => !subject || paper.tags.includes(subject));
  const shown = tagMatches.filter((paper) => {
    const matchesTopic = !topic || paper.subtags.includes(topic);
    const searchable = [paper.name, ...paper.tags, ...paper.subtags].join(" ").toLowerCase();
    return matchesTopic && searchable.includes(search.trim().toLowerCase());
  });
  const availableSubtags = uniqueSorted(tagMatches.map((p) => p.subtags));
  const subjects = uniqueSorted(papers.map((paper) => paper.tags));

  return (
    <section className="library" aria-labelledby="library-title">
      <div className="library-heading">
        <div>
          <p className="eyebrow">CHOOSE YOUR NEXT PRACTICE</p>
          <h2 id="library-title">Question papers</h2>
        </div>
      </div>

      <div className="library-tools">
        <div className="filter-controls" role="group" aria-label="Filter papers">
          <label className="select-field">
            <span>Subject</span>
            <select
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
                setTopic("");
              }}
            >
              <option value="">All subjects</option>
              {subjects.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="select-field">
            <span>Topic</span>
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              disabled={!subject || availableSubtags.length === 0}
            >
              <option value="">All topics</option>
              {availableSubtags.map((option) => <option key={option} value={option}>{option}</option>)}
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
          {(subject || topic || search) && (
            <button
              className="link-button clear-filters"
              onClick={() => {
                setSubject("");
                setTopic("");
                setSearch("");
              }}
            >
              Clear filters
            </button>
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
              {shown.map((paper) => {
                const allTags = [...paper.tags, ...paper.subtags];
                const visibleTags = allTags.slice(0, 2);
                const hiddenTagCount = allTags.length - visibleTags.length;

                return (
                  <Link
                    key={paper.id}
                    href={`/quiz?paper=${encodeURIComponent(paper.id)}`}
                    className="card paper"
                  >
                    <span className="paper-card-top">
                      <span className="paper-icon" aria-hidden="true">Q</span>
                      <span className="paper-count">{paper.count} questions</span>
                    </span>
                    <span>
                      <span className="paper-name">{paper.name}</span>
                      <span className="tags">
                        {visibleTags.map((tag, index) => (
                          <span key={tag} className={index === 0 ? "tag main" : "tag"}>{tag}</span>
                        ))}
                        {hiddenTagCount > 0 && (
                          <span className="tag tag-more" aria-label={`${hiddenTagCount} more topics`}>
                            +{hiddenTagCount}
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="paper-footer">
                      <span className="paper-start">Start practice <span aria-hidden="true">→</span></span>
                    </span>
                  </Link>
                );
              })}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon" aria-hidden="true">?</span>
            <h3>No papers found</h3>
            <p>Try another search or clear your filters to see all available papers.</p>
            <button
              className="button secondary"
              onClick={() => {
                setSubject("");
                setTopic("");
                setSearch("");
              }}
            >
              Show all papers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
