import { ArrowUpRight, Database, Workflow, ScanLine, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Tu partner en datos, analítica e IA</p>
          <h1>El dato existe.<br />La <span>decisión</span>,<br />no siempre.</h1>
          <p className="hero-description">Conectamos negocio y tecnología para convertir tus datos en decisiones. Desde la primera pregunta hasta la solución en producción.</p>
          <div className="hero-actions"><a href="#contacto" className="btn btn-primary">Hablemos de tu desafío <ArrowUpRight size={17} /></a><a href="#postura" className="text-link">Así trabajamos <span>↗</span></a></div>
          <p className="hero-note">Criterio de negocio. Rigor técnico. Trabajo en equipo.</p>
        </div>
        <div className="decision-workspace" aria-label="Ejemplo ilustrativo: de fuentes de datos a una decisión de retención">
          <div className="workspace-top"><span>DE LOS DATOS A LA ACCIÓN</span><span className="workspace-example">Ejemplo ilustrativo</span></div>
          <div className="source-row"><span><Database size={14} /> CRM</span><span><Database size={14} /> Ventas</span><span><Database size={14} /> Producto</span></div>
          <div className="pipeline-connector"><span /></div>
          <div className="model-layer"><div className="layer-icon"><Workflow size={22} /></div><div><strong>Una base que conecta todo.</strong><p>Integración · calidad · contexto de negocio</p></div><Check size={16} /></div>
          <div className="pipeline-connector"><span /></div>
          <div className="insight-panel"><div className="insight-heading"><span><ScanLine size={15} /> ANALÍTICA + IA</span><span>01 / RETENCIÓN</span></div><h3>Detectar la señal.<br />Actuar a tiempo.</h3><div className="signal-chart" aria-hidden="true">{[24,33,29,44,39,53,48,65,59,76,69,88,83,96].map((h,i)=><span key={i} style={{height: `${h}%`}} />)}</div><div className="chart-labels"><span>Señales de comportamiento</span><span>Riesgo de abandono ↗</span></div><div className="decision-output"><span className="decision-diamond">◆</span><div><span>DECISIÓN</span><p>Priorizar clientes en riesgo y activar una acción de retención.</p></div><ArrowUpRight size={21} /></div></div>
          <div className="workspace-bottom"><span>Datos confiables</span><span>→</span><span>Decisiones accionables</span></div>
        </div>
      </div>
      <div className="discipline-strip"><span>DEL CRITERIO A LA EJECUCIÓN</span><p>Data Engineering <i>◆</i> Business Intelligence <i>◆</i> Inteligencia Artificial</p><span>CHILE · REMOTO</span></div>
    </section>
  );
}
