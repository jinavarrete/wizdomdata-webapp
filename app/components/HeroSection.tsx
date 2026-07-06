"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useConceptAnimation } from "../hooks/useConceptAnimation";
import styles from "./Concept.module.css";

const HeroSection = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { bits, romboVisible, romboPulsing, decisionVisible } = useConceptAnimation(stageRef);
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern — structural, built on --rule token */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--rule) 1px, transparent 1px), linear-gradient(to bottom, var(--rule) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.4,
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          padding: "48px var(--pad-x) 100px",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 120,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow" style={{ marginBottom: 40, paddingTop: 0 }}>
              <span>Consultora de Data Analytics · Chile</span>
            </div>

            <motion.h1
              className="h-display"
              style={{ marginBottom: 36 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              El dato existe.<br />
              La <span className="accent">decisión</span>,<br />
              no siempre.
            </motion.h1>

            <motion.p
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--bone-3)",
                maxWidth: "52ch",
                marginBottom: 32,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WizdomData es el partner analítico que ayuda a tu equipo a
              definir qué medir, qué construir, y qué decisiones priorizar.
            </motion.p>

            <motion.div
              style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 48 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contacto" className="btn btn-primary">
                Conversemos un proyecto
                <span className="btn-arrow">→</span>
              </a>
              <a href="#postura" className="btn btn-secondary">
                Cómo trabajamos
              </a>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "var(--bone-3)",
                textTransform: "uppercase",
                flexWrap: "wrap",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <span>Data</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>Analytics</span>
              <span className="divider">
                <svg viewBox="0 0 292 290" className="mk-bone mk-rombo" aria-hidden="true">
                  <use href="#mark" />
                </svg>
              </span>
              <span>AI</span>
            </motion.div>
          </motion.div>

          {/* Right column — concept animation */}
          <div className="hero-right">
            <div
              ref={stageRef}
              className={styles.stageHero}
              role="img"
              aria-label="Animación: datos dispersos convergiendo en una decisión central."
            >
              <div className={styles.nebula} aria-hidden="true">
                {bits.map((bit) => {
                  const convergeX = 50 - bit.x;
                  const convergeY = 50 - bit.y;
                  const transform = bit.converging
                    ? `translate(calc(-50% + ${convergeX}%), calc(-50% + ${convergeY}%)) scale(0.3)`
                    : `translate(calc(-50% + ${bit.driftX}px), calc(-50% + ${bit.driftY}px))`;
                  const opacity = bit.converging ? 0 : bit.opacity;
                  const transition = bit.converging
                    ? `transform 0.75s cubic-bezier(0.5, 0, 0.2, 1), opacity 0.65s ease`
                    : `transform ${bit.driftDuration}s ease-in-out, opacity 0.8s ease`;
                  return (
                    <span
                      key={bit.id}
                      className={styles.bit}
                      style={{ left: `${bit.x}%`, top: `${bit.y}%`, fontSize: bit.fontSize, opacity, transform, transition }}
                    >
                      {bit.text}
                    </span>
                  );
                })}
              </div>
              <div
                className={`${styles.romboWrap}${romboVisible ? ` ${styles.visible}` : ""}${romboPulsing ? ` ${styles.pulsing}` : ""}`}
                aria-hidden="true"
              >
                <div className={styles.romboGlow} />
                <svg className={styles.romboSvg} viewBox="0 0 100 100">
                  <path className={styles.romboShape} d="M50 12 L88 50 L50 88 L12 50 Z" />
                </svg>
              </div>
              <div
                className={`${styles.decision}${decisionVisible ? ` ${styles.visible}` : ""}`}
                aria-live="polite"
              >
                <span className={styles.pill}>Decisión</span>
                <p className={styles.decisionText}>
                  Priorizar retención en <span className={styles.accent}>segmento B</span>.<br />
                  Impacto estimado: <span className={styles.accent}>+12% revenue Q3</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
