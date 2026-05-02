"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caps = [
  {
    num: "01 · Data Engineering",
    title: "Pipelines, warehouses, integraciones en tiempo real.",
    body: "Centralizamos la información dispersa entre sistemas operacionales, planillas y APIs externas. Diseñamos la base sobre la que después corre todo lo demás — analítica, modelos, automatizaciones.",
    stack: "dbt · BigQuery · Databricks · AWS · Azure · GCP · SQL Server · Snowflake",
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
    body: "Desde un modelo de churn clásico hasta un chatbot que responde preguntas de negocio sobre tu data warehouse. Asistentes conversacionales, automatización con IA, modelos en producción.",
    stack: "Python · scikit-learn · MLflow · OpenAI · Anthropic · LangChain · Vertex AI",
  },
  {
    num: "04 · Automatización & Data Products",
    title: "Cuando el proceso no existe, lo construimos.",
    body: "Si una tarea se hace cinco veces al mes, la automatizamos. Si tu equipo necesita una herramienta interna que no existe en el mercado, la diseñamos a medida. Apps internas, integraciones, productos de datos.",
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
            <p className="body-l">
              Diseñamos, construimos y operamos la capa de datos completa — desde
              el pipeline que ingesta tus sistemas hasta el modelo que predice qué
              cliente vas a perder el próximo mes. Trabajamos con el stack moderno
              y con la IA aplicada al negocio real, no a la demo.
            </p>
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

        {/* Footer note */}
        <motion.p
          className="meta-mono"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
            lineHeight: 1.7,
            maxWidth: "70ch",
          }}
        >
          No vendemos paquetes cerrados. Cada proyecto se diseña según lo que el
          negocio necesita resolver — y dónde está hoy en su madurez de datos.
        </motion.p>
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
