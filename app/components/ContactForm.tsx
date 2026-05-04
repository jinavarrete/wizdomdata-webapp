"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DiagnosticoMadurez from "./DiagnosticoMadurez/DiagnosticoMadurez";

const Contacto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [diagOpen, setDiagOpen] = useState(false);
  const diagRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="contacto"
      ref={ref}
      style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div
        style={{
          padding: "140px var(--pad-x) 120px",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Closing head */}
        <motion.div
          style={{ maxWidth: 820, marginBottom: 80 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
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
          <div
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
          </div>

          {/* Secondary card — diagnostic trigger */}
          <div
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
              onClick={() => {
                setDiagOpen(true);
                setTimeout(() => {
                  diagRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 50);
              }}
            >
              Empezar diagnóstico
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </motion.div>

        {/* Diagnostic panel */}
        {diagOpen && (
          <div
            ref={diagRef}
            style={{
              paddingTop: 48,
              marginBottom: 64,
              scrollMarginTop: 80,
            }}
          >
            <DiagnosticoMadurez onClose={() => setDiagOpen(false)} />
          </div>
        )}

        {/* Meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
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
