import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Classes & Schedule",
  description:
    "Wing Chun classes in Temple City, CA with Grandmaster Franco Lung. Private lessons from $50, group classes $30. Children's program, adult classes, Filipino Stick Fighting.",
};

const programs = [
  {
    title: "Children's Little Dragon Program",
    age: "Ages 5–12",
    desc: "A structured, fun program designed specifically for children. Students develop focus, discipline, coordination, and confidence through age-appropriate Wing Chun training. Grandmaster Lung's patient and encouraging teaching style makes this an ideal martial arts foundation for young practitioners.",
    includes: [
      "Age-appropriate Wing Chun fundamentals",
      "Focus and discipline training",
      "Coordination and body awareness",
      "Confidence and character building",
      "Safe, supervised partner drills",
    ],
  },
  {
    title: "Adult — New Students",
    age: "No experience required",
    desc: "Beginners are always welcome. GM Lung's system is specifically structured to guide new students clearly from zero to competence. You will learn the foundational forms, structures, and principles of Wing Chun in a welcoming environment with no prior experience required.",
    includes: [
      "Siu Lim Tao (first form)",
      "Structural alignment and stance",
      "Entry-level Chi Sau (sticky hands)",
      "Core Wing Chun principles",
      "Partner practice with supervision",
    ],
  },
  {
    title: "Adult — Experienced Students",
    age: "Prior Wing Chun background",
    desc: "For students who come with prior Wing Chun training — whether from another lineage or school — GM Lung offers classes that meet you at your current level and begin introducing the deeper principles of his 3-level system.",
    includes: [
      "Advanced forms and applications",
      "Upgraded Chi Sau methodology",
      "Six Harmony Theory application",
      "Gong Lik development work",
      "3-Gate Defense and Empty Door Theory",
    ],
  },
  {
    title: "Filipino Stick Fighting",
    age: "All experience levels",
    desc: "Grandmaster Lung also offers instruction in Filipino Stick Fighting (Arnis/Eskrima/Kali) — one of the world's most practical and battle-tested weapons systems. These classes complement Wing Chun training and are open to students of all backgrounds.",
    includes: [
      "Single and double stick technique",
      "Blade and weapon awareness",
      "Empty-hand transitions",
      "Coordination and footwork",
      "Combat-applicable drills",
    ],
  },
];

const schedule = [
  {
    day: "Friday",
    classes: [
      { time: "7:30 – 9:00 PM",    type: "Adult Class",  age: "" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "11:00 AM – 12:30 PM", type: "Teen Class",  age: "Ages 11–16" },
      { time: "1:30 – 3:00 PM",      type: "Kids Class",  age: "Ages 6–10"  },
      { time: "3:30 – 5:00 PM",      type: "Mixed Adult & Teen",   age: "All Adults" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "2:30 – 3:00 PM",  type: "Kids Class", age: "Ages 6–10" },
      { time: "3:30 – 5:00 PM",  type: "Kids Class", age: "Ages 6–10" },
    ],
  },
  {
    day: "Mon – Thu",
    classes: [
      { time: "By Appointment", type: "Private Lessons", age: "Flexible" },
    ],
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Header */}
      <div className="page-hero text-center px-6">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="max-w-3xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-4">
            Train with a Grandmaster
          </p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
            Classes &amp; <span className="text-gold">Pricing</span>
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto mt-6">
            Students of all ages and experience levels are welcome. Space is limited to ensure
            personal attention from GM Lung.
          </p>
          <div className="gold-line mx-auto w-24 mt-8" />
        </div>
      </div>

      {/* Schedule — shown first so visitors confirm a time exists before seeing price */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Availability
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Class <span className="text-gold">Schedule</span>
            </h2>
            <p className="text-white/40 text-xs mt-3 tracking-wide">
              Times subject to change — contact us for the most current schedule.
            </p>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="card-base overflow-hidden">
            {schedule.map((row, i) => (
              <div
                key={row.day}
                className={`${i < schedule.length - 1 ? "border-b border-ink-400" : ""}`}
              >
                {row.classes.map((cls, j) => (
                  <div
                    key={j}
                    className={`flex items-center gap-4 px-6 py-4 ${
                      j < row.classes.length - 1 ? "border-b border-ink-400/40" : ""
                    }`}
                  >
                    <span className="font-cinzel text-sm text-white/70 tracking-wide w-24 flex-shrink-0">
                      {j === 0 ? row.day : ""}
                    </span>
                    <span className="text-sm text-gold/80 w-44 flex-shrink-0">{cls.time}</span>
                    <span className="text-sm text-white/60 flex-1">{cls.type}</span>
                    {cls.age && (
                      <span className="font-cinzel text-[10px] text-white/30 tracking-wide border border-ink-400 px-2 py-0.5 whitespace-nowrap hidden sm:block">
                        {cls.age}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center mt-6 leading-relaxed">
            Private lessons are arranged directly with Sifu Lung and are available on a flexible
            schedule. Contact us to arrange.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Investment
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              <span className="text-gold">Pricing</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Group */}
            <div className="card-base p-8 flex flex-col">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-3">
                Group Training
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">Group Class</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-cinzel text-5xl text-gold font-black">$30</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <p className="text-white/30 text-xs mb-6">Per class · Drop-in welcome</p>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-3 text-sm text-white/50 flex-1">
                {[
                  "All experience levels welcome",
                  "Wing Chun forms & application",
                  "Group Chi Sau drills",
                  "Partner technique work",
                  "Supervised by GM Lung",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline mt-8 text-center text-[10px]">
                Enquire Now
              </Link>
            </div>

            {/* Private 1hr — FEATURED */}
            <div className="relative bg-ink-200 border border-gold/50 p-8 flex flex-col shadow-[0_0_50px_rgba(201,168,76,0.12)]">
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="font-cinzel text-[9px] tracking-ultra text-gold uppercase mb-3">
                Most Popular
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                Private · 1 Hour
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-cinzel text-5xl text-gold font-black">$50</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <p className="text-white/30 text-xs mb-6">One-on-one · Flexible scheduling</p>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-3 text-sm text-white/50 flex-1">
                {[
                  "Direct instruction from GM Lung",
                  "Personalised to your level",
                  "Detailed technical correction",
                  "Choose your focus area",
                  "Schedule at your convenience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold mt-8 text-center text-[10px]">
                Book Private Lesson
              </Link>
            </div>

            {/* Private 90min */}
            <div className="card-base p-8 flex flex-col">
              <p className="font-cinzel text-[9px] tracking-ultra text-gold/50 uppercase mb-3">
                Extended Private
              </p>
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                Private · 90 Min
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-cinzel text-5xl text-gold font-black">$70</span>
                <span className="text-white/40 text-sm">/ session</span>
              </div>
              <p className="text-white/30 text-xs mb-6">One-on-one · Flexible scheduling</p>
              <span className="gold-line-short mb-6" />
              <ul className="space-y-3 text-sm text-white/50 flex-1">
                {[
                  "All private 1-hour benefits",
                  "Extended deep-dive sessions",
                  "More time for Chi Sau work",
                  "System theory & application",
                  "Ideal for serious students",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-outline mt-8 text-center text-[10px]">
                Book Private Lesson
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-pad bg-ink-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              All <span className="text-gold">Programs</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="card-base p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-cinzel text-base font-semibold text-white tracking-wide leading-snug">
                    {p.title}
                  </h3>
                  <span className="font-cinzel text-[9px] tracking-wide text-gold/50 border border-gold/20 px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                    {p.age}
                  </span>
                </div>
                <span className="gold-line-short mb-4" />
                <p className="text-white/50 text-sm leading-relaxed mb-5 mt-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/35">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-gold">
              Contact to Enroll
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-ink">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-ultra text-gold/60 uppercase mb-3">
              Questions
            </p>
            <h2 className="font-cinzel text-3xl font-bold text-white tracking-wide">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <div className="gold-line mx-auto w-24 mt-6" />
          </div>
          <FAQAccordion />
          <p className="text-center text-white/30 text-sm mt-10">
            Don&apos;t see your question?{" "}
            <Link href="/contact" className="text-gold/60 hover:text-gold transition-colors underline underline-offset-4">
              Send us a message
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
