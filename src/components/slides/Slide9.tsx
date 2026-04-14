"use client";

import { useLang } from "@/lib/lang-context";
import { slide9 } from "@/content/slides";

const ACCENT_MAP = {
  pop: {
    tag: "bg-pop/10 text-pop border-pop/20",
    number: "text-pop",
    border: "border-pop/20",
    hover: "hover:border-pop/50",
    line: "bg-pop",
    icon: "bg-pop",
  },
  electric: {
    tag: "bg-electric/10 text-electric border-electric/20",
    number: "text-electric",
    border: "border-electric/20",
    hover: "hover:border-electric/50",
    line: "bg-electric",
    icon: "bg-electric",
  },
  "np-red": {
    tag: "bg-np-red/10 text-np-red border-np-red/20",
    number: "text-np-red",
    border: "border-np-red/20",
    hover: "hover:border-np-red/50",
    line: "bg-np-red",
    icon: "bg-np-red",
  },
} as const;

const STAGGER = ["stagger-2", "stagger-3", "stagger-4"] as const;

export function Slide9() {
  const { lang } = useLang();
  const s = slide9[lang];

  return (
    <section id="slide-9" className="slide bg-paper noise-overlay relative">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-4xl stagger-1">
          {s.titleParts.plain}{" "}
          <em className="serif-italic text-np-red">{s.titleParts.italic}</em>
          {s.titleParts.after && ` ${s.titleParts.after}`}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14 font-light stagger-2">{s.subtitle}</p>

        {/* Three large cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {s.mechanisms.map((m, i) => {
            const ac = ACCENT_MAP[m.accent as keyof typeof ACCENT_MAP];
            return (
              <div
                key={m.number}
                className={`relative flex flex-col p-8 bg-paper-bright border rounded-2xl transition-all duration-300 ${ac.border} ${ac.hover} ${STAGGER[i]}`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-px ${ac.line}`} />

                {/* Number + tag row */}
                <div className="flex items-center justify-between mb-6 mt-2">
                  <span className={`font-mono text-4xl font-light ${ac.number}`}>{m.number}</span>
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${ac.tag}`}>
                    {m.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl leading-tight mb-4">{m.title}</h3>

                {/* Body */}
                <p className="text-sm text-ink-soft/70 leading-relaxed font-light flex-1">{m.body}</p>

                {/* Bottom dot indicator */}
                <div className="mt-6 pt-5 border-t border-border-soft">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${ac.icon}`} />
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${ac.number}`}>{m.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 09 / 12
      </div>
    </section>
  );
}
