"use client";

import { useLang } from "@/lib/lang-context";

type PlaceholderProps = {
  number: number;
  titleUa: string;
  titleEn: string;
};

export function SlidePlaceholder({ number, titleUa, titleEn }: PlaceholderProps) {
  const { lang } = useLang();
  const title = lang === "ua" ? titleUa : titleEn;
  const note = lang === "ua" ? "У розробці" : "In progress";

  return (
    <section id={`slide-${number}`} className="slide bg-paper-dim noise-overlay relative dot-grid">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            № {String(number).padStart(2, "0")} / 12
          </span>
          <span className="flex-1 max-w-[120px] h-px bg-ink/20" />
        </div>
        <h2 className="font-display text-display-md mb-8 text-ink/40 max-w-3xl">
          {title}
        </h2>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink/5 border border-border-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-pop animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {note}
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted/60 uppercase tracking-widest">
        № {String(number).padStart(2, "0")} / 12
      </div>
    </section>
  );
}
