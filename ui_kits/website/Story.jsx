/* Story section — "This is not just a website."
   + the challenge/mission band: "Neighborhood change should not become community removal."
*/

const STORY_CARDS = [
  { idx: "01", icon: "eye",         tone: "rust", label: "See",    title: "Name the pressure.",   copy: "Make displacement visible before it becomes irreversible." },
  { idx: "02", icon: "users-round", tone: "gold", label: "Gather", title: "Bring people in.",     copy: "Residents, volunteers, municipalities, funders, and builders at one table." },
  { idx: "03", icon: "route",       tone: "water",label: "Move",   title: "Turn care into strategy.", copy: "Education, outreach, resources, referrals, and community-backed action." },
  { idx: "04", icon: "tree-pine",   tone: "sage", label: "Stay",   title: "Protect the future.",  copy: "Progress with roots, memory, ownership, and dignity intact." },
];

const TONE_TO_COLOR = {
  rust:  "var(--rust)",
  gold:  "var(--gold)",
  water: "var(--river-blue)",
  sage:  "var(--sage)",
};

function StoryCard({ card, delay }) {
  const ref = useTilt(3);
  const color = TONE_TO_COLOR[card.tone];
  return (
    <Reveal delay={delay} y={32}>
      <div ref={ref} className="cjs-story-card" style={{
        background: "var(--deep-blue)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-4)",
        padding: "28px 26px",
        height: "100%",
        boxShadow: "var(--sh-3)",
        position: "relative",
        transition: "transform var(--dur-3) var(--ease-civic), border-color var(--dur-3) var(--ease-civic), box-shadow var(--dur-3) var(--ease-civic)",
        willChange: "transform",
      }}>
        {/* Index ledger row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.18em", color: "var(--fg-dim)",
          textTransform: "uppercase",
          marginBottom: 32,
        }}>
          <span>{card.idx} · {card.label}</span>
          <span style={{ color, opacity: 0.9 }}>—</span>
        </div>

        {/* Icon */}
        <div style={{
          display: "inline-flex", padding: 14,
          borderRadius: "50%", marginBottom: 24,
          background: "rgba(255,250,240,0.04)",
          border: "1px solid var(--rule)",
          color,
        }}>
          <Icon name={card.icon} size={26} stroke={1.5} />
        </div>

        <h3 className="t-h2" style={{ marginBottom: 12, color: "var(--fg)" }}>{card.title}</h3>
        <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.65 }}>{card.copy}</p>
      </div>
    </Reveal>
  );
}

function Story() {
  return (
    <Section id="mission" tone="ink">
      <div className="cjs-story-top" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 80 }}>
        <Reveal>
          <Eyebrow>The Manifesto · Section 01</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24 }}>
            This is not just a website.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead" style={{ marginBottom: 16 }}>
            It is a public signal: the community is organized, awake, and building forward.
          </p>
          <p style={{ color: "var(--fg-muted)", fontStyle: "italic" }}>
            A digital front porch, a strategy room, and a movement poster — clean enough to trust, strong enough to remember.
          </p>
          <div style={{ marginTop: 24 }}>
            <Pill tone="mono" iconLeft="file-text">Site content is educational and informational. No legal, financial, or investment advice.</Pill>
          </div>
        </Reveal>
      </div>

      {/* Four story cards */}
      <div className="cjs-story-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 18,
        marginBottom: 120,
      }}>
        {STORY_CARDS.map((c, i) => <StoryCard key={c.idx} card={c} delay={i * 90} />)}
      </div>

      {/* Challenge band */}
      <div className="cjs-challenge" style={{
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80,
        padding: "80px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        marginBottom: 60,
      }}>
        <Reveal>
          <Eyebrow tone="rust">The Challenge</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24, marginBottom: 28 }}>
            Neighborhood change should not become community removal.
          </h2>
          <p className="lead">
            Rising costs, development pressure, speculative activity, and decisions made
            without residents can turn "revitalization" into erasure. Casey Jones Strategies
            helps keep people at the center of progress through education, outreach, and
            community strategy.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div style={{
            background: "var(--rich-navy)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--r-5)",
            padding: 32,
            boxShadow: "var(--sh-3)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", right: -40, top: -40,
              width: 180, height: 180, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,164,65,0.18), transparent 60%)",
            }} />
            <Eyebrow>Our charge</Eyebrow>
            <h3 className="t-h1" style={{ marginTop: 16, marginBottom: 16, fontStyle: "italic" }}>
              Protect stability.<br/>Preserve identity.<br/>Build power.
            </h3>
            <p style={{ color: "var(--fg-muted)", margin: 0 }}>
              We partner with residents, organizers, nonprofits, municipalities, and local
              leaders to support anti-displacement education, strategic collaboration,
              volunteer engagement, and community-led progress.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Issue cards */}
      <div className="cjs-issues">
        <Reveal><Eyebrow>What we see on the ground</Eyebrow></Reveal>
        <div className="cjs-issues-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 18, marginTop: 32,
        }}>
          {[
            { title: "Displacement Pressure", icon: "megaphone", copy: "Families may face rent increases, relocation pressure, and neighborhood decisions made without meaningful resident input." },
            { title: "Cultural Erasure",      icon: "landmark",  copy: "When longtime residents are forced out, history and neighborhood identity can be pushed aside with them." },
            { title: "Unequal Investment",    icon: "scale",     copy: "Communities deserve investment conversations that center stability, opportunity, and resident benefit." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div style={{
                padding: "26px 24px",
                border: "1px solid var(--rule)",
                borderRadius: "var(--r-4)",
                background: "rgba(255,250,240,0.02)",
                height: "100%",
              }}>
                <div style={{ color: "var(--rust)", marginBottom: 16 }}>
                  <Icon name={c.icon} size={26} stroke={1.5} />
                </div>
                <h4 className="t-h3" style={{ marginBottom: 10 }}>{c.title}</h4>
                <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: "0.9375rem" }}>{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cjs-story-top { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 56px !important; }
          .cjs-story-grid { grid-template-columns: 1fr !important; }
          .cjs-challenge { grid-template-columns: 1fr !important; gap: 40px !important; padding: 56px 0 !important; }
          .cjs-issues-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .cjs-story-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

window.Story = Story;
