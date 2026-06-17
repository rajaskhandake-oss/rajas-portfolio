"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { journey } from "@/lib/content";

export default function LeadershipJourney() {
  const [active, setActive] = useState(journey.length - 1);

  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="01 — Leadership Journey"
        title="From building products to architecting ecosystems"
        subtitle="A decade-plus of compounding scope: zero-to-one founder energy, VP-level platform ownership, and now cybersecurity portfolios at scale."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* Rail */}
        <Reveal>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />
            <ul className="space-y-2">
              {journey.map((stage, i) => {
                const isActive = i === active;
                return (
                  <li key={stage.org}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group flex w-full items-start gap-4 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/[0.03]"
                    >
                      <span className="relative mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                        <span
                          className={`h-3.5 w-3.5 rounded-full border transition-all ${
                            isActive
                              ? "border-signal bg-signal shadow-glow"
                              : "border-white/25 bg-ink"
                          }`}
                        />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B7384]">
                          {stage.period}
                        </span>
                        <span
                          className={`block font-display text-base font-semibold transition-colors ${
                            isActive ? "text-white" : "text-[#9AA3B2]"
                          }`}
                        >
                          {stage.org}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        {/* Detail */}
        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass rounded-3xl p-8 sm:p-10"
            >
              <p className="eyebrow">{journey[active].period}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                {journey[active].org}
              </h3>
              <p className="mt-1 text-sm font-medium text-signal-soft">
                {journey[active].role}
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#9AA3B2]">
                {journey[active].summary}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {journey[active].points.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-4 py-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-[#cfd6e4]">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
