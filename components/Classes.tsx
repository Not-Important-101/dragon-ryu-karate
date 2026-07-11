import StaggerGrid from "./StaggerGrid";
import SectionHeading from "./SectionHeading";
import { classPrograms } from "@/lib/data";
import styles from "./Classes.module.css";

function ScheduleRow({ lines }: { lines: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {lines.map((line) => (
        <div key={line} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 4, height: 4, background: "#D72638", borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{line}</span>
        </div>
      ))}
    </div>
  );
}

export default function Classes() {
  return (
    <div id="classes" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)", background: "#0C0C0C" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Programs"
          title={
            <>
              FIND YOUR
              <br />
              CLASS
            </>
          }
        />

        <StaggerGrid className="r-g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 18 }}>
          {classPrograms.top.map((c) => (
            <div key={c.title} className={c.elite ? styles.eliteCard : styles.card}>
              {c.elite && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "5px 14px",
                    background: "#D72638",
                    color: "white",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Elite
                </div>
              )}
              <div style={{ display: "flex", gap: 5, marginBottom: 20 }}>
                {c.belts.map((b, i) => (
                  <div key={i} style={{ width: 20, height: 5, background: b.color, border: b.border }} />
                ))}
              </div>
              <div className="font-display" style={{ fontSize: 22, color: "#F5F5F5", letterSpacing: 1.5, marginBottom: 10 }}>
                {c.title}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 20, lineHeight: 1.65 }}>{c.desc}</p>
              <ScheduleRow lines={c.schedule} />
            </div>
          ))}
        </StaggerGrid>

        <StaggerGrid className="r-g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {classPrograms.bottom.map((c) => (
            <div key={c.title} className={styles.card}>
              <div style={{ width: 20, height: 5, background: c.barGradient, marginBottom: 20 }} />
              <div className="font-display" style={{ fontSize: 22, color: "#F5F5F5", letterSpacing: 1.5, marginBottom: 10 }}>
                {c.title}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 20, lineHeight: 1.65 }}>{c.desc}</p>
              <ScheduleRow lines={c.schedule} />
            </div>
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
