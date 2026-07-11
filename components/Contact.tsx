import StaggerGrid from "./StaggerGrid";
import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";
import { contactInfo } from "@/lib/data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="contact" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              VISIT THE
              <br />
              DOJO
            </>
          }
        />

        <StaggerGrid className="r-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 40 }}>
          <div className={styles.card}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "#D72638", marginBottom: 18 }}>
              Location
            </div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#F5F5F5", marginBottom: 6 }}>{contactInfo.location.line1}</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
              {contactInfo.location.line2}
              <br />
              {contactInfo.location.city}
              <br />
              {contactInfo.location.country}
            </div>
          </div>

          <div className={styles.card}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "#D72638", marginBottom: 18 }}>
              Get in Touch
            </div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#F5F5F5", marginBottom: 14 }}>{contactInfo.phone}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {contactInfo.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase", color: "#D72638", marginBottom: 18 }}>
              Training Hours
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactInfo.hours.map((h, i) => (
                <div key={h.days}>
                  {i > 0 && <div style={{ height: 1, background: "#1C1C1C", marginBottom: 12 }} />}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>{h.days}</span>
                    <span style={{ fontSize: 13, color: "#F5F5F5", fontWeight: 600 }}>{h.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StaggerGrid>

        <AnimateIn style={{ width: "100%", aspectRatio: "3/1", background: "#111", border: "1px solid #1C1C1C", overflow: "hidden" }}>
          <iframe
            src={contactInfo.mapEmbedUrl}
            style={{ width: "100%", height: "100%", border: 0, filter: "grayscale(0.8) brightness(0.7) contrast(1.1)" }}
            loading="lazy"
            allowFullScreen
            title="Dragon Ryu Karate location map"
          />
        </AnimateIn>
      </div>
    </div>
  );
}
