import { NextRequest, NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

type RegistrationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ageGroup?: string;
  program: string;
  experience?: string;
  message?: string;
};

const REQUIRED_FIELDS: (keyof RegistrationPayload)[] = ["firstName", "lastName", "email", "phone", "program"];
const EMAIL_RE = /\S+@\S+\.\S+/;

function validate(payload: Partial<RegistrationPayload>) {
  const errors: Partial<Record<keyof RegistrationPayload, boolean>> = {};
  for (const field of REQUIRED_FIELDS) {
    if (!payload[field] || !String(payload[field]).trim()) errors[field] = true;
  }
  if (payload.email && !EMAIL_RE.test(payload.email)) errors.email = true;
  return errors;
}

async function persistToDisk(payload: RegistrationPayload) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  const line = JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }) + "\n";
  await appendFile(path.join(dir, "registrations.jsonl"), line, "utf8");
}

async function sendNotificationEmail(payload: RegistrationPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, REGISTRATION_EMAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !REGISTRATION_EMAIL_TO) {
    console.warn(
      "[register] SMTP env vars not set (SMTP_HOST/SMTP_USER/SMTP_PASS/REGISTRATION_EMAIL_TO) — " +
        "submission was saved to disk but no email notification was sent."
    );
    return false;
  }
  const nodemailer = await import("nodemailer");
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transport.sendMail({
    from: SMTP_USER,
    to: REGISTRATION_EMAIL_TO,
    replyTo: payload.email,
    subject: `New trial class registration — ${payload.firstName} ${payload.lastName}`,
    text: [
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Age group: ${payload.ageGroup || "—"}`,
      `Program: ${payload.program}`,
      `Experience: ${payload.experience || "—"}`,
      `Message: ${payload.message || "—"}`,
    ].join("\n"),
  });
  return true;
}

export async function POST(request: NextRequest) {
  let body: Partial<RegistrationPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const payload = body as RegistrationPayload;

  try {
    await persistToDisk(payload);
  } catch (err) {
    console.error("[register] failed to persist submission", err);
    return NextResponse.json({ ok: false, error: "Could not save registration" }, { status: 500 });
  }

  let emailed = false;
  try {
    emailed = await sendNotificationEmail(payload);
  } catch (err) {
    console.error("[register] failed to send notification email", err);
  }

  return NextResponse.json({ ok: true, emailed });
}
