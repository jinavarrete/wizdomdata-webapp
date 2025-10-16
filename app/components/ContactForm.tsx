"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Formspree endpoint or use mailto as fallback
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-dark-secondary to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conversemos sobre <span className="gradient-text">tu Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos listos para ayudarte a transformar tus datos en ventaja competitiva.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">¿Por qué elegirnos?</h3>
                <ul className="space-y-4">
                  {[
                    "Experiencia comprobada en proyectos de datos",
                    "Metodología ágil y orientada a resultados",
                    "Equipo certificado en las principales plataformas",
                    "Soporte continuo y optimización permanente",
                    "Transparencia en costos y plazos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-tertiary border border-gray-800 rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 text-white">Información de Contacto</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary" />
                    <a
                      href="mailto:contacto@wizdomdata.com"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      contacto@wizdomdata.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-tertiary border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-tertiary border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-tertiary border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={20}
                      className="absolute left-4 top-4 text-gray-500"
                    />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-dark-tertiary border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send size={20} />
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                    Hubo un error. Por favor, intenta nuevamente o escríbenos directamente.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
