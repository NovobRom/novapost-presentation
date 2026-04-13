"use client";

import { useLang } from "@/lib/lang-context";
import { slide1, ui } from "@/content/slides";

export function Slide1() {
  const { lang } = useLang();
  const s = slide1[lang];
  const t = ui[lang];

  return (
    <section id="slide-1" className="slide grid-bg bg-paper">
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-np-red" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted font-medium">
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-display-xl text-ink mb-6">
          {s.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-ink-soft max-w-3xl leading-snug font-light mb-20">
          {s.subtitle}
        </p>

        {/* Big stat block */}
        <div className="border-t border-border-soft pt-12 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-[8rem] md:text-[12rem] leading-none font-display font-bold text-np-red">
              {s.bigStat}
            </div>
            <p className="text-base md:text-lg text-ink-soft max-w-md mt-2">
              {s.bigStatLabel}
            </p>
            <p className="text-xs text-muted mt-3 font-mono">{s.bigStatSource}</p>
          </div>

          <div className="md:text-right space-y-1">
            <p className="text-sm text-muted">{t.author}</p>
            <p className="text-sm text-muted">{t.role} · {t.company}</p>
            <p className="text-sm text-muted">{t.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
