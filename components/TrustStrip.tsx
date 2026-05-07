"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = to / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { label: "Years of Wing Chun Experience", prefix: "", value: 50, suffix: "+" },
  { label: "Direct Hong Kong Lineage", prefix: "", value: null, suffix: null, static: "Direct Hong Kong Lineage" },
  { label: "Children & Adult Programs", prefix: "", value: null, suffix: null, static: "Children & Adult Programs" },
  { label: "Temple City · Los Angeles", prefix: "", value: null, suffix: null, static: "Temple City · Los Angeles" },
];

export default function TrustStrip() {
  return (
    <section className="py-6 bg-ink border-b border-ink-400">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {stats.map((item) => (
            <span
              key={item.label}
              className="font-cinzel text-[10px] tracking-widest text-white/70 uppercase flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" aria-hidden="true" />
              {item.value !== null ? (
                <>
                  <Counter to={item.value} suffix={item.suffix ?? ""} />
                  {" "}{item.label}
                </>
              ) : (
                item.static
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
