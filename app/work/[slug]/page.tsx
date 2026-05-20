import Image from "next/image";
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

function Chapter({
  eyebrow,
  heading,
  paragraphs,
  delay = 0,
}: {
  eyebrow: string;
  heading?: string;
  paragraphs: string[];
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="text-xs uppercase tracking-widest text-muted mb-4">
        {eyebrow}
      </div>
      {heading && (
        <h2 className="font-serif text-2xl md:text-3xl tracking-tightest leading-snug mb-6 text-balance">
          {heading}
        </h2>
      )}
      <div className="space-y-4 text-ink/80 leading-relaxed max-w-prose">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </FadeUp>
  );
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
            {project.cover ? (
              <Image
                src={project.cover}
                alt={`${project.title} — visuel principal`}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif italic text-3xl md:text-5xl text-accent/40">
                  {project.title} — visuel principal
                </span>
              </div>
            )}
          </div>
        </Parallax>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <Chapter
            eyebrow="Contexte"
            heading={project.contextHeading}
            paragraphs={project.context}
          />
          <Chapter
            eyebrow="Approche"
            heading={project.approcheHeading}
            paragraphs={project.approche}
            delay={0.1}
          />
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="container py-12 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((g, i) => (
            <FadeUp key={`${g}-${i}`} delay={0.05 * i}>
              <div className="aspect-[4/5] bg-accent-50 rounded-sm relative overflow-hidden">
                <Image
                  src={g}
                  alt={`${project.title} — planche ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          ))}
        </section>
      )}

      {project.sections.map((s, i) => (
        <section key={i} className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            <FadeUp className="md:col-span-4">
              <div className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tightest leading-tight text-balance">
                {s.heading}
              </h3>
            </FadeUp>
            <FadeUp delay={0.1} className="md:col-span-7 md:col-start-6 space-y-4 text-ink/80 leading-relaxed">
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </FadeUp>
          </div>
        </section>
      ))}

      {project.results.length > 0 && (
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
      )}

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
