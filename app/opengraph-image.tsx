import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Grandmaster Franco Lung | Wing Chun Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 45%, #1e1400 0%, #080808 70%)",
          }}
        />

        {/* Top gold line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        {/* Bottom gold line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        {/* Corner TL */}
        <div style={{ position: "absolute", top: 32, left: 32, width: 48, height: 48, borderTop: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C", opacity: 0.5 }} />
        {/* Corner TR */}
        <div style={{ position: "absolute", top: 32, right: 32, width: 48, height: 48, borderTop: "1px solid #C9A84C", borderRight: "1px solid #C9A84C", opacity: 0.5 }} />
        {/* Corner BL */}
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 48, height: 48, borderBottom: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C", opacity: 0.5 }} />
        {/* Corner BR */}
        <div style={{ position: "absolute", bottom: 32, right: 32, width: 48, height: 48, borderBottom: "1px solid #C9A84C", borderRight: "1px solid #C9A84C", opacity: 0.5 }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ color: "#C9A84C", fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 24, opacity: 0.7 }}>
            Wing Chun · Los Angeles · Est. 2009
          </div>

          <div style={{ fontSize: 100, fontWeight: 900, color: "#ffffff", letterSpacing: "0.12em", lineHeight: 1, marginBottom: 4 }}>
            FRANCO
          </div>
          <div style={{ fontSize: 100, fontWeight: 900, color: "#C9A84C", letterSpacing: "0.12em", lineHeight: 1, marginBottom: 32 }}>
            LUNG
          </div>

          {/* Gold divider */}
          <div style={{ width: 120, height: 1, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", marginBottom: 28 }} />

          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Grandmaster · From the Lineage of Ip Man
          </div>

          <div style={{ marginTop: 28, color: "rgba(201,168,76,0.55)", fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Temple City, CA · francolungwingchun.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
