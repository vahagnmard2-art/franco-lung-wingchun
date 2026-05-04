import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lineage",
  description:
    "The lineage of Grandmaster Franco Lung — tracing his Wing Chun heritage through Grandmaster Wong Shun Leung, Grandmaster Wan Kam Leung, and Sisok Hawkins Cheung.",
};

const masters = [
  {
    name: "Grandmaster Wong Shun Leung",
    chineseName: "黃淳梁",
    period: "Primary Teacher",
    dates: "1935 – 1997",
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
    period: "Primary Teacher",
    dates: "Born 1950",
    label: "Dai Sifu",
    desc: [
      `Grandmaster Wan Kam Leung is the founder of the Practical Wing Chun system (實用詠春), a highly structured and principle-centered approach to classical Wing Chun. He trained under Wong Shun Leung and dedicated his life to distilling Wing Chun's most essential elements into a clear, teachable curriculum.`,
      `His system emphasizes practical application over ceremony, and is renowned for its attention to internal structure, proper alignment, and generating power through body mechanics rather than muscular force.`,
      `The influence of GM Wan Kam Leung is deeply embedded in GM Lung's own system — particularly his emphasis on structure, internal development, and clear explanations of why techniques work.`,
    ],
  },
  {
    name: "Sisok Hawkins Cheung",
    chineseName: "張卓慶",
    period: "Mentor — Internal Wing Chun",
    dates: "Born 1938",
    label: "Sisok",
    desc: [
      `Hawkins Cheung is an Ip Man disciple and a senior training brother of Bruce Lee from their days together in Hong Kong. He is widely respected for his deep understanding of Wing Chun's internal principles — the energetic, structural, and philosophical dimensions that underpin the system's power.`,
      `Often referred to by practitioners as the "Software" of Wing Chun, these internal principles govern how force is generated, received, and redirected without relying on physical size or muscular tension.`,
      `Grandmaster Lung specifically credits Sisok Hawkins Cheung for revealing this internal dimension of Wing Chun to him — a gift that fundamentally shaped how GM Lung teaches and how his students experience the art.`,
    ],
  },
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

      {/* Lineage tree — simple visual */}
      <section className="py-16 bg-ink-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col items-center gap-0">
            {/* Ip Man */}
            <div className="border border-gold/30 bg-ink-200 px-8 py-4 text-center">
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

            {/* 3 branches */}
            <div className="grid grid-cols-3 gap-3 w-full relative">
              <div className="absolute top-0 left-[16.67%] right-[16.67%] h-px bg-gold/20" />
              {["Wong Shun Leung", "Wan Kam Leung", "Hawkins Cheung"].map((name) => (
                <div key={name} className="flex flex-col items-center gap-0">
                  <div className="w-px h-6 bg-gold/20" />
                  <div className="border border-gold/20 bg-ink-200 p-3 text-center w-full">
                    <p className="font-cinzel text-[10px] text-white/70 tracking-wide leading-tight">
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
            <div className="border border-gold bg-ink-200 px-10 py-5 text-center shadow-[0_0_30px_rgba(201,168,76,0.12)]">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold uppercase mb-1">
                Grandmaster
              </p>
              <p className="font-cinzel text-base font-bold text-white tracking-wide">
                Franco Lung
              </p>
              <p className="font-inter text-xs text-white/30 mt-1">Temple City, CA · Est. 2009</p>
            </div>
          </div>
        </div>
      </section>

      {/* Master profiles */}
      <section className="section-pad bg-ink">
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
                  {/* Photo placeholder */}
                  <div className="w-24 h-24 flex-shrink-0 bg-ink border border-ink-400 flex items-center justify-center">
                    <span className="font-cinzel text-gold/20 text-2xl">
                      {m.name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  {/* Header */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase border border-gold/20 px-2 py-0.5">
                        {m.label}
                      </span>
                      <span className="font-cinzel text-[9px] tracking-ultra text-white/30 uppercase">
                        {m.dates}
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
                    <p key={i} className="text-white/55 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/system" className="btn-gold inline-flex items-center gap-3">
              Explore GM Lung&apos;s System <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
