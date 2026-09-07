"use client";

import { motion } from "framer-motion";

const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -60px 0px" } as const;

const stances = [
  {
    pill: "01 / Entender",
    title: "Pensamos antes de implementar.",
    body: "Cada proyecto empieza con una conversación de negocio, no con un kickoff técnico. Si lo que pediste originalmente no es lo que necesitas, lo decimos.",
  },
  {
    pill: "02 / Construir",
    title: "Del criterio a una solución que funciona.",
    body: "Priorizamos un primer alcance, validamos con tu equipo y construimos con pruebas, documentación y seguimiento. Cada entrega tiene un propósito de negocio.",
  },
  {
    pill: "03 / Acompañar",
    title: "Construimos para que tu equipo tome el control.",
    body: "Documentamos el código, capacitamos al equipo, dejamos el repositorio en tu organización. No vendemos dependencia.",
  },
];

const Postura = () => {
  return (
    <section
      id="postura"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div
        style={{
          padding: "88px var(--pad-x)",
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
              <span className="num">02</span>
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
              Partner,<br />
              no <span className="accent">proveedor</span>.
            </h2>
            <p className="body-l">
              Un proveedor entrega lo que se le pide. Un partner discute si lo
              que se está pidiendo es lo correcto.
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: 28,
                display: "flex",
                flexDirection: "column",
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
