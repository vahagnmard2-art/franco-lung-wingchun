"use client";

import { useEffect } from "react";

// Catches errors thrown inside the root layout (LenisProvider, Navbar, Footer,
// PageTransition) — these would otherwise produce a completely blank page
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Global/Layout Error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        margin: 0,
        minHeight: "100vh",
        background: "#080808",
        color: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "monospace",
        boxSizing: "border-box",
      }}>
        <div style={{
          maxWidth: "800px",
          width: "100%",
          border: "1px solid #e53e3e",
          padding: "2rem",
          background: "#111",
        }}>
          <p style={{ color: "#e53e3e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", margin: "0 0 1rem 0" }}>
            Layout Error — this is what was causing the blank page
          </p>
          <h1 style={{ color: "#fff", fontSize: "1.1rem", margin: "0 0 1rem 0", wordBreak: "break-word" }}>
            {error.message || "An error occurred in the site layout"}
          </h1>
          {error.digest && (
            <p style={{ color: "#555", fontSize: "0.7rem", margin: "0 0 1rem 0" }}>
              Digest: {error.digest}
            </p>
          )}
          {process.env.NODE_ENV !== "production" && error.stack && (
            <pre style={{
              color: "#888",
              fontSize: "0.65rem",
              overflow: "auto",
              maxHeight: "280px",
              background: "#0a0a0a",
              padding: "1rem",
              margin: "0 0 1.5rem 0",
              border: "1px solid #2a2a2a",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}>
              {error.stack}
            </pre>
          )}
          <button
            onClick={reset}
            style={{
              background: "#e53e3e",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1.5rem",
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
