"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import styles from "./About.module.css";

const targets = [20, 100, 15];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();

    function animate() {
      const duration = 2000;
      const start = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - start) / duration, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setCounts(targets.map((t) => Math.round(t * e)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, []);

  return (
    <div
      ref={ref}
      id="stats-section"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        border: "1px solid #1C1C1C",
        background: "#0E0E0E",
      }}
      className="r-g4"
    >
      {stats.map((s, i) => (
        <div key={s.label} className={styles.statCell}>
          <div
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "#D72638", lineHeight: 1 }}
          >
            {counts[i]}
            {s.suffix}
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginTop: 8,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
      <div className={styles.statCell}>
        <div className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "#D72638", lineHeight: 1 }}>
          SVG
        </div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginTop: 8,
          }}
        >
          National Champions
        </div>
      </div>
    </div>
  );
}
