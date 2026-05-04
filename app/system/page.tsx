import type { Metadata } from "next";
import Link from "next/link";

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
    focus: ["Basic Forms (Siu Lim Tao)", "Structural Alignment", "Stance & Footwork", "Entry-level Chi Sau"],
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

const pillars = [
  {
    num: "01",
    title: "Six Harmony Theory",
    desc: "The Six Harmonies (六合) describe the unified relationship between internal and external forces. In GM Lung's system, the Six Harmony framework provides the structural logic behind every technique — coordinating mind, energy, and body into a single coherent expression of intent.",
    insight: "True Wing Chun power comes not from muscular force but from the perfect alignment of all six harmonies acting simultaneously.",
  },
  {
    num: "02",
    title: "Major Hand Development",
    desc: "The Major Hand refers to the primary bridging hand — the lead hand that initiates contact, controls space, and delivers power. GM Lung's system dedicates significant attention to developing the Major Hand's sensitivity, structural integrity, and explosive capacity across all ranges of engagement.",
    insight: "Most practitioners underestimate the depth of the lead hand. GM Lung's approach reveals it as the most sophisticated tool in Wing Chun's arsenal.",
  },
  {
    num: "03",
    title: "Gong Lik Development",
    desc: "Gong Lik (功力) refers to cultivated internal strength — a quality distinct from muscular power that develops through dedicated training of the body's energetic pathways. This is the physical and energetic conditioning that makes Wing Chun techniques genuinely effective regardless of size or raw strength.",
    insight: "Without Gong Lik, Wing Chun is only shape. With it, the same movements carry real, transferable force.",
  },
  {
    num: "04",
    title: "3-Gate Defense Activation",
    desc: "GM Lung's 3-Gate Defense system provides a clear structural framework for simultaneously attacking and defending. Each gate corresponds to a zone of the body and a layer of engagement — enabling practitioners to respond to any incoming force without sacrificing their own offensive capability.",
    insight: "Wing Chun does not block and then strike. The 3-Gate system embodies this principle at a structural level.",
  },
  {
    num: "05",
    title: "Upgraded Chi Sau",
    desc: "Chi Sau (黐手) — Sticky Hands — is Wing Chun's signature training method for developing sensitivity, reflexes, and positional understanding through tactile contact. GM Lung's upgraded approach goes beyond the traditional drills to develop genuine combat sensitivity, adaptive pressure management, and live-application awareness.",
    insight: "Conventional Chi Sau develops habit. GM Lung's Upgraded Chi Sau develops intelligence.",
  },
  {
    num: "06",
    title: "Empty Door Theory",
    desc: "Empty Door Theory identifies and exploits structural gaps in any opponent's defense — the openings that exist not because of poor technique, but because of the fundamental physics of how a body occupies space. Combined with the Yin Yang Exchange, this is the highest strategic layer of GM Lung's system.",
    insight: "Every defense creates its own emptiness. The master learns to see and enter those doors before they close.",
  },
];

export default function SystemPage() {
  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Curriculum
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            The 3-Level <span className="text-gold">System</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto mt-6">
            A structured, principle-based curriculum developed over five decades — guiding students
            from first contact to genuine mastery.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* 3 Levels */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
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
                  <div className="text-right">
                    <p className="font-cinzel text-[9px] tracking-ultra text-gold/40 uppercase">
                      Level {l.level}
                    </p>
                  </div>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wide mb-1">
                  {l.title}
                </h3>
                <p className="font-cinzel text-[10px] text-gold/60 tracking-widest uppercase mb-4">
                  {l.subtitle}
                </p>
                <span className="gold-line-short mb-5" />
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{l.desc}</p>
                <ul className="space-y-2">
                  {l.focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-xs text-white/40">
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
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Core Principles
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Six <span className="text-gold">Pillars</span> of the System
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mt-4 leading-relaxed">
              These six principles form the conceptual spine of GM Lung&apos;s curriculum.
              Together they define what makes his Wing Chun unique.
            </p>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="space-y-5">
            {pillars.map((p) => (
              <div key={p.num} className="card-base p-8 md:p-10 group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className="font-cinzel text-5xl font-black text-gold/10 group-hover:text-gold/15 transition-colors leading-none flex-shrink-0">
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-cinzel text-lg font-semibold text-white tracking-wide mb-4">
                      {p.title}
                    </h3>
                    <span className="gold-line-short mb-4" />
                    <p className="text-white/55 text-sm leading-relaxed mt-4 mb-5">{p.desc}</p>
                    <div className="border-l-2 border-gold/30 pl-4 group-hover:border-gold/60 transition-colors">
                      <p className="text-white/35 text-sm italic leading-relaxed">{p.insight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-100 text-center px-6">
        <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
          Experience it First-Hand
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide mb-4">
          Ready to Begin?
        </h2>
        <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed mb-10">
          No prior martial arts experience is necessary. GM Lung&apos;s system is designed to
          meet students exactly where they are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/classes" className="btn-gold">
            View Classes &amp; Pricing
          </Link>
          <Link href="/contact" className="btn-outline">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
