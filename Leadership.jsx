"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { platform } from "@/lib/content";

const CX = 450;
const CY = 310;
const NODE_W = 212;
const NODE_H = 88;

// Balanced radial placement around the center hub.
const positions = [
  { cx: 200, cy: 110 }, // Telemetry  (top-left)
  { cx: 700, cy: 110 }, // Configuration (top-right)
  { cx: 138, cy: 360 }, // Notification (mid-left)
  { cx: 762, cy: 360 }, // Policy (mid-right)
  { cx: 450, cy: 548 }, // Shared Services (bottom)
];

const nodes = platform.nodes.map((n, i) => ({ ...n, ...positions[i] }));

function Diagram() {
  const [active, setActive] = useState(null);

  return (
    <svg
      viewBox="0 0 900 640"
      className="h-auto w-full"
      role="img"
      aria-label={`${platform.center} connected to telemetry, configuration, notification, policy and shared services platforms`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF3358" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF3358" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hubFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171c2e" />
          <stop offset="100%" stopColor="#0c1120" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      {nodes.map((n, i) => {
        const isOn = active === null || active === i;
        return (
          <line
            key={`line-${i}`}
            x1={CX}
            y1={CY}
            x2={n.cx}
            y2={n.cy}
            stroke={active === i ? "#FF6B83" : "#5B8CFF"}
            strokeOpacity={isOn ? 0.7 : 0.18}
            strokeWidth={active === i ? 2.4 : 1.4}
            strokeDasharray="4 9"
            className="animate-dash-flow"
            style={{ transition: "stroke-opacity .3s, stroke .3s" }}
          />
        );
      })}

      {/* Hub glow */}
      <circle cx={CX} cy={CY} r="150" fill="url(#hubGlow)" />
      <circle
        cx={CX}
        cy={CY}
        r="92"
        fill="none"
        stroke="#FF3358"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* Surrounding nodes */}
      {nodes.map((n, i) => {
        const x = n.cx - NODE_W / 2;
        const y = n.cy - NODE_H / 2;
        const isActive = active === i;
        return (
          <g
            key={n.name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{ cursor: "default" }}
          >
            <rect
              x={x}
              y={y}
              width={NODE_W}
              height={NODE_H}
              rx="14"
              fill="#0b1120"
              stroke={isActive ? "#5B8CFF" : "rgba(255,255,255,0.1)"}
              strokeWidth={isActive ? 1.6 : 1}
              style={{ transition: "stroke .3s" }}
            />
            <text
              x={n.cx}
              y={n.cy - 14}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="15"
              fontWeight="600"
            >
              {n.name}
            </text>
            <text
              x={n.cx}
              y={n.cy + 12}
              textAnchor="middle"
              fill="#7f8aa0"
              fontSize="10.5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {n.services.length} services
            </text>
          </g>
        );
      })}

      {/* Center hub */}
      <g>
        <rect
          x={CX - 122}
          y={CY - 52}
          width="244"
          height="104"
          rx="18"
          fill="url(#hubFill)"
          stroke="#FF3358"
          strokeOpacity="0.5"
          strokeWidth="1.4"
        />
        <text
          x={CX}
          y={CY - 10}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="18"
          fontWeight="700"
        >
          MetaProtect
        </text>
        <text
          x={CX}
          y={CY + 14}
          textAnchor="middle"
          fill="#FF6B83"
          fontSize="13"
          fontWeight="600"
        >
          Cloud Platform
        </text>
        <text
          x={CX}
          y={CY + 36}
          textAnchor="middle"
          fill="#7f8aa0"
          fontSize="9.5"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
        >
          CORE PLATFORM LAYER
        </text>
      </g>
    </svg>
  );
}

export default function PlatformExperience() {
  return (
    <Section id="platform" className="border-t border-line">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[400px] max-w-container grid-bg opacity-50" />
      <div className="relative">
        <SectionHeading
          eyebrow="03 — Platform Experience"
          title="Building platforms that power entire product portfolios"
          subtitle="One core platform — MetaProtect — feeding telemetry, configuration, notifications and policy to every product. Build once, leverage everywhere."
        />

        {/* Diagram (md+) */}
        <Reveal delay={0.1} className="mt-12 hidden md:block">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <Diagram />
          </div>
        </Reveal>

        {/* Service detail cards (all sizes) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platform.nodes.map((node, i) => (
            <Reveal key={node.name} delay={i * 0.06}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-azure" />
                  <h3 className="font-display text-base font-semibold text-white">
                    {node.name}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {node.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-[13.5px] text-[#9AA3B2]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#4a5266]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlighted quote */}
        <Reveal delay={0.1}>
          <motion.blockquote className="relative mt-14 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-signal/10 via-transparent to-azure/10 p-10 text-center sm:p-14">
            <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-4xl">
              &ldquo;Products create value.{" "}
              <span className="text-gradient-signal">
                Platforms create leverage.
              </span>
              &rdquo;
            </p>
          </motion.blockquote>
        </Reveal>
      </div>
    </Section>
  );
}
