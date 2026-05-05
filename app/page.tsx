import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star, Shield, Zap, Users, Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background photo — very subtle under the gradient */}
        <Image
          src="/images/sifu-action.jpg"
          alt=""
          aria-hidden="true"
          priority
          fill
          className="object-cover object-center"
          style={{ opacity: 0.28 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_#1e1400_0%,_#080808_65%)]" />
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="fade-up font-cinzel text-sm tracking-[0.3em] text-gold/70 uppercase mb-8">
            Wing Chun · Los Angeles · Est. 2009
          </p>
          <h1 className="fade-up delay-200 font-cinzel text-[clamp(3.5rem,12vw,7.5rem)] font-black tracking-ultra leading-none mb-8">
            <span className="text-white block mb-2">FRANCO</span>
            <span className="text-shimmer block">LUNG</span>
          </h1>
          <div className="gold-line mx-auto w-32 mb-6" />
          <p className="fade-up delay-400 font-cinzel text-sm tracking-[0.3em] text-white/60 uppercase mb-12">
            Grandmaster · From the Lineage of Ip Man
          </p>
          <div className="fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/classes" className="btn-gold w-full sm:w-auto text-center">
              View Classes
            </Link>
            <Link href="/system" className="btn-outline w-full sm:w-auto text-center">
              Explore the System
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

      {/* ─── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="py-6 bg-ink border-b border-ink-400">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "50+ Years of Wing Chun Experience",
              "Direct Hong Kong Lineage",
              "Children & Adult Programs",
              "Temple City · Los Angeles",
            ].map((item) => (
              <span key={item} className="font-cinzel text-[10px] tracking-widest text-white/35 uppercase flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden max-h-[50vh] lg:max-h-none">
                <Image
                  src="/images/sifu-portrait.jpg"
                  alt="Grandmaster Franco Lung"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right" delay={0.15}>
              <p className="font-cinzel text-[10px] tracking-ultra text-gold/70 uppercase mb-4">
                About the Grandmaster
              </p>
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-6">
                Fifty Years in<br />
                <span className="text-gold">Wing Chun</span>
              </h2>
              <span className="gold-line-short mb-8" />
              <p className="text-white/65 leading-relaxed mb-6 mt-8">
                Grandmaster Franco Lung began his Wing Chun journey in Hong Kong over fifty years
                ago, training under two of the art&apos;s most celebrated figures — the same lineage
                that shaped Bruce Lee before he left for America. In 2009, he brought his refined
                system to Los Angeles.
              </p>
              <p className="text-white/65 leading-relaxed mb-10">
                Through decades of practice, teaching, and deep exploration of Chinese internal
                martial arts, GM Lung developed a structured three-level curriculum that guides
                students from foundation to mastery with precision and depth.
              </p>
              <Link href="/about" className="btn-outline inline-flex items-center gap-3">
                Full Biography <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── WHY TRAIN HERE ───────────────────────────────────────────────── */}
      <section className="section-pad bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              What Sets Us Apart
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              Why Students Choose <span className="text-gold">Franco Lung</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Direct Hong Kong Lineage",
                desc: "GM Lung trained under Wong Shun Leung, Wan Kam Leung, and Hawkins Cheung — the most celebrated Wing Chun masters of the modern era.",
              },
              {
                icon: Zap,
                title: "Internal System",
                desc: "Most schools teach only external mechanics. GM Lung's curriculum goes deeper — unlocking the energetic and structural intelligence that separates truly advanced practitioners.",
              },
              {
                icon: Users,
                title: "All Levels Welcome",
                desc: "From children as young as five to experienced martial artists, every class is taught with the same depth and personal attention.",
              },
              {
                icon: Award,
                title: "Small Class Sizes",
                desc: "Classes are kept intentionally small so that every student receives real guidance from Grandmaster Lung himself — not just group observation.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card-base p-8 flex flex-col items-start h-full">
                  <item.icon size={22} className="text-gold mb-5" aria-hidden="true" />
                  <h3 className="font-cinzel text-sm font-semibold text-white tracking-wide mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink-100">
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
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card-base p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={13} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <span className="gold-line-short !w-8 mb-3" />
                  <span className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase">
                    {t.attribution}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Franco+Lung+Wing+Chun+Temple+City+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-cinzel text-[11px] tracking-wide text-gold/60 hover:text-gold transition-colors uppercase"
            >
              See all reviews on Google <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_#1e1400_0%,_#080808_70%)] relative overflow-hidden">
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
            door is open. Classes are kept intentionally small — reach out today.
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
