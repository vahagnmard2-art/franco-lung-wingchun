"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-ink/95 backdrop-blur-md border-t border-ink-400 flex">
      <a
        href="tel:+16262332882"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-gold active:bg-ink-200 transition-colors"
      >
        <Phone size={14} aria-hidden="true" />
        <span className="font-cinzel text-[10px] tracking-widest uppercase">Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-ink font-bold active:bg-gold-light transition-colors"
      >
        <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold">Get Started</span>
      </Link>
    </div>
  );
}
