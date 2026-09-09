import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const BASE_URL = "https://omar-aldayr-fullstack-web-developer.vercel.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Omar Aldayr García · Fullstack Developer",
    template: "%s · Omar Aldayr García",
  },
  description:
    "Portafolio de Omar Aldayr García — Fullstack Web Developer especializado en Next.js, TypeScript, Node.js y PostgreSQL. Disponible para puestos de tiempo completo y posiciones remotas.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "React",
    "Desarrollador web",
    "México",
    "Estado de México",
    "freelance",
    "ALDACODE",
  ],
  authors: [{ name: "Omar Aldayr García Hernández", url: BASE_URL }],
  creator: "Omar Aldayr García Hernández",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Omar Aldayr García · Fullstack Developer",
    title: "Omar Aldayr García · Fullstack Developer",
    description:
      "Construyo productos web de extremo a extremo — del esquema de base de datos a la interfaz que usa la gente.",
    images: [
      {
        url: "https://omar-aldayr-fullstack-web-developer.vercel.app/og-image.png", // crearemos este archivo
        width: 1200,
        height: 630,
        alt: "Aldayr García — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldayr García · Fullstack Developer",
    description:
      "Construyo productos web de extremo a extremo — del esquema de base de datos a la interfaz que usa la gente.",
    images: ["https://omar-aldayr-fullstack-web-developer.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${jetbrains.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}