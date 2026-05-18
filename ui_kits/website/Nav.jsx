/* Casey Jones Strategies — Sticky Navbar */

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#mission",          label: "Mission" },
    { href: "#strategy",         label: "Strategy" },
    { href: "#programs",         label: "Programs" },
    { href: "#volunteer",        label: "Volunteer" },
    { href: "#investment-group", label: "Partnerships" },
    { href: "#contact",          label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        background: scrolled ? "rgba(7,18,29,0.72)" : "rgba(7,18,29,0)",
        borderBottom: "1px solid " + (scrolled ? "var(--rule)" : "transparent"),
        transition: "background var(--dur-3) var(--ease-civic), backdrop-filter var(--dur-3) var(--ease-civic), border-color var(--dur-3) var(--ease-civic)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)", margin: "0 auto",
          padding: "14px var(--gutter)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Brand lockup */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--fg)" }}>
          <span
            aria-hidden="true"
            style={{
              width: 42, height: 42, borderRadius: "50%",
              background: "var(--paper-cream)",
              display: "grid", placeItems: "center",
              boxShadow: "inset 0 0 0 1px rgba(7,18,29,0.18), 0 4px 12px -4px rgba(0,0,0,0.4)",
            }}
          >
            <img src="./assets/logo-color.png" alt="" width="38" height="38" style={{ objectFit: "contain" }} />
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 17, letterSpacing: 0 }}>Casey Jones</span>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 9.5,
              letterSpacing: "0.32em", textTransform: "uppercase",
              color: "var(--gold)",
            }}>Strategies</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="cjs-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14, fontWeight: 500,
                color: "var(--fg)",
                padding: "8px 12px",
                borderRadius: 6,
                textDecoration: "none",
                transition: "color var(--dur-2), background var(--dur-2)",
              }}
              onMouseEnter={(e) => { e.target.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.target.style.color = "var(--fg)"; }}
            >{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className="cjs-nav-cta" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button href="#donate" variant="primary" size="md" iconLeft="hourglass">Donation Coming Soon</Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="cjs-nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "transparent", border: "1px solid var(--rule-strong)",
            borderRadius: 6, padding: 8, cursor: "pointer", color: "var(--fg)",
          }}
        >
          <Icon name={open ? "x" : "menu"} size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="cjs-nav-mobile-drawer"
          style={{
            display: "none",
            padding: "8px var(--gutter) 24px",
            background: "rgba(7,18,29,0.96)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{
                  padding: "14px 8px", color: "var(--fg)", textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  fontFamily: "var(--font-display)", fontSize: 20,
                }}>{l.label}</a>
            ))}
            <div style={{ marginTop: 16 }}>
              <Button href="#donate" variant="primary" size="lg" iconLeft="hourglass" style={{ width: "100%", justifyContent: "center" }}>Donation Coming Soon</Button>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          .cjs-nav-desktop { display: none !important; }
          .cjs-nav-cta { display: none !important; }
          .cjs-nav-mobile-toggle { display: inline-flex !important; }
          .cjs-nav-mobile-drawer { display: block !important; }
        }
      `}</style>
    </header>
  );
}

window.Nav = Nav;
