"use client";

import { useLang } from "@/lib/lang-context";
import { slide3 } from "@/content/slides";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { useEffect, useRef, useState } from "react";

function BarChart() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {/* Bar 1: без редизайну */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
            {visible ? "Without redesign" : ""}
          </span>
          <span className="font-display text-2xl text-ink/70">
            <AnimatedNumber value={12} suffix="%" duration={1400} />
          </span>
        </div>
        <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-ink/40 rounded-full transition-all duration-[1400ms] ease-out"
            style={{ width: visible ? "12%" : "0%" }}
          />
        </div>
      </div>

      {/* Bar 2: з редизайном */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-pop">
            {visible ? "With workflow redesign" : ""}
          </span>
          <span className="font-display text-2xl text-pop">
            <AnimatedNumber value={34} suffix="%" duration={1800} />
          </span>
        </div>
        <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-pop rounded-full transition-all duration-[1800ms] ease-out delay-300"
            style={{ width: visible ? "34%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

export function Slide3() {
  const { lang } = useLang();
  const s = slide3[lang];

  return (
    <section id="slide-3" className="slide bg-paper noise-overlay relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            {s.eyebrow}
          </span>
        </div>

        {/* Title - editorial style з italic */}
        <h2 className="font-display text-display-lg mb-6 max-w-4xl">
          {lang === "ua" ? (
            <>
              Три патерни <em className="serif-italic text-np-red">AI-лідерів</em>
            </>
          ) : (
            <>
              Three patterns of <em className="serif-italic text-np-red">AI leaders</em>
            </>
          )}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-16 font-light">
          {s.subtitle}
        </p>

        {/* Three patterns - асиметричні картки */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {s.patterns.map((p, i) => (
            <div
              key={p.number}
              className={`relative p-8 bg-paper-bright border border-border-soft rounded-2xl hover:border-np-red transition-all duration-300 group ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              {/* Number badge */}
              <div className="absolute -top-4 left-6 px-3 py-1 bg-ink text-paper font-mono text-xs rounded-full">
                {p.number}
              </div>

              <h3 className="font-display text-2xl mb-4 leading-tight mt-2 group-hover:text-np-red transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Proof block - InPost з bar chart */}
        <div className="bg-ink text-paper rounded-2xl p-8 md:p-12 grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center relative overflow-hidden">
          {/* Decorative gradient corner */}
          <div className="deco-blob absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl bg-pop" />

          <div className="relative z-10">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="w-8 h-px bg-pop" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-pop">
                {s.proof.title}
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl leading-snug">
              {s.proof.body}
            </p>
            <p className="text-[10px] text-paper/50 mt-4 font-mono uppercase tracking-wider">
              {s.proof.source}
            </p>
          </div>

          <div className="relative z-10">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 03 / 12
      </div>
    </section>
  );
}
