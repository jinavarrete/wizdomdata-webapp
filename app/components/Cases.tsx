"use client";

import { motion } from "framer-motion";
import { Database, FileBarChart, Cloud, TrendingUp, Workflow, ShieldCheck } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    icon: Database,
    title: "Implementación de Data Warehouse en AWS",
    description:
      "Migración completa de infraestructura on-premise a AWS. Redujimos costos operativos en 40% y mejoramos tiempos de respuesta en 10x.",
    tags: ["AWS", "Redshift", "S3", "Glue"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileBarChart,
    title: "Automatización de Reportes Financieros",
    description:
      "Desarrollo de pipeline ETL automatizado para reportes regulatorios. Eliminamos 20 horas semanales de trabajo manual.",
    tags: ["Power BI", "Python", "SQL Server"],
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Cloud,
    title: "Migración BI a Power BI Service",
    description:
      "Transición de 50+ reportes legacy a Power BI con arquitectura moderna. Mejoramos la experiencia de usuario en 95%.",
    tags: ["Power BI", "Azure", "DAX"],
    gradient: "from-purple-500 to-primary",
  },
  {
    icon: TrendingUp,
    title: "Modelo Predictivo de Churn",
    description:
      "Implementación de modelo ML para predecir deserción de clientes. Aumentamos la retención en 25% en 6 meses.",
    tags: ["Python", "Scikit-learn", "AWS SageMaker"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Workflow,
    title: "Plataforma de Self-Service Analytics",
    description:
      "Creación de plataforma para democratizar el acceso a datos. 200+ usuarios accediendo a insights en tiempo real.",
    tags: ["Tableau", "Snowflake", "dbt"],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Sistema de Detección de Fraude",
    description:
      "Desarrollo de sistema de monitoreo en tiempo real. Detectamos y prevenimos fraudes con 98% de precisión.",
    tags: ["Python", "Apache Kafka", "MongoDB"],
    gradient: "from-red-500 to-pink-500",
  },
];

const Cases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proyectos reales con resultados medibles. Así transformamos datos en impacto.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-dark-tertiary/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Quieres que tu proyecto sea el próximo caso de éxito?
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
