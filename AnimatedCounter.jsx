"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { operatingModel } from "@/lib/content";

export default function OperatingModel() {
  return (
    <Section id="operating-model" className="border-t border-line">
      <SectionHeading
        eyebrow="04 — Leadership Operating Model"
        title="How I lead, not just what I ship"
        subtitle="A repeatable loop that turns ambiguity into outcomes — and outcomes into compounding leverage."
      />

      <div className="mt-14">
        {/* Flow */}
        <div className="grid gap-4 lg:grid-cols-[repeat(5,1fr)] lg:items-stretch lg:gap-0">
          {operatingModel.map((stage, i) => (
            <div key={stage.step} className="contents">
              <Reveal delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass relative flex h-full flex-col rounded-2xl p-6 lg:mx-1.5"
                >
                  <span className="font-mono text-[11px] text-signal-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {stage.step}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-azure-soft">
                    {stage.headline}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#9AA3B2]">
                    {stage.body}
                  </p>
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6B7384]">
            <span className="hairline max-w-[120px]" />
            Continuous loop
            <ChevronRight size={13} className="text-signal" />
            <span className="hairline max-w-[120px]" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
