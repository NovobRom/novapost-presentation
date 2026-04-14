"use client";
import { useEffect } from "react";

export function KeyboardNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key)) return;
      const slides = document.querySelectorAll(".slide");
      const container = document.querySelector(".slides-container");
      if (!container) return;
      const current = Array.from(slides).findIndex((s) => {
        const rect = s.getBoundingClientRect();
        return rect.top >= -100 && rect.top < window.innerHeight / 2;
      });
      if (current === -1) return;
      e.preventDefault();
      const next =
        e.key === "ArrowDown" || e.key === "PageDown" ? current + 1 : current - 1;
      const target = slides[next];
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
