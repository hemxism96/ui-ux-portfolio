export type ProjectSection = {
  heading: string;
  body: string[];
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
  contextHeading?: string;
  context: string[];
  approcheHeading?: string;
  approche: string[];
  cover: string;
  gallery: string[];
  results: { value: string; label: string }[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "rua-martine",
    index: "01",
    year: "2022 — 2023",
    title: "Rua Martine",
    subtitle:
      "Repenser l’expérience e-commerce d’une marque d’accessoires premium : de la direction artistique à la conversion.",
    client: "Rua Martine — Accessoires premium (Agence Harsene)",
    role: "Webdesigner & Intégrateur",
    scope: [
      "Direction Artistique",
      "UX/UI Design",
      "E-commerce",
      "WordPress & WooCommerce",
    ],
    brief:
      "Une boutique en ligne pensée comme un écrin : minimalisme éditorial au service d’accessoires de mode haut de gamme, et un tunnel d’achat optimisé pour la conversion.",
    contextHeading: "Le défi : allier esthétisme et performance commerciale",
    context: [
      "Rua Martine est une marque d’accessoires de mode haut de gamme, spécialisée dans les chaînes de lunettes élégantes et contemporaines. Pour accompagner sa croissance et toucher une clientèle internationale exigeante, la marque avait besoin de transformer sa présence en ligne en une véritable boutique e-commerce.",
      "En tant que Webdesigner au sein de l’agence Harsene, j’ai été responsable de la création de l’identité digitale de la marque et de la conception de l’expérience d’achat de bout en bout. L’enjeu majeur était de retransmettre l’ADN « premium » et le raffinement des produits à travers les écrans, tout en construisant un parcours utilisateur ultra-fluide orienté vers la conversion (CRO).",
    ],
    approcheHeading: "Une identité visuelle épurée, guidée par l’itération",
    approche: [
      "La création de la Direction Artistique a fait l’objet d’un travail collaboratif intense avec la fondatrice de la marque. Pour valoriser des produits aussi fins que des bijoux de lunettes, le parti pris graphique s’est orienté vers le minimalisme : une typographie éditoriale élégante, une palette de couleurs sobres et naturelles, et de grands espaces blancs pour laisser respirer l’iconographie produit.",
      "À travers plusieurs cycles d’itérations sur les maquettes, j’ai affiné l’interface pour qu’elle devienne un écrin invisible au service du produit. Chaque élément visuel — des lignes de séparation aux boutons d’appel à l’action — a été conçu pour évoquer le luxe discret de la marque.",
    ],
    cover: "/images/projects/1_1.png",
    gallery: [
      "/images/projects/1_2.png",
      "/images/projects/1_3.png",
      "/images/projects/1_4.png",
    ],
    results: [
      {"value": "100% Sur-mesure%", "label": "DA & Intégration"},
      {"value": "Mobile-First", "label": "Parcours optimisé responsive"},
      {"value": "WooCommerce", "label": "Tunnel d'achat simplifié"},
    ],
    sections: [
      {
        heading: "Page produit — réassurer et séduire",
        body: [
          "La fiche produit a été pensée comme une page d’atterrissage stratégique. J’ai hiérarchisé l’information pour répondre immédiatement aux questions de l’utilisateur : mise en valeur des matériaux nobles (or, perles, argent), galeries de zooms haute définition pour apprécier le détail des mailles, et intégration claire des conseils d’entretien et de livraison.",
        ],
      },
      {
        heading: "Tunnel de paiement — zéro friction",
        body: [
          "Pour maximiser le taux de conversion, le tunnel d’achat (checkout) a été drastiquement simplifié. En réduisant la charge cognitive à travers un formulaire épuré, des étapes de livraison transparentes et des éléments de réassurance visuelle pour le paiement sécurisé, nous avons optimisé l’expérience pour limiter au maximum l’abandon de panier, notamment sur mobile.",
        ],
      },
      {
        heading: "Content design & lookbook",
        body: [
          "Les chaînes de lunettes étant des accessoires très visuels, j’ai structuré une section « Articles & Tendances ». Ce format blog/lookbook permet d’intégrer du storytelling de marque (comment porter l’accessoire) tout en créant des ponts directs vers l’achat (shoppable content).",
        ],
      },
      {
        heading: "Coulisses techniques — WordPress & WooCommerce",
        body: [
          "Une fois les maquettes validées, j’ai pris en charge l’intégration complète du site. Pour offrir une autonomie totale à la cliente dans la gestion future de ses stocks et de ses commandes, j’ai déployé l’écosystème WordPress combiné au plugin WooCommerce.",
          "L’intégration des pages sur-mesure a été réalisée via Elementor, couplée à l’injection de CSS custom pour outrepasser les contraintes du constructeur et respecter au pixel près la finesse de la DA validée. Un accent tout particulier a été mis sur le responsive design mobile et l’optimisation des performances (poids des médias, mise en cache) pour garantir un temps de chargement ultra-rapide, indispensable pour le SEO et l’UX e-commerce.",
        ],
      },
      {
        heading: "Ce que je retiens de ce projet",
        body: [
          "Travailler pour un client grand compte dans le secteur de la mode a consolidé ma capacité à traduire des exigences esthétiques fortes en solutions techniques concrètes. Ce projet illustre parfaitement ma vision du design : une interface doit être visuellement irréprochable et alignée sur l’image de marque, mais son succès se mesure à sa capacité à offrir une expérience d’achat intuitive, rapide et fluide pour l’utilisateur final.",
        ],
      },
    ],
  },
  {
    slug: "joe-bijoux",
    index: "02",
    year: "2023 - 2024",
    title: "Joe Bijoux",
    subtitle:
      "Lancement digital et conception e-commerce de A à Z pour une marque de bijoux émergente.",
    client: "Joe Bijoux — Marque de bijoux indépendante",
    role: "Product/Web Designer Freelance — Autonomie complète",
    scope: [
      "UX/UI Design (Figma)",
      "E-commerce (WordPress)",
      "Gestion de projet",
      "Webmastering",
    ],
    brief:
      "Construire de A à Z le canal de vente en ligne d’une jeune créatrice : une vitrine esthétique pour sublimer ses pièces, et une machinerie e-commerce robuste pour gérer son catalogue.",
    contextHeading: "Le défi : transformer une passion en canal d’acquisition",
    context: [
      "Joe Bijoux est une marque indépendante lancée par une jeune créatrice. L’objectif de cette mission freelance était de construire de A à Z son canal de vente en ligne pour professionnaliser son activité et générer des ventes directes.",
      "En totale autonomie, j’ai piloté l’intégralité du projet, de la définition du brief initial avec la fondatrice jusqu’à la mise en production du site. L’enjeu était double : concevoir une vitrine esthétique capable de sublimer ses créations, et mettre en place une machinerie e-commerce robuste pour gérer son catalogue naissant.",
    ],
    approcheHeading: "Mettre le produit en lumière sur Figma",
    approche: [
      "La phase de conception a débuté par la création de maquettes haute fidélité sur Figma. Pour une marque de bijoux, l’image est le premier levier de conversion. J’ai donc conçu une interface minimaliste où l’UI s’efface au profit de galeries produits immersives.",
      "J’ai porté une attention particulière à la structure de la page catalogue et des fiches produits : navigation intuitive, grilles d’images aérées, et zooms fonctionnels pour permettre aux utilisateurs d’apprécier la finesse et les détails de chaque pièce avant l’achat.",
    ],
    cover: "/images/projects/2_1.png",
    gallery: [
      "/images/projects/2_2.png",
      "/images/projects/2_3.png",
      "/images/projects/2_4.png",
    ],
    results: [],
    sections: [
      {
        heading: "De la maquette à la boutique fonctionnelle",
        body: [
          "Le développement du site a été réalisé « from scratch » sous WordPress, couplé à une extension e-commerce performante. Au-delà de l’intégration front-end (respect strict des maquettes validées), un travail de fond a été mené sur l’architecture de l’information et le back-office.",
          "J’ai structuré l’ensemble de l’inventaire produits (catégorisations, déclinaisons, gestion des stocks) pour garantir à la créatrice une gestion quotidienne fluide de ses commandes et de son catalogue, sans nécessiter de compétences techniques de sa part.",
        ],
      },
      {
        heading: "Un tremplin pour la croissance",
        body: [
          "Ce projet démontre qu’un design réfléchi et une base technique solide sont des moteurs de croissance. Le lancement de la plateforme a permis à la créatrice de structurer son offre, de booster significativement ses ventes directes et de décrocher de nouveaux clients via ce nouveau canal d’acquisition digitalisé.",
        ],
      },
    ],
  },
  {
    slug: "vocab-recall",
    index: "03",
    year: "2026",
    title: "Vocab Recall",
    subtitle:
      "Refonte UX/UI, création d’identité et motion design pour une application EdTech d’apprentissage de l’anglais.",
    client: "Vocab Recall — Application EdTech mobile",
    role: "Product/UI Designer Freelance — En binôme avec le Lead Developer",
    scope: [
      "UI/UX Design",
      "Brand Identity",
      "Motion Design (Lottie)",
      "App Store Optimization (ASO)",
    ],
    brief:
      "Faire passer un MVP au niveau supérieur : direction artistique, mascotte animée, refonte des écrans clés et assets marketing pour un lancement réussi sur les stores.",
    contextHeading: "Le défi : transformer un MVP en une application « Market-Ready »",
    context: [
      "Vocab Recall est une application mobile EdTech dédiée à l’apprentissage et à la mémorisation du vocabulaire anglais. J’ai été sollicité en freelance par le créateur de l’application (Développeur Full-Stack) pour faire passer le produit au niveau supérieur avant son lancement officiel.",
      "Le brief technique comportait des références précises, mais tout restait à construire sur le plan de l’expérience utilisateur et de l’identité visuelle. Mon rôle a été d’apporter une vision design globale : de la définition du Brandbook jusqu’à la refonte complète des écrans, en passant par l’animation de l’interface pour engager les futurs utilisateurs.",
    ],
    approcheHeading: "Une identité ludique et animée",
    approche: [
      "L’apprentissage d’une langue nécessite de la régularité. Pour éviter l’attrition (churn) et rendre l’expérience engageante, j’ai conçu un Brandbook complet incluant de nouvelles palettes de couleurs, des choix typographiques modernes et la création d’une mascotte emblématique.",
      "Pour donner vie à cette identité, j’ai animé la mascotte via Figma et Lottie Files. Ces micro-interactions et animations ont été stratégiquement intégrées dans l’application pour récompenser l’utilisateur et dynamiser son parcours, rendant l’interface beaucoup plus organique et vivante.",
    ],
    cover: "/images/projects/3_1.png",
    gallery: [
      "/images/projects/3_2.png",
      "/images/projects/3_3.png",
      "/images/projects/3_4.png",
    ],
    results: [],
    sections: [
      {
        heading: "Optimiser l’acquisition — onboarding et paywall",
        body: [
          "L’un des chantiers majeurs a été la conception du parcours d’onboarding. Les premières secondes d’une application sont cruciales. J’ai structuré un parcours d’accueil fluide qui éduque l’utilisateur sur la valeur de l’app, tout en le guidant naturellement vers un « Paywall » (mur de paiement) optimisé pour la conversion.",
          "En parallèle, j’ai mené la refonte UI des écrans principaux (dashboard, listes de vocabulaire, modules de révision) en appliquant les standards d’ergonomie mobile (iOS/Android) pour garantir une navigation intuitive et réduire la charge cognitive pendant l’apprentissage.",
        ],
      },
      {
        heading: "Séduire dès l’App Store",
        body: [
          "Mon intervention ne s’est pas arrêtée à la conception du produit. Pour assurer un lancement réussi, j’ai également conçu les écrans de présentation (screenshots promotionnels) destinés à l’App Store et au Google Play Store. Ces visuels ont été pensés comme de véritables assets marketing, mettant en avant les fonctionnalités clés et la proposition de valeur de Vocab Recall pour maximiser le taux de téléchargement.",
        ],
      },
      {
        heading: "Ce que je retiens de ce projet",
        body: [
          "Travailler en binôme direct avec un développeur Full-Stack a été extrêmement formateur. Cela m’a poussé à livrer des assets techniques irréprochables (fichiers Lottie, spécifications de design) pour faciliter l’intégration. Ce projet illustre ma capacité à prendre en charge le design d’un produit numérique de A à Z : de la réflexion de marque à l’optimisation des revenus via le paywall, jusqu’à la création des supports d’acquisition.",
        ],
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
