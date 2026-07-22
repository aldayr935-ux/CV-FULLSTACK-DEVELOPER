export type Project = {
  status: string;
  name: string;
  role: string;
  description: string;
  pills: string[];
};

export const projects: Project[] = [
  {
    status: "PROYECTO PERSONAL",
    name: "TRACKON",
    role: "Dashboard de logística — fullstack",
    description:
      "Dashboard de logística con backend propio: controladores REST, autenticación JWT, middleware de seguridad y esquema de base de datos con Prisma. El frontend en React se migró de datos simulados a consumo de API real mediante una capa de servicios centralizada y contexto de autenticación.",
    pills: ["React", "TypeScript", "Node/Express", "Prisma", "PostgreSQL (Neon)", "Railway", "Vercel"],
  },
  {
    status: "EN DESARROLLO",
    name: "Health Samay",
    role: "SaaS para nutriólogos",
    description:
      "Plataforma SaaS para profesionales de la nutrición, inspirada en productos como Avena Health. Arquitectura de dos repositorios — frontend Next.js y backend Node/Express/Prisma — con autenticación gestionada vía Clerk.",
    pills: ["Next.js", "Node/Express", "Prisma", "PostgreSQL", "Clerk"],
  },
  {
    status: "NEGOCIO PROPIO",
    name: "ALDACODE",
    role: "Sitio de marca / estudio",
    description:
      "Sitio de mi propio estudio de desarrollo, migrado de HTML/CSS/JS a Next.js + TypeScript + Tailwind v4, con arquitectura de componentes, hooks personalizados y archivos de datos tipados. Desplegado en Vercel con dominio propio.",
    pills: ["Next.js", "TypeScript", "Tailwind v4", "Vercel"],
  },
  {
    status: "CLIENTE",
    name: "SAMAY Nutrición",
    role: "Landing page",
    description:
      "Landing page para una nutrióloga, cubriendo el ciclo completo: desarrollo en HTML/CSS/JS, despliegue en Netlify, dominio personalizado vía Namecheap y configuración de Google Search Console para SEO.",
    pills: ["HTML/CSS/JS", "Netlify", "SEO"],
  },
  {
    status: "CLIENTE",
    name: "EROS Ingeniería",
    role: "Landing page — topografía",
    description:
      "Landing page para un despacho de ingeniería topográfica, con scroll suave (Lenis), animaciones activadas por scroll mediante IntersectionObserver y despliegue continuo en Vercel vía Git.",
    pills: ["HTML/CSS/JS", "Lenis", "IntersectionObserver", "Vercel"],
  },
  {
    status: "EN DESARROLLO",
    name: "PriceTracker",
    role: "Web scraping + API en Python",
    description:
      "Herramienta de seguimiento de precios construida en Python: scraping con BeautifulSoup y Playwright, API con FastAPI y frontend en Next.js. Pensado como pieza de portafolio para mostrar mis habilidades certificadas en Python (PCEP) junto al desarrollo frontend.",
    pills: ["Python", "FastAPI", "Playwright", "Next.js"],
  },
];
