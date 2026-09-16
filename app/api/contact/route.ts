import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function formConfig() {
  const url = process.env.GOOGLE_FORM_URL;
  const fields = {
    name: process.env.GOOGLE_FORM_ENTRY_NAME,
    email: process.env.GOOGLE_FORM_ENTRY_EMAIL,
    phone: process.env.GOOGLE_FORM_ENTRY_PHONE,
    subject: process.env.GOOGLE_FORM_ENTRY_SUBJECT,
    message: process.env.GOOGLE_FORM_ENTRY_MESSAGE,
  };

  if (!url || Object.values(fields).some((entry) => !entry)) return null;
  return { url, fields: fields as Record<keyof typeof fields, string> };
}

export async function POST(request: NextRequest) {
  const config = formConfig();
  if (!config) {
    console.error("Google Form env vars are missing; see .env.example");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const { allowed, retryAfterSeconds } = rateLimit(
    clientIp(request),
    RATE_LIMIT,
    RATE_WINDOW_MS
  );
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { website, ...data } = parsed.data;
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const payload = new URLSearchParams();
  payload.append(config.fields.name, data.name);
  payload.append(config.fields.email, data.email);
  payload.append(config.fields.phone, data.phone);
  payload.append(config.fields.subject, data.subject);
  payload.append(config.fields.message, data.message);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const response = await fetch(config.url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      // Forms answers with a redirect to its confirmation page on success.
      redirect: "manual",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const accepted = response.ok || response.status === 302;
    if (!accepted) {
      throw new Error(`Google Form responded with ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to forward contact submission:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
