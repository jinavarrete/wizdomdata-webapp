"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Orientados a Resultados",
    description: "Medimos el éxito por el impacto real en tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Aplicamos las últimas tecnologías y mejores prácticas.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos como una extensión de tu equipo.",
  },
  {
    icon: Heart,
    title: "Pasión por los Datos",
    description: "Amamos transformar datos en insights accionables.",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipo" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="gradient-text">Equipo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo multidisciplinario de expertos en datos, comprometidos con tu éxito.
          </p>
        </motion.div>

        {/* Team Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-dark-tertiary border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Expertos en Data Analytics y Cloud
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nuestro equipo cuenta con más de 10 años de experiencia combinada en proyectos
                  de análisis de datos, ingeniería de datos y arquitectura cloud en empresas de
                  diversos sectores.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Trabajamos con metodologías ágiles, adaptándonos a las necesidades específicas
                  de cada cliente. Nos enfocamos en generar valor desde el día uno, con soluciones
                  pragmáticas y escalables.
                </p>
              </div>
            </div>

            {/* Certifications/Skills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "AWS Certified",
                "Azure Expert",
                "Google Cloud",
                "Tableau Desktop",
                "Power BI Expert",
                "Python Expert",
                "SQL Master",
                "dbt Specialist",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/30 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-dark-tertiary border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Quieres conocer más sobre cómo trabajamos?
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Agendemos una reunión
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
