/* Purpose-Driven Partnerships — community stakeholder pathway section. */

const PDP_CARDS = [
  { title: "Express Interest",  icon: "users-round", copy: "Share your name, organization, focus areas, and the communities or causes you care most about." },
  { title: "Explore Alignment", icon: "compass",     copy: "We'll explore shared values, mission fit, geographic focus, and mutual community-benefit goals together." },
  { title: "Community First",   icon: "hand-heart",  copy: "Every conversation starts with what the community needs — residents, culture, and stability come before any partnership." },
  { title: "Build Together",    icon: "route",       copy: "Long-term initiatives are shaped collaboratively through planning, listening, and shared accountability." },
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
            Purpose-Driven<br/>Partnerships.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">
            A collaborative pathway for mission-aligned supporters, business leaders,
            funders, builders, and community stakeholders interested in exploring future
            community-benefit partnerships, shared-impact initiatives, and long-term
            neighborhood growth opportunities.
          </p>
        </Reveal>
      </div>

      {/* Secondary headline + values band */}
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
            <Eyebrow>Our Commitment</Eyebrow>
            <h3 className="t-h1" style={{ marginTop: 16, fontStyle: "italic" }}>
              Community benefit is the foundation of every partnership.
            </h3>
          </div>
          <p style={{ color: "var(--fg-muted)", margin: 0, lineHeight: 1.7 }}>
            This page is a gathering space for future public information, partner
            conversations, and community announcements. We are building slowly and
            intentionally — centering residents, culture, and neighborhood stability
            at every step.
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="cjs-ig-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16,
        marginBottom: 56,
      }}>
        {PDP_CARDS.map((c, i) => (
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
              }}>Partnership Path · 0{i + 1}</div>
              <h4 className="t-h3" style={{ marginBottom: 0 }}>{c.title}</h4>
              <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.6 }}>{c.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* How it works + CTA */}
      <Reveal>
        <div className="cjs-ig-notice" style={{
          display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 24,
          padding: 32,
          background: "rgba(143,174,144,0.06)",
          border: "1px solid rgba(143,174,144,0.35)",
          borderRadius: "var(--r-4)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Icon name="heart-handshake" size={20} style={{ color: "var(--sage)" }} />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--sage)", fontWeight: 600,
              }}>How this works</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--fg-muted)", lineHeight: 1.7 }}>
              <li>This page is for informational and community-engagement purposes only.</li>
              <li>No formal commitments, funding agreements, or obligations are created by expressing interest.</li>
              <li>All future partnership activity will be publicly communicated and mission-aligned.</li>
              <li>Casey Jones Strategies is a 501(c)(3) nonprofit — community benefit is our only bottom line.</li>
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, borderLeft: "1px solid var(--rule)", paddingLeft: 24 }}>
            <Eyebrow>Get involved</Eyebrow>
            <p style={{ margin: 0, color: "var(--fg-muted)" }}>
              Add your name and we'll keep you updated on community conversations,
              planning sessions, and partnership opportunities as they develop.
            </p>
            <Button href="#contact" variant="primary" iconRight="arrow-right" magnetic>Express interest</Button>
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
