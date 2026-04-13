"use client";

import { useLang } from "@/lib/lang-context";
import { slide4 } from "@/content/slides";
import { User, Bot, BriefcaseBusiness, Globe } from "lucide-react";

const ICONS = {
  client: User,
  operator: Bot,
  manager: BriefcaseBusiness,
  expansion: Globe,
} as const;

const ACCENTS = {
  client: {
    border: "hover:border-np-red",
    icon: "text-np-red bg-np-red/10",
    label: "text-np-red",
    num: "bg-np-red text-paper",
  },
  operator: {
    border: "hover:border-ink",
    icon: "text-ink bg-ink/10",
    label: "text-ink/60",
    num: "bg-ink text-paper",
  },
  manager: {
    border: "hover:border-electric",
    icon: "text-electric bg-electric/10",
    label: "text-electric",
    num: "bg-electric text-paper",
  },
  expansion: {
    border: "hover:border-pop",
    icon: "text-pop bg-pop/10",
    label: "text-pop",
    num: "bg-pop text-paper",
  },
} as const;

const STAGGER = ["stagger-2", "stagger-3", "stagger-4", "stagger-5"] as const;

export function Slide4() {
  const { lang } = useLang();
  const s = slide4[lang];

  return (
    <section id="slide-4" className="slide bg-paper noise-overlay relative">
      {/* Decorative blob top-right */}
      <div className="deco-blob absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-2xl bg-np-red" />
      {/* Decorative blob bottom-left */}
      <div className="deco-blob absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full opacity-10 blur-2xl bg-electric" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <div className="mb-12 flex items-center gap-3 stagger-1">
          <span className="w-12 h-px bg-np-red" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-display-lg mb-4 max-w-5xl stagger-1">
          {lang === "ua" ? (
            <>
              Nova Post Europe: логістика як{" "}
              <em className="serif-italic text-np-red">невидимий сервіс</em>
            </>
          ) : (
            <>
              Nova Post Europe: logistics as{" "}
              <em className="serif-italic text-np-red">invisible service</em>
            </>
          )}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-14 font-light stagger-2">
          {s.subtitle}
        </p>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {s.blocks.map((block, i) => {
            const accent = ACCENTS[block.id as keyof typeof ACCENTS];
            const Icon = ICONS[block.id as keyof typeof ICONS];
            return (
              <div
                key={block.id}
                className={`group relative p-8 bg-paper-bright border border-border-soft rounded-2xl transition-all duration-300 ${accent.border} ${STAGGER[i]}`}
              >
                {/* Corner number */}
                <span
                  className={`absolute top-5 right-5 font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full ${accent.num}`}
                >
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-5 ${accent.icon}`}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <div
                  className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${accent.label}`}
                >
                  {block.label}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl mb-3 leading-tight group-hover:text-np-red transition-colors duration-300">
                  {block.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-ink-soft leading-relaxed font-light">
                  {block.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-muted uppercase tracking-widest">
        № 04 / 12
      </div>
    </section>
  );
}
