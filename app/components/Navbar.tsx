"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "impacto",         href: "#impacto" },
  { label: "cómo trabajamos", href: "#postura" },
  { label: "capacidades",     href: "#capacidades" },
  { label: "equipo",          href: "#equipo" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(21, 24, 30, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px var(--pad-x)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="WizdomData — ir al inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--bone)",
          }}
        >
          <svg
            className="mark mk-bone mk-rombo"
            viewBox="0 0 292 290"
            width={28}
            height={28}
            aria-hidden="true"
          >
            <use href="#mark" />
          </svg>
          <span className="wm" style={{ fontSize: 18 }}>
            <em>Wizdom</em><span>Data</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 32 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.02em",
                color: "var(--bone-3)",
                textDecoration: "none",
                transition: "color var(--t-base)",
                textTransform: "lowercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bone)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone-3)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn btn-primary"
            style={{ padding: "10px 18px", fontSize: 13 }}
          >
            Conversemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--bone)",
            padding: 4,
          }}
        >
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth={1.5} />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth={1.5} />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth={1.5} />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth={1.5} />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth={1.5} />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            padding: "24px var(--pad-x) 32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.02em",
                color: "var(--bone-3)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ alignSelf: "flex-start", padding: "10px 18px", fontSize: 13 }}
          >
            Conversemos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
