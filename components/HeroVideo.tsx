"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // React doesn't reliably write the `muted` attribute into server-rendered
    // HTML — setting it as a DOM property here ensures autoplay is never blocked.
    if (ref.current) {
      ref.current.muted = true;
      ref.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      poster="/images/sifu-action.jpg"
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: 0.45 }}
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
