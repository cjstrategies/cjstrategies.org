/* Strategy section — interactive lane mixer.
   Click a lane → big content panel updates.
*/

const STRATEGY_LANES = [
  { key: "learn",    icon: "book-open", label: "Learn",    sub: "Before crisis",
    body: "Create plain-language education, workshops, and community resources before pressure becomes crisis." },
  { key: "connect",  icon: "link",      label: "Connect",  sub: "Build pathways",
    body: "Help residents and partners connect with resources, referrals, volunteers, and trusted community networks." },
  { key: "preserve", icon: "landmark",  label: "Preserve", sub: "What matters",
    body: "Support efforts to preserve cultural spaces, small businesses, affordable housing conversations, and neighborhood identity." },
  { key: "prepare",  icon: "compass",   label: "Prepare",  sub: "Future progress",
    body: "Prepare responsible community investment conversations that are transparent, compliant, and resident-centered." },
];

const DEFAULT_BODY = "The work moves through four lanes: learn before the crisis, connect residents to support, preserve what matters, and prepare community-aligned progress.";

function Strategy() {
  const [active, setActive] = React.useState(null);
  const lane = STRATEGY_LANES.find((l) => l.key === active);

  return (
    <Section id="strategy" tone="rich">
      {/* Faint dotted grid backdrop */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, opacity: 0.4,
        backgroundImage: "radial-gradient(rgba(245,236,217,0.06) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />

      <div className="cjs-strategy-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 64 }}>
        <Reveal>
          <Eyebrow>The Framework · Section 02</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24 }}>
            A clear framework<br/>with room to move.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">Tap a lane below to see how the work translates from principle into practice. The default view is the through-line — the four lanes together.</p>
        </Reveal>
      </div>

      {/* Mixer */}
      <div className="cjs-mixer" style={{
        display: "grid", gridTemplateColumns: "0.95fr 1.05fr",
        gap: 32, alignItems: "stretch",
      }}>
        {/* Lane buttons stack */}
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STRATEGY_LANES.map((l, i) => {
              const isActive = active === l.key;
              return (
                <button
                  key={l.key}
                  onClick={() => setActive(isActive ? null : l.key)}
                  style={{
                    display: "flex", alignItems: "center", gap: 20,
                    textAlign: "left", cursor: "pointer",
                    padding: "20px 22px",
                    background: isActive ? "var(--deep-blue)" : "rgba(255,250,240,0.02)",
                    border: "1px solid " + (isActive ? "var(--gold)" : "var(--rule)"),
                    borderRadius: "var(--r-4)",
                    color: "var(--fg)",
                    transition: "all var(--dur-3) var(--ease-rail)",
                    transform: isActive ? "translateX(8px)" : "translateX(0)",
                    boxShadow: isActive ? "0 0 0 1px rgba(217,164,65,0.18), var(--sh-3)" : "none",
                  }}
                >
                  <span style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    background: isActive ? "var(--gold)" : "rgba(217,164,65,0.08)",
                    color: isActive ? "var(--ink)" : "var(--gold)",
                    display: "grid", placeItems: "center",
                    transition: "all var(--dur-3) var(--ease-rail)",
                    flexShrink: 0,
                  }}>
                    <Icon name={l.icon} size={24} stroke={1.5} />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                      textTransform: "uppercase", color: "var(--fg-dim)",
                    }}>0{i + 1} · {l.sub}</span>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 28,
                      color: isActive ? "var(--gold)" : "var(--fg)",
                      lineHeight: 1.1,
                    }}>{l.label}</span>
                  </span>
                  <Icon name="arrow-up-right" size={18}
                    style={{ color: isActive ? "var(--gold)" : "var(--fg-dim)" }} />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content panel */}
        <Reveal delay={140} y={20}>
          <div key={active || "default"} className="cjs-mixer-panel" style={{
            background: "var(--ink)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--r-5)",
            padding: 40,
            minHeight: 360,
            display: "flex", flexDirection: "column",
            position: "relative", overflow: "hidden",
            animation: "cjs-mixer-fade var(--dur-4) var(--ease-rail)",
          }}>
            {/* Decorative numeric mark */}
            <div aria-hidden="true" style={{
              position: "absolute", right: -10, top: -30,
              fontFamily: "var(--font-display)",
              fontSize: 260, lineHeight: 1, color: "rgba(217,164,65,0.06)",
              pointerEvents: "none", userSelect: "none",
            }}>
              {lane ? (STRATEGY_LANES.indexOf(lane) + 1).toString().padStart(2, "0") : "04"}
            </div>

            <Eyebrow>{lane ? `Lane · ${lane.label}` : "The four lanes"}</Eyebrow>
            <h3 className="t-h1" style={{ marginTop: 18, marginBottom: 20, position: "relative" }}>
              {lane ? lane.label + " — " + lane.sub.toLowerCase() : "Four lanes, one through-line."}
            </h3>
            <p className="lead" style={{ position: "relative" }}>
              {lane ? lane.body : DEFAULT_BODY}
            </p>

            <div style={{ marginTop: "auto", paddingTop: 32, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {STRATEGY_LANES.map((l) => (
                <Pill
                  key={l.key}
                  tone={lane && lane.key === l.key ? "gold" : "mono"}
                >{l.label}</Pill>
              ))}
            </div>

            <style>{`
              @keyframes cjs-mixer-fade {
                from { opacity: 0; transform: translateY(8px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              @media (prefers-reduced-motion: reduce) {
                .cjs-mixer-panel { animation: none !important; }
              }
            `}</style>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cjs-strategy-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-mixer { grid-template-columns: 1fr !important; }
          .cjs-mixer-panel { padding: 28px !important; min-height: 280px !important; }
        }
      `}</style>
    </Section>
  );
}

window.Strategy = Strategy;
