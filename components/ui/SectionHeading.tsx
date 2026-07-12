"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-5`}
    >
      <span className={`eyebrow ${light ? "text-gold-light before:bg-gold-light" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.1] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-[1.05rem] leading-relaxed ${
            light ? "text-cream/70" : "text-ink/60"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
