/* Contact section — four tabbed forms */

const TABS = [
  { key: "connect", label: "Get Connected", icon: "mail" },
  { key: "vol",     label: "Volunteer",     icon: "hand-heart" },
  { key: "ig",      label: "Investment Group", icon: "coins" },
  { key: "partner", label: "Partner",       icon: "users-round" },
];

const FORMS = {
  connect: {
    title: "Get connected.",
    sub:   "For residents, neighbors, and friends of the work.",
    fields: [
      { type: "text",   label: "Name",            placeholder: "Jordan Rivers", required: true },
      { type: "email",  label: "Email",           placeholder: "jordan@example.com", required: true },
      { type: "text",   label: "Neighborhood / City", placeholder: "West Atlanta, GA" },
      { type: "select", label: "What are you reaching out about?", required: true,
        options: ["Community education", "Displacement concern", "Resident meeting or workshop", "Partner connection", "Other"] },
      { type: "textarea", label: "Message", placeholder: "Tell us what's on your block." },
    ],
    finePrint: "Please do not submit confidential legal, financial, or sensitive personal information through this sample form.",
    cta: "Send message",
  },
  vol: {
    title: "Volunteer sign up.",
    sub:   "Outreach, research, creative, admin — many ways in.",
    fields: [
      { type: "text",  label: "Name",     placeholder: "Jordan Rivers", required: true },
      { type: "email", label: "Email",    placeholder: "jordan@example.com", required: true },
      { type: "tel",   label: "Phone",    placeholder: "(415) 555-0123" },
      { type: "select", label: "Volunteer interest", required: true,
        options: ["Community outreach", "Events and workshops", "Research and resources", "Creative / social media", "Administrative support"] },
      { type: "text",  label: "Availability", placeholder: "e.g. weekday evenings, Sat mornings" },
      { type: "textarea", label: "Message", placeholder: "Anything we should know about your skills, neighborhood, or schedule?" },
    ],
    cta: "Add me to the list",
  },
  ig: {
    title: "Investment Group interest.",
    sub:   "Interest only. Not an offer. Not a solicitation.",
    fields: [
      { type: "text",  label: "Name",                 placeholder: "Jordan Rivers", required: true },
      { type: "email", label: "Email",                placeholder: "jordan@example.com", required: true },
      { type: "text",  label: "Organization / Company", placeholder: "(optional)" },
      { type: "select", label: "Interest area", required: true,
        options: ["Mission-aligned funding", "Community development partnership", "Small business support", "Real estate / development conversation", "Professional services"] },
      { type: "textarea", label: "Message", placeholder: "Briefly describe your interest." },
    ],
    finePrint: "This is an interest form only. It is not an offer to sell securities or a solicitation to invest.",
    cta: "Join interest list",
  },
  partner: {
    title: "Partner with us.",
    sub:   "Coalitions, sponsors, advisors, and media.",
    fields: [
      { type: "text",  label: "Name",         placeholder: "Jordan Rivers", required: true },
      { type: "text",  label: "Organization", placeholder: "Acme Civic Co." },
      { type: "email", label: "Email",        placeholder: "jordan@example.com", required: true },
      { type: "select", label: "How do you want to help?", required: true,
        options: ["Community partnership", "Legal / policy referral partner", "Donation or sponsorship", "Media inquiry", "Other"] },
      { type: "textarea", label: "Message", placeholder: "Tell us about the proposed collaboration." },
    ],
    cta: "Start a conversation",
  },
};

function FormFor({ data }) {
  const [submitted, setSubmitted] = React.useState(false);
  React.useEffect(() => { setSubmitted(false); }, [data]);

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24, alignItems: "flex-start" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "rgba(143,174,144,0.18)", color: "var(--sage)",
          display: "grid", placeItems: "center",
        }}><Icon name="check" size={28} stroke={2} /></div>
        <h3 className="t-h2">Received. We'll be in touch.</h3>
        <p style={{ color: "var(--fg-muted)" }}>Thank you. This is a sample form — wire it to a CRM, Google Sheet, or Airtable to receive submissions.</p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>Send another</Button>
      </div>
    );
  }

  // Layout: name+email side-by-side; everything else stacked.
  const pairs = [];
  const stack = [];
  const consumed = new Set();
  data.fields.forEach((f, i) => {
    if (consumed.has(i)) return;
    if ((f.type === "text" || f.type === "email" || f.type === "tel") && i + 1 < data.fields.length) {
      const n = data.fields[i + 1];
      if (n.type === "text" || n.type === "email" || n.type === "tel") {
        pairs.push([f, n]);
        consumed.add(i); consumed.add(i + 1);
        return;
      }
    }
    stack.push(f);
    consumed.add(i);
  });

  const renderField = (f) => {
    let control;
    if (f.type === "textarea") control = <Textarea rows={4} placeholder={f.placeholder} required={f.required} />;
    else if (f.type === "select") {
      control = <Select defaultValue="" required={f.required}>
        <option value="" disabled>Choose one</option>
        {f.options.map((o) => <option key={o}>{o}</option>)}
      </Select>;
    } else control = <Input type={f.type} placeholder={f.placeholder} required={f.required} />;
    return <Field label={f.label} required={f.required}>{control}</Field>;
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* render in original order, pairing text-likes */}
        {(() => {
          const elements = [];
          let i = 0;
          while (i < data.fields.length) {
            const f = data.fields[i];
            const isShortType = (t) => t === "text" || t === "email" || t === "tel";
            if (isShortType(f.type) && i + 1 < data.fields.length && isShortType(data.fields[i + 1].type)) {
              const n = data.fields[i + 1];
              elements.push(
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="cjs-form-row">
                  {renderField(f)}
                  {renderField(n)}
                </div>
              );
              i += 2;
            } else {
              elements.push(<div key={i}>{renderField(f)}</div>);
              i += 1;
            }
          }
          return elements;
        })()}

        {data.finePrint && (
          <small style={{ color: "var(--fg-dim)", paddingTop: 8, paddingBottom: 4, borderTop: "1px dashed var(--rule)" }}>
            {data.finePrint}
          </small>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
          <Button type="submit" variant="primary" iconRight="send">{data.cta}</Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .cjs-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

function Contact() {
  const [tab, setTab] = React.useState("connect");
  const data = FORMS[tab];

  return (
    <Section id="contact" tone="ink">
      <div className="cjs-contact-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 48 }}>
        <Reveal>
          <Eyebrow>Get in touch · Section 08</Eyebrow>
          <h2 className="t-display" style={{ marginTop: 24 }}>
            Get connected.<br/>
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Volunteer.</span><br/>
            Build power.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead">
            These sample forms are ready to connect to a secure backend, CRM, Google
            Sheet, Airtable, or nonprofit database.
          </p>
          <p style={{ color: "var(--fg-muted)" }}>
            Pick the door you'd like to come through.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="cjs-contact-wrap" style={{
          display: "grid", gridTemplateColumns: "0.32fr 0.68fr",
          background: "var(--rich-navy)",
          border: "1px solid var(--rule)",
          borderRadius: "var(--r-5)",
          overflow: "hidden",
          boxShadow: "var(--sh-3)",
        }}>
          {/* Tabs (left rail) */}
          <div className="cjs-contact-tabs" style={{
            background: "var(--deep-blue)",
            borderRight: "1px solid var(--rule)",
            padding: 12,
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            {TABS.map((t) => {
              const isActive = t.key === tab;
              return (
                <button key={t.key} onClick={() => setTab(t.key)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "14px 16px",
                    background: isActive ? "var(--ink)" : "transparent",
                    border: "1px solid " + (isActive ? "var(--gold)" : "transparent"),
                    borderRadius: "var(--r-3)",
                    color: isActive ? "var(--gold)" : "var(--fg)",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)", fontSize: 14,
                    fontWeight: 500, textAlign: "left",
                    transition: "all var(--dur-2) var(--ease-civic)",
                  }}>
                  <Icon name={t.icon} size={18} stroke={1.5}
                    style={{ color: isActive ? "var(--gold)" : "var(--fg-muted)" }}/>
                  <span>{t.label}</span>
                  {isActive && <Icon name="arrow-right" size={14} style={{ marginLeft: "auto", color: "var(--gold)" }} />}
                </button>
              );
            })}

            <div style={{ marginTop: "auto", paddingTop: 24, paddingLeft: 8 }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--fg-dim)", marginBottom: 8,
              }}>Office</div>
              <p style={{ color: "var(--fg-muted)", margin: 0, fontSize: 13, lineHeight: 1.6 }}>
                <a href="mailto:info@cjstrategies.org" style={{ color: "var(--gold)", textDecoration: "none" }}>info@cjstrategies.org</a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div key={tab} className="cjs-contact-form" style={{ padding: 40, animation: "cjs-tab-in 400ms var(--ease-rail)" }}>
            <h3 className="t-h1" style={{ marginBottom: 8 }}>{data.title}</h3>
            <p style={{ color: "var(--fg-muted)", marginBottom: 28 }}>{data.sub}</p>
            <FormFor data={data} />
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes cjs-tab-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .cjs-contact-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .cjs-contact-wrap { grid-template-columns: 1fr !important; }
          .cjs-contact-tabs { border-right: 0 !important; border-bottom: 1px solid var(--rule); flex-direction: row !important; overflow-x: auto; padding: 8px !important; }
          .cjs-contact-tabs > button { flex: 1 0 auto; }
          .cjs-contact-form { padding: 28px !important; }
        }
      `}</style>
    </Section>
  );
}

window.Contact = Contact;
