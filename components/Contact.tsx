"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <footer id="contact">
      <div className="wrap" data-reveal ref={revealRef}>
        <div className="tag-open">&lt;contact&gt;</div>
        <h2>¿Construimos algo juntos?</h2>
        <p className="lead">
          Abierto a posiciones fullstack, frontend o cualquier rol de
          desarrollo web — remoto, híbrido o presencial en Estado de México y
          Ciudad de México.
        </p>
        <div className="contact-row">
          <a href="mailto:aldayr935@gmail.com" className="btn primary">
            aldayr935@gmail.com
          </a>
          <a href="https://github.com/aldayr935-ux" className="btn ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omar-aldayr-garc%C3%ADa-hern%C3%A1ndez-543563378"
            className="btn ghost"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://aldacode.com" className="btn ghost" target="_blank" rel="noreferrer">
            aldacode.com
          </a>
        </div>
        <div className="tag-close">&lt;/contact&gt;</div>
        <div className="foot-bottom">
          <span>© 2026 Aldayr — ALDACODE</span>
          <span>Construido con Next.js</span>
        </div>
      </div>
    </footer>
  );
}
