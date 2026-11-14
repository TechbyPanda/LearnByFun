"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Question } from "../../data/types";
import SettingsButton from "../SettingsButton";
import XpBadge from "../XpBadge";
import { Brand } from "../brand";
import { PASS_PERCENT, recordAnswer, recordAttempt, starsFor, XP } from "../game";
import { useSettings } from "../settings";
import { playSound } from "../sound";

interface Pop {
  id: number;
  text: string;
  kind: "good" | "bad";
}

export default function Quiz({
  paperId,
  title,
  questions: allQuestions,
  level,
  next,
}: {
  paperId: string;
  title: string;
  questions: Question[];
  /** Level of this paper and the next level of the same topic, if any. */
  level: number | null;
  next: { id: string; level: number } | null;
}) {
  // Which questions this round asks (indexes into the paper). A full attempt asks all of them;
  // "Retry wrong ones" asks only the missed ones.
  const [order, setOrder] = useState(() => allQuestions.map((_, i) => i));
  const questions = order.map((i) => allQuestions[i]!);
  const isFullAttempt = order.length === allQuestions.length;
  const [index, setIndex] = useState(0);
  const { timerSeconds } = useSettings();
  // The timer runs only for questions that were unanswered when the student arrived,
  // and keeps running after they answer, so the quiz moves on when time is up.
  const [timerOn, setTimerOn] = useState(true);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    allQuestions.map(() => null),
  );
  // Game state for this attempt.
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [pop, setPop] = useState<Pop | null>(null);
  const [justAnswered, setJustAnswered] = useState<number | null>(null);
  const [promotion, setPromotion] = useState<string | null>(null);

  // Hide the promotion banner after a few seconds.
  useEffect(() => {
    if (!promotion) return;
    const hide = setTimeout(() => setPromotion(null), 3200);
    return () => clearTimeout(hide);
  }, [promotion]);

  /** Starts a new round with the given questions. */
  function startRound(nextOrder: number[]) {
    setOrder(nextOrder);
    setIndex(0);
    setTimerOn(true);
    setAnswers(nextOrder.map(() => null));
    setStreak(0);
    setBestStreak(0);
    setXpEarned(0);
    setJustAnswered(null);
  }

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
        <Results
          score={score}
          total={questions.length}
          xpEarned={xpEarned}
          bestStreak={bestStreak}
          paperId={paperId}
          isFullAttempt={isFullAttempt}
          level={level}
          next={next}
          wrongCount={questions.length - score}
          onPromote={setPromotion}
          onRetry={() => startRound(allQuestions.map((_, i) => i))}
          onRetryWrong={() =>
            startRound(order.filter((_, i) => answers[i] !== questions[i]!.answer))
          }
        />
        <PromotionToast rank={promotion} />
      </div>
    );
  }

  const q = questions[index]!;
  const selected = answers[index] ?? null;
  const answered = selected !== null;

  function goTo(i: number) {
    setIndex(i);
    setTimerOn(i < questions.length && answers[i] === null);
    setPop(null);
  }

  function choose(i: number) {
    if (answered) return;
    setAnswers((current) =>
      current.map((answer, questionIndex) => (questionIndex === index ? i : answer)),
    );
    setJustAnswered(index);

    const correct = i === q.answer;
    const newStreak = correct ? streak + 1 : 0;
    const { gained, promotedTo, goalReached } = recordAnswer(`${paperId}:${order[index]}`, correct, newStreak);
    setStreak(newStreak);
    setBestStreak((best) => Math.max(best, newStreak));
    setXpEarned((total) => total + gained);

    if (correct) {
      const comboText = newStreak >= XP.streakFrom ? ` · 🔥 ${newStreak} in a row` : "";
      const goalText = goalReached ? " · 🎯 Daily goal!" : "";
      setPop({ id: Date.now(), text: `+${gained} XP${comboText}${goalText}`, kind: "good" });
    } else if (goalReached) {
      setPop({ id: Date.now(), text: `🎯 Daily goal! +${gained} XP`, kind: "good" });
    } else {
      setPop({ id: Date.now(), text: streak >= 2 ? "Streak lost" : "Miss", kind: "bad" });
    }

    if (promotedTo) {
      setPromotion(promotedTo.name);
      playSound("levelup");
    } else {
      playSound(correct ? (newStreak >= XP.streakFrom ? "combo" : "correct") : "wrong");
    }
  }

  function optionClass(i: number) {
    const animate = justAnswered === index; // only animate right after answering, not on revisits
    if (!answered) return "option";
    if (i === q.answer) return animate ? "option correct burst" : "option correct";
    if (i === selected) return animate ? "option wrong shake" : "option wrong";
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
        <span className="quiz-progress-right">
          {streak >= 2 && (
            <span key={streak} className="streak-chip" aria-label={`${streak} correct in a row`}>
              🔥 {streak} streak
            </span>
          )}
          <span className="muted">{answeredCount} of {questions.length} attempted</span>
        </span>
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
                  onClick={() => goTo(questionIndex)}
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
            {pop && (
              <span key={pop.id} className={`xp-pop ${pop.kind}`} aria-live="polite">
                {pop.text}
              </span>
            )}
            <div className="question-card-heading">
              <span className="question-number">QUESTION {String(index + 1).padStart(2, "0")}</span>
              <span className={answered ? "question-status attempted" : "question-status"}>
                {answered ? "Attempted" : "Not attempted"}
              </span>
            </div>
            {timerSeconds > 0 && timerOn && (
              <QuestionTimer
                key={`${index}-${timerSeconds}`}
                seconds={timerSeconds}
                onExpire={() => goTo(index + 1)}
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
                <details open={selected !== q.answer}>
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
                <button className="button" onClick={() => goTo(index + 1)}>
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
      <PromotionToast rank={promotion} />
    </div>
  );
}

function QuizHeader({ title }: { title: string }) {
  return (
    <header className="quiz-header">
      <Brand label="Back to all papers" />
      <div className="quiz-title">
        <span className="eyebrow">NOW PRACTICING</span>
        <h1>{title}</h1>
      </div>
      <div className="header-actions">
        <XpBadge />
        <SettingsButton />
      </div>
    </header>
  );
}

function PromotionToast({ rank }: { rank: string | null }) {
  if (!rank) return null;
  return (
    <div className="promotion-toast" role="status">
      <span className="promotion-medal" aria-hidden="true">🎖</span>
      <span>
        <small>PROMOTED</small>
        <strong>You are now {rank}!</strong>
      </span>
    </div>
  );
}

function Results({
  score,
  total,
  xpEarned,
  bestStreak,
  paperId,
  isFullAttempt,
  level,
  next,
  wrongCount,
  onPromote,
  onRetry,
  onRetryWrong,
}: {
  score: number;
  total: number;
  xpEarned: number;
  bestStreak: number;
  paperId: string;
  /** False for a "Retry wrong ones" round, which is practice and isn't saved as an attempt. */
  isFullAttempt: boolean;
  level: number | null;
  next: { id: string; level: number } | null;
  wrongCount: number;
  onPromote: (rank: string) => void;
  onRetry: () => void;
  onRetryWrong: () => void;
}) {
  const percent = Math.round((score / total) * 100);
  const stars = starsFor(percent);
  const cleared = percent >= PASS_PERCENT;
  const heading = isFullAttempt
    ? ["Keep going, recruit.", "Good start!", "Mission cleared!", "Outstanding!"][stars]
    : wrongCount === 0 ? "All fixed!" : "Practice round done";
  const [saved, setSaved] = useState<ReturnType<typeof recordAttempt> | null>(null);
  const recorded = useRef(false);

  // Save the attempt once (the ref stops a second save when React re-runs effects in dev).
  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    playSound("finish");
    if (!isFullAttempt) return;
    const result = recordAttempt(paperId, score, total);
    setSaved(result);
    if (result.promotedTo) {
      onPromote(result.promotedTo.name);
      playSound("levelup");
    }
  }, [isFullAttempt, paperId, score, total, onPromote]);

  const levelName = level ? `Level ${level}` : "this paper";
  // What the student should do next, based on the score.
  const advice = !isFullAttempt
    ? "Practice rounds give XP but don't change your stars. Play the full paper to improve your score."
    : !cleared
      ? `You should try ${levelName} again. Score ${PASS_PERCENT}% to clear it${next ? ` and open Level ${next.level}` : ""}.`
      : next
        ? `You cleared ${levelName}. Level ${next.level} is ready for you!`
        : stars === 3
          ? "Mastered! This paper moves to the end of your list and comes back later for revision."
          : "Cleared! Play again and score 90% for 3 stars.";

  return (
    <section className="completion-card">
      {stars >= 2 && <Confetti />}
      <div className="result-stars" aria-label={`${stars} out of 3 stars`}>
        {[1, 2, 3].map((star) => (
          <span
            key={star}
            className={star <= stars ? "star earned" : "star"}
            style={{ animationDelay: `${0.25 + star * 0.22}s` }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
      <p className="eyebrow">{isFullAttempt ? "MISSION COMPLETE" : "PRACTICE ROUND"}</p>
      <h2>{heading}</h2>
      <p className="completion-score">
        You got <strong>{score} out of {total}</strong> questions correct.
        {saved?.newBest && <span className="new-best"> New best!</span>}
      </p>
      <div className="completion-progress" aria-label={`${percent} percent correct`}>
        <span style={{ width: `${percent}%` }} />
      </div>
      <div className="result-stats">
        <div>
          <strong>+{xpEarned + (saved?.bonus ?? 0)}</strong>
          <span>XP earned{saved?.bonus ? ` (+${saved.bonus} bonus)` : ""}</span>
        </div>
        <div><strong>{percent}%</strong><span>Accuracy</span></div>
        <div><strong>🔥 {bestStreak}</strong><span>Best streak</span></div>
      </div>
      <p className={cleared || !isFullAttempt ? "next-step" : "next-step retry"}>{advice}</p>
      <div className="row completion-actions">
        {isFullAttempt && cleared && next ? (
          <Link href={`/quiz?paper=${encodeURIComponent(next.id)}`} className="button">
            Play Level {next.level} <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <button className="button" onClick={onRetry}>
            {isFullAttempt ? "Try again" : "Play full paper"}
          </button>
        )}
        {wrongCount > 0 && (
          <button className="button secondary" onClick={onRetryWrong}>
            Retry {wrongCount} wrong {wrongCount === 1 ? "one" : "ones"}
          </button>
        )}
        {isFullAttempt && cleared && next && (
          <button className="button secondary" onClick={onRetry}>Play again</button>
        )}
        <Link href="/" className="button secondary">Back to missions</Link>
      </div>
    </section>
  );
}

const CONFETTI_COLORS = ["#ef3b45", "#3d72ff", "#ffd23f", "#2ec27e", "#ffffff"];

/** CSS-only confetti burst. Positions are spread by index, so no randomness is needed. */
function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <i
          key={i}
          style={
            {
              "--x": `${((i * 37) % 100) - 50}vw`,
              "--r": `${(i * 73) % 720}deg`,
              "--d": `${(i % 9) * 0.06}s`,
              "--c": CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              left: `${(i * 53) % 100}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Counts down, then calls onExpire. Remount (via key) to restart. */
function QuestionTimer({ seconds, onExpire }: { seconds: number; onExpire: () => void }) {
  const [left, setLeft] = useState(seconds);
  const expire = useRef(onExpire);
  expire.current = onExpire; // always call the latest version

  useEffect(() => {
    const end = Date.now() + seconds * 1000;
    let last = seconds;
    const tick = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      if (remaining !== last) {
        last = remaining;
        setLeft(remaining);
        if (remaining > 0 && remaining <= 3) playSound("tick"); // last-seconds warning
      }
      if (remaining === 0) {
        clearInterval(tick);
        expire.current();
      }
    }, 200);
    return () => clearInterval(tick);
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
