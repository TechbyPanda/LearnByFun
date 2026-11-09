import type { Metadata, Viewport } from "next";
import { SITE_NAME, SirenLoader } from "./brand";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – UPSC Prelims Practice`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Free UPSC Prelims practice: topic-wise MCQs, quick-revision drills with a timer, and clear explanations for every answer.",
  applicationName: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} – UPSC Prelims Practice`,
    description: "Topic-wise UPSC MCQs and timed quick-revision drills with explanations.",
    siteName: SITE_NAME,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#111522" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Intro on every full page load: pure CSS, ~5s, then dissolves into the page (see .intro-overlay). */}
        <div className="intro-overlay" aria-hidden="true">
          <div className="intro-content">
            <div className="intro-word">{SITE_NAME}</div>
            <SirenLoader label="Getting ready" />
            <div className="intro-progress"><span /></div>
          </div>
        </div>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
