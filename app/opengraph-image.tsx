import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Grandmaster Franco Lung | Wing Chun Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portraitBuffer = readFileSync(join(process.cwd(), "public/images/sifu-portrait.jpg"));
  const portraitBase64 = `data:image/jpeg;base64,${portraitBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "serif",
          overflow: "hidden",
        }}
      >
        {/* Photo — right side */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitBase64}
          alt=""
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "460px",
            height: "630px",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />

        {/* Gradient fade from left over photo */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "560px",
            height: "100%",
            background: "linear-gradient(90deg, #080808 0%, rgba(8,8,8,0.6) 55%, transparent 100%)",
          }}
        />

        {/* Gold radial glow — left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 30% 50%, #1e1400 0%, transparent 70%)",
          }}
        />

        {/* Top gold line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        {/* Bottom gold line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        {/* Corner TL */}
        <div style={{ position: "absolute", top: 32, left: 32, width: 48, height: 48, borderTop: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C", opacity: 0.5 }} />
        {/* Corner BL */}
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 48, height: 48, borderBottom: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C", opacity: 0.5 }} />

        {/* Left content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 72,
            paddingRight: 40,
            width: "640px",
            zIndex: 10,
          }}
        >
          <div style={{ color: "#C9A84C", fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 28, opacity: 0.8 }}>
            Wing Chun · Temple City · Los Angeles
          </div>

          <div style={{ fontSize: 92, fontWeight: 900, color: "#ffffff", letterSpacing: "0.1em", lineHeight: 1, marginBottom: 2 }}>
            FRANCO
          </div>
          <div style={{ fontSize: 92, fontWeight: 900, color: "#C9A84C", letterSpacing: "0.1em", lineHeight: 1, marginBottom: 32 }}>
            LUNG
          </div>

          <div style={{ width: 100, height: 1, background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 28 }} />

          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
            Grandmaster Franco Lung
          </div>
          <div style={{ color: "rgba(201,168,76,0.6)", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            50 Years of Wing Chun Mastery · Est. 2009
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
