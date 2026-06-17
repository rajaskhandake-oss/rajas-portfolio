"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import AnimatedCounter from "./ui/AnimatedCounter";
import { impact } from "@/lib/content";

function MetricCard({ metric, accent }) {
  const ring =
    accent === "azure"
      ? "hover:border-azure/40 hover:shadow-glow-azure"
      : "hover:border-signal/40 hover:shadow-glow";
  const tint = accent === "azure" ? "text-azure-soft" : "text-signal-soft";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${ring}`}
    >
      <div className={`font-display text-[2.1rem] font-semibold leading-none tracking-tight text-white`}>
        {metric.value === null ? (
          <span className={tint}>{metric.text}</span>
        ) : (
          <AnimatedCounter
            value={metric.value}
            prefix={metric.prefix || ""}
            suffix={metric.suffix || ""}
          />
        )}
      </div>
      <div className="mt-3 text-[13.5px] leading-snug text-[#9AA3B2]">
        {metric.label}
      </div>
    </motion.div>
  );
}

export default function BusinessImpact() {
  return (
    <Section id="impact" className="border-t border-line">
      <SectionHeading
        eyebrow="05 — Business Impact"
        title="Outcomes that show up in the numbers"
        subtitle="Growth, retention, revenue and speed — the metrics executives actually track, moved at scale."
      />

      <div className="mt-14 space-y-12">
        {impact.map((group, gi) => (
          <div key={group.org}>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    group.accent === "azure" ? "bg-azure" : "bg-signal"
                  }`}
                />
                <h3 className="font-display text-xl font-semibold text-white">
                  {group.org}
                </h3>
                <span className="hairline flex-1" />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.metrics.map((metric, mi) => (
                <Reveal key={metric.label} delay={(gi * 0.05) + mi * 0.05}>
                  <MetricCard metric={metric} accent={group.accent} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
