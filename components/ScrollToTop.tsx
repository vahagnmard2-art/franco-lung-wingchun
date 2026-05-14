"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-20 sm:bottom-8 right-6 z-50 w-11 h-11 border border-gold/40 bg-ink/90 backdrop-blur-sm flex items-center justify-center hover:border-gold hover:bg-ink transition-all duration-200 group"
    >
      <ChevronUp size={16} className="text-gold group-hover:text-gold transition-colors" aria-hidden="true" />
    </button>
  );
}
