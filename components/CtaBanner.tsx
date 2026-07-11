import ScrollLink from "./ScrollLink";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <div style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 40px)", background: "#D72638", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -60,
          width: 320,
          height: 320,
          border: "44px solid rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -50,
          left: -30,
          width: 180,
          height: 180,
          border: "28px solid rgba(255,255,255,0.03)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "serif",
          fontSize: "clamp(150px, 25vw, 300px)",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        空手
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div className="font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "white", letterSpacing: 3, marginBottom: 14, lineHeight: 1 }}>
          READY TO BEGIN?
        </div>
        <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(255,255,255,0.8)", marginBottom: 32, lineHeight: 1.6 }}>
          Your first class is free. No experience needed — just bring your determination.
        </p>
        <ScrollLink targetId="register" className={styles.button}>
          Book Your Free Trial
        </ScrollLink>
      </div>
    </div>
  );
}
