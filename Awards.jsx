"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { ecosystems } from "@/lib/content";

export default function ProductEcosystems() {
  return (
    <Section id="ecosystems" className="border-t border-line">
      <SectionHeading
        eyebrow="02 — Product Ecosystems"
        title="A connected stack, not a list of features"
        subtitle="Consumer protection, commerce, partners and enterprise — designed as layers that reinforce one another rather than isolated products."
      />

      <div className="mt-14 space-y-4">
        {ecosystems.map((layer, i) => (
          <Reveal key={layer.layer} delay={i * 0.08}>
            <div className="glass glass-hover group rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:w-72 lg:shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#6B7384]">
                      L{ecosystems.length - i}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {layer.layer}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#8A93A6]">{layer.intent}</p>
                </div>

                <div className="flex flex-1 flex-wrap gap-2.5">
                  {layer.products.map((product, j) => (
                    <motion.span
                      key={product}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + j * 0.05 }}
                      className="inline-flex items-center rounded-xl border border-line bg-ink/60 px-4 py-2.5 text-[13.5px] font-medium text-[#dce2ee] transition-colors group-hover:border-white/15"
                    >
                      {product}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl font-mono text-[12.5px] leading-relaxed text-[#6B7384]">
          Every layer shares identity, billing, telemetry and policy — so a new
          product inherits the ecosystem instead of rebuilding it.
        </p>
      </Reveal>
    </Section>
  );
}
