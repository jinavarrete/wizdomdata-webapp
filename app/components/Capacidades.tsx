"use client";

import { motion } from "framer-motion";

const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -60px 0px" } as const;

interface Cap {
  num: string;
  title: string;
  body: string;
  stack: string;
  /* Single emphasis point of the section (Fase 2): bigger typographic
     hierarchy inside the cell, stack line as protagonist. Only one card. */
  featured?: boolean;
}

const caps: Cap[] = [
  {
    num: "01 · Data Engineering",
    title: "Pipelines, warehouses, integraciones en tiempo real.",
    body: "Centralizamos información dispersa entre sistemas, planillas y APIs. La base sobre la que después corre analítica, modelos y automatizaciones.",
    stack: "dbt · BigQuery · Databricks · AWS · Azure · GCP · SQL Server · Snowflake",
    featured: true,
  },
  {
    num: "02 · Business Intelligence",
    title: "Dashboards que tu equipo abre todos los días.",
    body: "Reportes ejecutivos para directorio, vistas operativas para mandos medios, métricas correctas para cada rol. Pocas vistas, bien pensadas, sobre datos que cuadran.",
    stack: "Power BI · Tableau · Looker · Metabase",
  },
  {
    num: "03 · AI & Machine Learning",
    title: "Modelos predictivos y agentes con LLMs.",
    body: "Desde un modelo de churn hasta un chatbot que responde sobre tu data warehouse. Asistentes conversacionales, automatización con IA, modelos en producción.",
    stack: "Python · scikit-learn · MLflow · OpenAI · Anthropic · LangChain · Vertex AI",
  },
  {
    num: "04 · Automatización & Data Products",
    title: "Cuando el proceso no existe, lo construimos.",
    body: "Si una tarea se hace cinco veces al mes, la automatizamos. Apps internas, integraciones, herramientas a medida.",
    stack: "Python · Streamlit · n8n · APIs custom · Cloud Functions",
  },
];

const Capacidades = () => {
  return (
    <section
      id="capacidades"
      style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border-subtle)" }}
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="left">
            <div className="eyebrow">
              <span className="num">03</span>
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
            borderTop: "1px solid var(--border-default)",
            borderLeft: "1px solid var(--border-default)",
          }}
          className="caps-grid"
        >
          {caps.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              /* Featured cell lands last: small extra delay marks the emphasis. */
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 + (cap.featured ? 0.12 : 0) }}
              style={{
                padding: "48px 40px 56px",
                background: "var(--surface-3)",
                borderRight: "1px solid var(--border-default)",
                borderBottom: "1px solid var(--border-default)",
                transition: "background var(--t-base), border-color var(--t-base), transform var(--t-base)",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface-4)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface-3)";
                el.style.transform = "translateY(0)";
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
              <h3 className={cap.featured ? "h-mid" : "h-3"} style={{ marginBottom: 16 }}>
                {cap.title}
              </h3>
              <p className={cap.featured ? "body-l" : "body"} style={{ marginBottom: 32, maxWidth: "46ch" }}>
                {cap.body}
              </p>
              <div
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius)",
                  padding: cap.featured ? "12px 16px" : "8px 12px",
                  marginTop: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: cap.featured ? 13 : 11,
                  color: cap.featured ? "var(--text-secondary)" : "var(--text-tertiary)",
                  letterSpacing: "0.04em",
                  lineHeight: cap.featured ? 1.7 : 1.5,
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
