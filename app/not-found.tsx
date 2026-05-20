import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container min-h-[70vh] flex flex-col justify-center py-24">
      <p className="text-xs uppercase tracking-widest text-muted mb-6">404</p>
      <h1 className="font-serif text-6xl md:text-8xl tracking-tightest leading-[0.95] text-balance">
        Page introuvable.
      </h1>
      <p className="mt-6 max-w-md text-ink/70">
        La page que vous cherchez n’existe plus, ou n’a jamais existé. Revenons à
        l’accueil.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent"
      >
        ← Retour à l’accueil
      </Link>
    </section>
  );
}
