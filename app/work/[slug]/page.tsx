import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProject, getNextProject, projects } from "@/content/projects.fr";
import { CaseHero } from "@/components/case-study/CaseHero";
import { FadeUp } from "@/components/motion/FadeUp";
import { Parallax } from "@/components/motion/Parallax";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Projet`,
    description: project.brief,
  };
}

export default async function CaseStudyPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);

  return (
    <article>
      <CaseHero project={project} />

      <section className="container py-20 md:py-28">
        <Parallax distance={40}>
          <div className="aspect-[16/9] bg-accent-50 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif italic text-3xl md:text-5xl text-accent/40">
                {project.title} — visuel principal
              </span>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <FadeUp className="md:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-muted mb-4">Contexte</h2>
            <p className="font-serif text-2xl md:text-3xl tracking-tightest leading-tight text-balance">
              {project.context}
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-2">
            <h2 className="text-xs uppercase tracking-widest text-muted mb-4">Approche</h2>
            <p className="text-ink/80 leading-relaxed">{project.approche}</p>
          </FadeUp>
        </div>
      </section>

      <section className="container py-12 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.gallery.map((g, i) => (
          <FadeUp key={g} delay={0.05 * i}>
            <div className="aspect-[4/5] bg-accent-50 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center text-accent/50 font-serif italic">
                planche {i + 1}
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {project.sections.map((s, i) => (
        <section key={i} className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <FadeUp className="md:col-span-4 text-xs uppercase tracking-widest text-muted">
              {`0${i + 1}`} — {s.heading}
            </FadeUp>
            <FadeUp delay={0.1} className="md:col-span-8">
              <p className="font-serif text-3xl md:text-4xl tracking-tightest leading-snug text-balance">
                {s.body}
              </p>
            </FadeUp>
          </div>
        </section>
      ))}

      <section className="container py-20 md:py-28">
        <FadeUp className="text-xs uppercase tracking-widest text-muted mb-10">
          Résultats
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-ink/10 pt-10">
          {project.results.map((r, i) => (
            <FadeUp key={r.label} delay={0.05 * i}>
              <div>
                <div className="font-serif text-6xl md:text-7xl tracking-tightest text-accent">
                  {r.value}
                </div>
                <div className="mt-3 text-sm text-muted">{r.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-dark text-bg py-24 md:py-32 mt-20">
        <div className="container">
          <FadeUp className="text-xs uppercase tracking-widest text-bg/50 mb-4">
            Projet suivant
          </FadeUp>
          <Link href={`/work/${next.slug}`} className="group block">
            <h3 className="font-serif text-6xl md:text-[8vw] leading-[0.95] tracking-tightest text-balance group-hover:text-accent transition-colors">
              {next.title}.
            </h3>
            <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-bg/70">
              Voir le projet
              <span className="inline-block w-12 h-px bg-bg/50 transition-all group-hover:w-20" />
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
