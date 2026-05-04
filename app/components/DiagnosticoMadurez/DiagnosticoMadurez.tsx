"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  questions,
  profiles,
  calculateScore,
  getProfile,
  getMarkerPosition,
  getZoneIndex,
} from "./diagnostico-data";

type Screen = "question" | "result";

const ZONES = ["Fundacional", "Emergente", "Estructurado", "Avanzado"] as const;

interface DiagnosticoMadurezProps {
  onClose: () => void;
}

export default function DiagnosticoMadurez({ onClose }: DiagnosticoMadurezProps) {
  const [screen, setScreen] = useState<Screen>("question");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [markerLeft, setMarkerLeft] = useState(0);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const currentAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const score = screen === "result" ? calculateScore(answers as number[]) : 0;
  const profile = screen === "result" ? getProfile(score) : profiles.fundacional;
  const zoneIndex = screen === "result" ? getZoneIndex(score) : 0;

  const selectOption = useCallback((index: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = index;
      return next;
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentAnswer === null) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setMarkerLeft(0);
      setScreen("result");
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentAnswer, currentQuestion]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screen !== "question") return;
      if (e.key >= "1" && e.key <= "3") {
        const idx = parseInt(e.key) - 1;
        if (idx < questions[currentQuestion].options.length) {
          selectOption(idx);
        }
      }
      if (e.key === "Enter") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [screen, currentQuestion, selectOption, handleNext]);

  // Animate marker after result renders
  useEffect(() => {
    if (screen !== "result") return;
    const pos = getMarkerPosition(score);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMarkerLeft(pos);
      });
    });
  }, [screen, score]);

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((q) => q - 1);
    }
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setEmailValue("");
    setEmailSubmitted(false);
    setMarkerLeft(0);
    setScreen("question");
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleEmailSubmit = () => {
    if (!emailValue || !emailValue.includes("@")) return;
    const payload = {
      email: emailValue,
      score,
      profile: profile.key,
      answers: (answers as number[]).map((a, i) => ({
        question: questions[i].dimension,
        selected: questions[i].options[a].marker,
        score: questions[i].options[a].score,
      })),
      timestamp: new Date().toISOString(),
    };
    console.log("Lead captured:", payload);
    setEmailSubmitted(true);
  };

  const safeIndex = Math.min(currentQuestion, questions.length - 1);
  const q = questions[safeIndex];

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar diagnóstico"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "var(--bone-3)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          lineHeight: 1,
          transition: "color var(--t-base)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bone)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone-3)")}
      >
        ✕ Cerrar
      </button>

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* ---- QUESTION SCREEN ---- */}
        {screen === "question" && (
          <div key={`q-${currentQuestion}`} style={{ animation: "diag-fade 300ms ease" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 36,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  color: "var(--bone-3)",
                }}
              >
                <strong style={{ color: "var(--bone)", fontWeight: 500 }}>
                  {String(currentQuestion + 1).padStart(2, "0")}
                </strong>{" "}
                / 06
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ambar)",
                }}
              >
                {q.dimension}
              </div>
            </div>

            {/* Question text */}
            <h3
              style={{
                fontSize: "clamp(20px, 4vw, 24px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
                marginBottom: 32,
                maxWidth: "28ch",
                color: "var(--bone)",
              }}
            >
              {q.text}
            </h3>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {q.options.map((opt, i) => {
                const selected = currentAnswer === i;
                return (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    style={{
                      border: `1px solid ${selected ? "var(--ambar)" : "rgba(232, 227, 214, 0.12)"}`,
                      borderRadius: "var(--radius)",
                      padding: "16px 52px 16px 20px",
                      cursor: "pointer",
                      background: selected ? "rgba(232, 128, 12, 0.05)" : "transparent",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      position: "relative",
                      textAlign: "left",
                      width: "100%",
                      transition: "border-color 0.15s ease, background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(232, 227, 214, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      if (!selected) e.currentTarget.style.borderColor = "rgba(232, 227, 214, 0.12)";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        color: selected ? "var(--ambar)" : "var(--bone-3)",
                        width: 20,
                        flexShrink: 0,
                        paddingTop: 2,
                        transition: "color 0.15s ease",
                      }}
                    >
                      {opt.marker}
                    </span>
                    <span
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.55,
                        color: "var(--bone)",
                      }}
                    >
                      {opt.text}
                    </span>
                    {/* Check indicator */}
                    <span
                      style={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 18,
                        height: 18,
                        border: `1px solid ${selected ? "var(--ambar)" : "rgba(232, 227, 214, 0.12)"}`,
                        borderRadius: "var(--radius)",
                        background: selected ? "var(--ambar)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.15s ease",
                        flexShrink: 0,
                      }}
                    >
                      {selected && (
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            background: "var(--tinta)",
                            display: "block",
                            transform: "rotate(45deg)",
                          }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={handlePrev}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  background: "none",
                  border: "none",
                  color: "var(--bone-3)",
                  cursor: "pointer",
                  padding: "8px 0",
                  transition: "color 0.15s ease",
                  visibility: currentQuestion === 0 ? "hidden" : "visible",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bone)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone-3)")}
              >
                ← Anterior
              </button>
              <button
                onClick={handleNext}
                disabled={currentAnswer === null}
                className="btn btn-primary"
                style={{
                  opacity: currentAnswer === null ? 0.3 : 1,
                  cursor: currentAnswer === null ? "not-allowed" : "pointer",
                }}
              >
                {isLastQuestion ? "Ver resultado" : "Siguiente →"}
              </button>
            </div>
          </div>
        )}

        {/* ---- RESULT SCREEN ---- */}
        {screen === "result" && (
          <div style={{ animation: "diag-fade 300ms ease" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--bone-3)",
                marginBottom: 24,
              }}
            >
              <strong style={{ color: "var(--bone)", fontWeight: 500 }}>Resultado</strong>{" "}
              · Tu diagnóstico
            </div>

            {/* Profile label */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ambar)",
                marginBottom: 12,
              }}
            >
              {profile.label}
            </div>

            {/* Profile title */}
            <h3
              style={{
                fontSize: "clamp(24px, 4.5vw, 32px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
                marginBottom: 32,
                maxWidth: "24ch",
                color: "var(--bone)",
              }}
            >
              {profile.title}
            </h3>

            {/* Axis visualization */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                {ZONES.map((zone, i) => (
                  <div
                    key={zone}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: i === zoneIndex ? "var(--ambar)" : "var(--bone-3)",
                      fontWeight: i === zoneIndex ? 600 : 400,
                      padding: "0 4px 8px",
                      textAlign: "center",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {zone}
                  </div>
                ))}
              </div>

              {/* Track */}
              <div
                style={{
                  position: "relative",
                  height: 48,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                }}
              >
                {ZONES.map((zone, i) => (
                  <div
                    key={zone}
                    style={{
                      border: "1px solid rgba(232, 227, 214, 0.08)",
                      borderRight: i < 3 ? "none" : "1px solid rgba(232, 227, 214, 0.08)",
                      background:
                        i === zoneIndex
                          ? "rgba(232, 128, 12, 0.06)"
                          : "rgba(232, 227, 214, 0.02)",
                      transition: "background 0.5s ease",
                      borderRadius:
                        i === 0
                          ? "var(--radius) 0 0 var(--radius)"
                          : i === 3
                          ? "0 var(--radius) var(--radius) 0"
                          : undefined,
                    }}
                  />
                ))}

                {/* Diamond marker */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${markerLeft}%`,
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    width: 14,
                    height: 14,
                    background: "var(--ambar)",
                    zIndex: 2,
                    transition: markerLeft === 0 ? "none" : "left 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 0 0 4px var(--tinta), 0 0 0 5px rgba(232, 128, 12, 0.3)",
                  }}
                />
              </div>

              {/* Extremes */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.06em",
                    color: "rgba(168, 164, 152, 0.6)",
                  }}
                >
                  Operación manual
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.06em",
                    color: "rgba(168, 164, 152, 0.6)",
                  }}
                >
                  Decisiones con datos integrados
                </span>
              </div>
            </div>

            {/* Recommendation */}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28, marginBottom: 40 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--bone-3)",
                  marginBottom: 16,
                }}
              >
                Qué significa · Qué hacer
              </div>
              <div
                className="diag-rec-text"
                dangerouslySetInnerHTML={{ __html: profile.recommendation }}
              />
            </div>

            {/* CTA */}
            {profile.cta && (
              <div style={{ marginBottom: 40 }}>
                <a
                  href="#contacto"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {profile.cta}
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            )}

            {/* Email capture */}
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28, marginBottom: 24 }}>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--bone-3)",
                  marginBottom: 14,
                  lineHeight: 1.55,
                  maxWidth: "48ch",
                }}
              >
                {profile.emailPrompt}
              </p>
              {!emailSubmitted ? (
                <div style={{ display: "flex", gap: 8 }} className="diag-email-row">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="tu@empresa.cl"
                    onKeyDown={(e) => { if (e.key === "Enter") handleEmailSubmit(); }}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      background: "rgba(232, 227, 214, 0.06)",
                      border: "1px solid rgba(232, 227, 214, 0.12)",
                      borderRadius: "var(--radius)",
                      padding: "10px 14px",
                      color: "var(--bone)",
                      flex: 1,
                      outline: "none",
                      transition: "border-color 0.15s ease",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ambar)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(232, 227, 214, 0.12)")}
                  />
                  <button
                    onClick={handleEmailSubmit}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.06em",
                      background: "rgba(232, 227, 214, 0.08)",
                      border: "1px solid rgba(232, 227, 214, 0.12)",
                      borderRadius: "var(--radius)",
                      padding: "10px 18px",
                      color: "var(--bone)",
                      cursor: "pointer",
                      transition: "background 0.15s ease, border-color 0.15s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(232, 227, 214, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(232, 227, 214, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(232, 227, 214, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(232, 227, 214, 0.12)";
                    }}
                  >
                    Enviar
                  </button>
                </div>
              ) : (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--ambar)",
                    padding: "10px 0",
                  }}
                >
                  ◆ Listo. Lo recibirás en los próximos minutos.
                </p>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingTop: 24,
                borderTop: "1px solid var(--rule)",
              }}
            >
              <button
                onClick={handleRestart}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  background: "none",
                  border: "none",
                  color: "var(--bone-3)",
                  cursor: "pointer",
                  padding: "8px 0",
                  transition: "color 0.15s ease",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(168,164,152,0.3)",
                  textUnderlineOffset: "3px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--bone)";
                  e.currentTarget.style.textDecorationColor = "var(--bone)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--bone-3)";
                  e.currentTarget.style.textDecorationColor = "rgba(168,164,152,0.3)";
                }}
              >
                Volver a empezar
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes diag-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .diag-rec-text {
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--bone);
          max-width: 56ch;
        }
        .diag-rec-text p { margin-bottom: 14px; }
        .diag-rec-text strong { font-weight: 600; color: var(--bone); }
        .diag-rec-text em { font-style: normal; color: var(--ambar); font-weight: 500; }
        @media (max-width: 480px) {
          .diag-email-row { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
