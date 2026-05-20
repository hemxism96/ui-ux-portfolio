import Link from "next/link";
import { projects } from "@/content/projects.fr";
import { FadeUp } from "@/components/motion/FadeUp";
import { Marquee } from "@/components/motion/Marquee";

export function Work() {
  return (
    <section id="projets" className="py-24 md:py-32">
      <div className="container">
        <FadeUp className="text-xs uppercase tracking-widest text-muted mb-12 flex items-center justify-between">
          <span>Projets</span>
          <span>03 sélectionnés</span>
        </FadeUp>

        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={p.slug} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
                <FadeUp
                  className={`md:col-span-7 group ${reverse ? "md:order-2" : ""}`}
                >
                  <Link href={`/work/${p.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-accent-50 rounded-sm">
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="font-serif italic text-3xl text-accent/40">
                          {p.title}
                        </span>
                      </div>
                      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]" />
                      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-accent/70">
                        {p.index} / {p.year}
                      </div>
                    </div>
                  </Link>
                </FadeUp>

                <FadeUp
                  delay={0.1}
                  className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}
                >
                  <div className="text-xs uppercase tracking-widest text-muted mb-4 flex gap-3">
                    {p.scope.slice(0, 3).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl tracking-tightest leading-[1.02] text-balance">
                    <Link href={`/work/${p.slug}`} className="hover:text-accent transition-colors">
                      {p.title}.
                    </Link>
                  </h3>
                  <p className="mt-5 text-ink/70 max-w-md text-balance">{p.brief}</p>
                  <Link
                    href={`/work/${p.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-accent group/link"
                  >
                    Voir le projet
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                </FadeUp>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-32 md:mt-40 py-16 border-y border-ink/10 bg-accent-50/40">
        <Marquee
          items={[
            "Recherche utilisateur",
            "Wireframing",
            "Prototypage",
            "Design system",
            "Direction artistique",
            "Accessibilité",
          ]}
        />
      </div>
    </section>
  );
}
