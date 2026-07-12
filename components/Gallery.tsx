"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { screenshots } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-ink-gradient">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Inside The App"
          title="A closer look at the experience"
          description="Every screen is designed to feel calm, considered and warm — never gamified, never overwhelming."
          light
        />

        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.file}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[26px] border border-gold/15 bg-white/[0.03] ${
                i === 0 ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-[9/19] w-full overflow-hidden">
                <Image
                  src={`/screenshots/${shot.file}`}
                  alt={`${shot.label} screen — SecondChance AI`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                <span className="font-display text-base font-semibold text-cream">
                  {shot.label}
                </span>
                <span className="text-xs text-cream/55 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  {shot.caption}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
