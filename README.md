# Rajas Khandake — Product Leadership Portfolio

A premium, single-page executive portfolio positioning a senior product leader for a
Director / Senior Product Leadership role in cybersecurity. Built to feel like the
modern SaaS aesthetic (Stripe / Linear / Vercel / Notion): clean, dark, glassmorphic,
with smooth motion and interactive architecture diagrams. 

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion** (scroll reveals, staggered hero, animated diagram)
- **lucide-react** (icons)
- Fully responsive · dark theme · `prefers-reduced-motion` respected

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm run start
```

## Add your resume

Place your PDF in `/public` as `Rajas-Khandake-Resume.pdf` (or change `resumeHref`
in `lib/content.js`). The "Download Resume" buttons link to it.

## Structure

```
app/
  layout.jsx        Fonts + metadata
  page.jsx          Single-page section assembly
  globals.css       Theme tokens, glass utilities, grid background
components/
  Navbar, Hero, LeadershipJourney, ProductEcosystems,
  PlatformExperience (signature animated diagram),
  OperatingModel (Strategy → Scale loop), BusinessImpact,
  Leadership, Awards, WhyQualys, Footer
  ui/  Reveal, AnimatedCounter, Section, SectionHeading
lib/
  content.js        All copy & data — edit here to update the site
```

## Editing content

Everything is centralized in **`lib/content.js`** — metrics, timeline, ecosystems,
platform nodes, KPIs, awards and the Why Qualys section. Components are presentational,
so updating numbers or wording never requires touching JSX.

## Deploy

Push to GitHub and import into **Vercel** — zero config. Or `npm run build` and host
the output anywhere that runs Node.

## Design notes

- **Accent system encodes meaning**: crimson "signal" = security / impact, azure =
  platform / infrastructure.
- **Typography**: Space Grotesk (display) · Inter (body) · JetBrains Mono (data &
  labels) for an engineering/telemetry register.
- **Signature element**: the MetaProtect platform topology in section 3 — an
  interactive radial diagram with flowing connection lines.
