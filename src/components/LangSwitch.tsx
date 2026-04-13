"use client";

import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/slides";

export function LangSwitch() {
  const { lang, toggle } = useLang();
  const t = ui[lang];

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-ink text-paper text-sm font-medium tracking-wide hover:bg-np-red transition-colors duration-200 shadow-lg"
      aria-label="Switch language"
    >
      {t.langSwitch}
    </button>
  );
}
