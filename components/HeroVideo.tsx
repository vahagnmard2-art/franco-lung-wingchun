"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);

    const video = ref.current;
    if (!video) return;
    video.muted = true;

    if (mql.matches) {
      // Respect the OS setting: land on the first frame, don't autoplay/loop.
      setPlaying(false);
      return;
    }

    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={ref}
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
        style={{ opacity: 0 }}
        onCanPlay={() => {
          if (ref.current) ref.current.style.opacity = "0.6";
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* User control over the looping background — required regardless of the
          reduced-motion default, per WCAG 2.2.2 (Pause, Stop, Hide). */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-20 right-6 z-10 w-9 h-9 rounded-full border border-gold/40 bg-ink/50 backdrop-blur-sm flex items-center justify-center text-gold hover:border-gold hover:bg-ink/70 transition-colors"
      >
        {playing ? <Pause size={13} aria-hidden="true" /> : <Play size={13} className="ml-0.5" aria-hidden="true" />}
      </button>
    </>
  );
}
