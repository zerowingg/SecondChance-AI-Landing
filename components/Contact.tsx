"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-gradient section-pad"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 bg-radial-fade" />
      </div>

      <div className="relative mx-auto flex max-w-content flex-col items-center gap-10 text-center">
        {/* SecondChance AI Logo */}
        <div className="mx-auto -mb-2">
          <img
            src="/Logo/logo.png"
            alt="SecondChance AI Logo"
            className="mx-auto h-[72px] w-[72px] object-contain drop-shadow-[0_0_12px_rgba(201,162,39,0.35)]"
          />
        </div>

        <span className="eyebrow justify-center text-gold-light">
          Join The Waitlist
        </span>

        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] text-cream">
          Your second chance starts with one step.
        </h2>

        <p className="max-w-xl text-[15px] leading-relaxed text-cream/60">
          Be among the first to experience SecondChance AI. Leave your email
          and we&apos;ll let you know the moment early access opens — no spam,
          just an invitation when it&apos;s ready.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-dark flex items-center gap-3 rounded-full px-7 py-4 text-cream"
          >
            <CheckCircle2 size={18} className="text-gold" />
            <span className="text-sm">
              You&apos;re on the list. We&apos;ll be in touch soon.
            </span>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="glass-dark flex flex-1 items-center gap-3 rounded-full px-5 py-4">
              <Mail size={16} className="text-gold/70" />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/35 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-gold group justify-center"
            >
              Notify Me

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        )}

        <div className="mt-6 flex flex-col items-center gap-2 text-cream/45">
          <span className="text-xs uppercase tracking-widest2">
            Or reach out directly
          </span>

          <a
            href="mailto:secondchanceofficial@gmail.com"
            className="text-sm text-gold-light transition-colors hover:text-gold"
          >
            secondchanceofficial@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}