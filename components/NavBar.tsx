"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { theme } from "@/lib/theme";
import { scrollToId } from "@/lib/scroll";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 3,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid transparent",
          transition: "all 0.35s ease",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px clamp(20px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
            onClick={() => go("home")}
          >
            <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
              <Image src="/images/logo.png" alt="Dragon Ryu Karate logo" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="font-display" style={{ fontSize: 20, letterSpacing: 3, color: "#F5F5F5" }}>
              DRAGON RYU
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="r-dn">
            {navLinks.map((link) => (
              <span key={link.id} className={styles.link} onClick={() => go(link.id)}>
                {link.label}
              </span>
            ))}
          </div>

          <span
            className={`${styles.cta} r-dn`}
            style={{ animation: theme.ctaPulseAnim }}
            onClick={() => go("register")}
          >
            Book Free Trial
          </span>

          <div className={`${styles.hamburger} r-hb`} onClick={() => setMenuOpen((v) => !v)}>
            <div style={{ width: 22, height: 2, background: "#F5F5F5" }} />
            <div style={{ width: 22, height: 2, background: "#F5F5F5" }} />
            <div style={{ width: 16, height: 2, background: "#D72638" }} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 150,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F5F5" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {navLinks.map((link) => (
          <span key={link.id} className={styles.mobileLink} onClick={() => go(link.id)}>
            {link.label.toUpperCase()}
          </span>
        ))}
        <div style={{ width: 40, height: 1, background: "#D72638" }} />
        <span className={styles.mobileCta} onClick={() => go("register")}>
          BOOK FREE TRIAL
        </span>
      </div>
    </>
  );
}
