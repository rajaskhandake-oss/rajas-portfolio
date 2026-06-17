@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  @apply bg-ink text-[#EAEEF5] font-sans antialiased;
  background-image:
    radial-gradient(60% 50% at 50% -10%, rgba(91, 140, 255, 0.12), transparent 60%),
    radial-gradient(45% 35% at 85% 8%, rgba(255, 51, 88, 0.1), transparent 60%);
  background-attachment: fixed;
}

::selection {
  background: rgba(255, 51, 88, 0.3);
}

/* Thin, refined scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #05080f;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  border: 2px solid #05080f;
}

@layer components {
  .container-page {
    @apply mx-auto w-full max-w-container px-6 sm:px-8;
  }

  .glass {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .glass-hover {
    transition: border-color 0.4s ease, transform 0.4s ease,
      background 0.4s ease, box-shadow 0.4s ease;
  }
  .glass-hover:hover {
    border-color: rgba(255, 255, 255, 0.16);
    transform: translateY(-4px);
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.8);
  }

  .eyebrow {
    @apply font-mono text-[11px] uppercase tracking-[0.28em] text-signal-soft/80;
  }

  .hairline {
    @apply h-px w-full bg-line;
  }
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(120deg, #ffffff 0%, #c8d2e6 45%, #8da6ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .text-gradient-signal {
    background: linear-gradient(120deg, #ff6b83 0%, #ff3358 60%, #c81e45 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .grid-bg {
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 56px 56px;
    -webkit-mask-image: radial-gradient(70% 70% at 50% 35%, #000 30%, transparent 100%);
    mask-image: radial-gradient(70% 70% at 50% 35%, #000 30%, transparent 100%);
  }

  .mask-fade-b {
    -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 70%, transparent 100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
