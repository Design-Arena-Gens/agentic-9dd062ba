import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tool Arena",
  description:
    "Curated launchpad for developers to explore, benchmark, and ship AI tooling faster.",
  openGraph: {
    title: "AI Tool Arena",
    description:
      "Discover ready-to-run sandboxes, live challenges, and resources for AI tooling teams.",
    url: "https://agentic-9dd062ba.vercel.app",
    siteName: "AI Tool Arena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Arena",
    description:
      "Design arena website links for developers to test and benchmark AI tools in one hub.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
