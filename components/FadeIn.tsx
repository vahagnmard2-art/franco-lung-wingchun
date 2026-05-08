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
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight - 60;

    if (alreadyVisible) return;

    el.classList.add("fade-in-hidden", `fade-in-${direction}`);
    if (delay > 0) el.style.animationDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("fade-in-hidden");
          el.classList.add("fade-in-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "-60px 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
