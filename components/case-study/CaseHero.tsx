"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/projects.fr";

export function CaseHero({ project }: { project: Project }) {
  return (
    <section className="bg-dark text-bg pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 text-xs uppercase tracking-widest text-bg/60"
        >
          <span>{project.index}</span>
          <span className="w-8 h-px bg-bg/30" />
          <span>{project.year}</span>
          <span className="w-8 h-px bg-bg/30" />
          <span>{project.scope.join(" · ")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-10 font-serif text-[12vw] md:text-[8vw] leading-[0.95] tracking-tightest text-balance"
        >
          {project.title}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-bg/80 text-balance"
        >
          {project.subtitle}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-bg/15 pt-8"
        >
          <Meta label="Client" value={project.client} />
          <Meta label="Rôle" value={project.role} />
          <Meta label="Année" value={project.year} />
          <Meta label="Périmètre" value={project.scope.join(", ")} />
        </motion.dl>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-bg/50 mb-2">{label}</dt>
      <dd className="text-sm text-bg/90">{value}</dd>
    </div>
  );
}
