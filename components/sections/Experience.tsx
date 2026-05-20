import { experience } from "@/content/experience.fr";
import { FadeUp } from "@/components/motion/FadeUp";

export function Experience() {
  return (
    <section id="experience" className="container py-24 md:py-32">
      <FadeUp className="text-xs uppercase tracking-widest text-muted mb-12">
        Expérience
      </FadeUp>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {experience.map((item, i) => (
          <FadeUp key={i} delay={0.04 * i}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 group">
              <div className="md:col-span-3 text-sm text-muted font-mono uppercase tracking-wider">
                {item.period}
              </div>
              <div className="md:col-span-4 font-serif text-2xl md:text-3xl tracking-tightest leading-tight">
                {item.role}
              </div>
              <div className="md:col-span-5 text-ink/70 md:pl-4">
                <div className="text-ink mb-1">{item.company}</div>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
