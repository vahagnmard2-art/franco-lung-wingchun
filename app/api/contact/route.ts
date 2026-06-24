import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

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

  const toEmail = process.env.CONTACT_EMAIL;
  const apiKey  = process.env.RESEND_API_KEY;

  if (!toEmail || !EMAIL_RE.test(toEmail)) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const d = data as Record<string, string>;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Franco Lung Wing Chun <onboarding@resend.dev>",
      to:   [toEmail],
      replyTo: d.Email,
      subject: `Wing Chun Inquiry — ${d.Name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #c9a84c; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            New Inquiry — Franco Lung Wing Chun
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${d.Name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${d.Email}">${d.Email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone</td>
              <td style="padding: 8px 0;">${d.Phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Interest</td>
              <td style="padding: 8px 0;">${d.Interest}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-left: 3px solid #c9a84c;">
            <p style="margin: 0; font-weight: bold;">Message</p>
            <p style="margin: 8px 0 0; white-space: pre-wrap;">${d.Message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent via francolungwingchun.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact/route] Resend error:", error);
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Resend exception:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
