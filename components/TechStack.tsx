"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech" className="section-pad bg-cream-gradient">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Under The Hood"
          title="Engineered for speed, precision and trust"
          description="A modern, type-safe stack chosen to make SecondChance AI feel instant, resilient, and ready to scale beyond the hackathon."
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium flex flex-col items-start gap-4 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
                <Cpu size={18} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{tech.name}</h3>
              <p className="text-sm leading-relaxed text-ink/55">{tech.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
