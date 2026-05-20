"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile.fr";

export function Hero() {
  return (
    <section className="container relative min-h-[88vh] flex flex-col justify-between pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-sm text-muted"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-accent" />
        <span>{profile.role} · {profile.location}</span>
        <span className="ml-2 text-ink/40">Disponible pour de nouveaux projets</span>
      </motion.div>

      <div className="mt-20 md:mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-serif text-[14vw] md:text-[10vw] leading-[0.95] tracking-tightest text-balance"
        >
          {profile.name}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-ink/80 text-balance"
        >
          {profile.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 flex items-center justify-between text-xs uppercase tracking-widest text-muted"
      >
        <span>Sélection 2024 — 2026</span>
        <a href="#projets" className="flex items-center gap-2 hover:text-accent transition-colors">
          Faire défiler
          <span className="inline-block w-8 h-px bg-current" />
        </a>
      </motion.div>
    </section>
  );
}
