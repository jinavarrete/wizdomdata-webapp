"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
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

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--ambar)",
                marginBottom: 28,
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              from raw data to real impact
            </p>

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
              WizdomData es el partner analítico que se sienta con tu equipo
              antes de que se construya el primer dashboard — para definir qué
              vale la pena medir, qué datos te dan ventaja, y qué proyectos sí
              mueven el negocio.
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

          {/* Right column — large mark, slow rotation */}
          <div
            className="hero-right"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.svg
              className="mk-bone mk-rombo"
              viewBox="0 0 292 290"
              style={{ width: 380, height: 380, opacity: 0.08 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <use href="#mark" />
            </motion.svg>
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
