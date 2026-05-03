"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Narrativa = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="porque"
      ref={ref}
      style={{
        padding: "140px var(--pad-x) 120px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow" style={{ marginBottom: 56 }}>
            <span className="num">01</span>
            <span className="divider">
              <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                <use href="#mark" />
              </svg>
            </span>
            <span>Por qué existimos</span>
          </div>

          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: "var(--bone-3)",
                fontWeight: 400,
                marginBottom: 32,
              }}
            >
              Las empresas modernas tienen más datos de los que pueden leer, y
              menos{" "}
              <span className="accent" style={{ fontStyle: "italic" }}>
                decisiones
              </span>{" "}
              claras de las que necesitan tomar.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: "var(--bone-3)",
                fontWeight: 400,
                marginBottom: 32,
              }}
            >
              El problema no es la falta de datos. Es la falta de un puente
              entre los datos y la decisión.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: "var(--bone-3)",
                fontWeight: 400,
              }}
            >
              Ese puente no se compra: se construye con{" "}
              <span className="accent" style={{ fontStyle: "italic" }}>
                criterio
              </span>
              . Eso es lo que hacemos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Narrativa;
