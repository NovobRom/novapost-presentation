"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "@/content/slides";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ua");

  useEffect(() => {
    // Завантажуємо збережений вибір мови (працює тільки в браузері)
    if (typeof window !== "undefined") {
      const saved = window.localStorage?.getItem("np-lang") as Lang | null;
      if (saved === "ua" || saved === "en") setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      try {
        window.localStorage?.setItem("np-lang", l);
      } catch {
        /* ignore */
      }
    }
  };

  const toggle = () => setLang(lang === "ua" ? "en" : "ua");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
