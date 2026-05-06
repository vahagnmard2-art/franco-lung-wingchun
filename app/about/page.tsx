import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "The biography of Grandmaster Franco Lung — his journey from Hong Kong to Los Angeles over five decades of Wing Chun training and teaching.",
};

const timeline = [
  {
    year: "1954",
    title: "Born in Hong Kong",
    desc: "Grandmaster Lung is born in Hong Kong, the birthplace of modern Wing Chun.",
  },
  {
    year: "1970s",
    title: "Training Begins",
    desc: "Sifu Lung begins his Wing Chun training in Hong Kong under Grandmaster Wong Shun Leung and Grandmaster Wan Kam Leung — two of the art's most revered teachers.",
  },
  {
    year: "1980s",
    title: "The Internal Dimension",
    desc: 'Through his Sisok Hawkins Cheung, Sifu Lung gains deeper understanding of the "Software" — the internal, energetic dimension of Wing Chun that few practitioners ever fully access.',
  },
  {
    year: "1990s–2000s",
    title: "Developing the System",
    desc: "Over decades of teaching and refinement, GM Lung develops his own structured 3-level curriculum — a system that extends beyond what his teachers originally imparted.",
  },
  {
    year: "2009",
    title: "Arrives in Los Angeles",
    desc: "Grandmaster Lung immigrates to the United States and establishes his school in Temple City, CA, bringing authentic Hong Kong Wing Chun to Los Angeles.",
  },
  {
    year: "Present",
    title: "Continuing the Legacy",
    desc: "GM Lung continues to teach, refine, and share his system with students of all backgrounds — children, adults, and advanced practitioners.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            The Grandmaster
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            About <span className="text-gold">Franco Lung</span>
          </h1>
          <div className="gold-line mx-auto w-24 mt-6" />
        </div>
      </div>

      {/* Biography */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden max-h-[60vh] md:max-h-none">
                <Image
                  src="/images/sifu-portrait.jpg"
                  alt="Grandmaster Franco Lung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Quick facts */}
              <div className="mt-6 space-y-4 border border-ink-400 p-6 bg-ink-200">
                {[
                  ["Born", "1954, Hong Kong"],
                  ["Training Since", "Over 50 years"],
                  ["In Los Angeles", "Since 2009"],
                  ["Location", "Temple City, CA"],
                  ["Style", "Wing Chun Kung Fu"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start gap-4">
                    <span className="font-cinzel text-[10px] tracking-widest text-gold/50 uppercase whitespace-nowrap">
                      {label}
                    </span>
                    <span className="text-sm text-white/60 text-right">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-start gap-4">
                  <span className="font-cinzel text-[10px] tracking-widest text-gold/50 uppercase whitespace-nowrap">
                    Also Teaches
                  </span>
                  <span className="text-sm text-white/60 text-right">
                    Chinese Internal Martial Arts &amp; Filipino Stick Fighting{" "}
                    <Link href="/classes" className="text-gold/60 hover:text-gold transition-colors whitespace-nowrap">
                      → See Programs
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3">
              <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
                Biography
              </p>
              <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide mb-6">
                A Lifetime Devoted to <span className="text-gold">Wing Chun</span>
              </h2>
              <span className="gold-line-short mb-8" />

              <div className="space-y-5 text-white/65 leading-relaxed text-[15px] mt-8">
                <p>
                  Grandmaster Franco Lung was born in 1954. His journey in Wing Chun began in Hong
                  Kong over five decades ago with Wing Chun legends — GM Wong Shun Leung and
                  Grandmaster Wan Kam Leung. From these two extraordinary teachers, Sifu Lung built
                  the foundation of a martial understanding that would evolve for the rest of his life.
                </p>
                <p>
                  Sifu Lung also credits his Sisok Hawkins Cheung for helping him understand the
                  Internal Wing Chun — the so-called &ldquo;Software&rdquo; of the system. Where
                  most Wing Chun instruction focuses on the external mechanics of the art, GM Lung
                  learned to access its deeper energetic and structural intelligence. This internal
                  component is the heart of what distinguishes his teaching today.
                </p>
                <p>
                  GM Lung also practices and teaches Chinese internal martial arts, giving his
                  students access to principles that span multiple traditions and enrich every
                  aspect of their Wing Chun development.
                </p>
                <p>
                  Grandmaster Lung immigrated to the United States in 2009 and began teaching Wing
                  Chun in Los Angeles, CA. Rather than simply replicating what he was taught, Sifu
                  Lung spent years developing his own structured three-level system — a curriculum
                  designed to give students a clear, principled pathway from beginner to advanced
                  practitioner.
                </p>
                <blockquote className="my-10 px-8 py-6 border border-gold/30 bg-ink text-center">
                  <p className="font-cinzel text-xl md:text-2xl text-white/80 tracking-wide italic leading-relaxed">
                    &ldquo;Learning Has No Bounds.&rdquo;
                  </p>
                  <span className="gold-line-short mx-auto mt-4" />
                </blockquote>
                <p>
                  Today, GM Lung teaches students of all ages and backgrounds at his school in
                  Temple City, CA — children through the Little Dragon Program, adult beginners,
                  advanced Wing Chun practitioners, and those interested in Filipino Stick Fighting.
                  His curriculum includes, but is not limited to: Six Harmony Theory, Major Hand
                  development, Gong Lik development, 3-Gate Defense activation, Upgraded Chi Sau,
                  Empty Door Theory, and Yin Yang Exchange.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Link href="/lineage" className="btn-outline inline-flex items-center gap-3">
                  His Teachers <ArrowRight size={14} />
                </Link>
                <Link href="/system" className="btn-gold inline-flex items-center gap-3">
                  The 3-Level System <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-ink">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              The Journey
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              <span className="text-gold">Timeline</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7rem] top-0 bottom-0 w-px bg-ink-400 hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-0 md:gap-8 flex-col md:flex-row">
                  {/* Year */}
                  <div className="w-28 flex-shrink-0 text-right hidden md:block">
                    <span className="font-cinzel text-xs text-gold tracking-wide">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex items-start justify-center w-5 flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gold mt-0.5" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 card-base p-6">
                    <p className="font-cinzel text-[10px] text-gold/50 tracking-widest uppercase mb-1 md:hidden">
                      {item.year}
                    </p>
                    <h3 className="font-cinzel text-sm font-semibold text-white tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* End CTA */}
      <section className="py-16 sm:py-24 bg-ink text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
        <div className="max-w-xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide mb-4">
            Train with <span className="text-gold">GM Lung</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Classes are open to all ages and experience levels in Temple City, CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/classes" className="btn-gold">
              View Classes &amp; Schedule
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
