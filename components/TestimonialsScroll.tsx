"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const testimonials = [
  {
    stars: 5,
    text: "We love Franco Lung Wing Chun martial arts school. Both of my kids age 7 and 10 have been going for over a year now. They enjoy classes very much and have learned a lot. We are grateful we have found this place. Very nice, caring and supportive staff. Highly recommending to anyone. Thank you, Sifu Franco!",
    attribution: "— Parent, two children enrolled",
  },
  {
    stars: 5,
    text: "If you're looking for a place to learn Self-Defense, Increase Confidence, and have Fun — Franco Lung Wing Chun is the place to go. Sifu Franco, Sifu Jason, and Sifu David teach Wing Chun in the most practical, minimalist, and easy way that anybody can understand. I'd recommend this place to anybody.",
    attribution: "— Adult Student",
  },
  {
    stars: 5,
    text: "Absolutely incredible! The detail Sifu teaches is second to none. Real explanation with practical application. You'll learn quickly and organically. I've found something special and couldn't be any happier. I'm truly starting to float while maintaining tremendous structure. So grateful to have met Sifu Franco Lung!",
    attribution: "— Advanced Practitioner",
  },
  {
    stars: 5,
    text: "The depth of knowledge GM Lung brings to every class is remarkable. I've trained at several Wing Chun schools and this is something entirely different. The internal principles he teaches changed how I understand the entire art.",
    attribution: "— Experienced Wing Chun Student",
  },
];

export default function TestimonialsScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-pad bg-ink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-3">
            Students Speak
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
            <span className="text-gold">Testimonials</span>
          </h2>
          {/* Aggregate rating — update reviewCount to match your live Google review total */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
              ))}
            </div>
            <span className="font-cinzel text-xs text-white/80 tracking-wide">5.0</span>
            <span className="text-white/40 text-xs">·</span>
            <a
              href="{site.reviews.url}"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-[10px] text-gold/70 hover:text-gold transition-colors tracking-wide uppercase"
            >
              Google Reviews
            </a>
          </div>
          <div className="gold-line mx-auto w-24 mt-5" />
        </div>
      </div>

      {/* Horizontal drag-scroll track — overflows viewport intentionally */}
      <div
        ref={trackRef}
        className="relative cursor-grab active:cursor-grabbing select-none"
      >
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
          className="flex gap-5 px-6 md:px-12 pb-4 w-max"
          style={{ touchAction: "pan-y" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[85vw] sm:w-[440px] flex-shrink-0 card-base p-8 flex flex-col pointer-events-none"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6 italic pointer-events-auto select-text">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="gold-line-short !w-8 mb-3" />
              <span className="font-cinzel text-[9px] tracking-ultra text-gold/70 uppercase pointer-events-auto select-text">
                {t.attribution}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mt-8">
          <p className="text-white/30 text-xs font-cinzel tracking-widest uppercase">
            ← Drag to explore
          </p>
          <a
            href="{site.reviews.url}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-cinzel text-[11px] tracking-wide text-gold hover:text-gold transition-colors uppercase"
          >
            See all reviews on Google <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
