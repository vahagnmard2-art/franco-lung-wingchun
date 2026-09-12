"use client";

import { useRef } from "react";
import { Star, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? 320) + 20; // card width + gap
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
              href={site.reviews.url}
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

      {/* Horizontal scroll track — native scroll so it's reachable by touch, mouse-drag-free
          trackpad/wheel, and keyboard (via the Prev/Next buttons below); overflows viewport
          intentionally */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Student testimonials"
        className="relative flex gap-5 px-6 md:px-12 pb-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-testimonial-card
            className="w-[85vw] sm:w-[440px] flex-shrink-0 snap-start card-base p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={13} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <span className="gold-line-short !w-8 mb-3" />
            <span className="font-cinzel text-[9px] tracking-ultra text-gold/70 uppercase">
              {t.attribution}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="w-8 h-8 flex items-center justify-center border border-ink-400 hover:border-gold/60 text-gold transition-colors"
            >
              <ChevronLeft size={14} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="w-8 h-8 flex items-center justify-center border border-ink-400 hover:border-gold/60 text-gold transition-colors"
            >
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
          <a
            href={site.reviews.url}
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
