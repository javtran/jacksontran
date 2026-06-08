"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoTabs from "../components/dance/videotabs";
import ScrollProgress from "../components/scrollprogress";

const styles = ["Hip-Hop", "Jazz-Funk", "K-Pop", "Waacking", "Heels",];

export default function DancePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main>
      <ScrollProgress />

      {/* Background video */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://github.com/javtran/jacksontran/releases/download/dance-assets/dance-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      {/* Hero — full viewport */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-8 gap-6"
        style={{ minHeight: "100svh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase">
            Represented by Rae Agency
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight">
            Jackson Tran
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
            Dance Portfolio
          </h2>

          {/* Style pills */}
          <ul className="flex flex-wrap justify-center gap-2 mt-2">
            {styles.map((s) => (
              <li key={s}>
                <span className="bg-sky-400/20 px-4 py-1 rounded-full text-sky-400 font-medium text-sm">
                  {s}
                </span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex gap-8 mt-4 text-slate-400 text-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="text-slate-200 font-semibold text-lg">5&apos;11&quot;</span>
              <span className="tracking-wide uppercase text-xs">Height</span>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-slate-200 font-semibold text-lg">San Francisco</span>
              <span className="tracking-wide uppercase text-xs">Based In</span>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.raeagency.com/dancers/all/2820293/jackson-tran"
                target="_blank"
                className="text-slate-200 font-semibold text-lg hover:text-sky-400 transition-colors duration-200"
              >
                Rae Agency ↗
              </a>
              <span className="tracking-wide uppercase text-xs">Agency</span>
            </div>
          </div>

          {/* Back to main site */}
          <Link
            href="/"
            className="mt-2 text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
          >
            ← Back to portfolio
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#videos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors duration-200"
        >
          <span className="text-xs tracking-widest uppercase">Watch</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3v14M4 11l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.a>
      </section>

      {/* Video section */}
      <VideoTabs />
    </main>
  );
}
