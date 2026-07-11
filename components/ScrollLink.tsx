"use client";

import { scrollToId } from "@/lib/scroll";

export default function ScrollLink({
  targetId,
  className,
  style,
  children,
  onNavigate,
}: {
  targetId: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <span
      className={className}
      style={{ cursor: "pointer", ...style }}
      onClick={() => {
        scrollToId(targetId);
        onNavigate?.();
      }}
    >
      {children}
    </span>
  );
}
