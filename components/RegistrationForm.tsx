"use client";

import { useState } from "react";
import { programOptions } from "@/lib/data";
import styles from "./RegistrationForm.module.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ageGroup: string;
  program: string;
  experience: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, boolean>>;

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  ageGroup: "",
  program: "",
  experience: "none",
  message: "",
};

function borderFor(hasError: boolean) {
  return hasError ? "1px solid #D72638" : "1px solid #2A2A2A";
}

export default function RegistrationForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!data.firstName.trim()) e.firstName = true;
    if (!data.lastName.trim()) e.lastName = true;
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) e.email = true;
    if (!data.phone.trim()) e.phone = true;
    if (!data.program) e.program = true;
    return e;
  };

  const handleSubmit = async () => {
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        if (body?.errors) setErrors(body.errors);
        setSubmitError("Something went wrong submitting your registration. Please try again or call us directly.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Couldn't reach the server. Check your connection and try again, or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "#111", border: "1px solid #1C1C1C", padding: "64px 40px", textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            background: "rgba(215,38,56,0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D72638" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#F5F5F5", letterSpacing: 2, marginBottom: 12 }}>
          WELCOME TO THE DOJO
        </div>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", maxWidth: 380, margin: "0 auto", lineHeight: 1.65 }}>
          Your registration has been received. We&apos;ll contact you shortly to schedule your free trial class. Osu!
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "#111", border: "1px solid #1C1C1C", padding: "clamp(24px, 3vw, 40px)" }}>
      <div className="r-f2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label className={styles.label}>First Name *</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Enter first name"
            className={styles.field}
            style={{ border: borderFor(!!errors.firstName) }}
          />
        </div>
        <div>
          <label className={styles.label}>Last Name *</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Enter last name"
            className={styles.field}
            style={{ border: borderFor(!!errors.lastName) }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label className={styles.label}>Email *</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="your@email.com"
          className={styles.field}
          style={{ border: borderFor(!!errors.email) }}
        />
      </div>

      <div className="r-f2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label className={styles.label}>Phone *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (784) ..."
            className={styles.field}
            style={{ border: borderFor(!!errors.phone) }}
          />
        </div>
        <div>
          <label className={styles.label}>Age Group</label>
          <select
            value={data.ageGroup}
            onChange={(e) => update("ageGroup", e.target.value)}
            className={`${styles.field} ${styles.select}`}
            style={{ border: "1px solid #2A2A2A" }}
          >
            <option value="">Select</option>
            <option value="5-8">5 – 8 years</option>
            <option value="9-12">9 – 12 years</option>
            <option value="13-17">13 – 17 years</option>
            <option value="18+">18+ years</option>
          </select>
        </div>
      </div>

      <div className="r-f2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label className={styles.label}>Program *</label>
          <select
            value={data.program}
            onChange={(e) => update("program", e.target.value)}
            className={`${styles.field} ${styles.select}`}
            style={{ border: borderFor(!!errors.program) }}
          >
            <option value="">Select program</option>
            {programOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={styles.label}>Experience</label>
          <select
            value={data.experience}
            onChange={(e) => update("experience", e.target.value)}
            className={`${styles.field} ${styles.select}`}
            style={{ border: "1px solid #2A2A2A" }}
          >
            <option value="none">No experience</option>
            <option value="beginner">Beginner (under 1 year)</option>
            <option value="intermediate">Intermediate (1–3 years)</option>
            <option value="advanced">Advanced (3+ years)</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label className={styles.label}>Message (optional)</label>
        <textarea
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          placeholder="Anything we should know..."
          className={styles.field}
          style={{ border: "1px solid #2A2A2A", resize: "vertical", minHeight: 72 }}
        />
      </div>

      {submitError && (
        <div style={{ color: "#D72638", fontSize: 13, marginBottom: 14, lineHeight: 1.5 }}>{submitError}</div>
      )}

      <div
        className={styles.submit}
        onClick={submitting ? undefined : handleSubmit}
        style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? "default" : "pointer" }}
      >
        {submitting ? "Submitting…" : "Register Now"}
      </div>
    </div>
  );
}
