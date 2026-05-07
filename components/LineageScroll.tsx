"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const connectorClass =
  "w-px bg-gradient-to-b from-gold/40 to-gold/10 origin-top";

export default function LineageScroll() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(".lineage-node", container.current!);
      const lines = gsap.utils.toArray<HTMLElement>(".lineage-line", container.current!);
      const dots  = gsap.utils.toArray<HTMLElement>(".lineage-dot",  container.current!);

      if (prefersReduced) {
        gsap.set([...nodes, ...lines, ...dots], { autoAlpha: 1, y: 0, scaleY: 1, scale: 1 });
        gsap.set(".lineage-branch", { scaleX: 1 });
        gsap.set(".lineage-glow", { opacity: 1 });
        return;
      }

      // Set starting states
      gsap.set(nodes, { autoAlpha: 0, y: 28 });
      gsap.set(lines, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(dots,  { autoAlpha: 0, scale: 0 });

      // Master timeline — scrubbed to scroll (the "unrolling" effect)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      });

      // Ip Man enters
      tl.to(nodes[0], { autoAlpha: 1, y: 0, duration: 1 });

      // First connector line draws down
      tl.to(lines[0], { scaleY: 1, duration: 0.8 }, "-=0.2");
      tl.to(dots[0],  { autoAlpha: 1, scale: 1, duration: 0.4 }, "-=0.3");
      tl.to(lines[1], { scaleY: 1, duration: 0.6 }, "-=0.2");

      // Branch line (horizontal) + two grandmasters stagger in
      tl.to(".lineage-branch", { scaleX: 1, duration: 0.6, transformOrigin: "center" }, "-=0.1");
      tl.to([nodes[1], nodes[2]], { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.25 }, "-=0.3");

      // Lines converge back down
      tl.to(lines[2], { scaleY: 1, duration: 0.8 }, "-=0.2");
      tl.to(dots[1],  { autoAlpha: 1, scale: 1, duration: 0.4 }, "-=0.3");
      tl.to(lines[3], { scaleY: 1, duration: 0.6 }, "-=0.2");

      // Franco Lung node — pulse glow in
      tl.to(nodes[3], { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.2");
      tl.to(".lineage-glow", { opacity: 1, duration: 1 }, "-=0.6");

      // Bottom connector
      tl.to(lines[4], { scaleY: 1, duration: 0.6 }, "-=0.2");
      tl.to(dots[2],  { autoAlpha: 1, scale: 1, duration: 0.4 }, "-=0.3");
      tl.to(lines[5], { scaleY: 1, duration: 0.6 }, "-=0.2");

      // Disciples label
      tl.to(nodes[4], { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.2");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-ink" ref={container}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center gap-0">

          {/* Ip Man */}
          <div className="lineage-node border border-gold/30 bg-ink-200 px-4 sm:px-8 py-4 text-center w-full max-w-xs">
            <p className="font-cinzel text-[9px] tracking-ultra text-gold/70 uppercase mb-1">Origin</p>
            <p className="font-cinzel text-sm font-semibold text-white tracking-wide">
              Grandmaster Ip Man 葉問
            </p>
            <p className="font-inter text-xs text-white/30 mt-1">Founder of Modern Wing Chun</p>
          </div>

          {/* Connector 1 */}
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />
          <div className="lineage-dot w-2 h-2 rounded-full bg-gold/40" />
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />

          {/* Two-branch row */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-sm mx-auto relative">
            {/* Horizontal branch line */}
            <div className="lineage-branch absolute top-0 left-1/4 right-1/4 h-px bg-gold/20 scale-x-0" />
            {["Wong Shun Leung", "Wan Kam Leung"].map((name, i) => (
              <div key={name} className="flex flex-col items-center">
                <div className={`lineage-line ${connectorClass} h-6 w-px`} />
                <div className="lineage-node border border-gold/20 bg-ink-200 p-2 text-center w-full">
                  <p className="font-cinzel text-[9px] sm:text-[10px] text-white/70 tracking-wide leading-snug">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Converging connector */}
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />
          <div className="lineage-dot w-2 h-2 rounded-full bg-gold" />
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />

          {/* Franco Lung */}
          <div className="lineage-node relative border border-gold bg-ink-200 px-6 sm:px-10 py-5 text-center w-full max-w-xs">
            {/* Glow starts invisible, GSAP fades it in */}
            <div className="lineage-glow absolute inset-0 opacity-0 pointer-events-none shadow-[0_0_40px_rgba(201,168,76,0.18)] rounded-sm" />
            <p className="font-cinzel text-[9px] tracking-ultra text-gold uppercase mb-1 relative z-10">
              Grandmaster
            </p>
            <p className="font-cinzel text-base font-bold text-white tracking-wide relative z-10">
              Franco Lung
            </p>
            <p className="font-inter text-xs text-white/30 mt-1 relative z-10">
              Temple City, CA · Est. 2009
            </p>
          </div>

          {/* Bottom connector */}
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />
          <div className="lineage-dot w-2 h-2 rounded-full bg-gold/40" />
          <div className={`lineage-line ${connectorClass} h-8 w-px`} />

          {/* Disciples label */}
          <div className="lineage-node border border-gold/20 bg-ink-200 px-6 py-3 text-center w-full max-w-xs">
            <p className="font-cinzel text-[9px] tracking-ultra text-gold/70 uppercase">
              Disciples · Temple City
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
