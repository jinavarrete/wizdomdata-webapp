"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Plus, Minus, Menu, X } from "lucide-react";
import DiagnosticModal from "../components/DiagnosticModal";
import MethodJourney from "./MethodJourney";

const services = [
  {
    name: "Estrategia & analítica",
    statement: "La pregunta correcta, antes que la herramienta.",
    description: "Alineamos tus datos con las decisiones que mueven el negocio. Definimos qué medir, dónde enfocar el esfuerzo y cómo convertir la información en una ventaja para tu equipo.",
    deliverables: ["Estrategia y hoja de ruta de datos", "Indicadores de negocio y gobierno de datos", "Business Intelligence y dashboards"],
  },
  {
    name: "Ingeniería de datos",
    statement: "Una base confiable para todo lo que viene.",
    description: "Conectamos tus sistemas y organizamos la información para que llegue completa, consistente y a tiempo. Construimos una infraestructura que tu equipo puede entender, mantener y hacer crecer.",
    deliverables: ["Integración de sistemas y automatización", "Data warehouses y modelos de datos", "Calidad, trazabilidad y monitoreo"],
  },
  {
    name: "Inteligencia artificial",
    statement: "La IA tiene sentido cuando resuelve algo.",
    description: "Llevamos modelos predictivos y asistentes de IA a problemas concretos de tu operación. Evaluamos su desempeño, los conectamos a tus datos y acompañamos su uso en el día a día.",
    deliverables: ["Predicción de demanda y comportamiento", "Asistentes conectados a tu información", "Automatización y modelos en producción"],
  },
];

function Brand({ large = false }: { large?: boolean }) {
  return <span className={`v2-brand${large ? " v2-brand-large" : ""}`}><svg viewBox="0 0 292 290" aria-hidden="true"><use href="#mark" /></svg><span>Wizdom<span>Data</span></span></span>;
}

export default function NewDirection() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const links = [{ href: "#servicios", label: "Qué hacemos" }, { href: "#metodo", label: "Cómo trabajamos" }, { href: "#personas", label: "Quiénes somos" }];

  return <div className="v2-home">
    <header className="v2-header">
      <div className="v2-shell v2-header-inner">
        <a href="#v2-inicio" aria-label="WizdomData, inicio"><Brand /></a>
        <nav aria-label="Navegación principal" className="v2-nav">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="v2-header-contact" href="#hablemos">Hablemos <ArrowUpRight size={17} /></a>
        <button className="v2-menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="v2-mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {menuOpen && <nav id="v2-mobile-menu" className="v2-mobile-menu" aria-label="Navegación móvil">{[...links, { href: "#hablemos", label: "Hablemos" }].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={18} /></a>)}</nav>}
    </header>

    <section id="v2-inicio" className="v2-hero v2-shell">
      <div className="v2-hero-overline"><span className="v2-orange-line" />Consultoría en datos e inteligencia artificial</div>
      <div className="v2-hero-main">
        <h1>La claridad<br />cambia todo<span>.</span></h1>
        <div className="v2-hero-symbol" aria-hidden="true"><svg viewBox="0 0 292 290"><use href="#mark" /></svg></div>
      </div>
      <div className="v2-hero-bottom">
        <p>Conectamos estrategia, datos e inteligencia artificial para que tu negocio avance con <strong>mejores decisiones.</strong></p>
        <div className="v2-hero-conversion"><a className="v2-button" href="#hablemos">Hablemos de tu negocio <span><ArrowUpRight size={22} /></span></a><span>Un desafío concreto. Una conversación directa.</span></div>
      </div>
      <div className="v2-hero-baseline"><span>Una mirada de negocio. Toda la capacidad técnica.</span><a href="#servicios">Conoce WizdomData <ArrowRight size={16} /></a></div>
    </section>

    <section className="v2-client-strip" aria-label="Proyectos en curso">
      <div className="v2-shell v2-client-strip-inner">
        <div><p>Proyectos en curso</p><span>Ya estamos trabajando junto a</span></div>
        <div className="v2-client-logos">
          <Image src="/images/clients/transportes-schiappacasse.png" alt="Transportes Schiappacasse" width={200} height={200} sizes="90px" className="v2-client-transport" />
          <Image src="/images/clients/contempora.png" alt="Contempora Seguros Generales" width={541} height={200} sizes="230px" className="v2-client-contempora" />
        </div>
      </div>
    </section>

    <section id="servicios" className="v2-services">
      <div className="v2-shell v2-services-layout">
        <div className="v2-services-intro"><p className="v2-kicker">Qué hacemos</p><h2>Todo conectado.<br />Un mismo<br /><span>partner.</span></h2><p>La estrategia orienta. La ingeniería hace posible. La inteligencia multiplica el alcance.</p><p>Integramos esas capacidades alrededor de lo que tu negocio necesita.</p><a href="#hablemos" className="v2-inline-link">Encontremos tu punto de partida <ArrowUpRight size={18} /></a></div>
        <div className="v2-service-list">{services.map((service, i) => <article key={service.name} className={`v2-service${activeService === i ? " is-open" : ""}`}><h3><button aria-expanded={activeService === i} aria-controls={`v2-service-${i}`} id={`v2-service-trigger-${i}`} onClick={() => setActiveService(activeService === i ? null : i)}><span className="v2-service-number">0{i + 1}</span><span>{service.name}</span>{activeService === i ? <Minus size={21} /> : <Plus size={21} />}</button></h3><div id={`v2-service-${i}`} role="region" aria-labelledby={`v2-service-trigger-${i}`} hidden={activeService !== i} className="v2-service-content"><h4>{service.statement}</h4><p>{service.description}</p><ul>{service.deliverables.map(deliverable => <li key={deliverable}><ArrowRight size={14} />{deliverable}</li>)}</ul></div></article>)}</div>
      </div>
      <div className="v2-shell v2-ecosystem"><span>Nos integramos a tu ecosistema</span><div><span>Microsoft</span><span>aws</span><span>Google Cloud</span><span>Databricks</span><span>dbt</span></div></div>
    </section>

    <section id="metodo" className="v2-method v2-shell">
      <div className="v2-section-heading"><p className="v2-kicker">Cómo trabajamos</p><h2>Primero tu negocio.<br /><span>Después, la tecnología.</span></h2></div>
      <div className="v2-method-intro"><p>Un buen proyecto de datos empieza entendiendo qué quieres cambiar. Trabajamos contigo desde esa primera conversación hasta que la solución forma parte de tu operación.</p></div>
      <MethodJourney />
      <div className="v2-principle"><svg viewBox="0 0 292 290" aria-hidden="true"><use href="#mark" /></svg><p>El valor de un partner se nota en lo que tu equipo<br className="v2-desktop-break" /> es capaz de hacer después.</p></div>
    </section>

    <section id="personas" className="v2-team-editorial">
      <div className="v2-shell">
        <div className="v2-team-heading">
          <div><p className="v2-kicker">Las personas detrás de WizdomData</p><h2>Conoces al equipo.<br /><span>Trabajas con el equipo.</span></h2></div>
          <p>Somos Juan Ignacio y Stefano. Unimos ingeniería, analítica y una manera cercana de trabajar: nos involucramos en tu negocio y construimos contigo.</p>
        </div>
        <div className="v2-team-feature">
          <figure><Image src="/images/team/founders-studio.png" alt="Los dos fundadores de WizdomData en su espacio de trabajo" width={1536} height={1024} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 70vw, 850px" /><figcaption>WizdomData / Equipo fundador</figcaption></figure>
          <aside className="v2-team-note"><span className="v2-team-note-label">Nuestra forma de estar</span><div><svg viewBox="0 0 292 290" aria-hidden="true"><use href="#mark" /></svg><h3>De la primera<br />pregunta al<br />último detalle.</h3><p>Quienes entienden tu desafío son quienes construyen la solución. Una relación directa, con responsabilidad sobre lo que hacemos.</p></div><a href="#hablemos">Conversemos <ArrowUpRight size={20} /></a></aside>
        </div>
        <div className="v2-team-profiles" aria-label="Experiencia del equipo fundador">
          <article><h3>Juan Ignacio Navarrete<span>Co-fundador</span></h3><p>Data Engineering<br />& Analytics</p><div>Ingeniero Civil Industrial · UTFSM<strong>Executive MBA en Inteligencia Artificial y Analytics Aplicadas a Negocios · Fundação Getulio Vargas (FGV)</strong></div></article>
          <article><h3>Stefano Schiappacasse<span>Co-fundador</span></h3><p>Data Science</p><div>Ingeniero Civil Industrial · UTFSM<strong>Magíster en Data Science · U. de Chile</strong></div></article>
        </div>
      </div>
    </section>

    <section id="hablemos" className="v2-contact v2-shell">
      <p className="v2-kicker">El siguiente paso</p><div className="v2-contact-main"><h2>Una buena decisión<br />empieza con una<br /><span>conversación.</span></h2><a href="mailto:hola@wizdomdata.cl" className="v2-contact-arrow" aria-label="Escribir a WizdomData"><ArrowUpRight strokeWidth={1} /></a></div><div className="v2-contact-bottom"><div><p>Cuéntanos qué quieres resolver.<br />Veamos juntos cómo avanzar.</p><a href="mailto:hola@wizdomdata.cl">hola@wizdomdata.cl <ArrowUpRight size={20} /></a></div><div className="v2-diagnostic-invite"><p>¿No sabes por dónde empezar?</p><button onClick={() => setDiagnosticOpen(true)}>Explora tu madurez analítica <ArrowRight size={17} /></button><span>6 preguntas · 2 minutos · Sin costo</span></div></div>
    </section>

    <footer className="v2-footer"><div className="v2-shell"><div className="v2-footer-top"><a href="#v2-inicio" aria-label="WizdomData, volver al inicio"><Brand large /></a><p>Datos con dirección.<br />Negocios con futuro.</p></div><div className="v2-footer-bottom"><span>© {new Date().getFullYear()} WizdomData SpA</span><span>Desde Chile. Sin fronteras.</span><a href="https://linkedin.com/company/wizdomdata" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div></div></footer>
    {diagnosticOpen && <DiagnosticModal onClose={() => setDiagnosticOpen(false)} />}
  </div>;
}
