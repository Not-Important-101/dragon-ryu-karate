import AnimateIn from "./AnimateIn";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  style,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  style?: React.CSSProperties;
}) {
  return (
    <AnimateIn style={{ marginBottom: 56, ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <div style={{ width: 40, height: 2, background: "#D72638" }} />
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#D72638",
          }}
        >
          {eyebrow}
        </span>
      </div>
      <div
        className="font-display"
        style={{
          fontSize: "clamp(40px, 5.5vw, 68px)",
          color: "#F5F5F5",
          letterSpacing: 2,
          lineHeight: 0.95,
        }}
      >
        {title}
      </div>
      {intro && (
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 560,
            marginTop: 20,
          }}
        >
          {intro}
        </p>
      )}
    </AnimateIn>
  );
}
