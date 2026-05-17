/* Programs section — featured "Resident Power Lab" + four program cards */

const PROGRAMS = [
  { title: "Stay & Thrive Initiative",   icon: "tree-pine", copy: "Anti-displacement education, resident resource guides, and referral pathways." },
  { title: "Community Strategy Desk",    icon: "compass",   copy: "Research, mapping, communication planning, campaign support, and coalition coordination." },
  { title: "Equitable Development Watch",icon: "eye",       copy: "Tracking public development conversations, zoning changes, and neighborhood pressure points." },
  { title: "Community Investment Table", icon: "coins",     copy: "Preparing responsible, transparent conversations around future community-aligned investment." },
];

function Programs() {
  return (
    <Section id="programs" tone="paper">
      <div className="cjs-prog-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
        <Reveal>
          <Eyebrow tone="ink">The Programs · Section 03</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24, color: "var(--ink-fg)" }}>
            Tools for people<br/>who refuse to be pushed out.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead" style={{ color: "var(--ink-fg-muted)" }}>
            These program lanes can evolve as the organization confirms services, partners,
            funding, geography, and legal review.
          </p>
        </Reveal>
      </div>

      {/* Featured program */}
      <Reveal>
        <div className="cjs-featured" style={{
          display: "grid", gridTemplateColumns: "0.9fr 1.1fr",
          gap: 0, alignItems: "stretch",
          background: "var(--ink)", color: "var(--fg)",
          borderRadius: "var(--r-5)",
          overflow: "hidden",
          marginBottom: 56,
          boxShadow: "var(--sh-cream)",
        }}>
          {/* Left: seal + diagonal accents */}
          <div className="cjs-featured-left" style={{
            position: "relative", padding: 48,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            background: "linear-gradient(180deg, var(--ink), var(--rich-navy))",
            minHeight: 380,
            overflow: "hidden",
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(135deg, transparent 0 18px, rgba(217,164,65,0.05) 18px 19px)",
              pointerEvents: "none",
            }} />
            <Eyebrow>Featured · Resident Power</Eyebrow>
            <div style={{
              position: "absolute", right: -24, bottom: -24,
              width: 260, height: 260, borderRadius: "50%",
              background: "var(--paper-cream)",
              display: "grid", placeItems: "center",
              boxShadow: "inset 0 0 0 1px rgba(7,18,29,0.08)",
            }}>
              <img src="./assets/logo-color.png" alt="" style={{ width: "82%", height: "82%", objectFit: "contain" }} />
            </div>
            <div style={{ position: "relative" }}>
              <h3 className="t-display" style={{ fontStyle: "italic", marginBottom: 0 }}>
                Resident<br/>Power Lab.
              </h3>
            </div>
          </div>

          {/* Right: copy */}
          <div className="cjs-featured-right" style={{ padding: 48, display: "flex", flexDirection: "column", gap: 24 }}>
            <p className="lead">
              Workshops, neighborhood meetings, volunteer support, and community education
              for residents who need language, tools, and strategy.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 8 }}>
              {[
                { l: "Workshops",       v: "Plain-language, monthly cadence" },
                { l: "Neighborhood mtgs.", v: "Resident-hosted, agenda by request" },
                { l: "Volunteer ops",   v: "Outreach, research, creative, admin" },
                { l: "Resources",       v: "Guides, referrals, and lookup help" },
              ].map((row) => (
                <div key={row.l} style={{
                  padding: "14px 16px",
                  border: "1px solid var(--rule)",
                  borderRadius: "var(--r-3)",
                  background: "rgba(255,250,240,0.02)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "var(--gold)", marginBottom: 6,
                  }}>{row.l}</div>
                  <div style={{ fontSize: 14, color: "var(--fg-muted)" }}>{row.v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button href="#volunteer" variant="primary" iconRight="arrow-right">Join a workshop</Button>
              <Button href="#contact" variant="ghost">Request the lab on your block</Button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Program cards 4-up */}
      <div className="cjs-prog-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16,
      }}>
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div style={{
              padding: "26px 24px", height: "100%",
              background: "var(--white)",
              border: "1px solid var(--rule-ink)",
              borderRadius: "var(--r-4)",
              boxShadow: "var(--sh-1)",
              display: "flex", flexDirection: "column", gap: 14,
              transition: "transform var(--dur-3) var(--ease-civic), box-shadow var(--dur-3) var(--ease-civic), border-color var(--dur-3) var(--ease-civic)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "var(--sh-cream)";
              e.currentTarget.style.borderColor = "var(--ink-fg-muted)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--sh-1)";
              e.currentTarget.style.borderColor = "var(--rule-ink)";
            }}>
              <div style={{
                display: "inline-flex", padding: 10,
                borderRadius: "var(--r-3)",
                background: "rgba(31,111,139,0.08)",
                color: "var(--river-blue)",
                alignSelf: "flex-start",
              }}>
                <Icon name={p.icon} size={22} stroke={1.5} />
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--ink-fg-dim)",
              }}>Program · 0{i + 1}</div>
              <h4 className="t-h3" style={{ color: "var(--ink-fg)", marginBottom: 0 }}>{p.title}</h4>
              <p style={{ color: "var(--ink-fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.6 }}>{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cjs-prog-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-featured { grid-template-columns: 1fr !important; }
          .cjs-featured-left { min-height: 280px !important; padding: 32px !important; }
          .cjs-featured-right { padding: 32px !important; }
          .cjs-prog-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .cjs-prog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

window.Programs = Programs;
