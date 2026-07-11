import AnimateIn from "./AnimateIn";
import SectionHeading from "./SectionHeading";
import RegistrationForm from "./RegistrationForm";

const bullets = [
  { title: "Free Trial Class", desc: "Your first class is on us — no obligation." },
  { title: "All Ages Welcome", desc: "Programs for children, teens, adults, and families." },
  { title: "Expert Instruction", desc: "Train under nationally recognized instructors." },
];

export default function Registration() {
  return (
    <div id="register" style={{ padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px)", background: "#0C0C0C" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading
          eyebrow="Join Us"
          title={
            <>
              START YOUR
              <br />
              JOURNEY
            </>
          }
        />

        <AnimateIn
          className="r-g2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}
        >
          <div>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
              Ready to begin? Book a free trial class and experience the Dragon Ryu difference. No
              prior experience needed — just bring your determination.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {bullets.map((b) => (
                <div key={b.title} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(215,38,56,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <div style={{ width: 7, height: 7, background: "#D72638", borderRadius: "50%" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#F5F5F5", marginBottom: 3, fontSize: 14 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RegistrationForm />
        </AnimateIn>
      </div>
    </div>
  );
}
