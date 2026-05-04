import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const systemPillars = [
  {
    title: "Six Harmony Theory",
    desc: "The unification of internal and external forces — body, mind, and spirit aligned for maximum efficiency.",
  },
  {
    title: "Major Hand Development",
    desc: "Mastery of the dominant bridge hand — its usage, timing, and structural power in combat application.",
  },
  {
    title: "Gong Lik Development",
    desc: "The cultivation of internal strength through dedicated conditioning of the body's energetic pathways.",
  },
  {
    title: "3-Gate Defense",
    desc: "Activating the three gates of defense to simultaneously attack and protect with economy of motion.",
  },
  {
    title: "Upgraded Chi Sau",
    desc: "Sifu Lung's refined sticky-hands training — developing sensitivity, reflexes, and positional dominance.",
  },
  {
    title: "Empty Door Theory",
    desc: "Understanding and exploiting structural gaps in any opponent's defense through the Yin Yang exchange.",
  },
];

const testimonials = [
  {
    name: "Michael T.",
    stars: 5,
    text: "Training with Grandmaster Lung is a transformative experience. His depth of knowledge and patient teaching style have taken my Wing Chun to a completely new level.",
  },
  {
    name: "Sarah K.",
    stars: 5,
    text: "I've trained with several Wing Chun instructors, but Sifu Lung's system is something else entirely. The internal component he teaches is rarely found in the West.",
  },
  {
    name: "David R.",
    stars: 5,
    text: "My son started the Little Dragon Program two years ago and his confidence and discipline have grown tremendously. Sifu Lung is an extraordinary teacher.",
  },
];

const teachers = [
  {
    name: "GM Wong Shun Leung",
    role: "Primary Sifu",
    desc: "Legendary Wing Chun master known as the 'King of Talking Hands.' Bruce Lee's primary instructor and one of the most influential figures in the history of Wing Chun.",
  },
  {
    name: "GM Wan Kam Leung",
    role: "Primary Sifu",
    desc: "Practitioner and teacher of the Practical Wing Chun system. Renowned for developing a structured, principle-based approach to classical Wing Chun training.",
  },
  {
    name: "Sisok Hawkins Cheung",
    role: "Mentor",
    desc: 'Disciple of Grandmaster Ip Man and Bruce Lee\'s senior training brother. Sifu Lung credits him for illuminating the "Software" — the internal dimension of Wing Chun.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_#1e1400_0%,_#080808_65%)]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Corner ornaments */}
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="fade-up font-cinzel text-[10px] tracking-ultra text-gold/70 uppercase mb-8"
          >
            Wing Chun · Los Angeles · Est. 2009
          </p>

          <h1
            className="fade-up delay-200 font-cinzel text-[clamp(3.5rem,12vw,7.5rem)] font-black tracking-ultra text-white leading-none mb-2"
          >
            FRANCO
          </h1>
          <h1
            className="fade-up delay-300 font-cinzel text-[clamp(3.5rem,12vw,7.5rem)] font-black tracking-ultra text-shimmer leading-none mb-8"
          >
            LUNG
          </h1>

          <div className="gold-line mx-auto w-32 mb-6" />

          <p
            className="fade-up delay-400 font-cinzel text-sm tracking-[0.3em] text-white/60 uppercase mb-12"
          >
            Grandmaster · Direct Lineage from Hong Kong
          </p>

          <div className="fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/system" className="btn-gold">
              Explore the System
            </Link>
            <Link href="/classes" className="btn-outline">
              Book a Class
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-cinzel text-[9px] tracking-ultra text-white/25 uppercase">
            Scroll
          </span>
          <div className="w-px h-14 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gold/60 to-transparent animate-scrollLine" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] bg-ink-200 border border-ink-400 flex items-center justify-center overflow-hidden">
                {/* Replace <div> below with <Image> pointing to an actual photo */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="font-cinzel text-6xl text-gold/20 tracking-ultra">FL</span>
                  <span className="font-inter text-xs text-white/20 tracking-widest">
                    Photo Coming Soon
                  </span>
                </div>
                {/* Gold accent corners on photo */}
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

      {/* ─── LINEAGE ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Heritage
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              The <span className="text-gold">Lineage</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachers.map((t) => (
              <div key={t.name} className="card-base p-8 group">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                  <span className="text-gold/50 font-cinzel text-xs group-hover:text-gold transition-colors">
                    ✦
                  </span>
                </div>
                <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-2">
                  {t.role}
                </p>
                <h3 className="font-cinzel text-lg font-semibold text-white tracking-wide mb-4">
                  {t.name}
                </h3>
                <span className="gold-line-short mb-4" />
                <p className="text-white/50 text-sm leading-relaxed mt-4">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/lineage" className="btn-outline inline-flex items-center gap-3">
              Explore the Full Lineage <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE SYSTEM ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink-100 relative overflow-hidden">
        {/* Decorative background text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[20vw] font-black text-white/[0.015] select-none pointer-events-none whitespace-nowrap"
          aria-hidden
        >
          WING CHUN
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Curriculum
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              The 3-Level <span className="text-gold">System</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              Grandmaster Lung&apos;s structured approach guides students through a progressive
              journey from foundation to mastery.
            </p>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systemPillars.map((p, i) => (
              <div key={p.title} className="card-base p-7 group">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-cinzel text-3xl font-black text-gold/10 group-hover:text-gold/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-px bg-gold/30 mt-4 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
                </div>
                <h3 className="font-cinzel text-sm font-semibold text-white tracking-wide mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/system" className="btn-gold inline-flex items-center gap-3">
              Learn the Full System <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CLASSES PREVIEW ──────────────────────────────────────────────── */}
      <section className="section-pad bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Train with a Grandmaster
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-wide">
              Classes &amp; <span className="text-gold">Pricing</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Group */}
            <div className="card-base p-8 flex flex-col">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-4">
                Group
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">Group Class</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-cinzel text-4xl text-gold">$30</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-2 text-sm text-white/50 flex-1">
                <li>✦ &nbsp;All experience levels</li>
                <li>✦ &nbsp;Chi Sau training</li>
                <li>✦ &nbsp;Form & application</li>
                <li>✦ &nbsp;Partner drills</li>
              </ul>
              <Link href="/classes" className="btn-outline mt-8 text-center text-[10px]">
                View Schedule
              </Link>
            </div>

            {/* Private 1hr – featured */}
            <div className="relative bg-ink-200 border border-gold/40 p-8 flex flex-col shadow-[0_0_40px_rgba(201,168,76,0.1)]">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="font-cinzel text-[9px] tracking-ultra text-gold uppercase mb-4">
                Most Popular
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">Private · 1 Hour</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-cinzel text-4xl text-gold">$50</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-2 text-sm text-white/50 flex-1">
                <li>✦ &nbsp;One-on-one with GM Lung</li>
                <li>✦ &nbsp;Personalised curriculum</li>
                <li>✦ &nbsp;Focused correction</li>
                <li>✦ &nbsp;Flexible scheduling</li>
              </ul>
              <Link href="/contact" className="btn-gold mt-8 text-center text-[10px]">
                Book Private Lesson
              </Link>
            </div>

            {/* Private 90min */}
            <div className="card-base p-8 flex flex-col">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-4">
                Private
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                Private · 90 Min
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-cinzel text-4xl text-gold">$70</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-2 text-sm text-white/50 flex-1">
                <li>✦ &nbsp;Extended personal session</li>
                <li>✦ &nbsp;Deep system exploration</li>
                <li>✦ &nbsp;Video review available</li>
                <li>✦ &nbsp;Flexible scheduling</li>
              </ul>
              <Link href="/contact" className="btn-outline mt-8 text-center text-[10px]">
                Book Private Lesson
              </Link>
            </div>
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
            {testimonials.map((t) => (
              <div key={t.name} className="card-base p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="gold-line-short !w-6" />
                  <span className="font-cinzel text-xs text-gold/70 tracking-wide">{t.name}</span>
                </div>
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
        <div className="absolute inset-0 gold-line opacity-20" style={{ top: 0, height: 1 }} />
        <div className="absolute inset-0 gold-line opacity-20" style={{ bottom: 0, top: "auto", height: 1 }} />
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
