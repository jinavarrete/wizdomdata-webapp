"use client";

import { Linkedin, Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-tertiary border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Wizdom</span>
              <span className="text-primary">Data</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transformamos datos en decisiones inteligentes. Aceleramos la toma de decisiones mediante soluciones de datos escalables y confiables.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contacto@wizdomdata.com"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-gray-400 hover:text-primary transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#casos" className="text-gray-400 hover:text-primary transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-gray-400 hover:text-primary transition-colors">
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>contacto@wizdomdata.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} WizdomData. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
