import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Geist } from "next/font/google";
import { LangProvider } from "@/lib/lang-context";
import { LangSwitch } from "@/components/LangSwitch";
import { SlideCounter } from "@/components/SlideCounter";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Change Leadership · Nova Post · Roman Novobranets",
  description:
    "AI Evangelist application for Nova Post Europe. Strategic vision for transforming Nova Post into the world's most innovative logistics player.",
  openGraph: {
    title: "Change Leadership - Nova Post Europe",
    description: "AI Evangelist application by Roman Novobranets",
    siteName: "Nova Post AI Evangelist",
    type: "website",
    locale: "uk_UA",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Change Leadership - Nova Post Europe",
    description: "AI Evangelist application by Roman Novobranets",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${instrument.variable} ${jetbrains.variable} ${geist.variable}`}>
      <body className="font-sans">
        <LangProvider>
          <LangSwitch />
          <SlideCounter />
          <main className="slides-container no-scrollbar">
            {children}
          </main>
        </LangProvider>
      </body>
    </html>
  );
}
