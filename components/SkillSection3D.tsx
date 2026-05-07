"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WingChunDummy3D = dynamic(() => import("./WingChunDummy3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
    </div>
  ),
});

const skills = [
  {
    name: "Siu Nim Tao",
    zh: "小念頭",
    desc: "The first form — cultivating the small idea and building the internal structure that all else rests on.",
    armIndex: 2,
  },
  {
    name: "Chum Kiu",
    zh: "尋橋",
    desc: "Bridging the gap — footwork, body rotation, and closing distance under pressure.",
    armIndex: 0, // left arm
  },
  {
    name: "Biu Jee",
    zh: "鏢指",
    desc: "Thrusting fingers — emergency techniques and advanced centerline recovery.",
    armIndex: 1, // right arm
  },
  {
    name: "Muk Yan Jong",
    zh: "木人樁",
    desc: "The wooden dummy — refining angles, entries, and simultaneous attack and defense.",
    armIndex: null, // all arms
  },
  {
    name: "Chi Sao",
    zh: "黐手",
    desc: "Sticky hands — the core sensitivity practice that develops reflexive response.",
    armIndex: 3, // leg
  },
];

export default function SkillSection3D() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const activeArm = activeSkill !== null ? skills[activeSkill].armIndex : null;

  return (
    <section className="relative py-24 bg-ink overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-cinzel text-xs tracking-[0.35em] text-gold uppercase mb-16 text-center">
          The Complete System
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — 3D dummy */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[480px] lg:h-[560px] overflow-hidden border border-gold/10 bg-gradient-to-b from-[#0d0900] to-[#080808]" style={{ borderRadius: 0 }}>
              <WingChunDummy3D activeArm={activeArm} />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-cinzel text-[9px] tracking-[0.3em] text-white/25 uppercase whitespace-nowrap pointer-events-none">
                {activeSkill !== null ? `Highlighting: ${skills[activeSkill].name}` : "Drag to rotate · Hover a skill"}
              </p>
            </div>
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
          </div>

          {/* RIGHT — skills list */}
          <div className="order-1 lg:order-2 space-y-2">
            <h2 className="font-cinzel text-[clamp(2rem,4vw,3rem)] font-black leading-tight text-white mb-4">
              Five Pillars of
              <br />
              <span className="text-shimmer">Wing Chun Mastery</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-10">
              Grandmaster Franco Lung teaches the complete Ip Man lineage — a
              logical, scientific system that anyone can learn regardless of size
              or strength.
            </p>

            <ul className="space-y-3">
              {skills.map((skill, i) => (
                <li
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onFocus={() => setActiveSkill(i)}
                  onBlur={() => setActiveSkill(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Highlight ${skill.name} on the wooden dummy`}
                  className={`group flex gap-4 items-start p-4 border cursor-pointer outline-none transition-all duration-300 ${
                    activeSkill === i
                      ? "border-gold/50 bg-gold/[0.07] shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                      : "border-white/5 bg-white/[0.02] hover:border-gold/25 hover:bg-gold/[0.04]"
                  }`}
                >
                  <span className={`font-cinzel text-sm mt-0.5 w-5 shrink-0 transition-colors duration-300 ${
                    activeSkill === i ? "text-gold" : "text-gold/40 group-hover:text-gold"
                  }`}>
                    {skill.zh}
                  </span>
                  <div>
                    <p className="font-cinzel text-sm font-bold text-white tracking-wide mb-1">
                      {skill.name}
                    </p>
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                      activeSkill === i ? "text-white/60" : "text-white/35"
                    }`}>
                      {skill.desc}
                    </p>
                  </div>
                  {activeSkill === i && (
                    <span className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2 animate-pulse" />
                  )}
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <Link href="/system" className="btn-gold inline-flex items-center gap-2">
                Explore the Full System
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
