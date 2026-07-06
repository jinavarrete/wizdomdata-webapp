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

export type AnimPhase = "idle" | "spawning" | "converging" | "revealed" | "resetting";

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
let bitIdCounter = 0;

// Approximate glyph advance of JetBrains Mono (~0.6em) plus the .bit letter-spacing.
const MONO_CHAR_WIDTH = 0.62;

function generateBit(stageW: number, stageH: number): BitData {
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

  const driftX = (Math.random() - 0.5) * 30;
  const driftY = (Math.random() - 0.5) * 30;

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
  const spawnIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);
  const phaseRef = useRef<AnimPhase>("idle");
  const bitsRef = useRef<BitData[]>([]);

  const addTimer = useCallback((fn: () => void, delay: number) => {
    const t = setTimeout(fn, delay);
    timers.current.push(t);
    return t;
  }, []);

  const clearAllTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (spawnIntervalRef.current) {
      clearTimeout(spawnIntervalRef.current);
      spawnIntervalRef.current = null;
    }
  }, []);

  const setPhase = useCallback((p: AnimPhase) => {
    phaseRef.current = p;
    setState(s => ({ ...s, phase: p }));
  }, []);

  const spawnBit = useCallback(() => {
    const stageW = stageRef.current?.clientWidth || 560;
    const stageH = stageRef.current?.clientHeight || 560;
    setState(s => {
      const next = [...s.bits];
      if (next.length >= MAX_BITS) next.shift();
      const bit = generateBit(stageW, stageH);
      bitsRef.current = [...next, bit];
      return { ...s, bits: bitsRef.current };
    });
  }, [stageRef]);

  const startSpawning = useCallback(() => {
    setPhase("spawning");
    setState(s => ({
      ...s,
      romboVisible: false,
      romboPulsing: false,
      decisionVisible: false,
      footBright: false,
    }));

    for (let i = 0; i < 20; i++) {
      addTimer(spawnBit, i * 120);
    }

    const tick = () => {
      if (phaseRef.current !== "spawning") return;
      spawnBit();
      spawnIntervalRef.current = setTimeout(tick, 240 + Math.random() * 220);
    };
    addTimer(tick, 2400);
  }, [setPhase, spawnBit, addTimer]);

  const startConverging = useCallback(() => {
    setPhase("converging");
    if (spawnIntervalRef.current) {
      clearTimeout(spawnIntervalRef.current);
      spawnIntervalRef.current = null;
    }

    setState(s => ({
      ...s,
      bits: s.bits.map(b => ({ ...b, converging: true })),
    }));

    addTimer(() => {
      setState(s => ({ ...s, bits: [], romboVisible: true, romboPulsing: true }));
      bitsRef.current = [];
    }, 1500);

    addTimer(() => {
      setState(s => ({
        ...s,
        decisionVisible: true,
        footBright: true,
        romboPulsing: false,
      }));
      setPhase("revealed");
    }, 1500);

    addTimer(() => startResetting(), 5500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPhase, addTimer]);

  const startResetting = useCallback(() => {
    setPhase("resetting");
    setState(s => ({ ...s, decisionVisible: false, footBright: false }));

    addTimer(() => {
      setState(s => ({ ...s, romboVisible: false, romboPulsing: false }));
    }, 600);

    addTimer(() => {
      startSpawning();
      addTimer(startConverging, 6000);
    }, 1800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPhase, addTimer, startSpawning]);

  const startCycle = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    startSpawning();
    addTimer(startConverging, 5500);
  }, [startSpawning, startConverging, addTimer]);

  const startReducedMotion = useCallback(() => {
    for (let i = 0; i < 10; i++) {
      addTimer(spawnBit, i * 80);
    }
    addTimer(() => {
      setState(s => ({
        ...s,
        romboVisible: true,
        decisionVisible: true,
        footBright: true,
      }));
      setPhase("revealed");
    }, 800);
  }, [spawnBit, addTimer, setPhase]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      startReducedMotion();
      return () => clearAllTimers();
    }

    const t = setTimeout(startCycle, 800);

    return () => {
      clearTimeout(t);
      clearAllTimers();
    };
  }, [stageRef, startCycle, startReducedMotion, clearAllTimers]);

  return state;
}
