"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-content items-center justify-between rounded-full px-5 sm:px-8 transition-all duration-500 ${
            scrolled
              ? "glass shadow-glass py-3"
              : "border border-transparent bg-transparent py-2"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-3"
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              <Image
                src="/logo/logo.png"
                alt="SecondChance AI Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </span>

            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              SecondChance{" "}
              <span className="text-gold-deep">
                AI
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-widest2 text-ink/60 transition-colors duration-300 hover:text-gold-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex"
          >
            <span className="btn-gold !px-6 !py-2.5 text-[13px]">
              Get Early Access
            </span>
          </a>

          <button
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            onClick={() =>
              setOpen((v) => !v)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          >
            {open ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-gold/15 bg-cream/95 p-6 shadow-premium backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-widest2 text-ink/70 transition-colors hover:bg-gold/10 hover:text-gold-deep"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() =>
                  setOpen(false)
                }
                className="mt-3"
              >
                <span className="btn-gold w-full">
                  Get Early Access
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}