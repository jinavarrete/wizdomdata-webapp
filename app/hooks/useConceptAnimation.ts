import { useState, useEffect, useRef, useCallback } from "react";

export interface BitData {
  id: number;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  opacity: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
  converging: boolean;
  fading: boolean;
}

export type AnimPhase = "idle" | "spawning" | "converging" | "revealed";

interface ConceptAnimationState {
  bits: BitData[];
  phase: AnimPhase;
  romboVisible: boolean;
  romboPulsing: boolean;
  decisionVisible: boolean;
  footBright: boolean;
}

const DATA_POOL = [
  "TXN-8847291", "$1.247.500", "2026-04-12", "CLI-00234", "login_at",
  "SKU-44821", "NPS:7.2", "churn_risk:0.34", "pred_revenue:$4.2M",
  "cart_abandoned", "policy_renewed", "lead_time:14d", "stock:23",
  "RUT 78.451.293", "Segmento B", "page_view", "click_event",
  "$847.200", "TXN-8847292", "session_end", "purchase_complete",
  "sucursal:Las Condes", "warehouse_3", "pickup_44", "ltv:$890",
  "arpu:$45", "risk_score:medium", "forecast:Q3+12%", "CLI-00235",
  "NPS:8.2", "Cohort:2024-Q1", "app_open", "PAY-441", "$345.890",
  "SKU-44822", "TXN-8847293", "$2.100.000", "event_id:9982",
  "churn:0.21", "CLI-00236", "open_rate:0.34", "segment_A",
  "revenue:$890K", "SKU-44823", "order_44291", "fcst_demand:340",
  "returns:12", "inventory:847", "CLI-00237", "$1.890.220",
  "TXN-8847294", "lead_time:21d", "NPS:6.8", "cohort:2025-Q2",
  "2026-04-13", "churn_risk:0.18", "visit_count:7", "order_44292",
];

const MAX_BITS = 28;
const SPAWN_COUNT = 20;

/* Entrance sequence timings (ms). The full dispersión → foco → decisión run
   must land inside 1.5–2.5s and play exactly once — no reset, no loop. */
const START_DELAY = 250;      // let the headline start its own entrance first
const SPAWN_STAGGER = 35;     // 20 bits over ~700ms of dispersión
const CONVERGE_AT = 950;      // foco begins while the last bits are still settling
const ROMBO_AT = 750;         // after converge: bits absorbed, rombo resolves
const DECISION_AT = 1000;     // after converge: decisión legible

let bitIdCounter = 0;

// Approximate glyph advance of JetBrains Mono (~0.6em) plus the .bit letter-spacing.
const MONO_CHAR_WIDTH = 0.62;

function generateBit(stageW: number, stageH: number, noDrift = false): BitData {
  const text = DATA_POOL[Math.floor(Math.random() * DATA_POOL.length)];

  const sizeVariant = Math.random();
  let fontSize: number;
  let opacity: number;
  if (sizeVariant < 0.25) {
    fontSize = 10; opacity = 0.55;
  } else if (sizeVariant < 0.80) {
    fontSize = 12; opacity = 0.7;
  } else {
    fontSize = 14; opacity = 0.9;
  }

  const driftX = noDrift ? 0 : (Math.random() - 0.5) * 30;
  const driftY = noDrift ? 0 : (Math.random() - 0.5) * 30;

  // Bits are centered on x/y (translate(-50%,-50%)) and the stage clips overflow,
  // so keep each bit's half-size plus its drift inside the stage, in % of the stage box.
  const halfW = (text.length * fontSize * MONO_CHAR_WIDTH) / 2;
  const halfH = fontSize * 0.75;
  const marginX = Math.min(30, ((halfW + Math.abs(driftX)) / stageW) * 100 + 1);
  const marginY = Math.min(20, ((halfH + Math.abs(driftY)) / stageH) * 100 + 1);

  const angle = Math.random() * Math.PI * 2;
  const radiusPct = 22 + Math.random() * 28;
  const x = Math.max(marginX, Math.min(100 - marginX, 50 + Math.cos(angle) * radiusPct * 1.5));
  const y = Math.max(marginY, Math.min(100 - marginY, 50 + Math.sin(angle) * radiusPct));

  return {
    id: ++bitIdCounter,
    text,
    x, y, fontSize, opacity,
    driftX,
    driftY,
    driftDuration: 8 + Math.random() * 6,
    converging: false,
    fading: false,
  };
}

export function useConceptAnimation(stageRef: React.RefObject<HTMLElement | null>) {
  const [state, setState] = useState<ConceptAnimationState>({
    bits: [],
    phase: "idle",
    romboVisible: false,
    romboPulsing: false,
    decisionVisible: false,
    footBright: false,
  });

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startedRef = useRef(false);
  const bitsRef = useRef<BitData[]>([]);

  const addTimer = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timers.current.push(t);
    return t;
  }, []);

  const clearAllTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const setPhase = useCallback((p: AnimPhase) => {
    setState(s => ({ ...s, phase: p }));
  }, []);

  const spawnBit = useCallback((noDrift = false) => {
    const stageW = stageRef.current?.clientWidth || 560;
    const stageH = stageRef.current?.clientHeight || 560;
    setState(s => {
      const next = [...s.bits];
      if (next.length >= MAX_BITS) next.shift();
      const bit = generateBit(stageW, stageH, noDrift);
      bitsRef.current = [...next, bit];
      return { ...s, bits: bitsRef.current };
    });
  }, [stageRef]);

  const startConverging = useCallback(() => {
    setPhase("converging");

    setState(s => ({
      ...s,
      bits: s.bits.map(b => ({ ...b, converging: true })),
    }));

    addTimer(() => {
      setState(s => ({ ...s, bits: [], romboVisible: true, romboPulsing: true }));
      bitsRef.current = [];
    }, ROMBO_AT);

    addTimer(() => {
      setState(s => ({
        ...s,
        decisionVisible: true,
        footBright: true,
        romboPulsing: false,
      }));
      setPhase("revealed");
    }, DECISION_AT);
  }, [setPhase, addTimer]);

  const startSequence = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setPhase("spawning");

    for (let i = 0; i < SPAWN_COUNT; i++) {
      addTimer(() => spawnBit(), i * SPAWN_STAGGER);
    }

    addTimer(startConverging, CONVERGE_AT);
  }, [setPhase, spawnBit, startConverging, addTimer]);

  const startReducedMotion = useCallback(() => {
    // Static composition: scattered bits (no drift) + resolved decisión, no sequence.
    for (let i = 0; i < 10; i++) spawnBit(true);
    setState(s => ({
      ...s,
      romboVisible: true,
      decisionVisible: true,
      footBright: true,
      phase: "revealed",
    }));
  }, [spawnBit]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      startReducedMotion();
      return () => clearAllTimers();
    }

    const t = setTimeout(startSequence, START_DELAY);

    return () => {
      clearTimeout(t);
      clearAllTimers();
    };
  }, [stageRef, startSequence, startReducedMotion, clearAllTimers]);

  return state;
}
