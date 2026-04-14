"use client";

import { useLang } from "@/lib/lang-context";
import { slide7 } from "@/content/slides";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { useEffect, useRef, useState } from "react";

function AdoptionGap({ logistics, retail, logisticsLabel, retailLabel }: {
  logistics: string; retail: string; logisticsLabel: string; retailLabel: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const logVal = parseInt(logistics);
  const retVal = parseInt(retail);

  return (
    <div ref={ref} className="space-y-4">
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">{logisticsLabel}</span>
          <span className="font-display text-2xl text-paper/70">
            <AnimatedNumber value={logVal} suffix="%" duration={1400} />
          </span>
        </div>
        <div className="h-2 bg-paper/10 rounded-full overflow-hidden">
          <div className="h-full bg-paper/40 rounded-full transition-all duration-[1400ms] ease-out" style={{ width: visible ? `${logVal}%` : "0%" }} />
        </div>
      </div>
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-pop">{retailLabel}</span>
          <span className="font-display text-2xl text-pop">
            <AnimatedNumber value={retVal} suffix="%" duration={1800} />
          </span>
        </div>
        <div className="h-2 bg-paper/10 rounded-full overflow-hidden">
          <div className="h-full bg-pop rounded-full transition-all duration-[1800ms] ease-out delay-300" style={{ width: visible ? `${retVal}%` : "0%" }} />
        </div>
      </div>
    </div>
  );
}

export function Slide7() {
  const { lang } = useLang();
  const s = slide7[lang];

  return (
    <section id="slide-7" className="slide bg-ink text-paper noise-overlay relative">
      {/* Decorative blobs */}
      <div className="deco-blob absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-pop" />
      <div className="deco-blob absolute bottom-0 left-20 w-[350px] h-[350px] rounded-full opacity-8 blur-3xl bg-electric" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-paper/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-16 max-w-3xl stagger-1">
          {lang === "ua" ? (
            <>Трансформація <em className="serif-italic text-pop">окупається</em></>
          ) : (
            <>Transformation <em className="serif-italic text-pop">pays off</em></>
          )}
        </h2>

        {/* 4 big editorial numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 stagger-2">
          {s.stats.map((stat, i) => (
            <div key={i} className="p-6 border border-paper/10 rounded-2xl bg-paper/5 flex flex-col gap-2">
              <div className="font-display text-display-md text-pop leading-none glow-pop">
                {stat.value}
              </div>
              <div className="text-xs text-paper/60 leading-snug font-light">{stat.label}</div>
              <div className="mt-auto pt-3 border-t border-paper/10">
                <span className="font-mono text-[9px] uppercase tracking-wider text-paper/30">{stat.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: gap + warning */}
        <div className="grid md:grid-cols-2 gap-6 stagger-3">
          {/* Adoption gap */}
          <div className="p-8 border border-paper/10 rounded-2xl bg-paper/5">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-electric" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-electric">{s.gap.label}</span>
            </div>
            <p className="text-sm text-paper/60 leading-relaxed mb-6 font-light">{s.gap.body}</p>
            <AdoptionGap
              logistics={s.gap.logistics}
              retail={s.gap.retail}
              logisticsLabel={s.gap.logisticsLabel}
              retailLabel={s.gap.retailLabel}
            />
          </div>

          {/* Warning */}
          <div className="p-8 border border-np-red/30 rounded-2xl bg-np-red/5 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-np-red" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-np-red">{s.warning.label}</span>
            </div>
            <div className="font-display text-2xl md:text-3xl leading-tight mb-3">{s.warning.body}</div>
            <div className="font-mono text-[10px] text-paper/30 uppercase tracking-wider mb-4">{s.warning.source}</div>
            <p className="text-sm text-paper/50 font-light mt-auto pt-4 border-t border-paper/10 leading-relaxed">{s.warning.footnote}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 07 / 12
      </div>
    </section>
  );
}
