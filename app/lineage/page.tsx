import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lineage",
  description:
    "The lineage of Grandmaster Franco Lung — tracing his Wing Chun heritage through Grandmaster Wong Shun Leung and Grandmaster Wan Kam Leung, direct students of Ip Man.",
};

const masters = [
  {
    name: "Grandmaster Wong Shun Leung",
    chineseName: "黃淳梁",
    photo: "/images/wong-shun-leung.jpg",
    period: "Primary Teacher",
    label: "Dai Sifu",
    desc: [
      `Wong Shun Leung was one of the most celebrated Wing Chun masters of the 20th century and a direct student of the legendary Grandmaster Ip Man. Known throughout Hong Kong as "Gong Sau Wong" — the King of Talking Hands — he built his reputation through hundreds of challenge matches, proving the effectiveness of Wing Chun against all comers.`,
      `He was Bruce Lee's primary Wing Chun instructor before Lee left for the United States, and his no-nonsense, application-focused approach to teaching became highly influential worldwide. Wong Shun Leung's lineage is one of the most recognizable in all of Wing Chun.`,
      `Grandmaster Lung trained extensively under Wong Shun Leung in Hong Kong, absorbing both his technical brilliance and his direct, principle-based teaching philosophy.`,
    ],
  },
  {
    name: "Grandmaster Wan Kam Leung",
    chineseName: "尹劍良",
    photo: "/images/wan-kam-leung.jpg",
    period: "Primary Teacher",
    label: "Dai Sifu",
    desc: [
      `Grandmaster Wan Kam Leung is the founder of the Practical Wing Chun system (實用詠春), a highly structured and principle-centered approach to classical Wing Chun. He trained under Wong Shun Leung and dedicated his life to distilling Wing Chun's most essential elements into a clear, teachable curriculum.`,
      `His system emphasizes practical application over ceremony, and is renowned for its attention to internal structure, proper alignment, and generating power through body mechanics rather than muscular force.`,
      `The influence of GM Wan Kam Leung is deeply embedded in GM Lung's own system — particularly his emphasis on structure, internal development, and clear explanations of why techniques work.`,
    ],
  },
];

const disciples = [
  { name: "Howard Lin",      coach: false },
  { name: "Jason Tsai",      coach: true  },
  { name: "Patrick Pace",    coach: true  },
  { name: "Walter Alves",    coach: false },
  { name: "Bradley Temple",  coach: false },
  { name: "Scottmann",       coach: false },
  { name: "David Wong",      coach: true  },
  { name: "Ken Wu",          coach: true  },
  { name: "Michael Koster",  coach: false },
];

export default function LineagePage() {
  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Heritage &amp; Tradition
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            The <span className="text-gold">Lineage</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto mt-6">
            Wing Chun is passed teacher to student across generations. Grandmaster Lung&apos;s art
            traces a direct line to the greatest names in the history of the system.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* WSL Quote */}
      <section className="py-12 bg-ink-100 border-b border-ink-400">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <blockquote className="font-cinzel text-lg md:text-xl text-white/60 tracking-wide leading-relaxed italic">
            &ldquo;If you really want to learn Wing Chun, you must spend your time feeling it, not just thinking about it.&rdquo;
          </blockquote>
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/50 uppercase mt-5">
            — Wong Shun Leung 黃淳梁
          </p>
        </div>
      </section>

      {/* Lineage tree */}
      <section className="py-16 bg-ink">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col items-center gap-0">
            {/* Ip Man */}
            <div className="border border-gold/30 bg-ink-200 px-4 sm:px-8 py-4 text-center w-full max-w-xs">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-1">Origin</p>
              <p className="font-cinzel text-sm font-semibold text-white tracking-wide">
                Grandmaster Ip Man 葉問
              </p>
              <p className="font-inter text-xs text-white/30 mt-1">Founder of Modern Wing Chun</p>
            </div>
            {/* Connector */}
            <div className="w-px h-8 bg-gold/20" />
            <div className="w-2 h-2 rounded-full bg-gold/40" />
            <div className="w-px h-8 bg-gold/20" />

            {/* 2 branches */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-sm mx-auto relative">
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gold/20" />
              {["Wong Shun Leung", "Wan Kam Leung"].map((name) => (
                <div key={name} className="flex flex-col items-center gap-0">
                  <div className="w-px h-6 bg-gold/20" />
                  <div className="border border-gold/20 bg-ink-200 p-2 text-center w-full">
                    <p className="font-cinzel text-[9px] sm:text-[10px] text-white/70 tracking-wide leading-snug">
                      {name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connector down */}
            <div className="w-px h-8 bg-gold/20" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-px h-8 bg-gold/20" />

            {/* Franco Lung */}
            <div className="border border-gold bg-ink-200 px-6 sm:px-10 py-5 text-center shadow-[0_0_30px_rgba(201,168,76,0.12)] w-full max-w-xs">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold uppercase mb-1">
                Grandmaster
              </p>
              <p className="font-cinzel text-base font-bold text-white tracking-wide">
                Franco Lung
              </p>
              <p className="font-inter text-xs text-white/30 mt-1">Temple City, CA · Est. 2009</p>
            </div>

            {/* Connector to disciples */}
            <div className="w-px h-8 bg-gold/20" />
            <div className="w-2 h-2 rounded-full bg-gold/40" />
            <div className="w-px h-8 bg-gold/20" />

            {/* Disciples label */}
            <div className="border border-gold/20 bg-ink-200 px-6 py-3 text-center w-full max-w-xs">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase">
                Disciples · Temple City
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Master profiles */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              The Teachers
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Masters of the <span className="text-gold">Art</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="space-y-8">
            {masters.map((m) => (
              <div key={m.name} className="card-base p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  {/* Photo */}
                  <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden border border-gold/20 bg-ink">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Header */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase border border-gold/20 px-2 py-0.5">
                        {m.label}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-wide">
                      {m.name}
                    </h3>
                    <p className="font-cinzel text-xs text-gold/40 tracking-widest mt-1">
                      {m.chineseName}
                    </p>
                    <p className="font-cinzel text-[10px] tracking-widest text-gold/50 uppercase mt-2">
                      {m.period}
                    </p>
                  </div>
                </div>
                <span className="gold-line-short mb-6" />
                <div className="space-y-4 mt-6">
                  {m.desc.map((para, i) => (
                    <p key={i} className="text-white/65 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciples */}
      <section className="section-pad bg-ink">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Carrying It Forward
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              GM Lung&apos;s <span className="text-gold">Disciples</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mt-4 leading-relaxed">
              These students have dedicated themselves to the study and preservation of GM Lung&apos;s system.
              Those marked as coaches actively teach under his guidance.
            </p>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {disciples.map((d) => (
              <div
                key={d.name}
                className={`flex items-center justify-between gap-3 px-5 py-4 border transition-colors duration-200 ${
                  d.coach
                    ? "border-gold/40 bg-ink-200 shadow-[0_0_16px_rgba(201,168,76,0.06)]"
                    : "border-ink-400 bg-ink-200"
                }`}
              >
                <span className="font-cinzel text-sm text-white tracking-wide">
                  {d.name}
                </span>
                {d.coach && (
                  <span className="font-cinzel text-[8px] tracking-ultra text-gold uppercase border border-gold/40 px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                    Coach
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-ink text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
        <div className="max-w-xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            The Living Tradition
          </p>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
            Experience the <span className="text-gold">System</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            This lineage lives on at GM Lung&apos;s school in Temple City. Explore the structured
            curriculum he has built from five decades of study.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/system" className="btn-gold inline-flex items-center gap-3">
              Explore GM Lung&apos;s System <ArrowRight size={14} />
            </Link>
            <Link href="/classes" className="btn-outline">
              View Classes &amp; Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
