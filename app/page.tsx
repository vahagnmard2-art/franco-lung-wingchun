import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Users, Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import HeroReveal from "@/components/HeroReveal";
import TrustStrip from "@/components/TrustStrip";
import TestimonialsScroll from "@/components/TestimonialsScroll";


export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        {/* Background — isolated so overflow:hidden here can't trap fixed elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/sifu-action.jpg"
            alt=""
            aria-hidden="true"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.42 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_#1e1400_0%,_#080808_65%)]" />
        </div>
        {/* Logo watermark — brand mark as depth layer behind hero content */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]"
          style={{ opacity: 0, animation: "fadeInOpacity 2.5s ease-out 0s both" }}
        >
          <div style={{ width: "clamp(280px, 62vh, 580px)", height: "clamp(280px, 62vh, 580px)", opacity: 0.08, position: "relative" }}>
            <Image
              src="/images/logo-watermark.png"
              alt=""
              fill
              sizes="580px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        <HeroReveal />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-cinzel text-[9px] tracking-ultra text-white/25 uppercase">Scroll</span>
          <div className="w-px h-14 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gold/60 to-transparent animate-scrollLine" />
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ──────────────────────────────────────────────────── */}
      <TrustStrip />

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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right" delay={0.15}>
              <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
                About the Grandmaster
              </p>
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-6">
                Fifty Years in<br />
                <span className="text-gold">Wing Chun</span>
              </h2>
              <span className="gold-line-short mb-8" />
              <p className="text-white/80 leading-relaxed mb-6 mt-8">
                Grandmaster Franco Lung began his Wing Chun journey in Hong Kong over fifty years
                ago, training under two of the art&apos;s most celebrated figures — the same lineage
                that shaped Bruce Lee before he left for America. In 2009, he brought his refined
                system to Los Angeles.
              </p>
              <p className="text-white/80 leading-relaxed mb-10">
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
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-3">
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
                desc: "What you learn here traces directly to the masters who shaped Bruce Lee. An unbroken chain from Ip Man through Hong Kong's greatest fighters — to you.",
              },
              {
                icon: Zap,
                title: "The Internal Dimension",
                desc: "You will not just learn to move — you will learn why it works. GM Lung's system develops the internal intelligence that makes Wing Chun effective regardless of size or strength.",
              },
              {
                icon: Users,
                title: "Any Age, Any Level",
                desc: "Children from age five, adult beginners, and seasoned martial artists all train here. GM Lung's structured curriculum meets you exactly where you are.",
              },
              {
                icon: Award,
                title: "Direct Instruction",
                desc: "Classes are deliberately small. You get real-time correction from Grandmaster Lung in every session — not a curriculum video, not an assistant. The Grandmaster himself.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card-base p-8 flex flex-col items-start h-full">
                  <item.icon size={22} className="text-gold mb-5" aria-hidden="true" />
                  <h3 className="font-cinzel text-sm font-semibold text-white tracking-wide mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <TestimonialsScroll />

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_#1e1400_0%,_#080808_70%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 gold-line opacity-20" />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-6">
            Train with a <span className="text-gold">Grandmaster</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-md mx-auto">
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
