"use client";

import Link from "next/link";

export default function HeroReveal() {
  const sifuChars = "SIFU".split("");
  const lungChars = "LUNG".split("");

  return (
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p
        className="font-cinzel text-sm tracking-[0.3em] text-gold uppercase mb-8"
        style={{ opacity: 0, animation: "heroFadeSlideUp 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.15s both" }}
      >
        Hong Kong Lineage · Temple City · Los Angeles
      </p>

      <h1
        className="font-cinzel font-black tracking-ultra leading-none mb-8"
        style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)" }}
      >
        <span className="text-white block mb-2 whitespace-nowrap">
          {sifuChars.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: 0,
                animation: `heroCharDown 0.55s cubic-bezier(0.25,0.1,0.25,1) ${0.38 + i * 0.05}s both`,
              }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="text-shimmer block whitespace-nowrap">
          {lungChars.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: 0,
                animation: `heroCharUp 0.55s cubic-bezier(0.25,0.1,0.25,1) ${0.58 + i * 0.06}s both`,
              }}
            >
              {ch}
            </span>
          ))}
        </span>
      </h1>

      <div
        className="gold-line mx-auto w-32 mb-6"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "center",
          animation: "heroLineExpand 0.6s cubic-bezier(0.25,0.1,0.25,1) 0.88s both",
        }}
      />

      <p
        className="font-cinzel text-sm tracking-[0.3em] text-white/75 uppercase mb-12"
        style={{ opacity: 0, animation: "heroFadeSlideUp 0.6s cubic-bezier(0.25,0.1,0.25,1) 1.0s both" }}
      >
        Wing Chun · Los Angeles · Since 2009
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 1.1s both" }}>
          <Link href="/classes" className="btn-gold block text-center w-full sm:w-auto">
            View Classes
          </Link>
        </div>
        <div style={{ opacity: 0, animation: "heroFadeSlideUp 0.5s cubic-bezier(0.25,0.1,0.25,1) 1.2s both" }}>
          <Link href="/system" className="btn-outline block text-center w-full sm:w-auto">
            Explore the System
          </Link>
        </div>
      </div>
    </div>
  );
}
