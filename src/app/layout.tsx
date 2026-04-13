import type { Metadata } from "next";
import { LangProvider } from "@/lib/lang-context";
import { LangSwitch } from "@/components/LangSwitch";
import { SlideCounter } from "@/components/SlideCounter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Change Leadership · Nova Post · Roman Novobranets",
  description:
    "AI Evangelist application — strategic vision for transforming Nova Post into the world's most innovative logistics player.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
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
