export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — aujourd’hui",
    role: "UX/UI Designer (indépendante)",
    company: "Studios cosmétiques & soin",
    description:
      "Conception d’interfaces e-commerce et de parcours produit pour des marques de dermo-cosmétique. Recherche utilisateur, design system, accompagnement front-end.",
  },
  {
    period: "2022 — 2024",
    role: "Product Designer",
    company: "Agence digitale, Paris",
    description:
      "Refonte d’expériences clientes pour la beauté et le retail. Direction artistique d’écrans, prototypage à haute fidélité, livraison en collaboration étroite avec les équipes ingénieurie.",
  },
  {
    period: "2020 — 2022",
    role: "Junior UX Designer",
    company: "Studio in-house, Séoul",
    description:
      "Conception d’applications mobiles pour le secteur de la santé. Tests d’utilisabilité, ateliers de co-création, première expérience design system.",
  },
];
