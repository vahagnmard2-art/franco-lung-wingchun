import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// NOTE: This in-memory rate limiter works in development but is non-functional on Vercel
// serverless — each cold start gets a fresh Map with no shared state across invocations.
// Replace with Upstash Redis (or Vercel KV) for production rate limiting.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(data: unknown): string | null {
  if (typeof data !== "object" || data === null) return "Invalid payload";
  const d = data as Record<string, unknown>;

  if (typeof d.Name    !== "string" || d.Name.trim().length    === 0) return "Name is required";
  if (typeof d.Email   !== "string" || d.Email.trim().length   === 0) return "Email is required";
  if (typeof d.Message !== "string" || d.Message.trim().length === 0) return "Message is required";

  if (!EMAIL_RE.test(d.Email as string)) return "Invalid email address";

  if ((d.Name    as string).length > 200)  return "Name too long";
  if ((d.Email   as string).length > 200)  return "Email too long";
  if ((d.Message as string).length > 2000) return "Message too long";

  return null;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let data: unknown;
  try {
    data = await req.json();
  } catch (err) {
    console.error("[contact/route] Failed to parse request body:", err);
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const validationError = validatePayload(data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const email = process.env.CONTACT_EMAIL;
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (res.ok) return NextResponse.json({ success: true });
    return NextResponse.json({ success: false }, { status: 502 });
  } catch (err) {
    console.error("[contact/route] Fetch to formsubmit failed:", err);
    const isTimeout = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      { error: isTimeout ? "Request timed out" : "Failed to send" },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
