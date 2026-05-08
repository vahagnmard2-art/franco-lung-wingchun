"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience to start?",
    a: "None at all. GM Lung's system is specifically designed to take complete beginners and guide them step by step. Most students who join have zero martial arts background. Your first class will cover the basics at your own pace.",
  },
  {
    q: "What age can children start?",
    a: "Children can join the Little Dragon Program from age 5. The program is structured to be age-appropriate — fun, safe, and focused on building focus, discipline, and confidence alongside the martial arts fundamentals.",
  },
  {
    q: "Is Wing Chun effective for real self-defense?",
    a: "Yes — and particularly so for GM Lung's approach. Wing Chun was designed for close-range, practical confrontations. GM Lung's system goes further by developing the internal dimension of the art, making techniques work regardless of the practitioner's size or strength.",
  },
  {
    q: "What should I wear to class?",
    a: "There is no formal uniform requirement to start. Flat-soled shoes are recommended. GM Lung provides school shirts and long sleeves for a fee.",
  },
  {
    q: "Can I join if I already train in another Wing Chun lineage or martial art?",
    a: "Absolutely. GM Lung regularly works with students from other lineages and backgrounds. His system is designed to meet you where you are — if anything, prior training accelerates how quickly you access the deeper principles.",
  },
  {
    q: "What is the difference between group classes and private lessons?",
    a: "Group classes give you the energy of training with others and are great for developing Chi Sau (partner sensitivity work). Private lessons are one-on-one with GM Lung directly — faster progress, personal correction, and the ability to focus on exactly what you need. Many serious students do both.",
  },
  {
    q: "How long until I can defend myself?",
    a: "Practical self-defense awareness begins almost immediately — Wing Chun's core principles are learnable quickly. Most students feel a meaningful shift in their awareness and structure within the first few months of consistent training.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => (
        <div key={i} className="card-base overflow-hidden">
          <button
            id={`faq-btn-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
          >
            <span className="font-cinzel text-sm text-white/80 group-hover:text-white tracking-wide leading-snug transition-colors">
              {item.q}
            </span>
            <ChevronDown
              size={16}
              className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            aria-hidden={open !== i}
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5">
              <div className="gold-line-short mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mt-3">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
