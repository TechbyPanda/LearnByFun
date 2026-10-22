import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar, type NavLink } from "./components/Navbar";
import { PRACTICE_MODES } from "./lib/practiceModes";
import { tracks } from "./tracks/data";
import "./globals.css";

const NAV_LINKS: NavLink[] = [
  ...tracks.map((track) => ({ href: `/tracks/${track.id}`, label: track.title })),
  ...PRACTICE_MODES.map(({ href, label }) => ({ href, label })),
];

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Quizverse",
  description: "Syllabus dashboards and practice — quizzes, flashcards, bites and match — for UPSC CSE and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar links={NAV_LINKS} />
        {children}
      </body>
    </html>
  );
}
