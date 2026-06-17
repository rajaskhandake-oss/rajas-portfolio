"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { award } from "@/lib/content";

export default function Awards() {
  return (
    <Section id="awards" className="border-t border-line">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] border border-line">
          {/* Spotlight backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-signal/15 via-ink to-azure/10" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-signal/20 blur-[120px]" />

          <div className="relative grid gap-10 p-10 sm:p-14 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-signal/30 bg-signal/10 text-signal shadow-glow lg:mx-0"
            >
              <Trophy size={44} strokeWidth={1.6} />
            </motion.div>

            <div className="text-center lg:text-left">
              <p className="eyebrow">07 — Awards &amp; Recognition</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                {award.title}
              </h3>
              <div className="mt-2 flex flex-col items-center gap-1 text-sm text-[#9AA3B2] sm:flex-row sm:gap-3 lg:justify-start">
                <span className="font-medium text-signal-soft">{award.org}</span>
                <span className="hidden sm:inline text-[#3a4256]">·</span>
                <span className="font-mono text-[12px] tracking-wide">
                  {award.date}
                </span>
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#aab2c2] lg:mx-0">
                {award.description}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
