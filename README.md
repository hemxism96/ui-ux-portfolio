# Portfolio UX/UI — SVR

Portfolio en français pour une candidature à SVR. Construit avec Next.js (App Router), TypeScript, Tailwind CSS et Framer Motion. Pensé pour un déploiement Vercel en un clic.

## Direction visuelle

Inspirations : **Torriden** (clinique, minimal, blanc cassé) en base, avec des **moments biotech** à la Biodance sur les pages de projet (panneaux sombres, typographie serif large, parallaxe).

Palette :

| token       | valeur     | rôle                                  |
| ----------- | ---------- | ------------------------------------- |
| `bg`        | `#FAFAF7`  | fond chaud                            |
| `ink`       | `#0A0A0A`  | texte principal                       |
| `muted`     | `#6B6B66`  | méta / légendes                       |
| `accent`    | `#0E5187`  | bleu clinique (référence SVR)         |
| `accent-50` | `#E8EFF5`  | aplats doux                           |
| `dark`      | `#0B0F14`  | hero des projets (moment biotech)     |

Typographie : **Instrument Serif** (display) + **Inter** (sans), via `next/font/google`.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Modifier le contenu

Tout le texte vit dans `/content` — pas besoin de toucher au JSX.

- `content/profile.fr.ts` — nom, rôle, ville, bio, email, LinkedIn
- `content/experience.fr.ts` — frise expérience
- `content/skills.fr.ts` — outils, méthodes, langues
- `content/projects.fr.ts` — les 3 études de cas (slug, titre, résumé, sections, résultats…)

Les visuels placeholder sont rendus en CSS — pour les remplacer, ajouter des images dans `public/images/projects/<slug>/` puis les référencer depuis `projects.fr.ts` (les chemins existent déjà).

## Structure

```
app/
  layout.tsx          # polices, nav, footer, metadata
  page.tsx            # composition home
  work/[slug]/        # page projet (rendu statique)
components/
  Nav.tsx, Footer.tsx
  sections/           # Hero, About, Work, Experience, Skills, Contact
  case-study/         # CaseHero
  motion/             # FadeUp, Parallax, Marquee
content/              # toutes les copies FR
```

## Déployer sur Vercel

1. Pousser ce dossier sur GitHub.
2. Aller sur [vercel.com/new](https://vercel.com/new) → importer le repo.
3. Vercel détecte Next.js automatiquement. Aucun environnement à configurer.
4. **Deploy**.
5. Brancher un domaine personnalisé dans **Settings → Domains** si besoin.

## Notes

- Tout est rendu statique (`generateStaticParams` pour les projets).
- Aucune dépendance back-end. Le contact est un `mailto:`.
- Pour ajouter un suivi d’audience : `npm i @vercel/analytics` puis `<Analytics />` dans `app/layout.tsx`.
