// Best-effort localStorage access. Storage can be missing (SSR) or refuse
// writes (private mode, quota); callers get `null` and carry on.

/** The parsed JSON stored under `key`, or null if there is none or it can't be read. */
export function readStorage(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Persistence is best-effort.
  }
}
