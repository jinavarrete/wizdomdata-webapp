"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DiagnosticModal from "./DiagnosticModal";

const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -60px 0px" } as const;

const Contacto = () => {
  const [diagOpen, setDiagOpen] = useState(false);


  return (
    <section
      id="contacto"
      style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div
        style={{
          padding: "88px var(--pad-x)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Closing head */}
        <motion.div
          style={{ maxWidth: 820, marginBottom: 80 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="num">05</span>
            <span className="divider">
              <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                <use href="#mark" />
              </svg>
            </span>
            <span>Hablemos</span>
          </div>
          <h2 className="h-section" style={{ marginBottom: 28 }}>
            ¿Tu negocio decide con la información<br />
            que <span className="accent">necesita</span>?
          </h2>
        </motion.div>

        {/* CTA cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            borderTop: "1px solid var(--rule)",
            paddingTop: 56,
            marginBottom: 64,
          }}
          className="cta-block"
        >
          {/* Primary card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{
              padding: 36,
              background: "var(--surface-3)",
              border: "1px solid var(--ambar)",
              borderRadius: "var(--radius)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ambar)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Tienes un proyecto en mente
            </div>
            <h3 className="h-3" style={{ marginBottom: 14 }}>
              Conversemos un proyecto.
            </h3>
            <p className="body" style={{ marginBottom: 24 }}>
              Cuéntanos qué problema quieres resolver.
            </p>
            <a
              href="mailto:hola@wizdomdata.cl"
              className="btn btn-primary"
            >
              Escribir a hola@wizdomdata.cl
              <span className="btn-arrow">→</span>
            </a>
          </motion.div>

          {/* Secondary card — diagnostic trigger */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            style={{
              padding: 36,
              background: "var(--surface-3)",
              border: `1px solid ${diagOpen ? "var(--ambar)" : "var(--border-default)"}`,
              borderRadius: "var(--radius)",
              transition: "border-color 0.2s ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--bone-3)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Todavía no sabes si tienes un proyecto
            </div>
            <h3 className="h-3" style={{ marginBottom: 14 }}>
              Diagnóstico de madurez analítica.
            </h3>
            <p className="body" style={{ marginBottom: 24 }}>
              Responde 6 preguntas y recibe un diagnóstico de tu nivel de madurez analítica. 2 minutos, sin costo.
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => setDiagOpen(true)}
            >
              Empezar diagnóstico
              <span className="btn-arrow">→</span>
            </button>
          </motion.div>
        </div>

        {/* Diagnostic panel */}
        {diagOpen && <DiagnosticModal onClose={() => setDiagOpen(false)} />}

        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          style={{
            borderTop: "1px solid var(--rule)",
            paddingTop: 32,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--bone-3)",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:hola@wizdomdata.cl"
            style={{
              color: "var(--ambar)",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color var(--t-base)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--ambar)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
          >
            hola@wizdomdata.cl
          </a>
          <span style={{ color: "var(--mute)" }}>·</span>
          <span>respondemos en menos de 48 horas hábiles</span>
          <span style={{ color: "var(--mute)" }}>·</span>
          <span>Chile · operaciones remotas</span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .cta-block {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contacto;
