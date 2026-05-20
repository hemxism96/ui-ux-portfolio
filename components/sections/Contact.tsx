import { profile } from "@/content/profile.fr";
import { FadeUp } from "@/components/motion/FadeUp";

export function Contact() {
  return (
    <section id="contact" className="container py-32 md:py-40">
      <FadeUp className="text-xs uppercase tracking-widest text-muted mb-12 flex items-center gap-3">
        <span className="inline-block w-2 h-2 rounded-full bg-accent" />
        Contact — disponible
      </FadeUp>

      <FadeUp>
        <h2 className="font-serif text-6xl md:text-[9vw] leading-[0.95] tracking-tightest text-balance">
          Travaillons <br />
          <span className="text-accent italic">ensemble.</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mt-12 max-w-xl text-ink/80">
        <p>
          Que ce soit pour une refonte, un design system ou une exploration sensorielle —
          j’aime les projets où la rigueur scientifique rencontre le soin du détail.
        </p>
      </FadeUp>

      <FadeUp delay={0.15} className="mt-12 flex flex-col sm:flex-row gap-3 sm:items-center">
        <a
          href={`mailto:${profile.email}?subject=Projet%20—%20${encodeURIComponent(profile.name)}`}
          className="inline-flex items-center justify-between gap-6 bg-ink text-bg px-6 py-4 rounded-full hover:bg-accent transition-colors group"
        >
          <span className="text-sm uppercase tracking-widest">Écrire un mail</span>
          <span className="font-serif italic text-lg">{profile.email}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-ink/15 px-6 py-4 rounded-full hover:border-accent hover:text-accent transition-colors text-sm uppercase tracking-widest"
        >
          LinkedIn ↗
        </a>
      </FadeUp>
    </section>
  );
}
