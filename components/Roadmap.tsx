"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { roadmap } from "@/lib/data";

const statusLabel: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In Progress",
  planned: "Planned",
};

const statusClass: Record<string, string> = {
  shipped: "bg-gold text-ink",
  "in-progress": "bg-gold/15 text-gold-deep border border-gold/40",
  planned: "bg-transparent text-ink/40 border border-ink/15",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad bg-cream">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16">
        <SectionHeading
          eyebrow="The Journey Ahead"
          title="Where SecondChance AI is headed"
          description="Built in phases, the same way healing happens — one deliberate step after another."
        />

        <div className="relative w-full max-w-3xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-cream-line sm:left-[31px]" />
          <div className="flex flex-col gap-10">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 pl-2 sm:gap-8"
              >
                <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 border-gold bg-cream font-display text-sm font-semibold text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="card-premium flex-1 p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest2 text-ink/40">
                      {item.phase}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusClass[item.status]}`}
                    >
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
