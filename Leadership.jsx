"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ShieldCheck } from "lucide-react";
import { nav, profile } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between sm:h-[72px]">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/5 text-signal transition-colors group-hover:text-signal-soft">
              <ShieldCheck size={17} strokeWidth={2.2} />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-white">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-[#9AA3B2] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeHref}
              download
              className="hidden items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-[13px] font-medium text-white transition-all hover:border-white/20 hover:bg-white/10 sm:inline-flex"
            >
              <Download size={14} />
              Resume
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/5 text-white lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-b border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#cfd6e4] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resumeHref}
                download
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-signal px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
