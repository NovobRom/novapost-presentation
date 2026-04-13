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

  return (
    <div className="fixed bottom-6 right-6 z-50 px-3 py-1.5 rounded-full bg-ink/80 backdrop-blur text-paper text-xs font-mono">
      {ui[lang].slideCounter(current, TOTAL_SLIDES)}
    </div>
  );
}
