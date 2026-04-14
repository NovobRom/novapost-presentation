"use client";

import { useLang } from "@/lib/lang-context";
import { slide8 } from "@/content/slides";

export function Slide8() {
  const { lang } = useLang();
  const s = slide8[lang];

  return (
    <section id="slide-8" className="slide bg-paper noise-overlay relative">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-4xl stagger-1">
          {lang === "ua" ? (
            <>Технологія: 20%. <em className="serif-italic text-np-red">Люди: 80%.</em></>
          ) : (
            <>Technology is 20%. <em className="serif-italic text-np-red">People are 80%.</em></>
          )}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14 font-light stagger-2">{s.subtitle}</p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 stagger-3">
          {/* Left: Problems */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-2 h-2 rounded-full bg-np-red" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-np-red">{s.problemsLabel}</span>
            </div>
            <div className="space-y-4">
              {s.problems.map((p) => (
                <div key={p.number} className="flex gap-4 p-5 bg-np-red/5 border border-np-red/15 rounded-xl group hover:border-np-red/40 transition-colors duration-200">
                  <span className="font-mono text-xs text-np-red/50 shrink-0 mt-0.5">{p.number}</span>
                  <div>
                    <h3 className="font-display text-lg leading-tight mb-1.5 group-hover:text-np-red transition-colors">{p.title}</h3>
                    <p className="text-sm text-ink-soft/70 leading-relaxed font-light">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-2 h-2 rounded-full bg-electric" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-electric">{s.solutionsLabel}</span>
            </div>
            <div className="space-y-4">
              {s.solutions.map((sol) => (
                <div key={sol.number} className="flex gap-4 p-5 bg-electric/5 border border-electric/15 rounded-xl group hover:border-electric/40 transition-colors duration-200">
                  <span className="font-mono text-xs text-electric/50 shrink-0 mt-0.5">{sol.number}</span>
                  <div>
                    <h3 className="font-display text-lg leading-tight mb-1.5 group-hover:text-electric transition-colors">{sol.title}</h3>
                    <p className="text-sm text-ink-soft/70 leading-relaxed font-light">{sol.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 08 / 12
      </div>
    </section>
  );
}
