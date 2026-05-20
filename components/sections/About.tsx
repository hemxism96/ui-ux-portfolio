import { profile } from "@/content/profile.fr";
import { FadeUp } from "@/components/motion/FadeUp";

export function About() {
  return (
    <section id="a-propos" className="container py-32 md:py-40">
      <FadeUp className="text-xs uppercase tracking-widest text-muted mb-12">
        À propos
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <FadeUp className="md:col-span-5">
          <div className="aspect-[4/5] bg-accent-50 relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 grid place-items-center text-muted text-sm">
              <span className="font-serif italic text-2xl text-accent/60">portrait</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-widest text-accent/70 flex justify-between">
              <span>Réf. 001</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </FadeUp>

        <div className="md:col-span-7 md:pt-6">
          <FadeUp>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tightest text-balance">
              Soin, lecture, mouvement. <br />
              <span className="text-ink/40">— trois gestes qui guident mon travail.</span>
            </h2>
          </FadeUp>
          <div className="mt-10 space-y-6 text-ink/80 max-w-xl">
            {profile.bioParagraphs.map((p, i) => (
              <FadeUp key={i} delay={0.05 * (i + 1)}>
                <p>{p}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm border border-ink/15 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
