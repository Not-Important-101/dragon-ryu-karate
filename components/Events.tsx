import StaggerGrid from "./StaggerGrid";
import SectionHeading from "./SectionHeading";
import { events } from "@/lib/data";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <div id="events" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Upcoming Events"
          title={
            <>
              MARK YOUR
              <br />
              CALENDAR
            </>
          }
        />
        <StaggerGrid className="r-g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {events.map((ev) => (
            <div key={ev.title} className={styles.card}>
              <div
                style={{
                  flexShrink: 0,
                  width: 64,
                  height: 64,
                  background: "#D72638",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="font-display" style={{ fontSize: 26, color: "white", lineHeight: 1 }}>
                  {ev.day}
                </div>
                <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
                  {ev.month}
                </div>
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    padding: "3px 10px",
                    background: ev.tagBg,
                    color: ev.tagColor,
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: 8,
                  }}
                >
                  {ev.tag}
                </div>
                <div className="font-display" style={{ fontSize: 20, color: "#F5F5F5", letterSpacing: 1, marginBottom: 6 }}>
                  {ev.title}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.3)" }}>{ev.desc}</p>
              </div>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
