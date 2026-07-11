"use client";

import { useEffect, useState } from "react";
import { theme, hero } from "@/lib/theme";
import { scrollToId } from "@/lib/scroll";
import styles from "./Hero.module.css";

export default function Hero() {
  const [parallaxPx, setParallaxPx] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setParallaxPx(window.scrollY * 0.25);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dojo.jpg"
          alt=""
          style={{
            width: "100%",
            height: "120%",
            objectFit: "cover",
            filter: `brightness(${theme.heroBrightness}) saturate(0.85)`,
            transform: `translateY(${-parallaxPx}px)`,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(10,10,10,${theme.heroGradTop}) 0%, rgba(10,10,10,0.1) 35%, rgba(10,10,10,0.4) 75%, #0A0A0A 100%)`,
        }}
      />

      {/* Floating kanji */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          fontSize: 120,
          color: "rgba(215,38,56,0.03)",
          fontFamily: "serif",
          zIndex: 1,
          pointerEvents: "none",
          animation: theme.floatAnim,
        }}
      >
        龍
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          fontSize: 90,
          color: "rgba(215,38,56,0.025)",
          fontFamily: "serif",
          zIndex: 1,
          pointerEvents: "none",
          animation: theme.floatAnim,
        }}
      >
        武
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(200px, 35vw, 420px)",
          color: "rgba(215,38,56,0.03)",
          fontFamily: "serif",
          zIndex: 1,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        龍
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 860,
          padding: "0 clamp(20px, 4vw, 40px)",
          animation: "heroFadeIn 1s ease forwards",
        }}
      >
        <div
          style={{
            fontSize: "clamp(10px, 1.2vw, 13px)",
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D72638",
            marginBottom: 28,
          }}
        >
          {theme.heroSub}
        </div>
        <div
          className="font-display"
          style={{
            fontSize: "clamp(52px, 8.5vw, 110px)",
            lineHeight: 0.92,
            color: "#F5F5F5",
            marginBottom: 28,
            letterSpacing: 3,
          }}
        >
          {hero.firstPart}
          <br />
          <span style={{ color: theme.accent }}>{hero.lastWord}</span>
        </div>
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 19px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 560,
            margin: "0 auto 44px",
            lineHeight: 1.7,
          }}
        >
          Train with national champions. Build discipline, confidence, and strength — for all
          ages and skill levels.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <span
            className={styles.primaryCta}
            style={{ animation: theme.ctaPulseAnim }}
            onClick={() => scrollToId("register")}
          >
            {theme.ctaLabel}
          </span>
          <span className={styles.secondaryCta} onClick={() => scrollToId("classes")}>
            View Classes
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          animation: "pulse 2.5s ease infinite",
        }}
        onClick={() => scrollToId("about")}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 30,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>
    </div>
  );
}
