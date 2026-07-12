"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MendRing from "@/components/ui/MendRing";

export default function Founder() {
  return (
    <section id="founder" className="section-pad bg-cream-gradient">
      <div className="mx-auto flex max-w-content flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Behind SecondChance AI"
          title="Meet the founder"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="card-premium grid w-full max-w-3xl grid-cols-1 items-center gap-10 p-8 sm:grid-cols-[auto_1fr] sm:p-12"
        >
          {/* Founder Image */}
          <div className="relative mx-auto flex h-40 w-40 flex-none items-center justify-center">
            <MendRing size={160} strokeWidth={2} gapDeg={50} />

            <div className="absolute inset-4 overflow-hidden rounded-full border-2 border-[#C9A227] bg-white shadow-xl">
              <img
                src="/founder/ankit.jpg"
                alt="Ankit Anurag"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Founder Details */}
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <span className="eyebrow">Founder</span>

            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Ankit Anurag
            </h3>

            <p className="text-[15px] font-medium text-gold-deep">
              Student Developer • Founder of SecondChance AI
            </p>

            <p className="max-w-lg text-[14.5px] leading-relaxed text-ink/60">
              SecondChance AI was created during the AMD AI Hackathon with one
              belief at its core — everyone deserves a second chance. The
              platform combines AI-powered compatibility, intelligent guidance,
              and a privacy-first experience to help people rebuild confidence
              and form meaningful relationships.
            </p>

            <div className="mt-3 flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-all duration-300 hover:border-gold hover:text-gold-deep"
              >
                <Mail size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-all duration-300 hover:border-gold hover:text-gold-deep"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-all duration-300 hover:border-gold hover:text-gold-deep"
              >
                <Github size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}