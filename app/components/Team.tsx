"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const people = [
  {
    role: "Co-fundador · Data Engineering & Analytics",
    name: "Juan Ignacio\nNavarrete",
    bio: "Ingeniero Civil Industrial UTFSM. Diplomado en Analytics, PUC. AWS Certified Data Engineer. Siete años trabajando con datos en industrias tradicionales — cuatro de ellos como freelance para una aseguradora chilena, donde el BI que dejé sigue operando.",
    stack: "dbt · BigQuery · SQL Server · Power BI · Python · AWS",
  },
  {
    role: "Co-fundador · Data Science",
    name: "Stefano\nSchiappacasse",
    bio: "Ingeniero Civil Industrial UTFSM. Magíster en Data Science, Universidad de Chile (distinción máxima). Trabaja en producción con modelos predictivos a escala industrial.",
    stack: "Python · Databricks · scikit-learn · MLflow · PySpark",
  },
];

const Team = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="equipo"
      ref={ref}
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div
        style={{
          padding: "120px var(--pad-x)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="left">
            <div className="eyebrow">
              <span className="num">05</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Equipo</span>
            </div>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Dos ingenieros.<br />
              Sin <span className="accent">intermediarios</span>.
            </h2>
            <p className="body-l">
              WizdomData es una consultora boutique fundada en 2026. No tenemos
              un equipo de ventas que te pasa a un equipo de delivery. Quienes te
              venden el proyecto son quienes lo construyen.
            </p>
          </div>
        </motion.div>

        {/* Team grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginTop: 12,
          }}
          className="team-grid"
        >
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              style={{
                borderTop: "1px solid var(--rule-strong)",
                paddingTop: 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ambar)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {person.role}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--bone)",
                  marginBottom: 22,
                  lineHeight: 1.15,
                  whiteSpace: "pre-line",
                }}
              >
                {person.name}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--bone-3)",
                  marginBottom: 28,
                  textWrap: "pretty" as React.CSSProperties["textWrap"],
                }}
              >
                {person.bio}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--bone-3)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                  padding: "12px 0",
                  borderTop: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <span style={{ color: "var(--ambar)", marginRight: 6 }}>Stack</span>
                {person.stack}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="meta-mono"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--rule)",
            lineHeight: 1.7,
            maxWidth: "70ch",
          }}
        >
          Si tu proyecto necesita más manos, traemos especialistas de nuestra
          red. Pero el diseño y la responsabilidad técnica nunca se delegan.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
