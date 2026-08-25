"use client";

import { useEffect, useRef, useState } from "react";
import { path } from "@/data/path";

export default function PathScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Detecta cuando la sección entra al viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  // Una vez visible, revela los pasos uno por uno con delay
  useEffect(() => {
    if (!visible) return;

    let i = 0;
    const reveal = () => {
      setActiveIndex(i);
      i++;
      if (i < path.length) {
        setTimeout(reveal, 1200); // 1.2s entre cada paso
      }
    };

    // Pequeño delay inicial para que la entrada sea suave
    const t = setTimeout(reveal, 400);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section
      className={`section path-section ${visible ? "path-visible" : ""}`}
      id="path"
      ref={sectionRef}
    >
      <div className="wrap">
        <div className="tag-open">&lt;path&gt;</div>
        <h2 className="heading">Trayectoria</h2>
        <p className="lead">Cómo llegué hasta aquí.</p>

        <div className="path-cols">
          {/* Línea vertical con checkpoints */}
          <div className="path-left">
            <div className="path-line">
              <div
                className="path-line-fill"
                style={{
                  height:
                    activeIndex >= 0
                      ? `${((activeIndex) / (path.length - 1)) * 100}%`
                      : "0%",
                }}
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

          {/* Lista de pasos — cada uno aparece cuando le toca */}
          <div className="path-right">
            {path.map((item, i) => (
              <div
                key={item.title}
                className={`path-item-reveal ${i <= activeIndex ? "in" : ""}`}
              >
                <span className="pdate">{item.date}</span>
                <div className="ptitle">{item.title}</div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tag-close">&lt;/path&gt;</div>
      </div>
    </section>
  );
}