import { skills } from "@/content/skills.fr";
import { FadeUp } from "@/components/motion/FadeUp";

type ListProps = { label: string; items: readonly string[] };
function TagList({ label, items }: ListProps) {
  return (
    <div>
      <FadeUp className="text-xs uppercase tracking-widest text-muted mb-6">
        {label}
      </FadeUp>
      <FadeUp delay={0.05}>
        <ul className="flex flex-wrap gap-2">
          {items.map((s) => (
            <li
              key={s}
              className="text-sm border border-ink/15 px-3 py-1.5 rounded-full text-ink/80"
            >
              {s}
            </li>
          ))}
        </ul>
      </FadeUp>
    </div>
  );
}

export function Skills() {
  return (
    <section id="competences" className="container py-24 md:py-32">
      <FadeUp>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tightest leading-[1.02] mb-16 text-balance">
          Boîte à outils. <span className="text-ink/40">Méthodes douces.</span>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <TagList label="Outils" items={skills.outils} />
        <TagList label="Méthodes" items={skills.methodes} />
      </div>

      <FadeUp delay={0.1} className="mt-16 text-sm text-muted">
        Langues : {skills.langues.join(" · ")}
      </FadeUp>
    </section>
  );
}
