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
        <div className="mb-6 lg:mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-3 lg:mb-4 max-w-4xl stagger-1">
          {s.titleParts.plain}{" "}
          <em className="serif-italic text-np-red">{s.titleParts.italic}</em>
          {s.titleParts.after && ` ${s.titleParts.after}`}
        </h2>
        <p className="text-sm lg:text-base text-muted max-w-2xl mb-6 lg:mb-10 font-light stagger-2">{s.subtitle}</p>

        {/* Timeline phases */}
        <div className="grid md:grid-cols-4 gap-3 lg:gap-5 stagger-3">
          {s.phases.map((phase, i) => {
            const ac = ACCENT_MAP[phase.accent as keyof typeof ACCENT_MAP];
            return (
              <div key={i} className="flex flex-col">
                {/* Timeline connector (desktop, hidden on short screens via CSS) */}
                <div className="hidden md:flex items-center mb-4 lg:mb-6 gap-0 timeline-connector">
                  <div className={`w-3 lg:w-4 h-3 lg:h-4 rounded-full shrink-0 ${ac.dot}`} />
                  {i < s.phases.length - 1 && (
                    <div className="flex-1 h-px bg-border-soft" />
                  )}
                </div>

                {/* Card */}
                <div className={`flex-1 flex flex-col p-3 lg:p-5 rounded-2xl border ${ac.border} bg-paper-bright`}>
                  {/* Period */}
                  <div className={`font-mono text-[9px] lg:text-[10px] uppercase tracking-widest mb-1 ${ac.text}`}>
                    {phase.period}
                  </div>
                  {/* Label */}
                  <h3 className="font-display text-base lg:text-xl mb-3 lg:mb-5 leading-tight">{phase.label}</h3>

                  {/* Items */}
                  <ul className="space-y-1.5 lg:space-y-2.5 mb-3 lg:mb-5 flex-1">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-xs lg:text-sm text-ink-soft/70 font-light leading-snug">
                        <span className={`mt-1 lg:mt-1.5 w-1 lg:w-1.5 h-1 lg:h-1.5 rounded-full shrink-0 ${ac.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className={`mt-auto pt-3 lg:pt-4 border-t ${ac.border}`}>
                    <div className={`text-[10px] lg:text-xs font-mono uppercase tracking-wider ${ac.text} leading-snug`}>
                      {phase.outcome}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decisions — compact horizontal strip */}
        <div className="mt-6 lg:mt-10 pt-4 lg:pt-6 border-t border-border-soft stagger-4">
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <span className="w-8 h-px bg-ink/40" />
            <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-ink/50">
              {s.decisions.eyebrow}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {s.decisions.items.map((item) => (
              <div
                key={item.number}
                className="flex gap-3 p-3 bg-paper-bright border border-border-soft rounded-xl items-start"
              >
                <span className="font-mono text-lg font-light text-np-red/40 shrink-0 leading-none mt-0.5">{item.number}</span>
                <div className="min-w-0">
                  <h4 className="font-display text-sm leading-tight mb-1">{item.title}</h4>
                  <p className="text-[11px] text-ink-soft/60 leading-snug font-light">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 11 / 12
      </div>
    </section>
  );
}
