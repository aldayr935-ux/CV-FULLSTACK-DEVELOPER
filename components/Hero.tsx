"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [minimized, setMinimized] = useState(true);

  // Al montar, la terminal arranca oculta y se despliega sola con una
  // pequeña animación de entrada.
  useEffect(() => {
    const t = setTimeout(() => setMinimized(false), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot" /> DISPONIBLE PARA NUEVAS OPORTUNIDADES
        </div>
        <h1>
          Construyo productos
          <br />
          web de extremo a <span className="accent">extremo</span>.
        </h1>
        <p className="sub">
          Soy <strong>Aldayr</strong>, desarrollador Fullstack y estudiante de
          Ingeniería en Sistemas. Diseño, construyo y despliego aplicaciones
          completas — del esquema de base de datos a la interfaz que usa la
          gente.
        </p>

        <div className={`terminal ${minimized ? "minimized" : ""}`}>
          <div className="bar">
            <span />
            <span />
            <span />
            <div className="title">whoami.ts</div>
            <button
              type="button"
              className="min-btn"
              aria-label={minimized ? "Expandir terminal" : "Minimizar terminal"}
              aria-expanded={!minimized}
              onClick={() => setMinimized((v) => !v)}
            >
              {minimized ? "▢" : "—"}
            </button>
          </div>
          <div className="terminal-body">
            <div className="terminal-body-inner">
              <pre>
                <span className="k">const</span> developer = {"{"}
                {"\n  "}
                <span className="c">name:</span> <span className="s">&quot;Aldayr&quot;</span>,
                {"\n  "}
                <span className="c">role:</span>{" "}
                <span className="s">&quot;Fullstack Web Developer&quot;</span>,
                {"\n  "}
                <span className="c">stack:</span> [{"\n    "}
                  <span className="s">&quot;Next.js&quot;</span>, <span className="s">&quot;TypeScript&quot;</span>,{"\n    "}
                  <span className="s">&quot;Node.js&quot;</span>, <span className="s">&quot;PostgreSQL&quot;</span>{"\n  "}],
                {"\n  "}
                <span className="c">studio:</span> <span className="s">&quot;ALDACODE&quot;</span>,
                {"\n  "}
                <span className="c">basedIn:</span>{" "}
                <span className="s">&quot;Estado de México, MX&quot;</span>,
                {"\n"}
                {"}"}
                <span className="cursor" />
              </pre>
            </div>
          </div>
        </div>

        <div className="cta-row">
          <a href="#projects" className="btn primary">
            Ver proyectos →
          </a>
          <a
            href="/cv/CV OMAR ALDAYR WEB DEVELOPER 2026.pdf"
            className="btn ghost"
            download
          >
            Descargar CV (ES)
          </a>
          <a
            href="/cv/RESUME OMAR ALDAYR WEB DEVELOPER 2026.pdf"
            className="btn ghost"
            download
          >
            Download CV (EN)
          </a>
        </div>
      </div>
    </header>
  );
}