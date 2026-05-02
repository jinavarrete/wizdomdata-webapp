"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    num: "01",
    claim: "Decisiones más rápidas, no más reportes.",
    body: "El directorio deja de pedir el mismo reporte tres veces porque las cifras nunca cuadran. La operación deja de discutir definiciones en cada reunión. La velocidad operativa se compone — un mes de aceleración en cada decisión es un trimestre ganado al año.",
  },
  {
    num: "02",
    claim: "Eficiencia donde antes había trabajo manual.",
    body: "Las cinco horas semanales que tu analista pasa consolidando un Excel para el comité dejan de existir. Los procesos que se hacían a mano por excepción pasan a hacerse solos por defecto. El equipo deja de operar la planilla y empieza a operar el negocio.",
  },
  {
    num: "03",
    claim: "Ventaja antes que el resto.",
    body: "Cuando tu competencia recién está pidiendo un dashboard de churn, vos ya tenés el modelo predictivo en producción. Cuando recién se preguntan qué clientes priorizar, vos ya tenés la segmentación operando. La curva de aprendizaje analítico se compone — y empezar antes vale más cada año.",
  },
  {
    num: "04",
    claim: "El directorio decide con la misma data que opera la línea.",
    body: "La diferencia entre una empresa data-madura y una que no lo es no está en la herramienta de BI. Está en si la cifra que ve el gerente general es la misma que ve el supervisor de operaciones. Cuando esa alineación existe, el directorio decide rápido. Cuando no existe, decide tarde y mal.",
  },
];

const Impacto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="impacto"
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
              <span className="num">02</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Por qué importa</span>
            </div>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Lo que cambia cuando los datos<br />
              llegan a la <span className="accent">decisión</span>.
            </h2>
            <p className="body-l">
              Los efectos de una capa analítica bien construida no se miden en
              dashboards entregados. Se miden en cómo opera el negocio.
            </p>
          </div>
        </motion.div>

        {/* Impact grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid var(--rule)",
            borderLeft: "1px solid var(--rule)",
          }}
          className="impact-grid"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                padding: "56px 48px",
                borderRight: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
                transition: "background var(--t-slow)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232,227,214,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--ambar)",
                  letterSpacing: "0.1em",
                  marginBottom: 24,
                  display: "block",
                }}
              >
                {card.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 26,
                  lineHeight: 1.2,
                  letterSpacing: "-0.018em",
                  color: "var(--bone)",
                  marginBottom: 20,
                  textWrap: "pretty" as React.CSSProperties["textWrap"],
                }}
              >
                {card.claim}
              </h3>
              <p className="body" style={{ maxWidth: "48ch" }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .impact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Impacto;
