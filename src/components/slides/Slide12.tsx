"use client";

import { useLang } from "@/lib/lang-context";
import { slide12 } from "@/content/slides";

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 inline-block ml-1 opacity-50" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Slide12() {
  const { lang } = useLang();
  const s = slide12[lang];

  return (
    <section id="slide-12" className="slide bg-ink text-paper noise-overlay relative">
      {/* Decorative large blob — editorial portrait feel */}
      <div className="deco-blob absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.06] blur-3xl bg-np-red" />
      <div className="deco-blob absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl bg-electric" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-paper/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">{s.eyebrow}</span>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          {/* Left: Identity + bio */}
          <div>
            {/* Name */}
            <h2 className="font-display text-display-xl mb-3 stagger-1">
              {lang === "ua" ? (
                <>Роман <em className="serif-italic text-np-red">Новобранець</em></>
              ) : (
                <>Roman <em className="serif-italic text-np-red">Novobranets</em></>
              )}
            </h2>

            {/* Role + company */}
            <div className="flex items-center gap-3 mb-8 stagger-2">
              <span className="font-mono text-xs text-paper/50 uppercase tracking-widest">{s.role}</span>
              <span className="w-1 h-1 rounded-full bg-paper/20" />
              <span className="font-mono text-xs text-np-red uppercase tracking-widest">{s.company}</span>
            </div>

            {/* Quote — editorial highlight */}
            <blockquote className="font-display text-xl md:text-2xl text-paper/80 leading-snug mb-8 pl-5 border-l-2 border-np-red stagger-2">
              {s.quote}
            </blockquote>

            {/* Bio */}
            <p className="text-base text-paper/60 leading-relaxed font-light mb-10 stagger-3">{s.bio}</p>

            {/* Journey timeline — horizontal */}
            <div className="stagger-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-paper/30 mb-5">Timeline</div>
              <div className="space-y-3">
                {s.journey.map((j) => (
                  <div key={j.year} className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-np-red shrink-0 w-10">{j.year}</span>
                    <span className="w-5 h-px bg-paper/20 shrink-0 self-center" />
                    <span className="text-sm text-paper/60 font-light leading-snug">{j.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Projects + LinkedIn */}
          <div className="stagger-3">
            {/* Projects */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-electric" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-electric">{s.projects.label}</span>
              </div>

              <div className="space-y-3">
                {s.projects.items.map((proj, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-paper/10 bg-paper/5 hover:border-paper/25 transition-colors duration-200 group">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                      <span className="font-display text-base">{proj.title}</span>
                    </div>
                    {proj.url ? (
                      <a
                        href={`https://${proj.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-paper/30 group-hover:text-electric transition-colors truncate max-w-[160px]"
                      >
                        {proj.url}
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-paper/30 italic">{proj.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href={`https://${s.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl border border-electric/30 bg-electric/5 hover:bg-electric/10 hover:border-electric/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* LinkedIn icon */}
                <div className="w-10 h-10 rounded-xl bg-electric flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-paper">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display text-base">{s.linkedinLabel}</div>
                  <div className="font-mono text-xs text-paper/40">{s.linkedin}</div>
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-electric opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-paper/40 uppercase tracking-widest">
        № 12 / 12
      </div>
    </section>
  );
}
