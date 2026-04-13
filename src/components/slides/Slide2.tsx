"use client";

import { useLang } from "@/lib/lang-context";
import { slide2 } from "@/content/slides";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export function Slide2() {
  const { lang } = useLang();
  const s = slide2[lang];

  return (
    <section id="slide-2" className="slide bg-ink text-paper noise-overlay relative">
      {/* Subtle radial glow зверху */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 blur-3xl bg-pop pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <span className="w-12 h-px bg-pop" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60">
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-xl mb-20 max-w-5xl">
          AI{" "}
          <em className="serif-italic text-paper/70">всюди.</em>
          <br />
          <span className="text-pop">Цінність</span>{" "}
          <em className="serif-italic">— рідко.</em>
        </h2>

        {/* Hero contrast — 88% vs 5%, split-screen */}
        <div className="grid md:grid-cols-2 gap-1 mb-16 border border-paper/15 rounded-xl overflow-hidden">
          {/* Left: 88% — dimmed */}
          <div className="p-8 md:p-12 bg-paper/5 relative diagonal-stripes">
            <div className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mb-4">
              {lang === "ua" ? "Поверхневе впровадження" : "Surface adoption"}
            </div>
            <div className="font-display text-[8rem] md:text-[12rem] leading-none text-paper/60 mb-3">
              <AnimatedNumber value={88} suffix="%" duration={1800} />
            </div>
            <p className="text-paper/70 text-sm md:text-base leading-snug max-w-xs">
              {s.leadStat.label}
            </p>
          </div>

          {/* Right: 5% — bright pop */}
          <div className="p-8 md:p-12 bg-pop/10 relative">
            <div className="font-mono text-[10px] uppercase tracking-widest text-pop mb-4">
              {lang === "ua" ? "Реальна цінність" : "Real value"}
            </div>
            <div className="font-display text-[8rem] md:text-[12rem] leading-none text-pop glow-pop mb-3">
              <AnimatedNumber value={5} suffix="%" duration={2200} />
            </div>
            <p className="text-paper text-sm md:text-base leading-snug max-w-xs">
              {s.contrastStat.label}
            </p>
          </div>
        </div>

        {/* Two supporting stats */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="border-l-2 border-paper/30 pl-6">
            <div className="font-display text-5xl md:text-6xl text-paper/90 mb-2">
              <AnimatedNumber value={88} suffix="%" duration={1600} />
            </div>
            <p className="text-paper/60 text-sm leading-snug">
              {s.failureStat.label}
            </p>
          </div>
          <div className="border-l-2 border-paper/30 pl-6">
            <div className="font-display text-5xl md:text-6xl text-paper/90 mb-2">
              <AnimatedNumber value={21} suffix="%" duration={1600} />
            </div>
            <p className="text-paper/60 text-sm leading-snug">
              {s.redesignStat.label}
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="border-t border-paper/20 pt-10">
          <p className="font-display text-3xl md:text-5xl text-paper leading-tight">
            {lang === "ua" ? (
              <>
                Проблема не в технологіях.
                <br />
                <em className="serif-italic text-pop">Проблема в підході.</em>
              </>
            ) : (
              <>
                The problem isn't technology.
                <br />
                <em className="serif-italic text-pop">The problem is approach.</em>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 02 / 12
      </div>
    </section>
  );
}
