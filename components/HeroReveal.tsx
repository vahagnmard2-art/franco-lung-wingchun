"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function HeroReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        // Instant reveal — no animation
        gsap.set(".hero-tagline, .hero-char, .hero-line, .hero-subtitle, .hero-cta", {
          autoAlpha: 1, y: 0, rotateX: 0, scaleX: 1,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-tagline",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7 }
      );
      tl.fromTo(".hero-f .hero-char",
        { autoAlpha: 0, y: -40, rotateX: 90 },
        { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.04 },
        "-=0.2"
      );
      tl.fromTo(".hero-l .hero-char",
        { autoAlpha: 0, y: 40, rotateX: -90 },
        { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.06 },
        "-=0.3"
      );
      tl.fromTo(".hero-line",
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.6 },
        "-=0.2"
      );
      tl.fromTo(".hero-subtitle",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
      tl.fromTo(".hero-cta",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const francoChars = "FRANCO".split("");
  const lungChars   = "LUNG".split("");

  return (
    <div ref={containerRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      {/* CSS fallback: noscript or before GSAP fires, chars are visible via no-js class */}
      <style>{`
        .no-js .hero-char,
        .no-js .hero-tagline,
        .no-js .hero-subtitle,
        .no-js .hero-cta { opacity: 1 !important; transform: none !important; }
      `}</style>

      <p className="hero-tagline [opacity:0] font-cinzel text-sm tracking-[0.3em] text-gold/70 uppercase mb-8">
        Wing Chun · Los Angeles · Est. 2009
      </p>

      <h1
        className="font-cinzel font-black tracking-ultra leading-none mb-8"
        style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)", perspective: "600px" }}
      >
        <span className="hero-f text-white block mb-2 whitespace-nowrap" style={{ perspective: "600px" }}>
          {francoChars.map((ch, i) => (
            <span key={i} className="hero-char [opacity:0] inline-block">{ch}</span>
          ))}
        </span>
        <span className="hero-l text-shimmer block whitespace-nowrap" style={{ perspective: "600px" }}>
          {lungChars.map((ch, i) => (
            <span key={i} className="hero-char [opacity:0] inline-block">{ch}</span>
          ))}
        </span>
      </h1>

      <div className="hero-line gold-line mx-auto w-32 mb-6" />

      <p className="hero-subtitle [opacity:0] font-cinzel text-sm tracking-[0.3em] text-white/60 uppercase mb-12">
        Grandmaster · From the Lineage of Ip Man
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <MagneticButton className="hero-cta [opacity:0] w-full sm:w-auto">
          <Link href="/classes" className="btn-gold block text-center">
            View Classes
          </Link>
        </MagneticButton>
        <MagneticButton className="hero-cta [opacity:0] w-full sm:w-auto">
          <Link href="/system" className="btn-outline block text-center">
            Explore the System
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
}
