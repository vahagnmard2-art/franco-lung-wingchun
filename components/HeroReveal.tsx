"use client";

import Link from "next/link";

export default function HeroReveal() {
  const francoChars = "FRANCO".split("");

  return (
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p
        className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-8"
        style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.05s both" }}
      >
        Grandmaster · Temple City, CA
      </p>
      <h1
        className="font-cinzel font-black tracking-ultra leading-none mb-8 hero-main-title"
        style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)" }}
      >
        <span className="text-white block mb-2 whitespace-nowrap">
          {francoChars.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: 0,
                animation: `heroCharDown 0.55s cubic-bezier(0.25,0.1,0.25,1) ${0.18 + i * 0.05}s both`,
              }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span
          className="text-shimmer block whitespace-nowrap"
          style={{
            opacity: 0,
            animation: "heroCharUp 0.55s cubic-bezier(0.25,0.1,0.25,1) 0.38s both",
          }}
        >
          LUNG
        </span>
      </h1>

      <div
        className="gold-line mx-auto w-32 mb-6"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "center",
          animation: "heroLineExpand 0.6s cubic-bezier(0.25,0.1,0.25,1) 0.68s both",
        }}
      />

      <p
        className="font-cinzel text-sm tracking-[0.25em] text-white/70 uppercase mb-12"
        style={{ opacity: 0, animation: "heroFadeSlideUp 0.6s cubic-bezier(0.25,0.1,0.25,1) 0.82s both" }}
      >
        Wing Chun — Martial Arts Academy
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 0.95s both" }}>
          <Link href="/classes" className="btn-gold block text-center w-full sm:w-auto">
            View Classes
          </Link>
        </div>
        <div style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 1.05s both" }}>
          <Link href="/system" className="btn-outline block text-center w-full sm:w-auto">
            Our System
          </Link>
        </div>
      </div>
      <p
        className="font-cinzel text-[9px] tracking-widest text-white/28 uppercase mt-7"
        style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 1.18s both" }}
      >
        Classes forming now &mdash; ages 5 through adult
      </p>
    </div>
  );
}
