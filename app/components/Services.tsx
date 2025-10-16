"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Search } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Construimos pipelines de datos robustos, integramos fuentes diversas y automatizamos flujos en la nube para una base de datos sólida y confiable.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Desarrollamos dashboards interactivos en Power BI, Tableau y QuickSight que convierten datos complejos en insights claros y accionables.",
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Brain,
    title: "Data Science",
    description:
      "Aplicamos modelos predictivos, segmentación de clientes y detección de anomalías para descubrir oportunidades y optimizar tus operaciones.",
    gradient: "from-purple-500 to-primary",
  },
  {
    icon: Search,
    title: "Consultoría Estratégica",
    description:
      "Realizamos auditorías de madurez de datos y diseñamos roadmaps analíticos para alinear tu estrategia de datos con tus objetivos de negocio.",
    gradient: "from-primary to-teal-400",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Creamos la infraestructura de datos que impulsa tu crecimiento.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-tertiary border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contacto" className="btn-primary inline-block">
            Descubre cómo podemos ayudarte
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
