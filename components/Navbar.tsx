"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "proyectos" },
  { href: "#path", label: "trayectoria" },
  { href: "#contact", label: "contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav>
        <div className="wrap">
          <a href="#top" className="logo">
            <span className="bracket">&lt;</span>Aldayr.García
            <span className="bracket">/&gt;</span>
          </a>
          <div className="navlinks">
            {links.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${open ? "visible" : ""}`}
        style={{ display: open ? "block" : "none" }}
        onClick={() => setOpen(false)}
      />

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-header">
          <span className="logo">
            <span className="bracket">&lt;</span>Aldayr.García
            <span className="bracket">/&gt;</span>
          </span>
          <button className="close-btn" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="mobile-nav">
          {links.map((l) => (
            <a href={l.href} className="mobile-link" key={l.href} onClick={() => setOpen(false)}>
              <span className="mobile-link-tag">&lt;</span>
              {l.label}
              <span className="mobile-link-tag">/&gt;</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="https://aldacode.com" target="_blank" rel="noreferrer">
            aldacode.com
          </a>
          <a href="mailto:aldayr935@gmail.com">aldayr935@gmail.com</a>
        </div>
      </div>
    </>
  );
}
