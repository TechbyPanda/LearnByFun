# Creating a paper

This file has everything needed. **Don't read any other file** (not the sample paper, not the app code).

1. Create one new file: `apps/quiz/data/papers/<id>.json`. The app picks it up automatically, so don't edit anything else.
2. `name` is a specific title for the sub-themes the questions cover, as `<Subject> – <Theme> & <Theme>` (e.g. `Parliament – Committees & Financial Control`), never "Paper 1". `id` is the name in lowercase with hyphens (e.g. `parliament-committees-financial-control`) and is also the file name without `.json`. It must not already exist; check with a file listing, don't open existing papers.
3. Format:

```json
{
  "id": "parliament-committees-financial-control",
  "name": "Parliament – Committees & Financial Control",
  "tags": ["polity"],
  "subtags": ["parliament", "committees", "financial-control"],
  "questions": [
    {
      "question": "Consider the following statements:\n1. ...\n2. ...\nWhich of the statements given above is/are correct?",
      "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
      "answer": 0,
      "explanation": "Why the answer is right and the others are wrong, citing the Article/source."
    }
  ]
}
```

## Rules
- All tags are lowercase with hyphens.
- `tags` (main tags): first the subject, one of `polity`, `economy`, `history`, `geography`, `environment`, `science-tech`, `art-culture`, `international-relations`, `current-affairs`. Then, only if the user says so, a source such as `pyq-2026` (previous year questions of that year) or `mock`.
- `subtags`: 2-5 topics covered: the topic first (e.g. `parliament`), then key sub-themes (e.g. `money-bills`).
- Exactly 4 options. `answer` is the index of the correct one: 0 = a, 1 = b, 2 = c, 3 = d.
- Spread correct answers across 0-3; don't favour one position.
- UPSC Prelims style: mix direct questions with "Consider the following statements…" ones. Use `\n` for line breaks.
- Facts must be accurate; if unsure of a fact, leave that question out.
- Default to 10 questions unless told otherwise.
- If the user asks for a quick / short / memorisation / fill-in-the-blank paper, read `QUICK_PROMPT.md` too and follow its patterns, `name`/`id`/`quick-revision` tag and content rules (same JSON format).
- After writing, don't run builds or checks. A malformed paper shows an error naming the file when the app loads it.
