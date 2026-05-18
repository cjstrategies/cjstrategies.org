/* Trust + Donation section.
   Headline: "Trust is built with receipts."
   Four trust cards + donation impact picker.
*/

const TRUST_CARDS = [
  { title: "Legal Status",   icon: "scale",        copy: "501(c)(3) nonprofit organization. EIN: 33-1380624." },
  { title: "Accountability", icon: "users",        copy: "Add board, leadership, annual reports, and financial updates as available." },
  { title: "Data Privacy",   icon: "lock",         copy: "Collect only what is needed and protect resident information." },
  { title: "Clear Boundaries", icon: "shield-check", copy: "Educational content only unless reviewed and approved by qualified professionals." },
];

const IMPACT_AMOUNTS = [
  { v: 25,  c: "Helps print resident education materials and outreach flyers." },
  { v: 50,  c: "Helps support a community workshop or listening session." },
  { v: 100, c: "Helps fund outreach, canvassing, and organizing tools." },
  { v: 250, c: "Helps power research, mapping, planning, and coalition coordination." },
];

function Trust() {
  const [amount, setAmount] = React.useState(50);
  const active = IMPACT_AMOUNTS.find((a) => a.v === amount);

  return (
    <Section id="donate" tone="warm">
      <div className="cjs-trust-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
        <Reveal>
          <Eyebrow tone="ink">Trust & Transparency · 07</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24, color: "var(--ink-fg)" }}>
            Trust is built<br/>with receipts.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead" style={{ color: "var(--ink-fg-muted)" }}>
            A serious nonprofit landing page should make verification, leadership,
            programs, donation use, public accountability, and disclaimers easy to
            understand.
          </p>
        </Reveal>
      </div>

      {/* Trust cards */}
      <div className="cjs-trust-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16,
        marginBottom: 80,
      }}>
        {TRUST_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div style={{
              padding: 28, height: "100%",
              background: "var(--paper-cream)",
              border: "1px solid var(--rule-ink)",
              borderRadius: "var(--r-4)",
              boxShadow: "var(--sh-1)",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "var(--r-3)",
                background: "rgba(7,18,29,0.06)", color: "var(--ink-fg)",
                display: "grid", placeItems: "center",
              }}>
                <Icon name={c.icon} size={22} stroke={1.5} />
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--ink-fg-dim)",
              }}>Receipt · 0{i + 1}</div>
              <h4 className="t-h3" style={{ color: "var(--ink-fg)", marginBottom: 0 }}>{c.title}</h4>
              <p style={{ color: "var(--ink-fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.6 }}>{c.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Donation panel */}
      <Reveal>
        <div className="cjs-donate" style={{
          display: "grid", gridTemplateColumns: "0.95fr 1.05fr",
          background: "var(--ink)", color: "var(--fg)",
          borderRadius: "var(--r-5)", overflow: "hidden",
          boxShadow: "var(--sh-cream)",
        }}>
          {/* Left: headline + receipt look */}
          <div className="cjs-donate-left" style={{
            padding: 48, position: "relative", overflow: "hidden",
            background: "linear-gradient(180deg, var(--ink), var(--rich-navy))",
            display: "flex", flexDirection: "column", gap: 24,
            minHeight: 460,
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0 28px, rgba(245,236,217,0.04) 28px 29px)",
            }} />
            <Eyebrow>The receipt</Eyebrow>
            <h3 className="t-display" style={{ position: "relative" }}>
              Community-led<br/>progress needs<br/>community-backed power.
            </h3>
            <div style={{ position: "relative", marginTop: "auto" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "var(--gold)", marginBottom: 8,
              }}>Why give</div>
              <p style={{ color: "var(--fg-muted)", margin: 0 }}>
                Donations support resident education, outreach, research, and coalition
                coordination. Every dollar is logged in the public ledger.
              </p>
            </div>
          </div>

          {/* Right: impact picker */}
          <div className="cjs-donate-right" style={{ padding: 48, display: "flex", flexDirection: "column", gap: 24 }}>
            <Eyebrow>Pick an impact</Eyebrow>

            <div className="cjs-donate-tabs" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8,
            }}>
              {IMPACT_AMOUNTS.map((a) => (
                <button
                  key={a.v}
                  onClick={() => setAmount(a.v)}
                  style={{
                    padding: "20px 8px",
                    background: a.v === amount ? "var(--gold)" : "transparent",
                    border: "1px solid " + (a.v === amount ? "var(--gold)" : "var(--rule-strong)"),
                    color: a.v === amount ? "var(--ink)" : "var(--fg)",
                    borderRadius: "var(--r-3)",
                    fontFamily: "var(--font-display)", fontSize: 28,
                    cursor: "pointer",
                    transition: "all var(--dur-2) var(--ease-civic)",
                    fontWeight: 400,
                  }}
                >
                  ${a.v}
                </button>
              ))}
            </div>

            <div key={amount} style={{
              padding: 20, borderRadius: "var(--r-3)",
              border: "1px solid var(--rule)",
              background: "rgba(217,164,65,0.04)",
              animation: "cjs-impact-pulse 500ms var(--ease-rail)",
              minHeight: 90,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <Icon name="heart-handshake" size={16} style={{ color: "var(--gold)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>${active.v} · Impact</span>
              </div>
              <p style={{ margin: 0, color: "var(--fg-muted)" }}>${active.v} {active.c.toLowerCase()}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Button variant="primary" iconLeft="hourglass">Donation Coming Soon</Button>
            </div>

            <small style={{ color: "var(--fg-dim)", paddingTop: 12, borderTop: "1px dashed var(--rule)" }}>
              Replace with Donorbox, Stripe, PayPal Giving Fund, or another approved
              donation platform after confirming charitable solicitation and compliance
              requirements.
            </small>

            <style>{`
              @keyframes cjs-impact-pulse {
                from { opacity: 0; transform: translateY(6px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cjs-trust-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-trust-grid { grid-template-columns: 1fr !important; }
          .cjs-donate { grid-template-columns: 1fr !important; }
          .cjs-donate-left { min-height: auto !important; padding: 32px !important; }
          .cjs-donate-right { padding: 32px !important; }
          .cjs-donate-tabs { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .cjs-trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

window.Trust = Trust;
