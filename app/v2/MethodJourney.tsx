"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight, MessagesSquare, Blocks, TrendingUp } from "lucide-react";

const stages = [
  { label: "Entender", title: "Entendemos tu negocio.", icon: MessagesSquare, text: "Nos sentamos con tu equipo. Escuchamos el problema, revisamos lo que existe y definimos qué vale la pena resolver.", outcome: "Un desafío bien definido." },
  { label: "Construir", title: "Construimos con foco.", icon: Blocks, text: "Priorizamos un primer alcance y lo llevamos a la práctica. Validamos contigo, medimos y ajustamos a medida que aprendemos.", outcome: "Una solución que puedes usar." },
  { label: "Acompañar", title: "Acompañamos el avance.", icon: TrendingUp, text: "Dejamos conocimiento, documentación y capacidad instalada. Seguimos cerca para que la solución evolucione con tu operación.", outcome: "Un equipo que puede seguir creciendo." },
];

export default function MethodJourney() {
  const journey = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: journey, offset: ["start 90%", "end 80%"] });

  return <div ref={journey} className="v2-journey">
    <div className="v2-journey-track" aria-hidden="true"><motion.span style={{ scaleX: reduceMotion ? 1 : scrollYProgress }} /></div>
    <ol className="v2-journey-stages">
      {stages.map(({ icon: Icon, ...stage }, i) => <motion.li
        key={stage.label}
        className={`v2-journey-stage v2-journey-stage-${i + 1}`}
        initial={reduceMotion ? false : { y: 28 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="v2-journey-marker"><span>0{i + 1}</span><span>{stage.label}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
        <div className="v2-journey-body">
          <div className="v2-journey-identity"><span aria-hidden="true">0{i + 1}</span><Icon strokeWidth={1.2} size={38} aria-hidden="true" /></div>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
          <div className="v2-journey-outcome"><span>Lo que queda en tu equipo</span><p>{stage.outcome}</p></div>
        </div>
      </motion.li>)}
    </ol>
  </div>;
}
