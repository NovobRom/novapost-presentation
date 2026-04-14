"use client";

import { useLang } from "@/lib/lang-context";
import { slide5 } from "@/content/slides";

const ACCENT_COLORS = [
  {
    label: "text-pop",
    period: "text-pop/60",
    border: "border-pop/30",
    bar: "bg-pop",
    metric: "text-pop",
    dot: "bg-pop",
  },
  {
    label: "text-electric",
    period: "text-electric/60",
    border: "border-electric/30",
    bar: "bg-electric",
    metric: "text-electric",
    dot: "bg-electric",
  },
  {
    label: "text-np-red",
    period: "text-np-red/60",
    border: "border-np-red/30",
    bar: "bg-np-red",
    metric: "text-np-red",
    dot: "bg-np-red",
  },
] as const;

const STAGGER = ["stagger-2", "stagger-3", "stagger-4"] as const;

export function Slide5() {
  const { lang } = useLang();
  const s = slide5[lang];

  return (
    <section id="slide-5" className="slide bg-ink text-paper noise-overlay relative">
      {/* Decorative blobs */}
      <div className="deco-blob absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-10 blur-2xl bg-electric" />
      <div className="deco-blob absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-2xl bg-pop" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-paper/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-4xl stagger-1">
          {lang === "ua" ? (
            <>
              Три горизонти{" "}
              <em className="serif-italic text-paper/60">трансформації</em>
            </>
          ) : (
            <>
              Three Horizons of{" "}
              <em className="serif-italic text-paper/60">Transformation</em>
            </>
          )}
        </h2>
        <p className="text-base md:text-lg text-paper/50 max-w-2xl mb-16 font-light stagger-2">
          {s.subtitle}
        </p>

        {/* Horizontal progress connector (desktop only) */}
        <div className="hidden md:block relative mb-0">
          <div className="absolute top-[2.75rem] left-[calc(33.333%+1rem)] right-[calc(33.333%+1rem)] h-px bg-paper/10" />
        </div>

        {/* 3-column timeline */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-4">
          {s.horizons.map((h, i) => {
            const ac = ACCENT_COLORS[i];
            const isMiddle = i === 1;
            return (
              <div
                key={h.label}
                className={`relative flex flex-col p-7 rounded-2xl border bg-paper/5 backdrop-blur-sm transition-all duration-300 hover:bg-paper/10 ${ac.border} ${STAGGER[i]} ${isMiddle ? "md:translate-y-5" : ""}`}
              >
                {/* H-label large */}
                <div className={`font-display text-[5rem] md:text-[6rem] leading-none font-light mb-1 ${ac.label}`}>
                  {h.label}
                </div>

                {/* Period */}
                <div className={`font-mono text-[10px] uppercase tracking-widest mb-5 ${ac.period}`}>
                  {h.period}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl text-paper leading-tight mb-4">
                  {h.title}
                </h3>

                {/* Body with highlight */}
                <p className="text-sm text-paper/60 leading-relaxed font-light flex-1">
                  {h.highlight ? (
                    <>
                      {h.body.split(h.highlight).map((part, pi, arr) => (
                        <span key={pi}>
                          {part}
                          {pi < arr.length - 1 && (
                            <span className={`font-semibold font-mono ${ac.metric}`}>
                              {h.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </>
                  ) : (
                    h.body
                  )}
                </p>

                {/* Metric */}
                <div className={`mt-6 pt-5 border-t ${ac.border}`}>
                  <div className={`flex items-center gap-2 text-xs font-mono ${ac.metric}`}>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
                    {h.metric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 05 / 12
      </div>
    </section>
  );
}
