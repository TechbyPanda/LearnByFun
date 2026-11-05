"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Question } from "../../data/types";
import SettingsButton from "../SettingsButton";
import { useSettings } from "../settings";

export default function Quiz({ title, questions }: { title: string; questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const { timerSeconds } = useSettings();
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    questions.map(() => null),
  );
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce<number>(
    (total, answer, questionIndex) =>
      total + (answer === questions[questionIndex]?.answer ? 1 : 0),
    0,
  );

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <QuizHeader title={title} />
        <div className="empty-state">
          <h2>No questions here yet</h2>
          <p>This paper is ready for questions. Come back soon, or choose another paper.</p>
          <Link href="/" className="button">Back to papers</Link>
        </div>
      </div>
    );
  }

  if (index >= questions.length) {
    return (
      <div className="quiz-page">
        <QuizHeader title={title} />
        <section className="completion-card">
          <span className="completion-mark" aria-hidden="true">✓</span>
          <p className="eyebrow">PRACTICE COMPLETE</p>
          <h2>Nice work showing up.</h2>
          <p className="completion-score">
            You got <strong>{score} out of {questions.length}</strong> questions correct.
          </p>
          <div className="completion-progress" aria-label={`${Math.round((score / questions.length) * 100)} percent correct`}>
            <span style={{ width: `${(score / questions.length) * 100}%` }} />
          </div>
          <p className="muted">Reviewing the explanations is a great way to remember what you learned.</p>
          <div className="row completion-actions">
            <Link href="/" className="button secondary">Choose another paper</Link>
            <button
              className="button"
              onClick={() => {
                setIndex(0);
                setAnswers(questions.map(() => null));
              }}
            >
              Try again
            </button>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[index]!;
  const selected = answers[index] ?? null;
  const answered = selected !== null;

  function choose(i: number) {
    if (answered) return;
    setAnswers((current) =>
      current.map((answer, questionIndex) => (questionIndex === index ? i : answer)),
    );
  }

  function optionClass(i: number) {
    if (!answered) return "option";
    if (i === q.answer) return "option correct";
    if (i === selected) return "option wrong";
    return "option";
  }

  const progress = (answeredCount / questions.length) * 100;

  return (
    <div className="quiz-page">
      <QuizHeader title={title} />
      <div className="quiz-progress-heading">
        <span>
          Question <strong>{index + 1}</strong>
          <span className="muted"> of {questions.length}</span>
        </span>
        <span className="muted">{answeredCount} of {questions.length} attempted</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-workspace">
        <aside className="question-navigation" aria-label="Question navigation">
          <div className="navigator-heading">
            <div>
              <p className="eyebrow">PAPER OVERVIEW</p>
              <h2>Questions</h2>
            </div>
            <span className="navigator-count">{answeredCount}/{questions.length}</span>
          </div>
          <div className="navigator-legend">
            <span><i className="legend-dot attempted" /> Attempted</span>
            <span><i className="legend-dot" /> Not attempted</span>
          </div>
          <nav className="question-number-grid" aria-label="Jump to question">
            {questions.map((question, questionIndex) => {
              const isAttempted = answers[questionIndex] !== null;
              const isCurrent = questionIndex === index;

              return (
                <button
                  key={questionIndex}
                  type="button"
                  className={[
                    "question-number-button",
                    isAttempted ? "attempted" : "",
                    isCurrent ? "current" : "",
                  ].filter(Boolean).join(" ")}
                  aria-label={`Question ${questionIndex + 1}, ${isAttempted ? "attempted" : "not attempted"}${isCurrent ? ", current question" : ""}`}
                  aria-current={isCurrent ? "step" : undefined}
                  onClick={() => setIndex(questionIndex)}
                >
                  {questionIndex + 1}
                </button>
              );
            })}
          </nav>
          <p className="navigator-hint">Select a number to jump to that question.</p>
          {answeredCount === questions.length && (
            <button className="button navigator-finish" onClick={() => setIndex(questions.length)}>
              See results <span aria-hidden="true">→</span>
            </button>
          )}
        </aside>
        <section className="question-panel" aria-label={`Question ${index + 1}`}>
          <div className="question-card">
            <div className="question-card-heading">
              <span className="question-number">QUESTION {String(index + 1).padStart(2, "0")}</span>
              <span className={answered ? "question-status attempted" : "question-status"}>
                {answered ? "Attempted" : "Not attempted"}
              </span>
            </div>
            {timerSeconds > 0 && !answered && (
              <QuestionTimer
                key={`${index}-${timerSeconds}`}
                seconds={timerSeconds}
                onExpire={() => setIndex((current) => current + 1)}
              />
            )}
            <h2 className="question">{q.question}</h2>
            <p className="answer-prompt">Choose the best answer</p>
            <div className="options">
              {q.options.map((text, i) => (
                <button
                  key={i}
                  className={optionClass(i)}
                  disabled={answered}
                  onClick={() => choose(i)}
                  aria-pressed={selected === i}
                >
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{text}</span>
                  {answered && i === q.answer && <span className="option-result">Correct</span>}
                  {answered && i === selected && i !== q.answer && <span className="option-result">Your answer</span>}
                </button>
              ))}
            </div>

            {answered && (
              <div className={`answer-feedback ${selected === q.answer ? "feedback-correct" : "feedback-wrong"}`} role="status">
                <strong>{selected === q.answer ? "That's right!" : "Not quite - keep learning!"}</strong>
                <details>
                  <summary>Read explanation</summary>
                  <p>{q.explanation}</p>
                </details>
              </div>
            )}

            <div className="question-actions">
              <Link href="/" className="quit-link">← Leave practice</Link>
              {answered && answeredCount === questions.length ? (
                <button
                  className="button"
                  onClick={() => setIndex(questions.length)}
                >
                  See results
                  <span aria-hidden="true"> →</span>
                </button>
              ) : answered && index < questions.length - 1 ? (
                <button className="button" onClick={() => setIndex(index + 1)}>
                  Next question
                  <span aria-hidden="true"> →</span>
                </button>
              ) : (
                <span className="answer-reminder">Use the question list to move around</span>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuizHeader({ title }: { title: string }) {
  return (
    <header className="quiz-header">
      <Link href="/" className="brand" aria-label="Back to Learn by Fun papers">
        <span className="brand-mark">LF</span>
        <span className="brand-copy">Learn by Fun<span>UPSC practice</span></span>
      </Link>
      <div className="quiz-title">
        <span className="eyebrow">NOW PRACTICING</span>
        <h1>{title}</h1>
      </div>
      <div className="header-actions">
        <Link href="/" className="quiz-header-link">All papers <span aria-hidden="true">↗</span></Link>
        <SettingsButton />
      </div>
    </header>
  );
}

/** Counts down, then calls onExpire. Remount (via key) to restart. */
function QuestionTimer({ seconds, onExpire }: { seconds: number; onExpire: () => void }) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    const end = Date.now() + seconds * 1000;
    const tick = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining === 0) {
        clearInterval(tick);
        onExpire();
      }
    }, 200);
    return () => clearInterval(tick);
    // onExpire is a fresh closure each render; the timer should only restart on remount.
  }, [seconds]);

  return (
    <div className={left <= 3 ? "question-timer urgent" : "question-timer"} role="timer" aria-live="off">
      <span className="question-timer-label">{left}s left</span>
      <span className="question-timer-track">
        <span style={{ animationDuration: `${seconds}s` }} />
      </span>
    </div>
  );
}
