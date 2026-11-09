"use client";

import { useEffect } from "react";
import { startSiren } from "./sound";

/** Plays the siren while the loader is on screen and fades it out when the page arrives. */
export default function LoaderSiren() {
  useEffect(() => startSiren(), []);
  return null;
}
