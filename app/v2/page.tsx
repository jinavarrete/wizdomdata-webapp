import type { Metadata } from "next";
import NewDirection from "./NewDirection";
import "./v2.css";

export const metadata: Metadata = {
  title: "WizdomData — La claridad cambia todo",
  description: "Tu partner en datos e inteligencia artificial. Conectamos estrategia, ingeniería y analítica para que tu negocio avance con mejores decisiones.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NewDirection />;
}
