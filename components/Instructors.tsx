import Image from "next/image";
import StaggerGrid from "./StaggerGrid";
import SectionHeading from "./SectionHeading";
import styles from "./Instructors.module.css";

const instructors = [
  {
    img: "/images/sensei-seon.jpg",
    imgPos: "center 20%",
    tags: ["Chief Instructor", "3rd Dan Black Belt"],
    name: "SENSEI SEON STRONGHOLD",
    desc: "With over 20 years of karate practice and 15+ years of teaching experience, Sensei Seon has trained national champions and continues to shape the next generation of martial artists in St. Vincent and the Grenadines.",
  },
  {
    img: "/images/sempai-rose.jpg",
    imgPos: "center 15%",
    tags: ["Sempai", "1st Dan Black Belt"],
    name: "SEMPAI ROSE STRONGHOLD",
    desc: "A dedicated practitioner and 1st Dan black belt, Sempai Rose brings passion and precision to every class. Her commitment to the art inspires students of all ages across the dojo.",
  },
];

export default function Instructors() {
  return (
    <div id="instructors" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeading
        eyebrow="Our Instructors"
        title={
          <>
            LEARN FROM
            <br />
            THE BEST
          </>
        }
      />
      <StaggerGrid className="r-g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {instructors.map((ins) => (
          <div key={ins.name} className={styles.card}>
            <div style={{ width: "100%", aspectRatio: "16/10", background: "#151515", position: "relative", overflow: "hidden" }}>
              <Image
                src={ins.img}
                alt={ins.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: ins.imgPos }}
              />
            </div>
            <div style={{ padding: "clamp(24px, 3vw, 32px) clamp(24px, 3vw, 36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                <div
                  style={{
                    padding: "4px 12px",
                    background: "rgba(215,38,56,0.12)",
                    color: "#D72638",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {ins.tags[0]}
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
                  {ins.tags[1]}
                </div>
              </div>
              <div className="font-display" style={{ fontSize: "clamp(24px, 2.5vw, 32px)", color: "#F5F5F5", letterSpacing: 1.5, marginBottom: 12 }}>
                {ins.name}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.35)" }}>{ins.desc}</p>
            </div>
          </div>
        ))}
      </StaggerGrid>
    </div>
  );
}
