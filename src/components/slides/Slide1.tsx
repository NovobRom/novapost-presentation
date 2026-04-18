"use client";

import { useLang } from "@/lib/lang-context";
import { slide1, ui } from "@/content/slides";

export function Slide1() {
  const { lang } = useLang();
  const s = slide1[lang];
  const t = ui[lang];

  return (
    <section id="slide-1" className="slide bg-paper noise-overlay relative">
      {/* Декоративний gradient mesh кружок зверху-справа */}
      <div className="deco-blob absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-2xl gradient-mesh" />

      {/* Маленький електричний акцент знизу-зліва */}
      <div className="deco-blob absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15 blur-2xl bg-electric" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-16 flex items-center gap-3 stagger-1">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
            {s.eyebrow}
          </span>
          <span className="flex-1 max-w-[120px] h-px bg-ink/20" />
        </div>

        {/* Title - великий serif display */}
        <h1 className="font-display text-display-2xl text-ink mb-8 stagger-2">
          {s.title.split(" ").map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? <em className="serif-italic">{word}</em> : word}
              {i < arr.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-2xl text-ink-soft max-w-3xl leading-snug font-light mb-24 stagger-3">
          {s.subtitle}
        </p>

        {/* Big stat block - split layout */}
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-end stagger-4">
          <div>
            <div className="font-display text-[10rem] md:text-[15rem] leading-[0.85] text-pop glow-pop number-reveal">
              5%
            </div>
            <p className="text-base md:text-lg text-ink-soft max-w-md mt-4 font-medium leading-snug">
              {s.bigStatLabel}
            </p>
            <p className="text-[10px] text-muted mt-3 font-mono uppercase tracking-wider">
              {s.bigStatSource}
            </p>
          </div>

          <div className="md:text-right space-y-2 self-end pb-4">
            <p className="font-display text-2xl text-ink italic">{t.author}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted">
              {t.role}
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted">
              {t.company}
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-soft pt-3">
              {t.date}
            </p>
          </div>
        </div>
      </div>

      {/* Editorial footer мітка */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 01 / 12
      </div>
    </section>
  );
}
