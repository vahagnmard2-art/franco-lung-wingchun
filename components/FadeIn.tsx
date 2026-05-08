"use client";

import { useRef, useEffect } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight - 60;

      if (alreadyVisible) return;

      el.classList.add("fade-in-hidden", `fade-in-${direction}`);
      if (delay > 0) el.style.animationDelay = `${delay}s`;

      const reveal = () => {
        el.classList.remove("fade-in-hidden");
        el.classList.add("fade-in-visible");
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
            clearTimeout(safety);
          }
        },
        { rootMargin: "-60px 0px" }
      );
      observer.observe(el);

      // If the observer never fires (fast scroll past, rootMargin edge case,
      // deferred IO callback on low-power devices), force-reveal after 4s
      const safety = setTimeout(() => {
        if (el.classList.contains("fade-in-hidden")) reveal();
        observer.disconnect();
      }, 4000);

      return () => {
        observer.disconnect();
        clearTimeout(safety);
      };
    } catch (err) {
      console.error("[FadeIn] useEffect error:", err);
    }
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
