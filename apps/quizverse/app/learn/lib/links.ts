import type { BiteMode } from "./schedule";

export function biteHref(biteId: string, mode: BiteMode = "full"): string {
  return `/learn/bite?id=${biteId}${mode === "refresh" ? "&mode=refresh" : ""}`;
}
