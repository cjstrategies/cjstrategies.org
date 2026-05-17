/* Volunteer section — three categories + signup form */

const VOL_CATEGORIES = [
  { title: "Community Outreach",   icon: "megaphone",    copy: "Help with canvassing, flyers, neighborhood check-ins, event support, and resident engagement." },
  { title: "Research & Resources", icon: "file-text",    copy: "Support local research, resource guides, community data gathering, and education materials." },
  { title: "Creative & Digital",   icon: "sparkles",     copy: "Help with social media, photography, video, design, storytelling, and campaign content." },
];

function Volunteer() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Section id="volunteer" tone="ink">
      <div aria-hidden="true" style={{
        position: "absolute", left: "-10%", top: "20%",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(143,174,144,0.10), transparent 65%)",
      }} />

      <div className="cjs-vol-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
        <Reveal>
          <Eyebrow>Volunteer · Section 04</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24 }}>
            Turn community care<br/>into real capacity.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">
            Volunteers can support outreach, events, research, resource distribution,
            community storytelling, and administrative work. The goal is simple: more
            hands, more clarity, more power.
          </p>
        </Reveal>
      </div>

      {/* Categories */}
      <div className="cjs-vol-cats" style={{
        display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16,
        marginBottom: 64,
      }}>
        {VOL_CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div style={{
              padding: 28, height: "100%",
              background: "var(--deep-blue)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-4)",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "rgba(143,174,144,0.12)", color: "var(--sage)",
                display: "grid", placeItems: "center",
              }}>
                <Icon name={c.icon} size={24} stroke={1.5} />
              </div>
              <h4 className="t-h3" style={{ marginBottom: 0 }}>{c.title}</h4>
              <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: "0.9375rem", lineHeight: 1.65 }}>{c.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Signup card */}
      <Reveal>
        <div className="cjs-vol-form-wrap" style={{
          background: "var(--paper-cream)", color: "var(--ink-fg)",
          borderRadius: "var(--r-5)", overflow: "hidden",
          display: "grid", gridTemplateColumns: "0.85fr 1.15fr",
          boxShadow: "var(--sh-cream)",
        }}>
          {/* Left: brand pinning */}
          <div className="cjs-vol-form-left" style={{
            position: "relative",
            padding: 40,
            background: "var(--warm-cream)",
            borderRight: "1px solid var(--rule-ink)",
            display: "flex", flexDirection: "column", gap: 18,
            minHeight: 480,
          }}>
            <Eyebrow tone="ink">Step on the rail</Eyebrow>
            <h3 className="t-h1" style={{ color: "var(--ink-fg)", marginBottom: 8 }}>
              Sign up.<br/>We'll come find you.
            </h3>
            <p style={{ color: "var(--ink-fg-muted)", marginBottom: 0 }}>
              We'll match your availability and interest with current outreach and
              research needs. No spam, no pressure — just real assignments.
            </p>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
              <Pill tone="paper" iconLeft="check">Background-friendly</Pill>
              <Pill tone="paper" iconLeft="users">2–4 hrs / month is plenty</Pill>
              <Pill tone="paper" iconLeft="hand-heart">Remote + on-the-block roles</Pill>
            </div>
          </div>

          {/* Right: form */}
          <div className="cjs-vol-form-right" style={{ padding: 40 }}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24, alignItems: "flex-start" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(143,174,144,0.18)", color: "#1f6f5b",
                  display: "grid", placeItems: "center",
                }}><Icon name="check" size={28} stroke={2} /></div>
                <h3 className="t-h2" style={{ color: "var(--ink-fg)" }}>Thank you — you're on the manifest.</h3>
                <p style={{ color: "var(--ink-fg-muted)" }}>We'll be in touch within a week with current openings near you.</p>
                <Button variant="lightghost" onClick={() => setSubmitted(false)}>Sign up another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <Field label="Name" required onLight><Input onLight type="text" placeholder="Jordan Rivers" required /></Field>
                  <Field label="Email" required onLight><Input onLight type="email" placeholder="jordan@example.com" required /></Field>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <Field label="Phone" onLight><Input onLight type="tel" placeholder="(415) 555-0123" /></Field>
                  <Field label="Volunteer interest" required onLight>
                    <Select onLight defaultValue="">
                      <option value="" disabled>Choose a lane</option>
                      <option>Community outreach</option>
                      <option>Events and workshops</option>
                      <option>Research and resources</option>
                      <option>Creative / social media</option>
                      <option>Administrative support</option>
                    </Select>
                  </Field>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <Field label="Availability" onLight><Input onLight type="text" placeholder="e.g. weekday evenings, Sat mornings" /></Field>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <Field label="Message" onLight><Textarea onLight rows={4} placeholder="Anything we should know about your skills, neighborhood, or what you'd like to support?" /></Field>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <small style={{ color: "var(--ink-fg-dim)", maxWidth: 320 }}>
                    By signing up you consent to be contacted about volunteer opportunities.
                  </small>
                  <Button type="submit" variant="lightprimary" iconRight="arrow-right">Add me to the list</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cjs-vol-head { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 40px !important; }
          .cjs-vol-cats { grid-template-columns: 1fr !important; }
          .cjs-vol-form-wrap { grid-template-columns: 1fr !important; }
          .cjs-vol-form-left { min-height: auto !important; padding: 28px !important; }
          .cjs-vol-form-right { padding: 28px !important; }
          .cjs-vol-form-right form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

window.Volunteer = Volunteer;
