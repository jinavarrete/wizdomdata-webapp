"use client";

import { useRef, useState, useEffect } from "react";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";

interface ImpactCard {
  num: string;
  claim: string;
  body: string;
  /* Single emphasis point of the section (Fase 2): a real figure already
     present in the copy, set big in JetBrains Mono. Only one card gets it. */
  stat?: { value: string; unit: string };
}

const cards: ImpactCard[] = [
  {
    num: "01",
    claim: "Decisiones más rápidas, no más reportes.",
    body: "El directorio deja de pedir el mismo dato tres veces porque las cifras nunca cuadran.",
  },
  {
    num: "02",
    claim: "Eficiencia donde antes había trabajo manual.",
    body: "Las cinco horas semanales que tu analista pasa en Excel dejan de existir.",
    stat: { value: "−5 h", unit: "/semana" },
  },
  {
    num: "03",
    claim: "Ventaja antes que el resto.",
    body: "Cuando tu competencia recién pide un dashboard de churn, ya tienes el modelo en producción.",
  },
  {
    num: "04",
    claim: "El directorio decide con la misma data que opera la línea.",
    body: "Cuando esa alineación existe, las decisiones se toman rápido. Cuando no existe, tarde y mal.",
  },
];

const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -60px 0px" } as const;

/* Fase 3: the emphasized figure counts up to its value when revealed —
   the differentiated entrance for the section's single emphasis point. */
const StatCounter = ({ value, unit }: { value: string; unit: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduced = useReducedMotion();

  const parsed = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = parsed?.[1] ?? "";
  const target = parsed ? parseInt(parsed[2], 10) : 0;
  const suffix = parsed?.[3] ?? "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 0.7,
      delay: 0.3,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, target]);

  return (
    <div
      ref={ref}
      data-stat
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        fontSize: "clamp(40px, 4.5vw, 56px)",
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color: "var(--bone)",
        marginBottom: 20,
      }}
    >
      {prefix}{n}{suffix}
      <span
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: "var(--bone-3)",
          letterSpacing: "0.06em",
          marginLeft: 8,
        }}
      >
        {unit}
      </span>
    </div>
  );
};

const Impacto = () => {
  return (
    <section
      id="impacto"
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
              <span className="num">01</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Lo que cambia</span>
            </div>
          </div>
          <div className="right">
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Cuando los datos llegan a la <span className="accent">decisión</span>.
            </h2>
          </div>
        </motion.div>

        {/* Impact grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid var(--border-default)",
            borderLeft: "1px solid var(--border-default)",
          }}
          className="impact-grid"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
              style={{
                padding: "56px 48px",
                background: "var(--surface-3)",
                borderRight: "1px solid var(--border-default)",
                borderBottom: "1px solid var(--border-default)",
                transition: "background var(--t-base), border-color var(--t-base), transform var(--t-base)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface-4)";
                el.style.borderColor = "var(--border-strong)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface-3)";
                el.style.borderColor = "var(--border-default)";
                el.style.transform = "translateY(0)";
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
              {card.stat && <StatCounter value={card.stat.value} unit={card.stat.unit} />}
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
