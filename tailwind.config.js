/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05080F",
        "ink-2": "#070C16",
        panel: "#0A1020",
        signal: {
          DEFAULT: "#FF3358",
          soft: "#FF6B83",
          deep: "#C81E45",
        },
        azure: {
          DEFAULT: "#5B8CFF",
          soft: "#8DACFF",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1180px",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(255,51,88,0.45)",
        "glow-azure": "0 0 60px -15px rgba(91,140,255,0.45)",
        card: "0 30px 60px -30px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 14s linear infinite",
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.4,0,0.2,1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
