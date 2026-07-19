import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const alt = `${siteName} — IT Strategy & Engineering`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #01030b 0%, #0f172a 55%, #1e1b4b 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#10b981",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            CT
          </div>
          {siteName}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            IT Strategy & Engineering
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(248, 250, 252, 0.72)",
              maxWidth: 820,
            }}
          >
            Modern IT strategy, cloud-native engineering, and automation for
            ambitious teams.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
