import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100dvh-72px)] bg-ink flex items-center justify-center px-6 relative overflow-hidden">
      {/* Corner accents */}
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_#1a1200_0%,_#080808_70%)]" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <p className="font-cinzel text-[10px] tracking-ultra text-gold/70 uppercase mb-6">
          404 · Not Found
        </p>
        <p className="font-cinzel text-[clamp(5rem,20vw,9rem)] font-black text-gold/8 leading-none mb-0 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-wide mb-4 -mt-4">
          This page got<br />
          <span className="text-gold">knocked out.</span>
        </h1>
        <div className="gold-line mx-auto w-24 my-8" />
        <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on the mat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild><Link href="/">Return Home</Link></Button>
          <Button asChild variant="outline"><Link href="/classes">View Classes</Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </div>
    </section>
  );
}
