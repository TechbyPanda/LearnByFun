// Feature independence check (run by `npm run lint:boundaries`).
//
// Quiz (mcq + quiz), flashcard and match each own their data and code, so
// editing one can never break another. They share only app/lib and
// app/components, and link content by topic name. `learn` is the deliberate
// integrator and is intentionally not restricted.
//
// Why a script and not ESLint: the repo's ESLint setup only lints .js files,
// so it never sees .ts/.tsx. This reads each file's imports, resolves them to
// the folder they actually point at, and fails if that folder is off limits.
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const APP_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "app");

const FORBIDDEN = {
  mcq: ["flashcard", "match", "learn"],
  quiz: ["flashcard", "match", "learn"],
  flashcard: ["mcq", "quiz", "match", "learn"],
  match: ["mcq", "quiz", "flashcard", "learn"],
};

const IMPORT_PATTERN =
  /(?:import|export)\s[^'"`;]*?from\s*['"]([^'"]+)['"]|import\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g;

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

const violations = [];

for (const [feature, forbidden] of Object.entries(FORBIDDEN)) {
  const featureDir = path.join(APP_DIR, feature);
  let files;
  try {
    files = [...sourceFiles(featureDir)];
  } catch {
    continue; // Feature folder doesn't exist (yet).
  }

  for (const file of files) {
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(IMPORT_PATTERN)) {
      const specifier = match[1] ?? match[2] ?? match[3];
      if (!specifier?.startsWith(".")) continue; // Packages are never feature code.

      const target = path.relative(APP_DIR, path.resolve(path.dirname(file), specifier));
      const targetFeature = target.split(path.sep)[0];
      if (forbidden.includes(targetFeature)) {
        violations.push(
          `${path.relative(APP_DIR, file)}: "${feature}" must not import from "${targetFeature}" (${specifier})`,
        );
      }
    }
  }
}

if (violations.length > 0) {
  console.error("Feature boundary violations:\n  " + violations.join("\n  "));
  console.error(
    "\nFeatures stay independent: share only via app/lib or app/components, and link content by topic name.",
  );
  process.exit(1);
}
console.log("Feature boundaries OK");
