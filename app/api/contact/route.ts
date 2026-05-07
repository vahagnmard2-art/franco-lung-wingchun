import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const email = process.env.CONTACT_EMAIL;
  if (!email) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) return NextResponse.json({ success: true });
  return NextResponse.json({ success: false }, { status: 502 });
}
