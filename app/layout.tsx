import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WizdomData | Transformamos Datos en Decisiones Inteligentes",
  description:
    "Consultora especializada en Data Analytics, Business Intelligence y Data Engineering. Aceleramos la toma de decisiones mediante soluciones de datos inteligentes y escalables.",
  keywords: [
    "data analytics",
    "business intelligence",
    "data engineering",
    "power bi",
    "tableau",
    "aws",
    "data science",
    "consultoria datos",
    "chile",
    "wizdomdata",
  ],
  authors: [{ name: "WizdomData" }],
  creator: "WizdomData",
  publisher: "WizdomData",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://wizdomdata.com",
    title: "WizdomData | Transformamos Datos en Decisiones Inteligentes",
    description:
      "Consultora especializada en Data Analytics, Business Intelligence y Data Engineering.",
    siteName: "WizdomData",
  },
  twitter: {
    card: "summary_large_image",
    title: "WizdomData | Transformamos Datos en Decisiones Inteligentes",
    description:
      "Consultora especializada en Data Analytics, Business Intelligence y Data Engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
