"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Heal first",
    text: "Every journey starts with the AI Coach — a space to process, reflect and rebuild confidence before you ever meet someone new.",
  },
  {
    icon: Sparkles,
    title: "Connect with intention",
    text: "Smart Matching surfaces people based on real compatibility — values, pace and emotional readiness — not endless swiping.",
  },
  {
    icon: ShieldCheck,
    title: "Stay in control",
    text: "Your story is yours. Every conversation is encrypted, every setting is yours to change, and your data is yours to delete.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream-gradient">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Our Belief"
          title="Second chances aren't given. They're built."
          description="SecondChance AI exists because moving on from heartbreak, rejection or loneliness isn't about finding someone new immediately — it's about becoming ready. We built an AI companion for that in-between space, so the connections that follow are ones that last."
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium flex flex-col gap-5 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient-soft text-gold-deep">
                <p.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/60">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
