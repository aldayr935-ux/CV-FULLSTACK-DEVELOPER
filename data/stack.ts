export type StackCategory = {
  title: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js / Express", "Prisma ORM", "PostgreSQL", "REST APIs · JWT Auth"],
  },
  {
    title: "Otros lenguajes",
    items: ["Python", "FastAPI", "BeautifulSoup / Playwright"],
  },
  {
    title: "Herramientas",
    items: ["Git / GitHub", "Vercel · Railway", "Neon (Postgres)", "Clerk (Auth)"],
  },
];
