"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function PillarAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {pillars.map((p, i) => (
        <div key={p.num} className="card-base overflow-hidden group">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-6 px-8 py-5 text-left"
          >
            <span className="font-cinzel text-3xl font-black text-gold/15 group-hover:text-gold/25 transition-colors leading-none flex-shrink-0 w-10">
              {p.num}
            </span>
            <span className="font-cinzel text-sm font-semibold text-white/80 group-hover:text-white tracking-wide flex-1 transition-colors">
              {p.title}
            </span>
            <ChevronDown
              size={16}
              className={`text-gold/50 flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-180 text-gold" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              open === i ? "max-h-80" : "max-h-0"
            }`}
          >
            <div className="px-8 pb-6">
              <span className="gold-line-short mb-4" />
              <p className="text-white/55 text-sm leading-relaxed mt-4 mb-5">{p.desc}</p>
              <div className="border-l-2 border-gold/30 pl-4">
                <p className="text-white/35 text-sm italic leading-relaxed">{p.insight}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
