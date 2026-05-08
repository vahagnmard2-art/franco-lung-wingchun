import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch (err) {
    console.error("[contact/route] Failed to parse request body:", err);
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = process.env.CONTACT_EMAIL;
  if (!email) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
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
