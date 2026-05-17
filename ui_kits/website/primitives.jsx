/* Casey Jones Strategies — shared primitives
   Button, Pill, Card, Input, Field, Eyebrow, Section, RailDivider, BadgeLogo, Stamp.
   All consume tokens from colors_and_type.css.
*/

/* ---------- Button ----------
   variants: primary | ghost | minimal
   sizes: md | lg
   magnetic: optional pointer-following lift
*/
function Button({
  children, variant = "primary", size = "md", magnetic = false,
  iconRight, iconLeft, href, onClick, type = "button", style, className = "", ...rest
}) {
  const magRef = magnetic ? useMagnetic(0.22) : null;
  const sizeStyle = size === "lg"
    ? { padding: "18px 28px", fontSize: "1.0625rem" }
    : { padding: "13px 22px", fontSize: "1rem" };
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10,
    fontFamily: "var(--font-sans)", fontWeight: 600,
    letterSpacing: 0.1, borderRadius: "var(--r-3)",
    border: "1px solid transparent", cursor: "pointer",
    transition: "transform var(--dur-2) var(--ease-spring), background var(--dur-2) var(--ease-civic), color var(--dur-2) var(--ease-civic), border-color var(--dur-2) var(--ease-civic), box-shadow var(--dur-2) var(--ease-civic)",
    textDecoration: "none",
    ...sizeStyle, ...style,
  };
  const variants = {
    primary: {
      background: "var(--gold)", color: "var(--ink)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
    },
    ghost: {
      background: "transparent", color: "var(--fg)",
      border: "1px solid var(--rule-strong)",
    },
    minimal: {
      background: "transparent", color: "var(--fg)", padding: 0,
      border: "1px solid transparent",
    },
    lightprimary: {
      background: "var(--ink)", color: "var(--paper-cream)",
    },
    lightghost: {
      background: "transparent", color: "var(--ink)",
      border: "1px solid var(--rule-ink-strong)",
    },
  };
  const finalStyle = { ...base, ...variants[variant] };
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={size === "lg" ? 20 : 18} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={size === "lg" ? 20 : 18} />}
    </>
  );
  if (href) {
    return (
      <a ref={magRef} href={href} className={"cjs-btn cjs-btn--" + variant + " " + className} style={finalStyle} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={magRef} type={type} onClick={onClick} className={"cjs-btn cjs-btn--" + variant + " " + className} style={finalStyle} {...rest}>
      {inner}
    </button>
  );
}

/* ---------- Pill / Trust pill ---------- */
function Pill({ children, tone = "default", iconLeft, style, className = "" }) {
  const tones = {
    default: { background: "rgba(255,250,240,0.04)", color: "var(--fg)", border: "1px solid var(--rule-strong)" },
    mono:    { background: "transparent", color: "var(--fg-muted)", border: "1px solid var(--rule)" },
    gold:    { background: "rgba(217,164,65,0.08)", color: "var(--gold)", border: "1px solid rgba(217,164,65,0.45)" },
    sage:    { background: "rgba(143,174,144,0.08)", color: "var(--sage)", border: "1px solid rgba(143,174,144,0.45)" },
    rust:    { background: "rgba(184,100,63,0.08)", color: "var(--rust)", border: "1px solid rgba(184,100,63,0.45)" },
    paper:   { background: "rgba(7,18,29,0.04)", color: "var(--ink-fg)", border: "1px solid var(--rule-ink-strong)" },
  };
  return (
    <span
      className={"cjs-pill " + className}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "7px 12px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6875rem",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        fontWeight: 500,
        borderRadius: "var(--r-full)",
        whiteSpace: "nowrap",
        ...tones[tone], ...style,
      }}
    >
      {iconLeft && <Icon name={iconLeft} size={13} stroke={1.75} />}
      {children}
    </span>
  );
}

/* ---------- Eyebrow ---------- */
function Eyebrow({ children, tone = "gold", className = "", style }) {
  const color = tone === "ink" ? "var(--ink-fg-muted)" : tone === "rust" ? "var(--rust)" : "var(--gold)";
  return (
    <div
      className={"cjs-eyebrow " + className}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color, fontWeight: 500,
        display: "inline-flex", alignItems: "center", gap: 10,
        ...style,
      }}
    >
      <span style={{ width: 22, height: 1, background: "currentColor", display: "inline-block" }} />
      {children}
    </div>
  );
}

/* ---------- Section wrapper ---------- */
function Section({ id, tone = "ink", children, eyebrowLane, style, className = "" }) {
  const tones = {
    ink:        { background: "var(--ink)",        color: "var(--fg)" },
    "rich":     { background: "var(--rich-navy)",  color: "var(--fg)" },
    "deep":     { background: "var(--deep-blue)",  color: "var(--fg)" },
    paper:      { background: "var(--paper-cream)", color: "var(--ink-fg)" },
    warm:       { background: "var(--warm-cream)", color: "var(--ink-fg)" },
  };
  return (
    <section
      id={id}
      data-screen-label={id}
      className={"cjs-section " + className}
      style={{
        ...tones[tone],
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {eyebrowLane && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: tone === "paper" || tone === "warm" ? "var(--rule-ink)" : "var(--rule)",
          }}
        />
      )}
      <div
        style={{
          maxWidth: "var(--maxw)", margin: "0 auto",
          paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)",
          position: "relative", zIndex: 2,
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* ---------- Rail divider (rail-line pattern between sections) ---------- */
function RailDivider({ tone = "dark", style }) {
  const stroke = tone === "dark" ? "rgba(255,250,240,0.2)" : "rgba(7,18,29,0.2)";
  return (
    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.8, ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid " + stroke }} />
      <span style={{ flex: 1, height: 1, background: stroke }} />
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: stroke }} />
      <span style={{ width: 60, height: 1, background: stroke }} />
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: stroke }} />
      <span style={{ flex: 1, height: 1, background: stroke }} />
      <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid " + stroke }} />
    </div>
  );
}

/* ---------- Input + Field ---------- */
function Field({ label, required, hint, children, onLight = false }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6875rem", letterSpacing: "0.14em",
        textTransform: "uppercase", color: onLight ? "var(--ink-fg-muted)" : "var(--fg-muted)",
      }}>
        {label}{required && <span style={{ color: "var(--rust)", marginLeft: 4 }}>*</span>}
      </span>
      {children}
      {hint && <small style={{ color: onLight ? "var(--ink-fg-dim)" : "var(--fg-dim)" }}>{hint}</small>}
    </label>
  );
}

function inputStyle(onLight) {
  return {
    width: "100%", boxSizing: "border-box",
    padding: "12px 14px",
    fontFamily: "var(--font-sans)", fontSize: "0.9375rem",
    background: onLight ? "var(--white)" : "rgba(7,18,29,0.4)",
    color: onLight ? "var(--ink-fg)" : "var(--fg)",
    border: "1.5px solid " + (onLight ? "var(--rule-ink-strong)" : "var(--rule-strong)"),
    borderRadius: "var(--r-2)",
    outline: "none",
    transition: "border-color var(--dur-2) var(--ease-civic), background var(--dur-2) var(--ease-civic)",
  };
}

function Input({ onLight, ...props }) {
  return <input style={inputStyle(onLight)} {...props}
    onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; props.onFocus && props.onFocus(e); }}
    onBlur={(e) => { e.target.style.borderColor = onLight ? "var(--rule-ink-strong)" : "var(--rule-strong)"; props.onBlur && props.onBlur(e); }} />;
}
function Textarea({ onLight, rows = 4, ...props }) {
  return <textarea rows={rows} style={{ ...inputStyle(onLight), resize: "vertical", minHeight: 96 }} {...props}
    onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; props.onFocus && props.onFocus(e); }}
    onBlur={(e) => { e.target.style.borderColor = onLight ? "var(--rule-ink-strong)" : "var(--rule-strong)"; props.onBlur && props.onBlur(e); }} />;
}
function Select({ onLight, children, ...props }) {
  return (
    <select style={{ ...inputStyle(onLight), appearance: "none", paddingRight: 40, backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1.5 6 6.5 11 1.5' fill='none' stroke='%23d9a441' stroke-width='1.5' stroke-linecap='round'/></svg>\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }} {...props}>
      {children}
    </select>
  );
}

/* ---------- Badge Logo (uses provided raster seal) ----------
   `variant`: "color" uses the dark-on-cream seal; "mono" uses the cream-on-dark seal.
*/
function BadgeLogo({ size = 44, variant = "mono", style = {} }) {
  const src = variant === "color" ? "./assets/logo-color.png" : "./assets/logo-mono.png";
  return (
    <img
      src={src}
      alt="Casey Jones Strategies"
      width={size}
      height={size}
      style={{ display: "block", objectFit: "contain", ...style }}
    />
  );
}

/* ---------- Civic stamp (decorative ledger mark) ---------- */
function Stamp({ children, style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "inline-flex", alignItems: "center", gap: 12,
        padding: "10px 18px",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-2)",
        fontFamily: "var(--font-mono)", fontSize: "0.6875rem", letterSpacing: "0.16em",
        textTransform: "uppercase", color: "var(--fg-muted)",
        background: "rgba(255,250,240,0.02)",
        ...style,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
      {children}
    </div>
  );
}

Object.assign(window, { Button, Pill, Eyebrow, Section, RailDivider, Field, Input, Textarea, Select, BadgeLogo, Stamp });
