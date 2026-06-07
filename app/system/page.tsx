import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PillarAccordion from "@/components/PillarAccordion";
import HeroParallax from "@/components/HeroParallax";

export const metadata: Metadata = {
  title: "The System",
  description:
    "Grandmaster Franco Lung's unique 3-level Wing Chun system — Six Harmony Theory, Major Hand Development, Gong Lik, 3-Gate Defense, Upgraded Chi Sau, and Empty Door Theory.",
};

const levels = [
  {
    level: "01",
    title: "Foundation",
    subtitle: "Building the Hardware",
    desc: "The first level establishes the structural and physical foundation. Students develop correct stance, body alignment, and the essential hand forms. The emphasis is on building the 'hardware' — the body's capacity to express Wing Chun principles safely and efficiently.",
    focus: ["Basic Forms (Siu Nim Tao)", "Structural Alignment", "Stance & Footwork", "Entry-level Chi Sau"],
  },
  {
    level: "02",
    title: "Development",
    subtitle: "Awakening the Software",
    desc: "At the second level, the internal dimension of Wing Chun comes alive. Students begin to access Gong Lik — internal strength — and learn to apply the Six Harmony Theory. The three gates of defense are activated and Chi Sau evolves from mechanical practice to energetic sensitivity.",
    focus: ["Six Harmony Theory", "Gong Lik Development", "3-Gate Defense", "Upgraded Chi Sau"],
  },
  {
    level: "03",
    title: "Mastery",
    subtitle: "Hardware Meets Software",
    desc: "The third level integrates everything. Students develop the Major Hand and explore Empty Door Theory — understanding structural gaps and the Yin Yang exchange in live application. At this level, Wing Chun transcends technique and becomes a living expression of principle.",
    focus: ["Major Hand Mastery", "Empty Door Theory", "Yin Yang Exchange", "Free Application"],
  },
];


export default function SystemPage() {
  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <HeroParallax />
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Franco Lung Wing Chun"
            width={128}
            height={128}
            quality={100}
            priority
            className="block mx-auto mb-6 drop-shadow-[0_0_20px_rgba(201,168,76,0.25)]"
          />
          <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
            Curriculum
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            The 3-Level <span className="text-gold">System</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mt-6">
            A structured, principle-based curriculum developed over five decades — guiding students
            from first contact to genuine mastery.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* What is Wing Chun */}
      <section className="section-pad bg-ink">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-8">
              <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-5">
                The Art
              </p>
              <p className="font-cinzel text-6xl text-gold/10 leading-none mb-4" aria-hidden="true" lang="zh-Hant">詠春</p>
              <blockquote className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-wide leading-snug">
                A system built for the smaller to defeat the larger. For intelligence to overcome force.
              </blockquote>
              <div className="gold-line-short mt-8" />
            </div>
            {/* Explanation */}
            <div className="space-y-5 text-white/80 text-[15px] leading-relaxed">
              <p>
                Wing Chun (<span lang="zh-Hant">詠春</span>) is a southern Chinese martial art developed roughly 300 years ago.
                Unlike strength-based fighting systems, Wing Chun was designed around one core
                principle: <span className="text-white/80">economy of structure over economy of effort</span>.
                Every technique is built to work regardless of the practitioner&apos;s size, speed, or
                raw physical power.
              </p>
              <p>
                The system centers on the <span className="text-white/80">centerline theory</span> —
                controlling the straight line between you and an opponent — combined with simultaneous
                attack and defense, close-range sensitivity training (Chi Sau), and a deeply logical
                progression of forms that encode its principles into muscle memory.
              </p>
              <p>
                Wing Chun is best known in the West as the martial art that shaped{" "}
                <span className="text-white/80">Bruce Lee</span> before he developed Jeet Kune Do.
                Today it is one of the most practiced and seriously studied kung fu systems in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Levels */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-3">
              The Path
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Three Levels of <span className="text-gold">Development</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((l) => (
              <div key={l.level} className="card-base p-8 group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-cinzel text-5xl font-black text-gold/10 group-hover:text-gold/20 transition-colors leading-none">
                    {l.level}
                  </span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wide mb-1">
                  {l.title}
                </h3>
                <p className="font-cinzel text-[10px] text-gold tracking-widest uppercase mb-4">
                  {l.subtitle}
                </p>
                <span className="gold-line-short mb-5" />
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{l.desc}</p>
                <ul className="space-y-2">
                  {l.focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-xs text-white/60">
                      <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="section-pad bg-ink">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-3">
              Core Principles
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Seven <span className="text-gold">Pillars</span> of the System
            </h2>
            <p className="text-white/60 text-sm max-w-md mx-auto mt-4 leading-relaxed">
              These seven principles form the conceptual spine of GM Lung&apos;s curriculum.
              Together they define what makes his Wing Chun unique.
            </p>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="mb-10 max-w-2xl mx-auto text-center">
            <p className="text-white/55 text-sm leading-relaxed">
              Each pillar names a principle that cannot be grasped from the outside. They must be
              trained into the body over time — and together, they explain why GM Lung&apos;s Wing
              Chun is different from what most students have encountered before.
            </p>
          </div>

          <PillarAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-ink-100 text-center px-6">
        <p className="font-cinzel text-[10px] tracking-ultra text-gold uppercase mb-4">
          Experience it First-Hand
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide mb-4">
          Ready to Begin?
        </h2>
        <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed mb-10">
          No prior martial arts experience is necessary. GM Lung&apos;s system is designed to
          meet students exactly where they are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild><Link href="/classes">View Classes &amp; Schedule</Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </section>
    </>
  );
}
