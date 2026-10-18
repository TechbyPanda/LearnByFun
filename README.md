# Learn by Fun (Quizverse)

A study app for competitive-exam preparation (Polity, Economy, Environment and more) that turns revision into short, focused sessions. It runs entirely in the browser with no backend, so there is nothing to sign up for or configure.

The repo is a [Turborepo](https://turborepo.dev) monorepo. The app itself is **Quizverse**, a Next.js (App Router) project in `apps/quizverse`.

## Features

| Feature | Route | What it does |
| --- | --- | --- |
| **Quiz** | `/quiz` | Predefined mock tests (quick 10s, full mocks, subject mocks, topic drills) or a manual setup where you pick subjects, topics and question count. |
| **Flashcards** | `/flashcard` | Ready-made sessions or a custom mix of topics, studied one card at a time. |
| **Daily Bites** | `/learn` | Microlearning. Each bite is about three minutes: learn, recall, check. Tracks a daily goal, a streak and 1/3/7-day refreshers. |
| **Quick Match** | `/match` | A timed match-the-column puzzle (for example, which Article matches which provision). It has Timed and Relaxed modes and keeps your best times. |

Progress, best times and your last quiz setup are stored in `localStorage`. Quiz and flashcard configuration is passed through URL query params.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19
- TypeScript, ESLint, Prettier
- Turborepo with npm workspaces
- CSS Modules

## Getting started

**Prerequisites:** Node.js 24 or newer and npm 11.

```sh
npm install
npm run dev
```

Open [http://localhost:3005](http://localhost:3005).

### Commands

Run these from the repo root.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (port 3005) |
| `npm run build` | Production build |
| `npm run check-types` | Type-check all packages. Use this for TypeScript correctness. |
| `npm run lint` | Lint all packages and run the feature-boundary check |
| `npm run format` | Format `.ts`, `.tsx` and `.md` files with Prettier |
| `npx turbo dev --filter=quizverse` | Start the dev server of quizverse only |

> The shared ESLint config only lints `.js`/`.mjs` files, not `.ts`/`.tsx`, so rely on `check-types` for TypeScript.

## Repository layout

```
apps/
  quizverse/            The Next.js app
    app/
      page.tsx          Landing page
      quiz/             Quiz dashboard (mock tests + manual setup)
      mcq/              Quiz engine: question bank, test papers, helpers
        data/           Questions, one file per subject
        testPapers/     Mock test definitions
        lib/            Pure helpers (shuffle, pool building, config persistence)
      flashcard/        Flashcards: data/, sessions/, lib/, study/
      learn/            Daily Bites: bites/ (content), hooks/, lib/
      match/            Quick Match: data/, hooks/, lib/, play/
      components/       UI shared across features
      lib/              Pure helpers shared across features
    scripts/
      check-boundaries.mjs   Enforces the feature-independence rules
packages/
  ui/                   Shared React component library
  eslint-config/        Shared ESLint configs
  typescript-config/    Shared tsconfig files
```

## Architecture

The code follows SOLID principles, applied concretely. The full rules are in [CLAUDE.md](CLAUDE.md). The main ones:

- **Content is data.** To add a subject or question, add a `data/<subject>.ts` file and one entry in that folder's `index.ts`. You don't edit pages or existing subject files.
- **Features are independent.** Quiz, Flashcards and Quick Match each own their data, types and code. The only link between them is a free-text topic name. Daily Bites (`learn/`) is the one feature allowed to import from the others.
- **Shared code lives in two places.** Put it in `app/lib/` for pure helpers or `app/components/` for generic UI.
- **Boundaries are enforced.** `npm run lint` runs `scripts/check-boundaries.mjs` and fails on any forbidden cross-feature import.

## Adding content

| To add... | Do this |
| --- | --- |
| Quiz questions for a subject | Create `mcq/data/<subject>.ts` and register it in `mcq/data/index.ts`. Each question must match `MCQQuestion` in `mcq/data/types.ts`. |
| A mock test | Add one entry to `mcq/testPapers/index.ts`. |
| Flashcards | Create `flashcard/data/<subject>.ts` and register it in `flashcard/data/index.ts`. |
| A flashcard session | Add one entry to `flashcard/sessions/index.ts`. |
| A Daily Bite | Add it under `learn/bites/`. Bites only reference existing flashcard and MCQ ids. Afterwards, check them with `findBrokenReferences(allBites)` from `learn/lib/content.ts`. |
| A Quick Match set | Add an entry in `match/data/`. |

Before committing, run `npm run check-types` and `npm run lint`.

## Contributing

1. Create a branch off `main`.
2. Make your change, following the architecture rules above.
3. Run `npm run check-types` and `npm run lint`.
4. Open a pull request.
