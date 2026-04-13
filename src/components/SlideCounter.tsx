"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/slides";

const TOTAL_SLIDES = 12;

export function SlideCounter() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Array.from(slides).indexOf(entry.target as Element);
            if (idx !== -1) setCurrent(idx + 1);
          }
        });
      },
      { threshold: [0.5] }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const progress = (current / TOTAL_SLIDES) * 100;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-ink/85 backdrop-blur-md border border-paper/10 shadow-xl">
      <div className="w-16 h-1 bg-paper/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-pop transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-paper font-mono text-xs tracking-widest">
        {ui[lang].slideCounter(current, TOTAL_SLIDES)}
      </span>
    </div>
  );
}
