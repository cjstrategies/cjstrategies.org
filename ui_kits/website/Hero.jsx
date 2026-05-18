/* Casey Jones Strategies — Hero
   Layout: full-bleed dark, vignette + faint star scatter, hero left (eyebrow, headline,
   copy, CTA cluster, trust pills), seal right with idle bob + smoke puffs above the funnel.
   The seal is the provided raster — we never redraw it.
*/

function HeroStars() {
  // 18 stable star positions (no random — keep SSR-stable)
  const stars = [
    [12, 18, 1.1, 0.6], [88, 22, 1.4, 0.85], [22, 76, 0.9, 0.5], [64, 12, 0.7, 0.6],
    [4, 48, 1.0, 0.45], [33, 38, 0.6, 0.4], [78, 60, 1.2, 0.75], [49, 8, 0.9, 0.55],
    [92, 84, 0.8, 0.5], [70, 30, 0.7, 0.65], [16, 88, 1.0, 0.45], [55, 68, 0.6, 0.4],
    [40, 90, 1.1, 0.6], [86, 44, 0.8, 0.5], [25, 24, 0.6, 0.45], [60, 50, 0.5, 0.35],
    [10, 64, 0.7, 0.4], [95, 12, 0.6, 0.55],
  ];
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {stars.map(([x, y, r, o], i) => (
        <span key={i} style={{
          position: "absolute", left: x + "%", top: y + "%",
          width: r * 3, height: r * 3, borderRadius: "50%",
          background: "var(--paper-cream)", opacity: o,
          boxShadow: "0 0 8px rgba(245,236,217,0.6)",
        }} />
      ))}
    </div>
  );
}

function Smoke() {
  // Five staggered cream puffs that drift up and fade. Pure CSS keyframes.
  return (
    <div aria-hidden="true" className="cjs-smoke-stack">
      <style>{`
        @keyframes cjs-puff {
          0%   { transform: translate(0,0)         scale(0.4); opacity: 0; }
          18%  { opacity: 0.85; }
          100% { transform: translate(28px, -160px) scale(2.4); opacity: 0; }
        }
        .cjs-smoke-stack {
          position: absolute;
          top: 4%;
          left: 36%;
          width: 200px;
          height: 220px;
          pointer-events: none;
        }
        .cjs-smoke-stack span {
          position: absolute;
          left: 30%;
          bottom: 0;
          width: 36px; height: 36px;
          background: var(--paper-cream);
          border-radius: 50%;
          opacity: 0;
          animation: cjs-puff 4.4s ease-out infinite;
          filter: blur(0.5px);
        }
        .cjs-smoke-stack span:nth-child(1) { animation-delay: 0s;   width: 32px; height: 32px; left: 32%; }
        .cjs-smoke-stack span:nth-child(2) { animation-delay: 0.7s; width: 38px; height: 38px; left: 36%; }
        .cjs-smoke-stack span:nth-child(3) { animation-delay: 1.4s; width: 30px; height: 30px; left: 30%; }
        .cjs-smoke-stack span:nth-child(4) { animation-delay: 2.1s; width: 40px; height: 40px; left: 38%; }
        .cjs-smoke-stack span:nth-child(5) { animation-delay: 2.8s; width: 28px; height: 28px; left: 34%; }
        @media (prefers-reduced-motion: reduce) {
          .cjs-smoke-stack span { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
      <span /><span /><span /><span /><span />
    </div>
  );
}

function Hero() {
  return (
    <Section id="top" tone="ink" style={{ paddingTop: 140, paddingBottom: 96 }}>
      {/* Background flourishes */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(31,111,139,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(217,164,65,0.08), transparent 60%)",
        zIndex: 1,
      }} />
      <HeroStars />

      <div className="cjs-hero-grid" style={{
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr",
        gap: 64, alignItems: "center", position: "relative", zIndex: 2,
      }}>
        {/* Copy column */}
        <div>
          <Reveal>
            <Eyebrow>Community Education · Grassroots Strategy · Resident-Led Progress</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="t-hero" style={{ marginTop: 28, marginBottom: 28 }}>
              Development<br/>
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Without</span><br/>
              Displacement.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="lead" style={{ marginBottom: 36 }}>
              Casey Jones Strategies supports communities facing displacement
              pressure through education, organizing support, strategic
              partnerships, and community-led progress. We help residents,
              organizers, and local leaders build power while preserving
              culture, stability, and neighborhood identity.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="cjs-hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <Button href="#contact" variant="primary" size="lg" magnetic iconRight="arrow-right">Get connected</Button>
              <Button href="#volunteer" variant="ghost" size="lg">Volunteer sign up</Button>
              <Button href="#investment-group" variant="minimal" size="lg" iconRight="arrow-up-right">Partnerships</Button>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Pill tone="gold" iconLeft="shield-check">501(c)(3) Nonprofit</Pill>
              <Pill tone="mono">EIN · 33-1380624</Pill>
              <Pill tone="mono" iconLeft="book-open">Educational & Community Strategy Support</Pill>
            </div>
          </Reveal>
        </div>

        {/* Seal column */}
        <Reveal delay={120} y={32}>
          <div style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: 440, margin: "0 auto" }}>
            {/* Concentric stamp rings (decorative) */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: -8, borderRadius: "50%",
              border: "1px solid var(--rule-strong)",
            }} />
            <div aria-hidden="true" style={{
              position: "absolute", inset: -32, borderRadius: "50%",
              border: "1px dashed var(--rule)", opacity: 0.6,
            }} />
            <div aria-hidden="true" style={{
              position: "absolute", inset: "calc(50% - 1px)", left: -56, right: -56,
              height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
              opacity: 0.55,
            }} />

            {/* Seal disc — cream paper so the navy art reads */}
            <div className="cjs-hero-seal" style={{
              position: "relative", width: "100%", aspectRatio: "1 / 1",
              borderRadius: "50%", background: "var(--paper-cream)",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(7,18,29,0.08)",
              overflow: "hidden",
              animation: "cjs-bob 3.2s ease-in-out infinite",
              display: "grid", placeItems: "center",
            }}>
              <Smoke />
              <img
                src="./assets/logo-color.png"
                alt="Casey Jones Strategies"
                style={{
                  width: "98%", height: "98%",
                  objectFit: "contain",
                  objectPosition: "center",
                  position: "relative", zIndex: 2,
                }}
              />
              {/* Subtle vignette */}
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(7,18,29,0.08), transparent 60%)",
                pointerEvents: "none", zIndex: 3,
              }} />
            </div>

            {/* Floating receipt ticker (decorative) */}
            <div aria-hidden="true" className="cjs-hero-receipt" style={{
              position: "absolute", bottom: -16, left: -32,
              background: "var(--deep-blue)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-3)",
              padding: "10px 14px",
              boxShadow: "var(--sh-3)",
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--fg-muted)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sage)" }} />
              EST. NOW · ON THE RAIL
            </div>

            <style>{`
              @keyframes cjs-bob {
                0%, 100% { transform: translateY(0); }
                50%      { transform: translateY(-4px); }
              }
              @media (prefers-reduced-motion: reduce) {
                .cjs-hero-seal { animation: none !important; }
              }
            `}</style>
          </div>
        </Reveal>
      </div>

      {/* Track bar at the bottom */}
      <Reveal delay={500}>
        <div style={{ marginTop: 80, position: "relative", zIndex: 2 }}>
          <RailDivider />
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .cjs-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .cjs-hero-cta .cjs-btn { width: 100%; justify-content: center; }
          .cjs-hero-receipt { display: none; }
        }
      `}</style>
    </Section>
  );
}

window.Hero = Hero;
