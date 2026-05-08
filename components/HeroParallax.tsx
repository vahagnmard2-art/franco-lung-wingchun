"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/LenisProvider";

export default function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = el.parentElement;
    if (!hero) return;

    el.style.willChange = "transform";

    function update() {
      if (!el || !hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress = -rect.top / hero.offsetHeight;
      el.style.transform = `translateY(${Math.min(Math.max(progress * 25, 0), 25)}%)`;
    }

    if (lenis) {
      lenis.on("scroll", update);
      update();
      return () => {
        lenis.off("scroll", update);
        if (el) el.style.willChange = "";
      };
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      if (el) el.style.willChange = "";
    };
  }, [lenis]);

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
    </div>
  );
}
