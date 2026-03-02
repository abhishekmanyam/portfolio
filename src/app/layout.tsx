import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek M — AI Engineer",
  description:
    "Building production-grade agentic AI systems — from multi-agent orchestration to real-time inference pipelines.",
  metadataBase: new URL("https://abhishek.dev"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Abhishek M — AI Engineer",
    description: "Building production-grade agentic AI systems — from multi-agent orchestration to real-time inference pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${outfit.variable} ${jetbrains.variable} bg-bg-deep text-text-primary antialiased`}
      >
        {children}

        {/* Film grain overlay */}
        <div className="film-grain" aria-hidden="true" />
        {/* Vignette overlay */}
        <div className="vignette" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
