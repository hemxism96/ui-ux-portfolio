export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  index: string;
  year: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  scope: string[];
  brief: string;
  context: string;
  approche: string;
  cover: string;
  gallery: string[];
  results: { value: string; label: string }[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "rituel-quotidien",
    index: "01",
    year: "2026",
    title: "Rituel Quotidien",
    subtitle: "Refonte du site e-commerce d’une marque de soin minimaliste",
    client: "Marque de dermo-cosmétique (confidentiel)",
    role: "Lead UX/UI Designer",
    scope: ["Recherche", "Design system", "E-commerce", "Direction artistique"],
    brief:
      "Donner à une routine de soin la lisibilité d’un objet de pharmacie et la chaleur d’un rituel intime.",
    context:
      "La marque souhaitait clarifier sa promesse produit auprès d’un public hésitant entre l’univers clinique et la cosmétique grand public. Le site existant peinait à hiérarchiser l’information scientifique sans la rendre froide.",
    approche:
      "Construction d’un design system fondé sur deux typographies (un serif éditorial, un sans clinique) et une grille modulaire respirante. Les fiches produit deviennent des fiches d’étude : actifs, gestes, preuves, et toujours, un visage humain en regard.",
    cover: "/images/projects/rituel-quotidien/cover.svg",
    gallery: [
      "/images/projects/rituel-quotidien/01.svg",
      "/images/projects/rituel-quotidien/02.svg",
      "/images/projects/rituel-quotidien/03.svg",
    ],
    results: [
      { value: "+38%", label: "taux de conversion" },
      { value: "+62%", label: "temps moyen par fiche" },
      { value: "AA", label: "conformité WCAG" },
    ],
    sections: [
      {
        heading: "Recherche",
        body: "Douze entretiens utilisateurs, deux ateliers de co-création avec l’équipe scientifique, et une cartographie des moments de doute dans le parcours d’achat.",
      },
      {
        heading: "Design system",
        body: "Une bibliothèque de composants tenue par la grille de pharmacie : étiquettes, pictogrammes d’actifs, et un usage parcimonieux du bleu clinique comme repère.",
      },
    ],
  },
  {
    slug: "laboratoire-app",
    index: "02",
    year: "2025",
    title: "Laboratoire",
    subtitle: "Application mobile de suivi de soin personnalisé",
    client: "Start-up biotech",
    role: "Product Designer",
    scope: ["UX mobile", "Prototypage", "Tests utilisateurs"],
    brief:
      "Permettre à chaque personne de suivre son rituel comme on tient un cahier de laboratoire — précis, sensible, sans culpabilité.",
    context:
      "La start-up développait un diagnostic cutané à domicile et cherchait à transformer ses données en un compagnon discret, lisible, et fidèle dans la durée.",
    approche:
      "Un journal de bord low-friction, des recommandations expliquées par les actifs et non par l’algorithme, et des moments de pause graphiques pour ralentir l’interface.",
    cover: "/images/projects/laboratoire-app/cover.svg",
    gallery: [
      "/images/projects/laboratoire-app/01.svg",
      "/images/projects/laboratoire-app/02.svg",
      "/images/projects/laboratoire-app/03.svg",
    ],
    results: [
      { value: "4.8 / 5", label: "satisfaction bêta" },
      { value: "73%", label: "rétention à 30 jours" },
      { value: "x2.4", label: "interactions journalières" },
    ],
    sections: [
      {
        heading: "Parcours quotidien",
        body: "Trois interactions, jamais plus. Le matin, le soir, et une pause hebdomadaire pour observer l’évolution.",
      },
      {
        heading: "Mouvement",
        body: "Transitions douces, ombres absentes, courbes d’accélération empruntées au papier qui se tourne.",
      },
    ],
  },
  {
    slug: "atelier-sensoriel",
    index: "03",
    year: "2024",
    title: "Atelier Sensoriel",
    subtitle: "Site éditorial pour une maison de parfumerie indépendante",
    client: "Maison de parfumerie, Paris",
    role: "UX/UI & Direction artistique",
    scope: ["Éditorial", "Brand", "Webflow"],
    brief:
      "Donner à lire un parfum comme on lit une revue d’art : avec lenteur, références et matière.",
    context:
      "La maison voulait sortir de l’esthétique luxe par défaut et raconter ses créations à travers les mains, les notes, et les lieux qui les ont inspirées.",
    approche:
      "Mise en page à colonnes variables, photographie documentaire, et un parti pris d’images grand format à l’ouverture de chaque histoire. Le commerce reste accessible, mais la lecture précède toujours l’achat.",
    cover: "/images/projects/atelier-sensoriel/cover.svg",
    gallery: [
      "/images/projects/atelier-sensoriel/01.svg",
      "/images/projects/atelier-sensoriel/02.svg",
      "/images/projects/atelier-sensoriel/03.svg",
    ],
    results: [
      { value: "+54%", label: "pages par session" },
      { value: "+27%", label: "panier moyen" },
      { value: "92", label: "score Lighthouse" },
    ],
    sections: [
      {
        heading: "Édito",
        body: "Chaque parfum porte son propre récit : un texte long, un portrait, une carte des matières premières.",
      },
      {
        heading: "Achat sans rupture",
        body: "Le tunnel d’achat s’ouvre depuis la lecture, sans jamais détourner du récit.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
