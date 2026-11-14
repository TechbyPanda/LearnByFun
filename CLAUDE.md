# CLAUDE.md

Simple UPSC MCQ quiz app: `apps/quiz` (Next.js App Router). Keep it small and simple.

## Creating a paper (most common task)
Read **only** `apps/quiz/data/papers/PAPER_GUIDE.md` and follow it. It produces one new JSON file; don't read or edit any other file.

## Layout (only for code changes)
- `data/papers/*.json` — one paper each (`id`, `name`, `tags`, `subtags`, `questions`). Auto-discovered by `data/papers.ts`, which also validates them.
- `data/types.ts` — `Paper` and `Question` shapes.
- `app/page.tsx` — dashboard; `app/PaperGrid.tsx` (client) renders the tag → subtag filters and paper cards. `app/quiz/page.tsx` — loads `?paper=<id>` and renders `Quiz.tsx` (client: one question at a time, feedback, score).
- `data/series.ts` — levels and topics: papers whose ids differ only by `-level-N` are one topic; `SYLLABUS` sets topic order and icons on the topic map.
- `app/game.ts` — all game rules and progress saved in localStorage (ranks, XP, pass marks, daily goal, attempts per paper). `app/RankPolicy.tsx` shows those rules to the student.
- `app/recommend.ts` — decides each paper's next step (retry, level-up, revise, start, later, cleared, mastered) and the list order.
- `app/globals.css` — all styles.

## Commands (run from `apps/quiz`)
- `npm run dev` — http://localhost:3005
- `npm run check-types`
