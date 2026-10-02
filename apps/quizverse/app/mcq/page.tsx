"use client";

import { Suspense } from "react";
import { QuizApp } from "./components/QuizApp";

export default function McqPage() {
  return (
    <Suspense fallback={null}>
      <QuizApp />
    </Suspense>
  );
}
