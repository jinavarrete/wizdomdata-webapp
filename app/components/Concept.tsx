"use client";

import { useRef } from "react";
import { useConceptAnimation } from "../hooks/useConceptAnimation";
import styles from "./Concept.module.css";

const Concept = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { bits, romboVisible, romboPulsing, decisionVisible, footBright } =
    useConceptAnimation(stageRef);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.eyebrow}>El concepto</div>
      </div>

      <div
        ref={stageRef}
        className={styles.stage}
        role="img"
        aria-label="Animación: datos dispersos convergiendo en una decisión central."
      >
        {/* Nebula */}
        <div className={styles.nebula} aria-hidden="true">
          {bits.map((bit) => {
            const convergeX = 50 - bit.x;
            const convergeY = 50 - bit.y;

            const transform = bit.converging
              ? `translate(calc(-50% + ${convergeX}%), calc(-50% + ${convergeY}%)) scale(0.3)`
              : `translate(calc(-50% + ${bit.driftX}px), calc(-50% + ${bit.driftY}px))`;

            const opacity = bit.converging ? 0 : bit.opacity;

            const transition = bit.converging
              ? `transform 1.1s cubic-bezier(0.5, 0, 0.2, 1), opacity 1s ease`
              : `transform ${bit.driftDuration}s ease-in-out, opacity 0.8s ease`;

            return (
              <span
                key={bit.id}
                className={styles.bit}
                style={{
                  left: `${bit.x}%`,
                  top: `${bit.y}%`,
                  fontSize: bit.fontSize,
                  opacity,
                  transform,
                  transition,
                }}
              >
                {bit.text}
              </span>
            );
          })}
        </div>

        {/* Rombo */}
        <div
          className={`${styles.romboWrap}${romboVisible ? ` ${styles.visible}` : ""}${romboPulsing ? ` ${styles.pulsing}` : ""}`}
          aria-hidden="true"
        >
          <div className={styles.romboGlow} />
          <svg className={styles.romboSvg} viewBox="0 0 100 100">
            <path className={styles.romboShape} d="M50 12 L88 50 L50 88 L12 50 Z" />
          </svg>
        </div>

        {/* Decision */}
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

      <p className={`${styles.foot}${footBright ? ` ${styles.bright}` : ""}`}>
        Eso es lo que hacemos. Encontrar la decisión en los datos que ya tienes.
      </p>
    </section>
  );
};

export default Concept;
