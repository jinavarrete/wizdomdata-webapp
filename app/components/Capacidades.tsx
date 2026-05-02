"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caps = [
  {
    num: "01 · Data Engineering",
    title: "Pipelines, warehouses, integraciones en tiempo real.",
    body: "Pipelines, warehouses, integraciones en tiempo real.",
    stack: "dbt · BigQuery · Databricks · AWS · Azure · GCP · SQL Server · Snowflake",
  },
  {
    num: "02 · Business Intelligence",
    title: "Dashboards que tu equipo abre todos los días.",
    body: "Dashboards que tu equipo abre todos los días.",
    stack: "Power BI · Tableau · Looker · Metabase",
  },
  {
    num: "03 · AI & Machine Learning",
    title: "Modelos predictivos y agentes con LLMs.",
    body: "Modelos predictivos, agentes con LLMs, automatización con IA.",
    stack: "Python · scikit-learn · MLflow · OpenAI · Anthropic · LangChain · Vertex AI",
  },
  {
    num: "04 · Automatización & Data Products",
    title: "Cuando el proceso no existe, lo construimos.",
    body: "Apps internas, integraciones, herramientas a medida.",
    stack: "Python · Streamlit · n8n · APIs custom · Cloud Functions",
  },
];

const Capacidades = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="capacidades"
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
              <span className="num">04</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Capacidades</span>
            </div>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Cuando la decisión está clara,<br />
              sabemos <span className="accent">qué construir</span>.
            </h2>
          </div>
        </motion.div>

        {/* Caps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid var(--rule)",
            borderLeft: "1px solid var(--rule)",
          }}
          className="caps-grid"
        >
          {caps.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                padding: "48px 40px 56px",
                borderRight: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
                transition: "background var(--t-slow)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232,227,214,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ambar)",
                  letterSpacing: "0.16em",
                  marginBottom: 18,
                }}
              >
                {cap.num}
              </div>
              <h3 className="h-3" style={{ marginBottom: 16 }}>{cap.title}</h3>
              <p className="body" style={{ marginBottom: 32, maxWidth: "46ch" }}>
                {cap.body}
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: 16,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--bone-3)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "var(--ambar)", marginRight: 6 }}>Stack</span>
                {cap.stack}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .caps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Capacidades;
