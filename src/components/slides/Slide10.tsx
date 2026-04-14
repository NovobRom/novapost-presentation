"use client";

import { useLang } from "@/lib/lang-context";
import { slide10 } from "@/content/slides";

const STATUS_STYLES = {
  critical: "bg-np-red/10 text-np-red border-np-red/20",
  required: "bg-pop/10 text-pop border-pop/20",
  standard: "bg-electric/10 text-electric border-electric/20",
} as const;

const BORDER_STYLES = {
  critical: "border-np-red/20 hover:border-np-red/50",
  required: "border-pop/20 hover:border-pop/50",
  standard: "border-electric/20 hover:border-electric/50",
} as const;

const DOT_STYLES = {
  critical: "bg-np-red",
  required: "bg-pop",
  standard: "bg-electric",
} as const;

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Slide10() {
  const { lang } = useLang();
  const s = slide10[lang];

  return (
    <section id="slide-10" className="slide bg-ink text-paper noise-overlay relative">
      {/* Decorative blobs */}
      <div className="deco-blob absolute top-10 right-10 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl bg-electric" />
      <div className="deco-blob absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-6 blur-3xl bg-np-red" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-paper/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">{s.eyebrow}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-4xl stagger-1">
          {lang === "ua" ? (
            <>AI без <em className="serif-italic text-np-red">контролю</em> - ризик, не перевага</>
          ) : (
            <>AI without <em className="serif-italic text-np-red">control</em> is a risk, not an advantage</>
          )}
        </h2>
        <p className="text-base md:text-lg text-paper/50 max-w-2xl mb-14 font-light stagger-2">{s.subtitle}</p>

        {/* Checklist grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-3">
          {s.checks.map((check) => {
            const statusStyle = STATUS_STYLES[check.status as keyof typeof STATUS_STYLES];
            const borderStyle = BORDER_STYLES[check.status as keyof typeof BORDER_STYLES];
            const dotStyle = DOT_STYLES[check.status as keyof typeof DOT_STYLES];

            return (
              <div
                key={check.id}
                className={`p-6 rounded-2xl border bg-paper/5 transition-all duration-300 ${borderStyle}`}
              >
                {/* Header row */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`mt-0.5 shrink-0 w-5 h-5 ${dotStyle} rounded-full flex items-center justify-center`}>
                    <ShieldIcon className="w-3 h-3 text-paper" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg leading-tight">{check.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-paper/60 leading-relaxed font-light mb-4">{check.body}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-paper/10">
                  <span className="font-mono text-[9px] text-paper/30 uppercase tracking-wider">{check.source}</span>
                  <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusStyle}`}>
                    {s.statusLabels[check.status as keyof typeof s.statusLabels]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 10 / 12
      </div>
    </section>
  );
}
