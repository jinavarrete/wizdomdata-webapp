"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark-tertiary grid-pattern"></div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-8"
          >
            <Zap size={18} className="text-primary" />
            <span className="text-primary font-medium">Soluciones de Datos Inteligentes</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transformamos datos en{" "}
            <span className="gradient-text">decisiones inteligentes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Aceleramos la toma de decisiones mediante soluciones de datos inteligentes y escalables.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#contacto" className="btn-primary inline-flex items-center space-x-2">
              <span>Agenda una reunión</span>
              <ArrowRight size={20} />
            </a>
            <a href="#servicios" className="btn-secondary">
              Conoce nuestros servicios
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="flex flex-col items-center space-y-2">
              <Database className="text-primary" size={40} />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-400">Proyectos Completados</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingUp className="text-primary" size={40} />
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Satisfacción del Cliente</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="text-primary" size={40} />
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Soporte Técnico</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
