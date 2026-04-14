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
    "AI Evangelist application - strategic vision for transforming Nova Post into the world's most innovative logistics player.",
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
