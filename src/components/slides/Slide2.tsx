"use client";

import { useLang } from "@/lib/lang-context";
import { slide2 } from "@/content/slides";

export function Slide2() {
  const { lang } = useLang();
  const s = slide2[lang];

  return (
    <section id="slide-2" className="slide bg-ink text-paper">
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-np-red" />
          <span className="text-xs uppercase tracking-[0.2em] text-paper/60 font-medium">
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-display-lg mb-16 max-w-4xl">
          {s.title}
        </h2>

        {/* Two main contrasting stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-paper/20 p-8 rounded-lg">
            <div className="text-7xl md:text-8xl font-display font-bold text-paper/60 mb-3">
              {s.leadStat.value}
            </div>
            <p className="text-paper/80 text-base leading-snug">
              {s.leadStat.label}
            </p>
          </div>

          <div className="border border-np-red p-8 rounded-lg bg-np-red/5">
            <div className="text-7xl md:text-8xl font-display font-bold text-np-red mb-3">
              {s.contrastStat.value}
            </div>
            <p className="text-paper text-base leading-snug">
              {s.contrastStat.label}
            </p>
          </div>
        </div>

        {/* Two supporting stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-display font-bold text-paper/80">
              {s.failureStat.value}
            </span>
            <p className="text-paper/70 text-sm leading-snug">
              {s.failureStat.label}
            </p>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-display font-bold text-paper/80">
              {s.redesignStat.value}
            </span>
            <p className="text-paper/70 text-sm leading-snug">
              {s.redesignStat.label}
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="border-t border-paper/20 pt-8">
          <p className="text-2xl md:text-3xl font-display font-light text-paper">
            {s.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
