import { profile } from "@/content/profile.fr";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-ink/10">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-10 text-sm text-muted">
        <div>
          © {year} — {profile.name}. Tous droits réservés.
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="container pb-8 text-xs text-muted/70">
        Conçu et développé à {profile.location}.
      </div>
    </footer>
  );
}
