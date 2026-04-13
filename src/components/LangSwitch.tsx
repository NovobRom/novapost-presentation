"use client";

import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/slides";

export function LangSwitch() {
  const { lang, toggle } = useLang();
  const t = ui[lang];

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-ink text-paper font-mono text-xs tracking-widest uppercase hover:bg-np-red transition-all duration-300 shadow-xl border border-paper/10 hover:scale-105"
      aria-label="Switch language"
    >
      {t.langSwitch}
    </button>
  );
}
