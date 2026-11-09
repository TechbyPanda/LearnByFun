"use client";

import { useSyncExternalStore } from "react";

/**
 * Practice settings, saved in the browser (localStorage).
 * To add a setting: add it to `Settings`, give it a default in `DEFAULT_SETTINGS`,
 * and add a control for it in `SettingsButton.tsx`.
 */
export interface Settings {
  /** Seconds allowed per question. 0 = no timer. */
  timerSeconds: number;
  /** Game sounds (correct, wrong, timer tick, level up). */
  sound: boolean;
  /** Police siren while a page is loading (needs `sound` on too). */
  loaderSiren: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  timerSeconds: 0,
  sound: true,
  loaderSiren: true,
};

export const TIMER_CHOICES = [0, 3, 5, 10, 15, 30, 60, 90];

const STORAGE_KEY = "lbf-settings";
const listeners = new Set<() => void>();
let cached: Settings | null = null;

export function getSettings(): Settings {
  return typeof window === "undefined" ? DEFAULT_SETTINGS : read();
}

function read(): Settings {
  if (cached) return cached;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    cached = { ...DEFAULT_SETTINGS, ...saved };
  } catch {
    cached = DEFAULT_SETTINGS;
  }
  return cached!;
}

export function updateSettings(patch: Partial<Settings>) {
  cached = { ...read(), ...patch };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cached));
  } catch {
    // Storage blocked (private mode etc.) — settings still apply for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    cached = null; // changed in another tab
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useSettings(): Settings {
  return useSyncExternalStore(subscribe, read, () => DEFAULT_SETTINGS);
}
