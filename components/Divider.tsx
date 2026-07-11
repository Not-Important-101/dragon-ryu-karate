export default function Divider() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1E1E1E)" }} />
        <div style={{ width: 8, height: 8, background: "#D72638", transform: "rotate(45deg)" }} />
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1E1E1E)" }} />
      </div>
    </div>
  );
}
