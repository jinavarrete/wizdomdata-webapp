import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MarkSprite from "./components/MarkSprite";
import MotionProvider from "./components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wizdomdata.vercel.app"),
  alternates: { canonical: "/" },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"], title: "WizdomData · Datos, analítica e IA", description: "Tu partner para convertir datos en decisiones." },
  title: "WizdomData — La claridad cambia todo",
  description:
    "Tu partner en datos e inteligencia artificial. Conectamos estrategia, ingeniería y analítica para que tu negocio avance con mejores decisiones.",
  keywords: [
    "data analytics",
    "business intelligence",
    "data engineering",
    "consultora datos",
    "chile",
    "wizdomdata",
    "dbt",
    "bigquery",
    "power bi",
  ],
  authors: [{ name: "WizdomData" }],
  creator: "WizdomData",
  publisher: "WizdomData",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://wizdomdata.vercel.app",
    title: "WizdomData — La claridad cambia todo",
    description:
      "Consultora de data analytics con base en Chile. Del dato a la decisión.",
    siteName: "WizdomData",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.svg" />
      </head>
      <body>
        <MarkSprite />
        <main>
          <MotionProvider>{children}</MotionProvider>
        </main>
      </body>
    </html>
  );
}
