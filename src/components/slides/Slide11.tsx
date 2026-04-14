"use client";

import { useLang } from "@/lib/lang-context";
import { slide11 } from "@/content/slides";

const ACCENT_MAP = {
  pop: { text: "text-pop", bg: "bg-pop", border: "border-pop/30", dot: "bg-pop", light: "bg-pop/10" },
  electric: { text: "text-electric", bg: "bg-electric", border: "border-electric/30", dot: "bg-electric", light: "bg-electric/10" },
  "np-red": { text: "text-np-red", bg: "bg-np-red", border: "border-np-red/30", dot: "bg-np-red", light: "bg-np-red/10" },
  ink: { text: "text-ink", bg: "bg-ink", border: "border-ink/30", dot: "bg-ink", light: "bg-ink/10" },
} as const;

export function Slide11() {
  const { lang } = useLang();
  const s = slide11[lang];

  return (
    <section id="slide-11" className="slide bg-paper noise-overlay relative">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-4xl stagger-1">
          {lang === "ua" ? (
            <>Перші <em className="serif-italic text-np-red">90 днів</em> на ролі</>
          ) : (
            <>First <em className="serif-italic text-np-red">90 days</em> in the role</>
          )}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14 font-light stagger-2">{s.subtitle}</p>

        {/* Timeline phases */}
        <div className="grid md:grid-cols-4 gap-5 stagger-3">
          {s.phases.map((phase, i) => {
            const ac = ACCENT_MAP[phase.accent as keyof typeof ACCENT_MAP];
            return (
              <div key={i} className="flex flex-col">
                {/* Timeline connector (desktop) */}
                <div className="hidden md:flex items-center mb-6 gap-0">
                  <div className={`w-4 h-4 rounded-full shrink-0 ${ac.dot}`} />
                  {i < s.phases.length - 1 && (
                    <div className="flex-1 h-px bg-border-soft" />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 p-6 rounded-2xl border ${ac.border} bg-paper-bright`}>
                  {/* Period */}
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${ac.text}`}>
                    {phase.period}
                  </div>
                  {/* Label */}
                  <h3 className="font-display text-xl mb-5 leading-tight">{phase.label}</h3>

                  {/* Items */}
                  <ul className="space-y-2.5 mb-5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-ink-soft/70 font-light leading-snug">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${ac.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className={`pt-4 border-t ${ac.border}`}>
                    <div className={`text-xs font-mono uppercase tracking-wider ${ac.text} leading-snug`}>
                      {phase.outcome}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 11 / 12
      </div>
    </section>
  );
}
