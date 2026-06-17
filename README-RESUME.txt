"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { whyQualys, profile } from "@/lib/content";

export default function WhyQualys() {
  return (
    <Section id="why-qualys" className="border-t border-line">
      <SectionHeading
        eyebrow="08 — Why Qualys"
        title="Why Qualys, and why now"
        subtitle="The intersection of deep cybersecurity domain, platform thinking and a track record of measurable scale — exactly where Qualys is heading."
      />

      <div className="mt-14 grid gap-3 sm:grid-cols-2">
        {whyQualys.points.map((point, i) => (
          <Reveal key={point} delay={i * 0.06}>
            <motion.div
              whileHover={{ x: 4 }}
              className="glass flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-[15px] leading-relaxed text-[#dce2ee]">
                {point}
              </span>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-azure/10 via-transparent to-signal/10 p-10 sm:p-14">
          <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
            &ldquo;{whyQualys.closing}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-gradient-to-br from-signal to-azure" />
            <div>
              <div className="text-sm font-semibold text-white">
                {profile.name}
              </div>
              <div className="text-[12.5px] text-[#8A93A6]">
                {profile.role}, {profile.company} · {profile.education}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
