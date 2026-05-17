/* Community Impact Collective — interactive constellation.
   Five nodes arranged on a circular plot. Clicking a node updates the content panel.
*/

const NODES = [
  { key: "non", label: "Nonprofits",       icon: "heart-handshake",
    copy: "Organizations providing essential services, advocacy, housing support, education, healthcare, and community care." },
  { key: "mun", label: "Municipalities",   icon: "landmark",
    copy: "Local government bodies supporting policy conversations, resource coordination, infrastructure planning, and public engagement." },
  { key: "apx", label: "Apex Advocates",   icon: "users-round",
    copy: "Community and business leaders providing strategic guidance, relationship-building, and philanthropic support." },
  { key: "arc", label: "Impact Architects",icon: "briefcase",
    copy: "Small business owners, builders, and project leaders supporting jobs, opportunity, and community-centered projects." },
  { key: "vis", label: "Iconic Visionaries",icon: "star",
    copy: "Influential individuals and public figures using their platforms to raise awareness and drive collective action." },
];

function Collective() {
  const [active, setActive] = React.useState("non");
  const node = NODES.find((n) => n.key === active) || NODES[0];

  // Node positions on a circle (cx 50%, cy 50%, r 38%)
  const positions = NODES.map((_, i) => {
    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2; // start at top
    return { x: 50 + Math.cos(angle) * 36, y: 50 + Math.sin(angle) * 36 };
  });

  return (
    <Section id="collective" tone="deep">
      {/* Faint dotted bg */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, opacity: 0.4,
        backgroundImage: "radial-gradient(rgba(245,236,217,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="cjs-coll-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
        <Reveal>
          <Eyebrow>Community Impact Collective · 05</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24 }}>
            A coalition built<br/>for purpose-driven progress.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">
            Each partner brings unique strengths to design and implement solutions that
            foster economic growth, preserve cultural integrity, and build resilient
            communities.
          </p>
        </Reveal>
      </div>

      <div className="cjs-coll-body" style={{
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr",
        gap: 32, alignItems: "stretch",
      }}>
        {/* Constellation */}
        <Reveal>
          <div style={{
            position: "relative", aspectRatio: "1 / 1", maxWidth: 520, margin: "0 auto", width: "100%",
            background: "radial-gradient(circle at 50% 50%, rgba(217,164,65,0.06), transparent 65%)",
            borderRadius: "50%",
            border: "1px dashed var(--rule)",
          }}>
            {/* Inner ring */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: "18%", borderRadius: "50%",
              border: "1px solid var(--rule)", opacity: 0.7,
            }} />
            {/* Lines from active node to all others */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              pointerEvents: "none",
            }}>
              {(() => {
                const activeIdx = NODES.findIndex((n) => n.key === active);
                const a = positions[activeIdx];
                return positions.map((p, i) => {
                  if (i === activeIdx) return null;
                  return (
                    <line key={i}
                      x1={a.x} y1={a.y} x2={p.x} y2={p.y}
                      stroke="rgba(217,164,65,0.45)"
                      strokeWidth="0.3"
                      strokeDasharray="0.6 0.6"
                    />
                  );
                });
              })()}
            </svg>

            {/* Center seal */}
            <div style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: "26%", aspectRatio: "1/1",
              borderRadius: "50%", background: "var(--paper-cream)",
              display: "grid", placeItems: "center",
              boxShadow: "0 12px 32px -10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(7,18,29,0.1)",
              zIndex: 2,
            }}>
              <img src="./assets/logo-color.png" alt="" style={{ width: "82%", height: "82%", objectFit: "contain" }} />
            </div>

            {/* Nodes */}
            {NODES.map((n, i) => {
              const p = positions[i];
              const isActive = n.key === active;
              return (
                <button
                  key={n.key}
                  onClick={() => setActive(n.key)}
                  aria-label={n.label}
                  style={{
                    position: "absolute",
                    left: `calc(${p.x}% - 36px)`,
                    top:  `calc(${p.y}% - 36px)`,
                    width: 72, height: 72,
                    borderRadius: "50%",
                    border: "1px solid " + (isActive ? "var(--gold)" : "var(--rule-strong)"),
                    background: isActive ? "var(--gold)" : "var(--rich-navy)",
                    color: isActive ? "var(--ink)" : "var(--fg)",
                    display: "grid", placeItems: "center",
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 0 0 8px rgba(217,164,65,0.12), 0 12px 28px -6px rgba(217,164,65,0.45)"
                      : "0 6px 18px -8px rgba(0,0,0,0.6)",
                    transition: "all var(--dur-3) var(--ease-spring)",
                    zIndex: 3,
                  }}
                >
                  <Icon name={n.icon} size={26} stroke={1.5} />
                  <span style={{
                    position: "absolute",
                    [p.y < 50 ? "bottom" : "top"]: -22,
                    left: "50%", transform: "translateX(-50%)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--gold)" : "var(--fg-muted)",
                    whiteSpace: "nowrap",
                  }}>{n.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detail panel */}
        <Reveal delay={120}>
          <div key={active} style={{
            background: "var(--rich-navy)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--r-5)",
            padding: 40,
            height: "100%",
            display: "flex", flexDirection: "column",
            position: "relative", overflow: "hidden",
            animation: "cjs-coll-fade 500ms var(--ease-rail)",
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", right: -16, top: -16, opacity: 0.06,
              fontFamily: "var(--font-display)", fontSize: 220, lineHeight: 1,
              color: "var(--gold)",
            }}>
              {String(NODES.findIndex((n) => n.key === active) + 1).padStart(2, "0")}
            </div>

            <div style={{
              display: "inline-flex", padding: 14,
              borderRadius: "50%",
              background: "rgba(217,164,65,0.1)", color: "var(--gold)",
              alignSelf: "flex-start", marginBottom: 28,
            }}>
              <Icon name={node.icon} size={32} stroke={1.5} />
            </div>

            <Eyebrow>Partner pillar</Eyebrow>
            <h3 className="t-h1" style={{ marginTop: 16, marginBottom: 16 }}>{node.label}</h3>
            <p className="lead">{node.copy}</p>

            <div style={{ marginTop: "auto", paddingTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {NODES.map((n) => (
                <button key={n.key} onClick={() => setActive(n.key)}
                  style={{
                    padding: "8px 10px", borderRadius: "var(--r-full)",
                    background: n.key === active ? "var(--gold)" : "transparent",
                    color: n.key === active ? "var(--ink)" : "var(--fg-muted)",
                    border: "1px solid " + (n.key === active ? "var(--gold)" : "var(--rule)"),
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em",
                    textTransform: "uppercase", fontWeight: 500, cursor: "pointer",
                    transition: "all var(--dur-2) var(--ease-civic)",
                  }}>
                  {n.label}
                </button>
              ))}
            </div>

            <style>{`
              @keyframes cjs-coll-fade {
                from { opacity: 0; transform: translateY(8px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cjs-coll-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-coll-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

window.Collective = Collective;
