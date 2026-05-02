"use client";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--rule)" }}>
      <div
        style={{
          padding: "56px var(--pad-x) 40px",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="footer-inner"
        >
          {/* Col 1 — brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <svg
                className="mark mk-bone mk-rombo"
                viewBox="0 0 292 290"
                width={24}
                height={24}
                aria-hidden="true"
              >
                <use href="#mark" />
              </svg>
              <span className="wm" style={{ fontSize: 16 }}>
                <em>Wizdom</em><span>Data</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--bone-3)",
                lineHeight: 1.7,
                letterSpacing: "0.04em",
              }}
            >
              Partner analítico para<br />
              empresas modernas.<br />
              Chile · operaciones remotas
            </p>
          </div>

          {/* Col 2 — contact */}
          <div>
            <h5
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--bone-3)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 18,
                fontWeight: 400,
              }}
            >
              Contacto
            </h5>
            <a
              href="mailto:contacto@wizdomdata.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--bone)",
                textDecoration: "none",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
                display: "block",
                transition: "color var(--t-base)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ambar)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone)")}
            >
              contacto@wizdomdata.com
            </a>
            <a
              href="https://linkedin.com/company/wizdomdata"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--bone)",
                textDecoration: "none",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
                display: "block",
                transition: "color var(--t-base)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ambar)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone)")}
            >
              linkedin.com/company/wizdomdata
            </a>
          </div>

          {/* Col 3 — site links */}
          <div>
            <h5
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--bone-3)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 18,
                fontWeight: 400,
              }}
            >
              Sitio
            </h5>
            {[
              { label: "Por qué existimos", href: "#porque" },
              { label: "Por qué importa",   href: "#impacto" },
              { label: "Cómo trabajamos",   href: "#postura" },
              { label: "Capacidades",        href: "#capacidades" },
              { label: "Equipo",             href: "#equipo" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--bone)",
                  textDecoration: "none",
                  lineHeight: 1.8,
                  letterSpacing: "0.02em",
                  display: "block",
                  transition: "color var(--t-base)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ambar)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bone)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            color: "var(--mute)",
            letterSpacing: "0.06em",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© {year} WizdomData SpA</span>
          <span>Edición 02 · v1.0</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
