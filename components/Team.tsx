import Image from "next/image";
import StaggerGrid from "./StaggerGrid";
import SectionHeading from "./SectionHeading";
import { goldenFighters, fighters } from "@/lib/data";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <div id="team" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeading
        eyebrow="National Team"
        title={
          <>
            MEET THE
            <br />
            WARRIORS
          </>
        }
        intro="The athletes who represent Dragon Ryu Karate and St. Vincent on the national and international stage."
      />

      {/* Golden cards — Sensei & Sempai */}
      <StaggerGrid className="r-g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
        {goldenFighters.map((gf) => (
          <div key={gf.name} className={styles.goldenCard}>
            <div style={{ width: "100%", aspectRatio: "16/10", background: "#141210", position: "relative", overflow: "hidden" }}>
              <Image
                src={gf.img}
                alt={gf.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: gf.imgPos }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(17,17,17,0.4), transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <div style={{ padding: "clamp(24px, 3vw, 32px) clamp(24px, 3vw, 36px)", borderTop: "2px solid rgba(201,168,76,0.25)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                <div
                  style={{
                    padding: "4px 12px",
                    background: "rgba(201,168,76,0.12)",
                    color: "#C9A84C",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {gf.rank}
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {gf.belt}
                </div>
              </div>
              <div className="font-display" style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#F5F5F5", letterSpacing: 1.5, marginBottom: 10 }}>
                {gf.name}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.35)" }}>{gf.desc}</p>
            </div>
          </div>
        ))}
      </StaggerGrid>

      {/* Fighter cards — 10 athletes */}
      <StaggerGrid className="r-g5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {fighters.map((f, i) => (
          <div key={`${f.name}-${i}`} className={styles.fighterCard}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "#151515",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(215,38,56,0.012) 10px, rgba(215,38,56,0.012) 20px)",
                }}
              />
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <div style={{ fontFamily: "serif", fontSize: 60, color: "rgba(215,38,56,0.07)", lineHeight: 1 }}>{f.kanji}</div>
                <div style={{ fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.08)", marginTop: 8, fontWeight: 500 }}>
                  Photo
                </div>
              </div>
            </div>
            <div style={{ height: 3, background: f.beltColor }} />
            <div style={{ padding: "16px 14px" }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                {f.belt}
              </div>
              <div className="font-display" style={{ fontSize: 18, color: "#F5F5F5", letterSpacing: 1, marginBottom: 4, lineHeight: 1.15 }}>
                {f.name}
              </div>
              <div style={{ fontSize: 11, color: "#D72638", fontWeight: 600, letterSpacing: 0.5, marginBottom: 8 }}>{f.rank}</div>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,0.25)" }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </StaggerGrid>
    </div>
  );
}
