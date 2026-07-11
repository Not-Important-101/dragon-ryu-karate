"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a grid of cards and reveals each child individually as it enters the
 * viewport, staggered by 80ms per index. Mirrors the original `data-stagger`
 * behavior.
 */
export default function StaggerGrid({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -30px 0px" }
    );
    items.forEach((item, i) => {
      item.style.setProperty("--stagger-delay", `${i * 80}ms`);
      item.setAttribute("data-stagger-item", "");
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, [children]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
}
