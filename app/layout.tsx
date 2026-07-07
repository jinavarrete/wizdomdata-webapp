import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  title: "WizdomData · Partner analítico para empresas modernas",
  description:
    "Consultora de data analytics con base en Chile. Diseñamos, construimos y operamos la capa analítica que convierte datos en decisiones.",
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
    url: "https://wizdomdata.cl",
    title: "WizdomData · Partner analítico para empresas modernas",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MarkSprite />
        <Navbar />
        <main>
          <MotionProvider>{children}</MotionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
