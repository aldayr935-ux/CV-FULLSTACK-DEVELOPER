export type Project = {
  status: string;
  name: string;
  role: string;
  description: string;
  pills: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    status: "PROYECTO PERSONAL",
    name: "TRACKON",
    role: "Dashboard de logística — fullstack",
    description:
      "Dashboard de logística con backend propio: controladores REST, autenticación JWT, middleware de seguridad y esquema de base de datos con Prisma. El frontend en React se migró de datos simulados a consumo de API real mediante una capa de servicios centralizada y contexto de autenticación.",
    pills: ["React", "TypeScript", "Node/Express", "Prisma", "PostgreSQL (Neon)", "Railway", "Vercel"],
    link: "https://trackon-dashboard.vercel.app/",
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
    link: "https://aldacode.com/",
  },
  {
    status: "CLIENTE",
    name: "SAMAY Nutrición",
    role: "Landing page",
    description:
      "Landing page para una nutrióloga, cubriendo el ciclo completo: desarrollo en HTML/CSS/JS, despliegue en Netlify, dominio personalizado vía Namecheap y configuración de Google Search Console para SEO.",
    pills: ["HTML/CSS/JS", "Netlify", "SEO"],
    link: "https://samaynutricion.com/",
  },
  {
    status: "PROYECTO PERSONAL",
    name: "To-Do App",
    role: "Progressive Web App",
    description:
      "Aplicación de lista de tareas construida con React + Vite y TailwindCSS, PWA con VitePWA Plugin. Multiples listas almacenadas localmente Y menú de ajustes para cambiar la apariencia de la UI.",
    pills: ["React", "Vite", "Tailwind v4", "Vercel"],
    link: "https://to-do-app-teal-beta.vercel.app/",
  },
  {
    status: "PROYECTO PERSONAL",
    name: "PicPdf",
    role: "APK",
    description:
      "Aplicación móvil de convertidor de imágenes a PDF empaquetada en APK, creada con React Native y Expo. Historial de PDFs generados con SQLite, testing unitario con Jest y compilación con EAS.",
    pills: ["React Native","Expo","SQLite"],
    link: "https://expo.dev/accounts/aldayr935devs-team/projects/pic-pdf/builds/4d94b49b-0c0f-430e-adb7-6015550e2b1d",
  },
  {
    status: "CLIENTE",
    name: "BURG N' RIBS",
    role: "Landing Page + menú digital",
    description:
      "Sitio web para restaurante con animaciones Scroll Reveal, página de menú digital con QR, montado en Javascript puro.",
    pills: ["HTML/CSS/JS", "Scroll Reveal", "Netlify"],
    link: "https://burgnribs.netlify.app/",
  }
];
