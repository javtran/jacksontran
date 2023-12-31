import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Tran",
  description:
    "Jackson Tran is a software engineer who specializes in building digital experiences.",
  applicationName: "jacksontran",
  keywords: ["Jackson Tran", "Jackson", "Software Engineer", "Portfolio"],
  authors: {
    name: "Jackson Tran",
  },
  verification: {
    google: "HFUfvNxErZSrnieImh-6tHVMs5C3wx3kjaGCA17miFM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
