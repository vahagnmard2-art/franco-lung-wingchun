"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX  = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.6 });
  const trailY  = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.6 });

  const [variant, setVariant] = useState<"default" | "hover" | "click">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on pointer devices — hide on touch-only
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = () => setVariant("hover");
    const leave = () => setVariant("default");
    const down  = () => setVariant("click");
    const up    = () => setVariant(prev => prev === "click" ? "default" : prev);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);

    // Apply to all interactive elements
    const targets = document.querySelectorAll("a, button, [role='button'], [tabindex='0']");
    targets.forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      targets.forEach(el => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  const dotSize   = variant === "hover" ? 36 : variant === "click" ? 16 : 10;
  const dotOpacity = variant === "hover" ? 0.18 : 0;
  const ringSize  = variant === "hover" ? 48 : variant === "click" ? 20 : 28;

  return (
    <>
      {/* Dot — snaps to cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full bg-gold"
          style={{ marginLeft: -dotSize / 2, marginTop: -dotSize / 2 }}
          animate={{ width: dotSize, height: dotSize, opacity: variant === "click" ? 1 : 0.85 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        />
      </motion.div>

      {/* Ring — trails with spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full border border-gold/60"
          style={{ marginLeft: -ringSize / 2, marginTop: -ringSize / 2, background: `rgba(201,168,76,${dotOpacity})` }}
          animate={{ width: ringSize, height: ringSize }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
