import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { profile } from "@/lib/resume"

export const alt = `${profile.name} — ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The set-box masthead as a share card: name on the gridded blueprint ground,
// a printed spec row, one ink keyline framing it all. Single face (Archivo Black).
export default async function OpengraphImage() {
  const archivoBlack = await readFile(
    join(process.cwd(), "app/_assets/ArchivoBlack-Regular.ttf")
  )

  const spec = ["6+ YEARS", "FULL-STACK + AI/LLM", "BARCELONA, ES", "OPEN TO WORK"]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#a9dffb",
          backgroundImage:
            "radial-gradient(#7cc4ef 2px, transparent 2.5px)",
          backgroundSize: "36px 36px",
          border: "16px solid #10100f",
          fontFamily: "Archivo Black",
          color: "#10100f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#e02b26",
              border: "4px solid #10100f",
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 4 }}>BUILD INSTRUCTIONS</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: -4,
          }}
        >
          <span>Alessandro</span>
          <span>Zanni</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {spec.map((item) => (
            <div
              key={item}
              style={{
                fontSize: 22,
                letterSpacing: 1,
                padding: "10px 16px",
                backgroundColor: "#ffffff",
                border: "3px solid #10100f",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo Black", data: archivoBlack, style: "normal", weight: 400 }],
    }
  )
}
