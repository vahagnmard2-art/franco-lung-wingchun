"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let instance: Lenis;
    try {
      instance = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
    } catch (err) {
      console.error("[LenisProvider] Failed to initialize Lenis — smooth scroll disabled:", err);
      return;
    }

    lenisRef.current = instance;
    setLenis(instance);

    function raf(time: number) {
      try {
        instance.raf(time);
      } catch (err) {
        console.error("[LenisProvider] RAF tick error:", err);
      }
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      try {
        instance.destroy();
      } catch (err) {
        console.error("[LenisProvider] Error destroying Lenis instance:", err);
      }
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    try {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    } catch (err) {
      console.error("[LenisProvider] scrollTo top error:", err);
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
