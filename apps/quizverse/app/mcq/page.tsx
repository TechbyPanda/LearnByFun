"use client";

import { Suspense } from "react";
import { Page } from "../components/Page";
import { QuizApp } from "./components/QuizApp";

export default function McqPage() {
  return (
    <Suspense fallback={null}>
      <Page width="full" compact>
        <QuizApp />
      </Page>
    </Suspense>
  );
}
