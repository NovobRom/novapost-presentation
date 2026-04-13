"use client";

type PlaceholderProps = {
  number: number;
  titleUa: string;
  titleEn: string;
};

import { useLang } from "@/lib/lang-context";

export function SlidePlaceholder({ number, titleUa, titleEn }: PlaceholderProps) {
  const { lang } = useLang();
  const title = lang === "ua" ? titleUa : titleEn;
  const note = lang === "ua" ? "Слайд у розробці" : "Slide in progress";

  return (
    <section id={`slide-${number}`} className="slide bg-paper-dim">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-xs font-mono text-muted mb-4">
          SLIDE {String(number).padStart(2, "0")}
        </div>
        <h2 className="font-display font-bold text-display-md mb-6 text-ink">
          {title}
        </h2>
        <p className="text-sm text-muted-soft uppercase tracking-wider">{note}</p>
      </div>
    </section>
  );
}
