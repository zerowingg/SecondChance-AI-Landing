"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MendRing from "@/components/ui/MendRing";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-gradient pt-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-radial-fade" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(212,175,55,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 pb-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-widest2 text-gold-light"
          >
            <Sparkles size={13} className="text-gold" />
            Built for the AMD AI Hackathon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[1.04] text-cream"
          >
            Because everyone
            <br />
            deserves a{" "}
            <span className="relative inline-block">
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                second chance.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-cream/65"
          >
            SecondChance AI is an AI-powered relationship recovery and meaningful
            connection platform — helping you heal emotionally, rebuild
            confidence, and create genuine relationships through intelligent AI
            guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn-gold group">
              Begin Your Journey
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#features" className="btn-outline-light">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 flex items-center gap-8 text-cream/50"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl text-gold-light">AI</span>
              <span className="text-xs uppercase tracking-widest2">Guided Coaching</span>
            </div>
            <div className="h-8 w-px bg-cream/15" />
            <div className="flex flex-col">
              <span className="font-display text-2xl text-gold-light">100%</span>
              <span className="text-xs uppercase tracking-widest2">Encrypted &amp; Private</span>
            </div>
          </motion.div>
        </div>

        {/* Right: signature mending-ring visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]"
        >
          <div className="animate-spin-slow absolute inset-0">
            <MendRing size={460} strokeWidth={1} gapDeg={70} animate={false} />
          </div>
          <div className="absolute inset-10 animate-float">
            <MendRing size={340} strokeWidth={2.5} gapDeg={44} />
          </div>
          <div className="glass-dark absolute inset-[92px] flex flex-col items-center justify-center rounded-full text-center">
            <span className="font-display text-sm italic text-cream/80">
              &ldquo;Healing isn&rsquo;t
            </span>
            <span className="font-display text-sm italic text-cream/80">
              a straight line.&rdquo;
            </span>
            <span className="mt-3 text-[10px] uppercase tracking-widest2 text-gold-light">
              — Your AI Coach
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
