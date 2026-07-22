"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectsAccordion() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="tag-open">&lt;projects&gt;</div>
        <h2 className="heading">Proyectos seleccionados</h2>
        <p className="lead">
          Trabajo para clientes reales y proyectos propios construidos para
          demostrar arquitectura completa, no solo interfaz.
        </p>

        <div className="projects" data-reveal ref={revealRef}>
          {projects.map((project, i) => {
            const open = openIndex === i;
            return (
              <div className={`project-card ${open ? "open" : ""}`} key={project.name}>
                <button
                  type="button"
                  className="project-toggle"
                  aria-expanded={open}
                  onClick={() => toggle(i)}
                >
                  <div className="pmeta">
                    <span className="pstatus">{project.status}</span>
                    <div className="pname">{project.name}</div>
                    <div className="prole">{project.role}</div>
                  </div>
                  <span className="chevron">{open ? "−" : "+"}</span>
                </button>

                <div className="project-panel">
                  <div className="project-panel-inner">
                    <p className="pdesc">{project.description}</p>
                    <div className="pill-row">
                      {project.pills.map((pill) => (
                        <span className="pill" key={pill}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="tag-close">&lt;/projects&gt;</div>
      </div>
    </section>
  );
}
