import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Rajas Khandake — Product Leader | Cybersecurity, Platforms & SaaS",
  description:
    "Senior Principal Product Manager building scalable product ecosystems across cybersecurity, SaaS and consumer platforms. 12+ years of measurable business impact.",
  keywords: [
    "Product Leader",
    "Director of Product",
    "Cybersecurity",
    "Platform Products",
    "SaaS",
    "Qualys",
    "Rajas Khandake",
  ],
  openGraph: {
    title: "Rajas Khandake — Product Leader",
    description:
      "Building scalable product ecosystems across cybersecurity, SaaS & consumer platforms.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05080F",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
