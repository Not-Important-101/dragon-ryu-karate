import Image from "next/image";
import { contactInfo } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div style={{ padding: "40px clamp(20px, 4vw, 40px)", background: "#060606", borderTop: "1px solid #151515" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
            <Image src="/images/logo.png" alt="Dragon Ryu Karate logo" fill sizes="28px" style={{ objectFit: "cover", opacity: 0.5 }} />
          </div>
          <div>
            <div className="font-display" style={{ fontSize: 14, letterSpacing: 2, color: "rgba(255,255,255,0.25)" }}>
              DRAGON RYU KARATE
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.12)", marginTop: 1 }}>St. Vincent and the Grenadines</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.12)" }}>© 2026 Dragon Ryu Karate. All rights reserved.</div>
        <div style={{ display: "flex", gap: 24 }}>
          {contactInfo.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
