"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stances = [
  {
    pill: "Postura · 01",
    title: "Pensamos antes de implementar.",
    body: "Cada proyecto empieza con una conversación de negocio, no con un kickoff técnico. Entendemos qué decisión está bloqueada, qué área la necesita, qué información existe y cuál no. Salimos con una recomendación clara: esto sí vale la pena, esto no, esto primero, esto después. Si lo que el cliente pidió originalmente no es lo que necesita, lo decimos.",
  },
  {
    pill: "Postura · 02",
    title: "Traemos know-how, no manos.",
    body: "Después de años trabajando con datos en industrias tradicionales — aseguradoras, transporte, holdings — sabemos qué proyectos generan valor real y cuáles son cementerios de tiempo. Sabemos en qué orden construir, qué shortcuts no tomar, y qué decisiones de arquitectura te van a doler en dos años. Ese criterio acumulado es lo que el cliente está comprando, más que las horas de implementación.",
  },
  {
    pill: "Postura · 03",
    title: "Construimos para que tu equipo tome el control.",
    body: "No vendemos dependencia. Documentamos el código, capacitamos al equipo interno, dejamos el repositorio en tu organización. Si querés que sigamos haciendo mantención, ofrecemos retainer. Si preferís tomarlo internamente después de la implementación, lo dejamos preparado para eso. Tu autonomía es parte del entregable.",
  },
];

const Postura = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="postura"
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
              <span className="num">03</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Cómo trabajamos</span>
            </div>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Partner analítico,<br />
              no <span className="accent">proveedor</span>.
            </h2>
            <p className="body-l">
              La diferencia es práctica, no semántica. Un proveedor entrega lo
              que se le pide. Un partner discute si lo que se está pidiendo es lo
              correcto. Trabajamos así desde la primera conversación.
            </p>
          </div>
        </motion.div>

        {/* Stance grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            marginTop: 16,
          }}
          className="stance-grid"
        >
          {stances.map((item, i) => (
            <motion.div
              key={item.pill}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              style={{
                borderTop: "1px solid var(--rule-strong)",
                paddingTop: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ambar)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {item.pill}
              </div>
              <h3 className="h-3" style={{ marginBottom: 18 }}>{item.title}</h3>
              <p className="body" style={{ textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: 56,
            padding: "18px 24px",
            background: "rgba(232, 128, 12, 0.04)",
            borderLeft: "2px solid var(--ambar)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--bone-3)",
            lineHeight: 1.7,
            letterSpacing: "0.04em",
          }}
        >
          Nuestro framework interno (
          <strong style={{ color: "var(--bone)", fontWeight: 500 }}>
            wizdomdata-framework
          </strong>
          ) es la suma de todos los proyectos que hemos visto fallar y los que
          vimos funcionar. Es el motivo por el que nuestros entregables no se
          reinventan cada vez.
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .stance-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Postura;
