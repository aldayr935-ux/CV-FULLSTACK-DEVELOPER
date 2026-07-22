"use client";

import { useEffect, useRef, useState } from "react";
import { path } from "@/data/path";

export default function PathScroll() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const total = path.length;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrolledIntoSection = -rect.top;
      const scrollableHeight = wrapper.offsetHeight - viewportH;
      if (scrollableHeight <= 0) return;

      const p = Math.min(Math.max(scrolledIntoSection / scrollableHeight, 0), 1);
      const index = Math.min(total - 1, Math.floor(p * total));
      setProgress(p);
      setActiveIndex(index);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section path-section" id="path">
      <div
        className="path-scroll-wrapper"
        ref={wrapperRef}
        style={{ height: `${path.length * 100}vh` }}
      >
        <div className="path-pin">
          <div className="wrap">

            {/* ── Cabecera igual que las demás secciones ── */}
            <div className="tag-open">&lt;path&gt;</div>
            <h2 className="heading">Trayectoria</h2>
            <p className="lead">Cómo llegué hasta aquí.</p>

            {/* ── Dos columnas en escritorio ── */}
            <div className="path-cols">

              {/* Columna izquierda: línea vertical con checkpoints */}
              <div className="path-left">
                <div className="path-line">
                  <div
                    className="path-line-fill"
                    style={{ height: `${progress * 100}%` }}
                  />
                  {path.map((item, i) => (
                    <span
                      key={i}
                      className={`path-checkpoint ${i <= activeIndex ? "active" : ""}`}
                      style={{ top: `${(i / (path.length - 1)) * 100}%` }}
                    >
                      <span className="path-checkpoint-label">{item.date}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Columna derecha: texto del paso activo */}
              <div className="path-right">
                {path.map((item, i) => (
                  <div
                    key={item.title}
                    className={`path-step ${i === activeIndex ? "active" : ""} ${
                      i < activeIndex ? "past" : ""
                    }`}
                  >
                    <span className="pdate">{item.date}</span>
                    <div className="ptitle">{item.title}</div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}