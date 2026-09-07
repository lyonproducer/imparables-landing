export interface TopicItem {
  id: string;
  label: string;
  iconName:
    | "Sparkle"
    | "Gear"
    | "Stack"
    | "DeviceMobile"
    | "HouseLine"
    | "Scales"
    | "GameController"
    | "TrendUp";
  description: string;
}

export interface SpeakerItem {
  id?: string;
  name?: string;
  role?: string;
  company?: string;
  bio?: string;
  photoUrl?: string;
  isConfirmed: boolean;
}

export interface AgendaItemType {
  time: string;
  title: string;
  description?: string;
  isPlaceholder?: boolean;
}

export interface PartnerItem {
  name: string;
  category: string;
  logoUrl: string;
  href?: string;
}

export interface TicketTier {
  id: string;
  name: string;
  type: string;
  badge?: string;
  isFeatured?: boolean;
  priceUsdt: number;
  priceBcv: number;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  level: string;
  badge?: string;
  isFeatured?: boolean;
  priceUsd: number;
  priceBcv: number;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export const eventConfig = {
  name: "Imparables Nexus",
  kicker: "IMPARABLES NEXUS",
  headline: "El futuro de las empresas ya está pasando.",
  subheadline:
    "La tecnología dejó de ser una opción para convertirse en parte esencial del crecimiento de cualquier empresa. Una experiencia dedicada a explorar cómo la inteligencia artificial y la tecnología están transformando el mundo empresarial.",
  dateLabel: "7 de noviembre de 2026",
  dateDetail: "7 de noviembre de 2026",
  dateIso: "2026-11-07T09:00:00-04:00",
  venueLabel: "Puerto Ordaz, Edo. Bolívar",
  venueDetail: "Sede por confirmar — Estado Bolívar, Venezuela",
  
  aboutEvent: {
    title: "Un encuentro para conectar la región con el mundo digital",
    highlight:
      "Nexus reunirá profesionales locales que han trabajado con empresas internacionales, desarrolladores, creadores de plataformas, especialistas y personas que están construyendo soluciones desde nuestra propia región para el mundo.",
    quote:
      "Porque para crecer en el nuevo mundo empresarial, también tenemos que aprender a entender el mundo digital.",
  },

  topics: [
    {
      id: "ia",
      label: "Inteligencia Artificial",
      iconName: "Sparkle",
      description: "Modelos, herramientas generativas y adopción práctica en negocios reales.",
    },
    {
      id: "automatizacion",
      label: "Automatización de procesos",
      iconName: "Gear",
      description: "Optimización de flujos operativos para multiplicar la productividad del equipo.",
    },
    {
      id: "sistemas",
      label: "Sistemas y plataformas",
      iconName: "Stack",
      description: "Arquitecturas cloud, infraestructura resiliente y software escalable.",
    },
    {
      id: "apps",
      label: "Aplicaciones",
      iconName: "DeviceMobile",
      description: "Desarrollo moderno de productos digitales web, mobile y multiplataforma.",
    },
    {
      id: "remoto",
      label: "Trabajo remoto",
      iconName: "HouseLine",
      description: "Cultura distribuida, talento regional exportando valor a escala global.",
    },
    {
      id: "legal",
      label: "Aspectos legales",
      iconName: "Scales",
      description: "Marco regulatorio, propiedad intelectual y contratos en la era de la IA.",
    },
    {
      id: "videojuegos",
      label: "Videojuegos y nuevas industrias",
      iconName: "GameController",
      description: "Monetización interactiva, experiencias inmersivas y economías creativas.",
    },
    {
      id: "innovacion",
      label: "Innovación y crecimiento empresarial",
      iconName: "TrendUp",
      description: "Estrategias de tracción, mentalidad de producto y modelos de negocio de futuro.",
    },
  ] as TopicItem[],

  speakers: [
    {
      id: "leonardo-hernandez",
      name: "Leonardo Hernández",
      role: "Arquitectura Cloud & Software",
      company: "Eprisma",
      photoUrl: "/speakers/leonardo.webp",
      isConfirmed: true,
    },
    {
      id: "jesus",
      name: "Jesús",
      role: "Inteligencia Artificial & Automatización",
      photoUrl: "/speakers/jesus.webp",
      isConfirmed: true,
    },
    {
      id: "ezequiel-bermudez",
      name: "Ezequiel Bermúdez",
      role: "Ingeniería de Software & Plataformas",
      photoUrl: "/speakers/ezequiel.webp",
      isConfirmed: true,
    },
    {
      id: "yuselen-rivero",
      name: "Yuselen Rivero",
      role: "Estrategia Empresarial & Operaciones",
      photoUrl: "/speakers/yuselen.webp",
      isConfirmed: true,
    },
    {
      id: "rene-vallejo",
      name: "René Vallejo",
      role: "Innovación & Crecimiento de Negocios",
      photoUrl: "/speakers/rene.webp",
      isConfirmed: true,
    },
  ] as SpeakerItem[],

  speakersPlaceholderText:
    "Los ponentes y panelistas de esta edición se anunciarán próximamente. Pre-regístrate para enterarte antes que nadie.",

  host: {
    name: "Andersong Trocel",
    role: "Creador y Director General de Imparables",
    bio: "Comunicador, locutor y director creativo con más de 15 años de trayectoria en el mundo de la comunicación y conducción de experiencias.",
  },

  agenda: [
    {
      time: "03:00 PM",
      title: "Acreditación y café de bienvenida",
      description: "Recepción de asistentes y primeros espacios de conexión libre.",
      isPlaceholder: true,
    },
    {
      time: "03:30 PM",
      title: "Apertura: El futuro digital de las empresas",
      description: "Bienvenida y encuadre temático de Imparables Nexus 2026.",
      isPlaceholder: true,
    },
    {
      time: "04:00 PM",
      title: "Panel 1: IA y automatización en la práctica",
      description: "Casos de uso aplicados a empresas, operaciones y toma de decisiones.",
      isPlaceholder: true,
    },
    {
      time: "04:45 PM",
      title: "Coffee Break & Networking guiado",
      description: "Dinámica para conectar proyectos, talentos y empresas locales.",
      isPlaceholder: true,
    },
    {
      time: "05:15 PM",
      title: "Panel 2: Plataformas, talento y trabajo remoto global",
      description: "Cómo construir y exportar soluciones de alto impacto desde nuestra región.",
      isPlaceholder: true,
    },
    {
      time: "06:00 PM",
      title: "Cierre y próximos pasos",
      description: "Conclusiones clave y anuncios de la comunidad Imparables.",
      isPlaceholder: true,
    },
  ] as AgendaItemType[],

  aboutImparables: {
    tagline: "Experiencias que conectan personas con nuevas posibilidades.",
    body: "Imparables nació en 2024 con una idea muy sencilla: recordarle a las personas que siempre existe una posibilidad de avanzar. Hoy es una plataforma de experiencias, formación y encuentros creada por Andersong Trocel, comunicador y director creativo con más de 15 años de trayectoria.",
    quote: "No queremos decirle a las personas que todo será fácil. Queremos recordarles que siempre pueden hacer algo.",
    author: "Andersong Trocel",
  },

  partners: [
    {
      name: "Cámara de Comercio del Municipio Caroní (Camcaroní)",
      category: "Aliado Institucional",
      logoUrl: "/partners/expo-camcaroni.png",
    },
    {
      name: "Eprisma",
      category: "Aliado Tecnológico",
      logoUrl: "/partners/eprisma-green.png",
    },
    {
      name: "Rumbapp",
      category: "Aliado de Innovación",
      logoUrl: "/partners/rumbapp.png",
    },
    {
      name: "Mel Visual Designer",
      category: "Aliado de Diseño",
      logoUrl: "/partners/mel-visual-designer.webp",
    },
    {
      name: "Mundo Streaming",
      category: "Aliado de Streaming",
      logoUrl: "/partners/mundo-streaming.webp",
    },
    {
      name: "JMI International",
      category: "Aliado de Moda & Talento",
      logoUrl: "/partners/jmi.webp",
    },
  ] as PartnerItem[],

  tickets: [
    {
      id: "primera-preventa",
      name: "Primera Preventa",
      type: "Entrada Preferencial Anticipada",
      badge: "Preventa Activa",
      isFeatured: true,
      priceUsdt: 30,
      priceBcv: 45,
      description: "Entrada preferencial anticipada con acceso total a todas las conferencias, paneles y espacios de vinculación.",
      features: [
        "Acceso completo a todas las conferencias y paneles",
        "Networking presencial guiado con fundadores y speakers",
        "Coffee break & espacio de vinculación empresarial",
        "Kit oficial de bienvenida Nexus 2026",
        "Certificado digital de participación",
        "Acceso prioritario al recinto",
      ],
      ctaText: "Asegurar primera preventa",
      ctaLink: "#registro",
    },
    {
      id: "segunda-preventa",
      name: "Segunda Preventa",
      type: "Entrada General Regular",
      badge: "Próxima Fase",
      isFeatured: false,
      priceUsdt: 45,
      priceBcv: 65,
      description: "Entrada general regular para la jornada completa de innovación, IA y negocios.",
      features: [
        "Acceso completo a conferencias y paneles",
        "Networking presencial en áreas comunes",
        "Coffee break & espacio de vinculación",
        "Kit oficial de bienvenida Nexus 2026",
        "Certificado digital de participación",
      ],
      ctaText: "Pre-reservar fase 2",
      ctaLink: "#registro",
    },
    {
      id: "acceso-streaming",
      name: "Acceso Streaming",
      type: "Transmisión en Vivo Online",
      badge: "100% Digital",
      isFeatured: false,
      priceUsdt: 30,
      priceBcv: 45,
      description: "Transmisión en vivo online para vivir la experiencia desde cualquier lugar de Venezuela o el mundo.",
      features: [
        "Transmisión en vivo en alta definición (1080p)",
        "Acceso remoto a conferencias y paneles plenarios",
        "Chat interactivo y preguntas a los ponentes",
        "Grabación de las charlas disponible por 30 días",
        "Certificado digital de participación",
      ],
      ctaText: "Adquirir acceso online",
      ctaLink: "#registro",
    },
  ] as TicketTier[],

  sponsorshipTiers: [
    {
      id: "bronce",
      name: "Patrocinador Bronce",
      level: "Bronce",
      badge: "Iniciación",
      isFeatured: false,
      priceUsd: 200,
      priceBcv: 215,
      description: "Visibilidad inicial y presencia de marca presencial y digital en el encuentro.",
      benefits: [
        "Logo en pendones generales presenciales",
        "Mención en créditos de la transmisión streaming",
        "2 entradas presenciales generales",
        "Presencia en notas de agradecimiento oficial",
      ],
      ctaText: "Postular Patrocinio Bronce",
      ctaLink: "mailto:alianzas@imparables.com?subject=Patrocinio%20Bronce%20Nexus%202026",
    },
    {
      id: "plata",
      name: "Patrocinador Plata",
      level: "Plata",
      badge: "Presencia Activa",
      isFeatured: false,
      priceUsd: 300,
      priceBcv: 345,
      description: "Espacio comercial y exposición directa en el hall del evento y material de difusión.",
      benefits: [
        "Stand o espacio promocional en el hall presencial",
        "Comercial en pantalla previa al streaming",
        "Logo en material promocional impreso y digital",
        "2 entradas presenciales + 2 accesos a streaming",
        "Mención verbal durante el evento",
      ],
      ctaText: "Postular Patrocinio Plata",
      ctaLink: "mailto:alianzas@imparables.com?subject=Patrocinio%20Plata%20Nexus%202026",
    },
    {
      id: "oro",
      name: "Patrocinador Oro",
      level: "Oro",
      badge: "Alta Exposición",
      isFeatured: false,
      priceUsd: 400,
      priceBcv: 460,
      description: "Posicionamiento de alto impacto con presencia protagónica y espacio VIP exclusivo.",
      benefits: [
        "Presencia protagónica en backdrop oficial de fotos",
        "Banner exclusivo en la transmisión streaming",
        "Spot publicitario en pausas del streaming",
        "Espacio VIP en área presencial",
        "3 entradas VIP + 3 accesos a streaming",
        "Agradecimiento institucional destacado",
      ],
      ctaText: "Postular Patrocinio Oro",
      ctaLink: "mailto:alianzas@imparables.com?subject=Patrocinio%20Oro%20Nexus%202026",
    },
    {
      id: "titanium",
      name: "Patrocinador Titanium",
      level: "Titanium / Presentador",
      badge: "Máxima Exposición · Exclusivo",
      isFeatured: true,
      priceUsd: 500,
      priceBcv: 575,
      description: "Alianza estelar con exclusividad de rubro, vocería en escenario y dominio publicitario total.",
      benefits: [
        "Exclusividad de categoría (Presentado por [Tu Marca])",
        "Intervención de 5 min en apertura o cierre oficial",
        "Presencia prioritaria en campaña (Meta Ads, radio, prensa)",
        "Overlay digital permanente con logo en streaming",
        "Stand preferencial VIP en hall principal",
        "5 entradas VIP + 5 accesos a streaming",
      ],
      ctaText: "Solicitar Alianza Titanium",
      ctaLink: "mailto:alianzas@imparables.com?subject=Alianza%20Titanium%20Presentador%20Nexus%202026",
    },
  ] as SponsorshipTier[],

  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/imparables.ia/" },
    { name: "TikTok", url: "https://tiktok.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ],
} as const;
