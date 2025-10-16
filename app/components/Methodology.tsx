"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, Rocket } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    icon: CheckCircle2,
    title: "Diagnóstico y Validación",
    description:
      "Comenzamos con un diagnóstico profundo para entender tus desafíos. Validamos hipótesis de negocio con métricas clave y prototipos rápidos.",
  },
  {
    number: "2",
    icon: Layers,
    title: "Estandarización y Escalabilidad",
    description:
      "Diseñamos e implementamos una arquitectura de datos escalable. Estandarizamos procesos para garantizar la calidad y consistencia de la información.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Productos de Datos y Optimización",
    description:
      "Desarrollamos productos de datos como modelos y dashboards. Iteramos y optimizamos continuamente para maximizar el impacto en tu negocio.",
  },
];

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodologia" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Enfoque: <span className="gradient-text">Lean Analytics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aplicamos un roadmap ágil para validar hipótesis de negocio con datos reales.
            Medimos, aprendemos y escalamos contigo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-primary to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-dark-tertiary border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Listo para transformar tus datos en ventaja competitiva?
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Comencemos a trabajar juntos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
