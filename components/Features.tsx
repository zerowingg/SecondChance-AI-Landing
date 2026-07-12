"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section-pad bg-cream">
      <div className="mx-auto flex max-w-content flex-col gap-24">
        <SectionHeading
          eyebrow="What's Inside"
          title="Every feature, built around your healing"
          description="From your first honest conversation with the AI Coach to the moment you match with someone real — every part of SecondChance AI is designed to move you gently forward."
        />

        <div className="flex flex-col gap-28">
          {features.map((feature, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start gap-5 [direction:ltr]"
                >
                  <span className="eyebrow">{feature.eyebrow}</span>
                  <h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/60">
                    {feature.description}
                  </p>
                  <ul className="mt-2 flex flex-col gap-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-gradient-soft">
                          <Check size={12} className="text-gold-deep" strokeWidth={3} />
                        </span>
                        <span className="text-[14.5px] leading-relaxed text-ink/70">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mx-auto w-full max-w-[320px] [direction:ltr]"
                >
                  <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gold-gradient opacity-20 blur-2xl" />
                  <div className="card-premium overflow-hidden rounded-[36px] border-4 border-white p-0 shadow-gold-lg">
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.title} screen in the SecondChance AI app`}
                      width={480}
                      height={1013}
                      className="h-auto w-full"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
