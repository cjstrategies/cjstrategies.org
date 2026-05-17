/* Future Investment Group — placeholder section with strong disclaimers. */

const IG_CARDS = [
  { title: "Interest List",  icon: "users-round", copy: "Collect names, emails, organization info, and areas of interest from future partners." },
  { title: "Partner Fit",    icon: "compass",     copy: "Identify mission alignment, geography, community benefit goals, and values compatibility." },
  { title: "Public Updates", icon: "megaphone",   copy: "Share non-offering updates about planning meetings, community priorities, and progress." },
  { title: "Compliance First", icon: "scale",     copy: "Keep legal, tax, investment, securities, and charitable solicitation review front and center." },
];

const IG_NOTICE = [
  "This page is informational only.",
  "Nothing here is an offer to sell securities or a solicitation to invest.",
  "No returns, profits, outcomes, or investment opportunities are promised.",
  "Future investment-related activity should be reviewed by qualified legal and financial professionals.",
];

function Investment() {
  return (
    <Section id="investment-group" tone="rich">
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, opacity: 0.6,
        background: "linear-gradient(180deg, transparent 0%, rgba(217,164,65,0.04) 30%, transparent 70%)",
      }} />

      <div className="cjs-ig-head" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Pill tone="gold" iconLeft="circle-dot">Coming Soon</Pill>
            <Pill tone="mono">Section 06</Pill>
          </div>
          <h2 className="t-display" style={{ marginTop: 12 }}>
            Future Community<br/>Investment Group.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">
            An incoming partner pathway for mission-aligned supporters, business leaders,
            funders, builders, and community stakeholders interested in future
            community-benefit investment conversations.
          </p>
        </Reveal>
      </div>

      {/* Secondary headline + responsibility band */}
      <Reveal>
        <div className="cjs-ig-band" style={{
          display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 40,
          padding: "40px",
          background: "var(--ink)", color: "var(--fg)",
          borderRadius: "var(--r-5)",
          border: "1px solid var(--rule)",
          marginBottom: 56,
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", right: -80, top: -80,
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,164,65,0.10), transparent 70%)",
            pointerEvents: "none",
          }} />

          <div>
            <Eyebrow>Boundaries</Eyebrow>
            <h3 className="t-h1" style={{ marginTop: 16, fontStyle: "italic" }}>
              Responsible progress starts with clear boundaries.
            </h3>
          </div>
          <p style={{ color: "var(--fg-muted)", margin: 0, lineHeight: 1.7 }}>
            This page is a placeholder for future public information, partner onboarding,
            meeting announcements, and interest collection. It should be reviewed by
            counsel before accepting funds or publishing formal investment opportunities.
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="cjs-ig-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16,
        marginBottom: 56,
      }}>
        {IG_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div style={{
              padding: 28, height: "100%",
              background: "rgba(255,250,240,0.03)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-4)",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "var(--r-3)",
                background: "rgba(31,111,139,0.14)", color: "var(--river-blue)",
                display: "grid", placeItems: "center",
              }}>
                <Icon name={c.icon} size={22} stroke={1.5} />
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--fg-dim)",
              }}>Partner Path · 0{i + 1}</div>
              <h4 className="t-h3" style={{ marginBottom: 0 }}>{c.title}</h4>
              <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.6 }}>{c.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Important notice + CTA */}
      <Reveal>
        <div className="cjs-ig-notice" style={{
          display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 24,
          padding: 32,
          background: "rgba(184,100,63,0.06)",
          border: "1px solid rgba(184,100,63,0.35)",
          borderRadius: "var(--r-4)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Icon name="shield-check" size={20} style={{ color: "var(--rust)" }} />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--rust)", fontWeight: 600,
              }}>Important notice</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--fg-muted)", lineHeight: 1.7 }}>
              {IG_NOTICE.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, borderLeft: "1px solid var(--rule)", paddingLeft: 24 }}>
            <Eyebrow>When the time comes</Eyebrow>
            <p style={{ margin: 0, color: "var(--fg-muted)" }}>
              Add your name to the interest list and we'll send public, non-offering
              updates as compliance review completes.
            </p>
            <Button href="#contact" variant="primary" iconRight="arrow-right" magnetic>Join interest list</Button>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cjs-ig-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-ig-band { grid-template-columns: 1fr !important; padding: 28px !important; }
          .cjs-ig-grid { grid-template-columns: 1fr !important; }
          .cjs-ig-notice { grid-template-columns: 1fr !important; padding: 24px !important; }
          .cjs-ig-notice > div:last-child { border-left: 0 !important; border-top: 1px solid var(--rule); padding-left: 0 !important; padding-top: 16px !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .cjs-ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

window.Investment = Investment;
