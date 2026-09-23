# CLAUDE.md

Guidance for working in this repo (`learn-by-fun`, a Turborepo/Next.js app). Follow these SOLID principles as concretely applied here — not as abstract theory.

## SOLID, applied to this codebase

- **Single Responsibility**: `data/<subject>.ts` files only hold question data. Page components (`page.tsx`) only handle UI/state. `lib/` holds pure, stateless helpers (e.g. `shuffle.ts`, `quizConfig.ts`). Don't mix these concerns into one file.
- **Open/Closed**: adding a new subject or question means adding a new `data/<subject>.ts` file plus one import/entry in `data/index.ts`. Never edit existing subject files or `page.tsx` to add content — the aggregator is the only touch point.
- **Liskov Substitution**: every `MCQQuestion` in every subject file must satisfy the exact shape defined in `data/types.ts`. Any subject's array must be usable anywhere a `MCQQuestion[]` is expected, with no special-casing per subject.
- **Interface Segregation**: component props should expose only what that component needs (e.g. `Option` takes `currentQuestion`/`selectedOptionId`/`handleSelectOption`, not the whole quiz state). Don't pass down large config objects when a component only needs a few fields.
- **Dependency Inversion**: pages and components depend on the `Subject`/`MCQQuestion`/`questionsBySubject` abstractions exported from `data/index.ts`, never importing a specific subject file (e.g. `./data/polity`) directly.

## Project structure

- `apps/web/app/` — Next.js App Router pages.
- `apps/web/app/mcq/data/` — question bank, one file per subject + `types.ts` + `index.ts` aggregator.
- `apps/web/app/mcq/lib/` — pure helpers (shuffling, localStorage config persistence).
- No backend/API — quiz configuration is passed via URL query params and the last-used config is cached in `localStorage`.

## Commands

- `npm run dev` — start dev server
- `npm run check-types` — type-check all packages
- `npm run lint` — lint all packages
