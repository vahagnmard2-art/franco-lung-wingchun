import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    text: "We love Franco Lung Wing Chun martial arts school. Both of my kids age 7 and 10 have been going for over a year now. They enjoy classes very much and have learned a lot. We are grateful we have found this place. Very nice, caring and supportive staff. Highly recommending to anyone. Thank you, Sifu Franco!",
  },
  {
    stars: 5,
    text: "If you're looking for a place to learn Self-Defense, Increase Confidence, and have Fun — Franco Lung Wing Chun is the place to go. Sifu Franco, Sifu Jason, and Sifu David teach Wing Chun in the most practical, minimalist, and easy way that anybody can understand. I'd recommend this place to anybody.",
  },
  {
    stars: 5,
    text: "Absolutely incredible! The detail Sifu teaches is second to none. Real explanation with practical application. You'll learn quickly and organically. I've found something special and couldn't be any happier. I'm truly starting to float while maintaining tremendous structure. So grateful to have met Sifu Franco Lung!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_#1e1400_0%,_#080808_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="fade-up font-cinzel text-[10px] tracking-ultra text-gold/70 uppercase mb-8">
            Wing Chun · Los Angeles · Est. 2009
          </p>
          <h1 className="fade-up delay-200 font-cinzel text-[clamp(3.5rem,12vw,7.5rem)] font-black tracking-ultra text-white leading-none mb-2">
            FRANCO
          </h1>
          <h1 className="fade-up delay-300 font-cinzel text-[clamp(3.5rem,12vw,7.5rem)] font-black tracking-ultra text-shimmer leading-none mb-8">
            LUNG
          </h1>
          <div className="gold-line mx-auto w-32 mb-6" />
          <p className="fade-up delay-400 font-cinzel text-sm tracking-[0.3em] text-white/60 uppercase mb-12">
            Grandmaster · Direct Lineage from Hong Kong
          </p>
          <div className="fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/system" className="btn-gold">
              Explore the System
            </Link>
            <Link href="/contact" className="btn-outline">
              Book a Class
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-cinzel text-[9px] tracking-ultra text-white/25 uppercase">Scroll</span>
          <div className="w-px h-14 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gold/60 to-transparent animate-scrollLine" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo — replace the inner div with <Image> once you have a portrait of GM Lung */}
            <div className="relative">
              <div className="aspect-[3/4] bg-ink-200 border border-ink-400 relative overflow-hidden flex items-center justify-center">
                <span className="font-cinzel text-[80px] text-gold/[0.07] tracking-ultra select-none">FL</span>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-cinzel text-[10px] tracking-ultra text-gold/70 uppercase mb-4">
                About the Grandmaster
              </p>
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-6">
                Five Decades of<br />
                <span className="text-gold">Mastery</span>
              </h2>
              <span className="gold-line-short mb-8" />
              <p className="text-white/60 leading-relaxed mb-6 mt-8">
                Grandmaster Franco Lung began his Wing Chun journey in Hong Kong over fifty years
                ago, training under two of the art&apos;s most celebrated figures. In 2009, he
                brought his refined system to Los Angeles — a system that goes beyond what his
                legendary teachers originally imparted.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Through decades of practice, teaching, and deep exploration of Chinese internal
                martial arts, GM Lung developed a structured three-level curriculum that guides
                students from foundation to mastery with precision and depth.
              </p>
              <Link href="/about" className="btn-outline inline-flex items-center gap-3">
                Full Biography <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Students Speak
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              <span className="text-gold">Testimonials</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-base p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="gold-line-short !w-8" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Franco+Lung+Wing+Chun+Temple+City+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-[11px] tracking-wide text-gold/60 hover:text-gold transition-colors uppercase"
            >
              See all reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_#1e1400_0%,_#080808_70%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 gold-line opacity-20" />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-6">
            Train with a <span className="text-gold">Grandmaster</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Whether you are a complete beginner or an experienced practitioner, Grandmaster Lung&apos;s
            door is open. Space is limited — reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <Link href="/classes" className="btn-outline">
              View Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
