# CLAUDE.md

Guidance for working in this repo (`learn-by-fun`, a Turborepo/Next.js app). Follow these SOLID principles as concretely applied here — not as abstract theory.

## SOLID, applied to this codebase

- **Single Responsibility**: `data/<subject>.ts` files only hold question data. Page components (`page.tsx`) only handle UI/state. `lib/` holds pure, stateless helpers (e.g. `shuffle.ts`, `quizConfig.ts`). Don't mix these concerns into one file.
- **Open/Closed**: adding a new subject or question means adding a new `data/<subject>.ts` file plus one import/entry in `data/index.ts`. Never edit existing subject files or `page.tsx` to add content — the aggregator is the only touch point.
- **Liskov Substitution**: every `MCQQuestion` in every subject file must satisfy the exact shape defined in `data/types.ts`. Any subject's array must be usable anywhere a `MCQQuestion[]` is expected, with no special-casing per subject.
- **Interface Segregation**: component props should expose only what that component needs (e.g. `Option` takes `currentQuestion`/`selectedOptionId`/`handleSelectOption`, not the whole quiz state). Don't pass down large config objects when a component only needs a few fields.
- **Dependency Inversion**: pages and components depend on the `Subject`/`MCQQuestion`/`questionsBySubject` abstractions exported from `data/index.ts`, never importing a specific subject file (e.g. `./data/polity`) directly.

## Project structure

- `apps/quizverse/app/` — Next.js App Router pages.
- `apps/quizverse/app/page.tsx` — landing page, links out to `/quiz` and `/flashcard`.
- `apps/quizverse/app/quiz/` — the quiz dashboard (mock test list + manual setup), which starts a quiz at `/mcq`.
- `apps/quizverse/app/components/` — UI shared across features, one folder per component (`LinkCard/`, `SegmentedControl/`) with its own CSS module. `apps/quizverse/app/lib/` — pure helpers shared across features (`shuffle.ts`, `topics.ts`). Don't copy a helper into a feature folder; promote it here.
- `apps/quizverse/app/flashcard/` — flashcard mode: `page.tsx` switches between ready-made sessions (`components/SessionList`) and the custom builder (`components/CustomBuilder`, state in `hooks/useCardSelection`). `study/page.tsx` resolves the URL to a deck and renders `study/components/StudySession` (one card at a time; state in `study/hooks/useStudySession`).
- `apps/quizverse/app/flashcard/sessions/` — ready-made flashcard sessions (subject mixes, topic drills), same `types.ts` + `index.ts` pattern as `mcq/testPapers/`. Add a session by adding one entry — never by editing a page.
- `apps/quizverse/app/mcq/data/` — question bank, one file per subject + `types.ts` + `index.ts` aggregator.
- `apps/quizverse/app/mcq/testPapers/` — predefined mock test definitions (id, title, section list of `{subject, topics?, count}`), same `types.ts` + `index.ts` pattern as `data/`. Add a new mock test by adding one entry here — never by editing `page.tsx`.
- `apps/quizverse/app/mcq/lib/` — pure helpers (shuffling, question-pool building from sections, topic lookup, localStorage config persistence).
- `apps/quizverse/app/flashcard/data/` — flashcard content, same one-file-per-subject + `types.ts` + `index.ts` pattern as `mcq/data/`, but with its own `Flashcard` shape (`front`/`back`) since a flashcard isn't a 4-option MCQ. `flashcard/lib/` holds its own pure helpers (e.g. topic lookup) — flashcard and quiz content/logic stay independent even though the folder layout mirrors each other.
- No backend/API — quiz configuration (manual topic picks, or a `paperId` referencing a test paper) and flashcard topic selection are both passed via URL query params; the last-used manual quiz config is cached in `localStorage`.

## Commands

- `npm run dev` — start dev server
- `npm run check-types` — type-check all packages
- `npm run lint` — lint all packages
