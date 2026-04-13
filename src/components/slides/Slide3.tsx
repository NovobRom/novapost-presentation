"use client";

import { useLang } from "@/lib/lang-context";
import { slide3 } from "@/content/slides";

export function Slide3() {
  const { lang } = useLang();
  const s = slide3[lang];

  return (
    <section id="slide-3" className="slide bg-paper">
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-np-red" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted font-medium">
            {s.eyebrow}
          </span>
        </div>

        {/* Title + subtitle */}
        <h2 className="font-display font-bold text-display-lg mb-4 max-w-3xl">
          {s.title}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-16">
          {s.subtitle}
        </p>

        {/* Three patterns */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {s.patterns.map((p) => (
            <div key={p.number} className="border-t-2 border-ink pt-6">
              <div className="text-xs font-mono text-np-red mb-3">{p.number}</div>
              <h3 className="text-xl font-display font-semibold mb-3 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Proof block */}
        <div className="bg-accent-soft border-l-4 border-accent p-8 rounded-r-lg">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-xs uppercase tracking-wider text-accent font-semibold">
              {s.proof.title}
            </span>
          </div>
          <p className="text-lg md:text-xl text-ink leading-snug font-light">
            {s.proof.body}
          </p>
          <p className="text-xs text-muted mt-3 font-mono">{s.proof.source}</p>
        </div>
      </div>
    </section>
  );
}
