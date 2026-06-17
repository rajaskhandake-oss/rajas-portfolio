"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";
import { heroMetrics, expertise, profile } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Ambient grid + glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-azure/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9AA3B2]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {profile.role} · {profile.company}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl md:text-[4.25rem]"
          >
            Building Scalable Product{" "}
            <span className="text-gradient-signal">Ecosystems</span> Across
            Cybersecurity, SaaS &amp; Consumer Platforms
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-[#9AA3B2] sm:text-xl"
          >
            12+ years building products, platforms and businesses that drive
            measurable outcomes.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#ecosystems"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-signal-soft"
            >
              View Portfolio
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {expertise.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wide text-[#8A93A6]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-white/[0.02] sm:mt-20 lg:grid-cols-4"
        >
          {heroMetrics.map((m) => (
            <motion.div
              key={m.label}
              variants={item}
              className="bg-ink/40 p-6 sm:p-8"
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm text-[#8A93A6]">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
