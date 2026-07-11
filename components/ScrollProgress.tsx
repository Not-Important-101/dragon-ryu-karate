"use client";

import { useEffect, useState } from "react";
import { theme } from "@/lib/theme";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        setPct(docH > 0 ? (scrollY / docH) * 100 : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: theme.progressHeight,
        background: `linear-gradient(90deg, ${theme.accent}, #FF6B6B)`,
        zIndex: 250,
        width: `${pct}%`,
        pointerEvents: "none",
      }}
    />
  );
}
