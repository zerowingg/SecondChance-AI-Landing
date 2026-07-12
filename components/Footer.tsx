import { Linkedin, Github, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-16 sm:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-12 sm:flex-row">
          {/* Left */}
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo/logo.png"
                alt="SecondChance AI Logo"
                className="h-12 w-12 object-contain"
              />

              <span className="font-display text-lg font-semibold text-cream">
                SecondChance <span className="text-gold">AI</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-cream/50">
              An AI-powered relationship recovery and meaningful connection
              platform — because everyone deserves a second chance.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="mailto:secondchanceofficial@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-all hover:border-gold hover:text-gold"
              >
                <Mail size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankitanurag-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-all hover:border-gold hover:text-gold"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://github.com/zerowingg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-all hover:border-gold hover:text-gold"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 sm:flex sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest2 text-gold/70">
                Explore
              </span>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/55 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest2 text-gold/70">
                Company
              </span>

              <a
                href="#contact"
                className="text-sm text-cream/55 transition-colors hover:text-gold-light"
              >
                Contact
              </a>

              <a
                href="#founder"
                className="text-sm text-cream/55 transition-colors hover:text-gold-light"
              >
                Founder
              </a>

              <a
                href="#faq"
                className="text-sm text-cream/55 transition-colors hover:text-gold-light"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/35 sm:flex-row">
          <span>
            © {new Date().getFullYear()} SecondChance AI. Built for the AMD AI
            Hackathon.
          </span>

          <span>Designed &amp; developed by Ankit Anurag.</span>
        </div>
      </div>
    </footer>
  );
}