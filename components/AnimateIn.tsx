"use client";

import { useEffect, useRef } from "react";

/**
 * Fades + slides a section in once it enters the viewport. Mirrors the
 * `data-animate` IntersectionObserver behavior from the original prototype.
 */
export default function AnimateIn({
  children,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-animate="" className={className} style={style}>
      {children}
    </Tag>
  );
}
