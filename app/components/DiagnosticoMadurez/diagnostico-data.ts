export interface Question {
  dimension: string;
  text: string;
  options: {
    marker: string;
    text: string;
    score: number;
  }[];
}

export interface Profile {
  key: string;
  label: string;
  title: string;
  recommendation: string;
  cta: string | null;
  emailPrompt: string;
}

export const questions: Question[] = [
  {
    dimension: "Infraestructura",
    text: "¿De dónde salen los números que presentas al directorio o a gerencia?",
    options: [
      { marker: "A", text: "De planillas Excel que alguien arma manualmente cada mes.", score: 1 },
      { marker: "B", text: "De un sistema (ERP, core de seguros), pero con procesamiento manual para llegar al reporte final.", score: 2 },
      { marker: "C", text: "De dashboards o reportes que se actualizan solos desde una base de datos centralizada.", score: 3 },
    ],
  },
  {
    dimension: "Gobernanza",
    text: "¿Te ha pasado que dos áreas reporten el mismo indicador con números distintos?",
    options: [
      { marker: "A", text: "Sí, pasa seguido y a veces cuesta días resolver cuál es el correcto.", score: 1 },
      { marker: "B", text: "Pasa ocasionalmente, pero tenemos claro quién tiene la versión oficial.", score: 2 },
      { marker: "C", text: "No, tenemos una fuente única que todos consultan.", score: 3 },
    ],
  },
  {
    dimension: "Procesos",
    text: "¿Cuánto tarda tu equipo en tener los números de gestión cerrados después del cierre de mes?",
    options: [
      { marker: "A", text: "Más de una semana.", score: 1 },
      { marker: "B", text: "Entre 3 y 7 días.", score: 2 },
      { marker: "C", text: "Menos de 3 días.", score: 3 },
    ],
  },
  {
    dimension: "Capacidad analítica",
    text: "Cuando necesitas entender por qué cambió un indicador, ¿cómo lo haces?",
    options: [
      { marker: "A", text: "Alguien revisa planillas y arma un informe ad-hoc.", score: 1 },
      { marker: "B", text: "Tenemos reportes estándar con tendencias y desgloses, pero el análisis lo hace una persona.", score: 2 },
      { marker: "C", text: "Podemos cruzar datos de distintas fuentes rápidamente y tenemos herramientas para explorar causas.", score: 3 },
    ],
  },
  {
    dimension: "Organización",
    text: "¿Quién se encarga de los datos y reportes en tu organización?",
    options: [
      { marker: "A", text: "No hay nadie dedicado — lo hace quien puede, cuando puede.", score: 1 },
      { marker: "B", text: "Hay una o dos personas que saben de datos, pero no es su rol formal.", score: 2 },
      { marker: "C", text: "Existe un equipo o rol dedicado a datos, analytics o business intelligence.", score: 3 },
    ],
  },
  {
    dimension: "Cultura",
    text: "Cuando tu equipo toma una decisión operativa importante, ¿qué rol juegan los datos?",
    options: [
      { marker: "A", text: "Las decisiones se basan principalmente en experiencia e intuición.", score: 1 },
      { marker: "B", text: "Se consultan datos cuando están disponibles, pero no siempre definen la decisión.", score: 2 },
      { marker: "C", text: "No se toma una decisión importante sin antes revisar los números.", score: 3 },
    ],
  },
];

export const profiles: Record<string, Profile> = {
  fundacional: {
    key: "fundacional",
    label: "FUNDACIONAL",
    title: "Operan con los datos que tienen, pero sin estructura.",
    recommendation: `
      <p><strong>La información vive en planillas, la cabeza de personas clave y sistemas que no se hablan entre sí.</strong> Cuando alguien necesita un número, lo pide y espera. Los reportes de gestión son un ejercicio manual mensual. No hay un responsable formal de datos.</p>
      <p><em>Todavía no necesitas contratar consultoría externa.</em> Lo que más te va a servir ahora es ordenar internamente: definir quién es responsable de los datos, documentar tus fuentes de información clave, y capacitar a una persona de tu equipo en herramientas básicas de BI.</p>
      <p><strong>Qué hacer primero:</strong> Designar un "dueño de datos" interno — puede ser alguien de control de gestión o TI. Armar un inventario de las planillas críticas. Evaluar una herramienta de BI básica conectada a tu sistema principal.</p>
      <p>Cuando ya tengas a alguien dedicado y quieras dar el salto de planillas a un data warehouse estructurado, ahí tiene sentido buscar ayuda externa.</p>
    `,
    cta: null,
    emailPrompt: "¿Quieres recibir una guía con los 3 pasos para ordenar tus datos internamente?",
  },
  emergente: {
    key: "emergente",
    label: "EMERGENTE",
    title: "Tienen datos y algo de estructura, pero con cuellos de botella claros.",
    recommendation: `
      <p><strong>Hay sistemas que funcionan — probablemente un ERP o core decente, y algunas personas que saben sacarle jugo a los datos.</strong> Pero la cadena dato → reporte → decisión tiene fricciones: procesos manuales, datos duplicados entre áreas, dependencia de personas clave. El cierre de mes duele.</p>
      <p><em>Hay quick wins claros.</em> Tu próximo paso es construir una capa de datos centralizada — un data warehouse o datamart — que conecte tus fuentes principales y elimine la reconciliación manual. Esto es ingeniería de datos: plomería que hace que todo lo de arriba funcione.</p>
      <p><strong>Qué construir primero:</strong> Un data warehouse que consolide tus 2-3 fuentes de datos más críticas. Dashboards operativos básicos sobre esa base. Automatización del cierre mensual de indicadores.</p>
      <p>Este es el tipo de proyecto donde alguien que ya lo hizo en tu industria puede hacer la diferencia entre 3 meses y 12.</p>
    `,
    cta: "Conversemos sobre tu caso",
    emailPrompt: "¿Quieres recibir este diagnóstico por email con recomendaciones detalladas para tu industria?",
  },
  estructurado: {
    key: "estructurado",
    label: "ESTRUCTURADO",
    title: "La base está. Ahora el desafío es profundizar.",
    recommendation: `
      <p><strong>Tienen BI funcionando, datos más o menos centralizados, gente que los usa.</strong> El cierre es razonable. Pero hay áreas que todavía operan en silos, los datos se usan para reportar más que para predecir, y probablemente hay dashboards que nadie mira.</p>
      <p><em>Están listos para proyectos de mayor impacto.</em> Las oportunidades más claras: automatizar procesos que hoy dependen de personas (pricing, detección de anomalías, alertas operativas), construir modelos predictivos sobre los datos que ya tienen, y unificar la visión analítica entre unidades de negocio.</p>
      <p><strong>Qué priorizar:</strong> Identificar los 2-3 procesos donde un modelo predictivo o una automatización cambiaría el juego. Profesionalizar la capa de datos existente — governance, documentación, testing. Evaluar si tu equipo necesita refuerzo en data science o ingeniería.</p>
      <p>La consultoría externa en esta etapa suma como aceleradora — no para hacer lo básico, sino para aportar especialización que tu equipo interno no tiene por qué dominar.</p>
    `,
    cta: "Conversemos sobre tu caso",
    emailPrompt: "¿Quieres recibir este diagnóstico por email con recomendaciones detalladas para tu industria?",
  },
  avanzado: {
    key: "avanzado",
    label: "AVANZADO",
    title: "Ya operan con datos. El desafío es optimizar.",
    recommendation: `
      <p><strong>Los datos son parte del día a día. Las decisiones se toman con números. Hay equipo dedicado, herramientas establecidas, gobernanza razonable.</strong> Los problemas ya no son de fundación — son de escala, sofisticación y eficiencia.</p>
      <p><em>No necesitas que alguien construya tu base — necesitas especialización puntual.</em> Los proyectos que generan valor en tu nivel: IA aplicada a problemas específicos del negocio (geo-riesgo, pricing dinámico, optimización de reservas), modernización de stacks legacy, coaching para tu equipo de datos.</p>
      <p><strong>Qué evaluar:</strong> ¿Tu infraestructura escala al ritmo que necesitas? ¿Tus modelos están en producción o siguen en notebooks? ¿Hay procesos que podrías automatizar con IA que hoy dependen de criterio humano repetitivo?</p>
      <p>Un partner externo en esta etapa es un especialista, no un generalista. Busca expertise específica en tu industria y en los problemas concretos que quieres resolver.</p>
    `,
    cta: "Conversemos sobre proyectos de especialización",
    emailPrompt: "¿Quieres recibir este diagnóstico por email con recomendaciones detalladas para tu industria?",
  },
};

export function calculateScore(answers: number[]): number {
  return answers.reduce((sum, answerIndex, qIndex) => {
    return sum + questions[qIndex].options[answerIndex].score;
  }, 0);
}

export function getProfile(score: number): Profile {
  if (score <= 8) return profiles.fundacional;
  if (score <= 11) return profiles.emergente;
  if (score <= 14) return profiles.estructurado;
  return profiles.avanzado;
}

export function getMarkerPosition(score: number): number {
  const min = 6, max = 18;
  const pct = ((score - min) / (max - min)) * 100;
  return Math.max(4, Math.min(96, pct));
}

export function getZoneIndex(score: number): number {
  if (score <= 8) return 0;
  if (score <= 11) return 1;
  if (score <= 14) return 2;
  return 3;
}
