"use client";

import { Download, ArrowUp } from "lucide-react";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-lg font-semibold text-white">
              {profile.name}
            </div>
            <p className="mt-1 text-sm text-[#8A93A6]">
              {profile.role} · {profile.education}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-signal-soft"
            >
              <Download size={15} />
              Download Resume
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 hairline" />
        <p className="mt-6 font-mono text-[11px] tracking-wide text-[#5a6378]">
          © {new Date().getFullYear()} {profile.name}. Crafted for the next
          chapter in cybersecurity platforms.
        </p>
      </div>
    </footer>
  );
}
