"use client";

import Link from "next/link";
import { profile } from "@/content/profile.fr";

const links = [
  { href: "/#projets", label: "Projets" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b border-ink/5">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-serif text-lg tracking-tightest">
          {profile.name}
          <span className="ml-2 text-muted text-sm font-sans">— {profile.role}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/70 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex text-sm border border-ink/15 px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors"
        >
          Écrire
        </a>
      </div>
    </header>
  );
}
