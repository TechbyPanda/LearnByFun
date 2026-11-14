import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Paper } from "./types";

// Every .json file in data/papers is a paper. No registry to update.
const PAPERS_DIR = path.join(process.cwd(), "data", "papers");

export function getPapers(): Paper[] {
  const papers = readdirSync(PAPERS_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => ({ file, text: readFileSync(path.join(PAPERS_DIR, file), "utf8") }))
    // An empty file is a paper that was created but not pasted into yet: leave it out.
    .filter(({ text }) => text.trim() !== "")
    .map(({ file, text }) => parsePaper(file, parseJson(file, text)));

  const seen = new Set<string>();
  for (const p of papers) {
    if (seen.has(p.id)) throw new Error(`Duplicate paper id "${p.id}" in data/papers`);
    seen.add(p.id);
  }
  return papers;
}

export function getPaper(id: string): Paper | undefined {
  return getPapers().find((p) => p.id === id);
}

/** JSON.parse, but the error names the file (a chatbot answer that was cut off or badly copied). */
function parseJson(file: string, text: string): unknown {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`data/papers/${file} is not valid JSON: ${(error as Error).message}`);
  }
}

/** Fails loudly with the file name, so a malformed paper is easy to find. */
function parsePaper(file: string, data: unknown): Paper {
  const fail = (msg: string): never => {
    throw new Error(`data/papers/${file}: ${msg}`);
  };
  const p = data as Paper;
  if (typeof p?.id !== "string" || !p.id) fail("missing id");
  if (typeof p.name !== "string" || !p.name) fail("missing name");
  for (const key of ["tags", "subtags"] as const) {
    p[key] ??= [];
    if (!Array.isArray(p[key]) || p[key].some((t) => typeof t !== "string")) fail(`${key} must be a list of strings`);
  }
  if (!Array.isArray(p.questions)) fail("questions must be an array");
  p.questions.forEach((q, i) => {
    const at = `question ${i + 1}`;
    if (typeof q.question !== "string") fail(`${at}: missing question`);
    if (!Array.isArray(q.options) || q.options.length !== 4) fail(`${at}: needs exactly 4 options`);
    if (![0, 1, 2, 3].includes(q.answer)) fail(`${at}: answer must be 0-3`);
    if (typeof q.explanation !== "string") fail(`${at}: missing explanation`);
  });
  return p;
}
