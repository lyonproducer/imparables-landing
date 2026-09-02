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
  name?: string;
  role?: string;
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

export const eventConfig = {
  name: "Imparables Nexus",
  kicker: "IMPARABLES NEXUS",
  headline: "El futuro de las empresas ya está pasando.",
  subheadline:
    "La tecnología dejó de ser una opción para convertirse en parte esencial del crecimiento de cualquier empresa. Una experiencia dedicada a explorar cómo la inteligencia artificial y la tecnología están transformando el mundo empresarial.",
  dateLabel: "Primeros días de noviembre 2026",
  dateDetail: "Noviembre 2026",
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
      name: undefined,
      role: "Especialista en IA & Automatización",
      isConfirmed: false,
    },
    {
      name: undefined,
      role: "Líder de Ingeniería & Software",
      isConfirmed: false,
    },
    {
      name: undefined,
      role: "Emprendedor & Creador de Plataformas",
      isConfirmed: false,
    },
    {
      name: undefined,
      role: "Experto en Asuntos Legales Digitales",
      isConfirmed: false,
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
      time: "08:30 AM",
      title: "Acreditación y café de bienvenida",
      description: "Recepción de asistentes y primeros espacios de conexión libre.",
      isPlaceholder: true,
    },
    {
      time: "09:15 AM",
      title: "Apertura: El futuro digital de las empresas",
      description: "Bienvenida y encuadre temático de Imparables Nexus 2026.",
      isPlaceholder: true,
    },
    {
      time: "10:00 AM",
      title: "Panel 1: IA y automatización en la práctica",
      description: "Casos de uso aplicados a empresas, operaciones y toma de decisiones.",
      isPlaceholder: true,
    },
    {
      time: "11:15 AM",
      title: "Coffee Break & Networking guiado",
      description: "Dinámica para conectar proyectos, talentos y empresas locales.",
      isPlaceholder: true,
    },
    {
      time: "11:45 AM",
      title: "Panel 2: Plataformas, talento y trabajo remoto global",
      description: "Cómo construir y exportar soluciones de alto impacto desde nuestra región.",
      isPlaceholder: true,
    },
    {
      time: "01:00 PM",
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
  ] as PartnerItem[],

  socialLinks: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "TikTok", url: "https://tiktok.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ],
} as const;
