"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Rocket,
  Users,
  BarChart3,
  UsersRound,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { leadership } from "@/lib/content";

const icons = [Layers, Rocket, Users, BarChart3, UsersRound, TrendingUp];

export default function Leadership() {
  return (
    <Section id="leadership" className="border-t border-line">
      <SectionHeading
        eyebrow="06 — Leadership"
        title="The capabilities behind the outcomes"
        subtitle="Strategy, execution and influence — the operating range expected of a director-level product leader."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((cap, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={cap.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass glass-hover group h-full rounded-2xl p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5 text-signal transition-colors group-hover:text-signal-soft">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9AA3B2]">
                  {cap.body}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
