import Image from "next/image";
import AnimateIn from "./AnimateIn";
import StaggerGrid from "./StaggerGrid";
import SectionHeading from "./SectionHeading";
import StatsBar from "./StatsBar";
import { values } from "@/lib/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <div
      id="about"
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 40px) clamp(60px, 8vw, 120px)",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <SectionHeading
        eyebrow="About Us"
        title={
          <>
            THE WAY OF
            <br />
            THE DRAGON
          </>
        }
      />

      <AnimateIn
        className="r-g2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "center",
          marginBottom: 48,
        }}
      >
        <div>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
            Dragon Ryu Karate is a premier martial arts club based in Kingstown, St. Vincent and
            the Grenadines. For over two decades, we have been shaping champions and building
            character through the discipline of traditional karate.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
            Our dojo is home to students of all ages and skill levels — from young beginners
            taking their first steps to national-level competitors representing SVG on the world
            stage.
          </p>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)" }}>
            We believe karate is more than a sport. It is a path to self-discovery, discipline,
            and personal excellence.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src="/images/dojo.jpg"
            alt="Dragon Ryu Karate students training at the dojo"
            width={800}
            height={600}
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -12,
              right: -12,
              width: "100%",
              height: "100%",
              border: "2px solid rgba(215,38,56,0.4)",
              zIndex: -1,
            }}
          />
        </div>
      </AnimateIn>

      {/* Photo gallery row */}
      <AnimateIn
        className="r-g3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 80 }}
      >
        <div className={styles.galleryTile}>
          <Image
            src="/images/dojo.jpg"
            alt="Dragon Ryu Karate students bowing"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.galleryImg}
            style={{ objectPosition: "20% 40%" }}
          />
          <div className={styles.galleryOverlay} />
        </div>
        <div className={styles.galleryTile}>
          <Image
            src="/images/dojo.jpg"
            alt="Dragon Ryu Karate dojo, black and white"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`${styles.galleryImg} ${styles.galleryImgBW}`}
            style={{ objectPosition: "80% 30%" }}
          />
          <div className={styles.galleryOverlay} />
        </div>
        <div className={styles.galleryTile}>
          <Image
            src="/images/sparring.jpg"
            alt="Two Dragon Ryu Karate athletes sparring in competition"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.galleryImg}
            style={{ objectPosition: "center 35%" }}
          />
          <div className={styles.galleryOverlay} />
        </div>
      </AnimateIn>

      {/* Values */}
      <StaggerGrid
        className="r-g3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 64 }}
      >
        {values.map((v) => (
          <div key={v.title} className={styles.valueCard}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: "#D72638" }} />
            <div
              style={{
                fontFamily: "serif",
                fontSize: 52,
                color: "rgba(215,38,56,0.06)",
                position: "absolute",
                top: 6,
                right: 14,
                lineHeight: 1,
              }}
            >
              {v.kanji}
            </div>
            <div className="font-display" style={{ fontSize: 24, color: "#F5F5F5", letterSpacing: 2, marginBottom: 12 }}>
              {v.title}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.35)" }}>{v.desc}</p>
          </div>
        ))}
      </StaggerGrid>

      <AnimateIn>
        <StatsBar />
      </AnimateIn>
    </div>
  );
}
