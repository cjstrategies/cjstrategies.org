/* Footer */

const SOCIALS = [
  { label: "TikTok",    handle: "@caseyjonesstrategies", icon: "music-2",   href: "https://www.tiktok.com/@caseyjonesstrategies" },
  { label: "Instagram", handle: "@caseyjonesstrategies", icon: "instagram", href: "https://www.instagram.com/caseyjonesstrategies" },
  { label: "Facebook",  handle: "Casey Jones Strategies", icon: "facebook", href: "https://www.facebook.com/p/Casey-Jones-Strategies-61578594053925" },
  { label: "LinkedIn",  handle: "Coming soon",           icon: "linkedin",  href: null },
];

function Footer() {
  return (
    <footer style={{ background: "#040a12", color: "var(--fg)", paddingTop: 96, paddingBottom: 32 }}>
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        {/* Top: brand + tagline + socials */}
        <div className="cjs-foot-top" style={{
          display: "grid", gridTemplateColumns: "1.2fr 0.4fr 0.4fr 0.4fr",
          gap: 56,
          paddingBottom: 56, marginBottom: 40,
          borderBottom: "1px solid var(--rule)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span aria-hidden="true" style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--paper-cream)",
                display: "grid", placeItems: "center",
              }}>
                <img src="./assets/logo-color.png" alt="" width="50" height="50" style={{ objectFit: "contain" }} />
              </span>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Casey Jones Strategies</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Development Without Displacement
                </div>
              </div>
            </div>

            <p style={{ color: "var(--fg-muted)", maxWidth: 480, fontSize: 14, lineHeight: 1.7 }}>
              A 501(c)(3) nonprofit. Educational and community strategy support.
              We work with residents, organizers, municipalities, and local leaders
              to keep people at the center of progress.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              <Pill tone="mono">501(c)(3)</Pill>
              <Pill tone="mono">EIN · 33-1380624</Pill>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 16,
            }}>The Work</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Mission","Strategy","Programs","Investment Group"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} style={{ color: "var(--fg)", textDecoration: "none", fontSize: 14 }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 16,
            }}>Take Part</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Volunteer","#volunteer"],
                ["Donate","#donate"],
                ["Partner","#contact"],
                ["Get connected","#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} style={{ color: "var(--fg)", textDecoration: "none", fontSize: 14 }}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 16,
            }}>On the rail</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg)", textDecoration: "none", fontSize: 13 }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg)"; }}
                    >
                      <Icon name={s.icon} size={16} stroke={1.5} />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span>{s.label}</span>
                        <span style={{ color: "var(--fg-dim)", fontSize: 11 }}>{s.handle}</span>
                      </span>
                    </a>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg-dim)", fontSize: 13 }}>
                      <Icon name={s.icon} size={16} stroke={1.5} />
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span>{s.label}</span>
                        <span style={{ fontSize: 11 }}>{s.handle}</span>
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big footer slogan */}
        <div className="cjs-foot-slogan" style={{ display: "flex", justifyContent: "space-between", gap: 24, paddingBottom: 40, marginBottom: 24, borderBottom: "1px solid var(--rule)", alignItems: "flex-end" }}>
          <div className="t-display" style={{ fontStyle: "italic", color: "var(--fg)", lineHeight: 1.05 }}>
            Casey Jones Strategies —<br/>
            <span style={{ color: "var(--gold)" }}>Development without displacement.</span>
          </div>
          <div style={{ minWidth: 200, textAlign: "right" }}>
            <RailDivider />
          </div>
        </div>

        {/* Fine print row */}
        <div className="cjs-foot-meta" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em",
          color: "var(--fg-dim)",
        }}>
          <span>501(c)(3) NONPROFIT · EIN: 33-1380624 · EDUCATIONAL CONTENT ONLY</span>
          <span>
            Site crafted by{" "}
            <a href="https://therealcool.site" target="_blank" rel="noopener noreferrer"
               style={{ color: "var(--gold)" }}>A Real Cool Company</a>.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cjs-foot-top { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cjs-foot-slogan { flex-direction: column; align-items: flex-start !important; }
          .cjs-foot-meta { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}

window.Footer = Footer;
