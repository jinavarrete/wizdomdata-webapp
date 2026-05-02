"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const movements = [
  {
    num: "01",
    label: "El problema",
    headline: (
      <>
        Cada empresa tiene<br />
        más datos de los que<br />
        puede leer.<br />
        Y <span className="accent">menos decisiones</span><br />
        claras de las que<br />
        necesita tomar.
      </>
    ),
    body: [
      "Las empresas modernas invierten años cargando datos a sistemas, integrando herramientas, comprando licencias de BI — y siguen tomando decisiones críticas con la misma planilla Excel que circula por mail desde hace cinco años.",
      "El problema no es la falta de datos. Es la falta de un puente entre los datos y la decisión. Y ese puente no se compra: se construye con criterio.",
    ],
  },
  {
    num: "02",
    label: "El insight",
    headline: (
      <>
        Los datos no<br />
        generan valor.<br />
        Las <span className="accent">decisiones</span>,<br />
        sí.
      </>
    ),
    body: [
      "Un data warehouse no cambia el negocio. Un dashboard tampoco. Lo que cambia el negocio es que el gerente comercial sepa qué clientes va a perder este trimestre, que finanzas cierre el mes en tres días en lugar de dos semanas, que el directorio reciba el reporte que pidió antes de que la pregunta quede obsoleta.",
      "Eso no se compra con tecnología. Se construye con criterio — sabiendo qué medir, qué ignorar, y en qué orden hacerlo.",
    ],
  },
  {
    num: "03",
    label: "La transformación",
    headline: (
      <>
        Por eso no<br />
        construimos<br />
        dashboards.<br />
        <span className="accent">Construimos</span><br />
        la capacidad<br />
        de decidir<br />
        con datos.
      </>
    ),
    body: [
      "Trabajamos del lado del negocio, no del lado de la herramienta. Definimos qué vale la pena medir antes de medirlo, qué proyectos generan valor real antes de empezarlos, y qué arquitectura sostiene tu crecimiento antes de comprar la próxima licencia.",
      "La tecnología es la última pieza que entra al puzzle, no la primera. Y cuando entra, entra bien — porque ya sabemos qué tiene que hacer.",
    ],
  },
];

const Narrativa = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="porque"
      ref={ref}
      style={{
        padding: "140px var(--pad-x) 120px",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        borderTop: "1px solid var(--rule)",
      }}
    >
      {/* Section intro */}
      <motion.div
        style={{ marginBottom: 100, maxWidth: 720 }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          <span className="num">01</span>
          <span className="divider">
            <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
              <use href="#mark" />
            </svg>
          </span>
          <span>Por qué existimos</span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(22px, 2.4vw, 28px)",
            lineHeight: 1.45,
            letterSpacing: "-0.01em",
            color: "var(--bone-3)",
            textWrap: "pretty" as React.CSSProperties["textWrap"],
            fontWeight: 400,
          }}
        >
          <em style={{ color: "var(--bone)", fontStyle: "normal" }}>
            La paradoja de las empresas modernas:
          </em>{" "}
          tienen más datos de los que pueden leer, y menos decisiones claras de
          las que necesitan tomar. Esa distancia entre la información y la acción
          es donde nosotros trabajamos.
        </p>
      </motion.div>

      {/* Movements */}
      {movements.map((m, i) => (
        <motion.div
          key={m.num}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            padding: "64px 0",
            borderTop: "1px solid var(--rule)",
            ...(i === movements.length - 1 ? { borderBottom: "1px solid var(--rule)" } : {}),
            alignItems: "start",
          }}
          className="movement-row"
        >
          {/* Left: number + headline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ambar)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ color: "var(--bone-3)", fontWeight: 500 }}>{m.num}</span>
              <span>{m.label}</span>
            </div>
            <h2 className="h-mid">{m.headline}</h2>
          </div>

          {/* Right: body paragraphs */}
          <div>
            {m.body.map((p, j) => (
              <p
                key={j}
                className="body-l"
                style={{ marginTop: j > 0 ? 18 : 0 }}
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      ))}

      <style>{`
        @media (max-width: 960px) {
          .movement-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 40px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Narrativa;
