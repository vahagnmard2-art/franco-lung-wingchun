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
      // With no [opacity:0] on elements, SSR renders everything visible.
      // We hide-then-animate only when JS runs — no permanent invisible state.
      if (prefersReduced) return; // already visible, nothing to do

      gsap.set(".hero-tagline",      { autoAlpha: 0, y: 18 });
      gsap.set(".hero-f .hero-char", { autoAlpha: 0, y: -40, rotateX: 90 });
      gsap.set(".hero-l .hero-char", { autoAlpha: 0, y: 40,  rotateX: -90 });
      gsap.set(".hero-line",         { scaleX: 0, transformOrigin: "center" });
      gsap.set(".hero-subtitle",     { autoAlpha: 0, y: 12 });
      gsap.set(".hero-cta",          { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-tagline",      { autoAlpha: 1, y: 0, duration: 0.7 });
      tl.to(".hero-f .hero-char", { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.04 }, "-=0.2");
      tl.to(".hero-l .hero-char", { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.06 }, "-=0.3");
      tl.to(".hero-line",         { scaleX: 1, duration: 0.6 }, "-=0.2");
      tl.to(".hero-subtitle",     { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3");
      tl.to(".hero-cta",          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sifuChars = "SIFU".split("");
  const lungChars = "LUNG".split("");

  return (
    <div ref={containerRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p className="hero-tagline font-cinzel text-sm tracking-[0.3em] text-gold uppercase mb-8">
        Grandmaster Franco Lung
      </p>

      <h1
        className="font-cinzel font-black tracking-ultra leading-none mb-8"
        style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)", perspective: "600px" }}
      >
        <span className="hero-f text-white block mb-2 whitespace-nowrap" style={{ perspective: "600px" }}>
          {sifuChars.map((ch, i) => (
            <span key={i} className="hero-char inline-block">{ch}</span>
          ))}
        </span>
        <span className="hero-l text-shimmer block whitespace-nowrap" style={{ perspective: "600px" }}>
          {lungChars.map((ch, i) => (
            <span key={i} className="hero-char inline-block">{ch}</span>
          ))}
        </span>
      </h1>

      <div className="hero-line gold-line mx-auto w-32 mb-6" />

      <p className="hero-subtitle font-cinzel text-sm tracking-[0.3em] text-white/75 uppercase mb-12">
        Wing Chun · Los Angeles · Since 2009
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <MagneticButton className="hero-cta w-full sm:w-auto">
          <Link href="/classes" className="btn-gold block text-center">
            View Classes
          </Link>
        </MagneticButton>
        <MagneticButton className="hero-cta w-full sm:w-auto">
          <Link href="/system" className="btn-outline block text-center">
            Explore the System
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
}
