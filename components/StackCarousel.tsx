"use client";

import { useEffect, useRef, useState } from "react";
import { stack } from "@/data/stack";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INTERVAL_MS = 3200; // velocidad del giro automático

export default function StackCarousel() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const total = stack.length;

  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + total) % total); // loop infinito
  };

  const goTo = (i: number) => setActive(i);

  // Inicia el giro automático
  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, INTERVAL_MS);
  };

  // Pausa el giro automático brevemente al interactuar
  const pauseAndResume = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => startAuto(), INTERVAL_MS * 2);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleArrow = (dir: 1 | -1) => {
    go(dir);
    pauseAndResume();
  };

  const handleDot = (i: number) => {
    goTo(i);
    pauseAndResume();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      go(delta < 0 ? 1 : -1);
      pauseAndResume();
    }
    touchStartX.current = null;
  };

  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="tag-open">&lt;stack&gt;</div>
        <h2 className="heading">Herramientas con las que trabajo</h2>
        <p className="lead">
          Un stack moderno, orientado a producto: del frontend a la base de
          datos, pasando por despliegue e infraestructura ligera.
        </p>

        <div className="carousel" data-reveal ref={revealRef}>
          <button
            type="button"
            className="carousel-arrow left"
            aria-label="Anterior"
            onClick={() => handleArrow(-1)}
          >
            ‹
          </button>

          <div
            className="carousel-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {stack.map((cat, i) => {
              const offset = i - active;
              // Ajuste para loop: si el offset es muy grande, damos la vuelta
              const loopedOffset =
                offset > total / 2
                  ? offset - total
                  : offset < -total / 2
                  ? offset + total
                  : offset;
              const abs = Math.abs(loopedOffset);
              const visible = abs <= 2;

              return (
                <div
                  className={`stack-card-wheel ${loopedOffset === 0 ? "active" : ""}`}
                  key={cat.title}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${
                      loopedOffset * 62
                    }%) scale(${Math.max(1 - abs * 0.16, 0.6)}) rotateY(${
                      loopedOffset * -8
                    }deg)`,
                    opacity: visible ? 1 - abs * 0.4 : 0,
                    zIndex: total - abs,
                    pointerEvents: loopedOffset === 0 ? "auto" : "none",
                    transition:
                      "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
                  }}
                  aria-hidden={loopedOffset !== 0}
                >
                  <h3>{cat.title}</h3>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="carousel-arrow right"
            aria-label="Siguiente"
            onClick={() => handleArrow(1)}
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {stack.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`carousel-dot ${i === active ? "active" : ""}`}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              onClick={() => handleDot(i)}
            />
          ))}
        </div>

        <div className="tag-close">&lt;/stack&gt;</div>
      </div>
    </section>
  );
}