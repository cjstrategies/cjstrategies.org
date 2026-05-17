/* Casey Jones Strategies — motion primitives
   - useReveal: IntersectionObserver-driven 24px translateY + opacity fade
   - useScrollProgress: 0..1 scroll fraction → top gold bar
   - useCursorLight: desktop cursor-following soft gold halo
   - useMagnetic: button magnet on hover
   - useTilt: 1.5° tilt-on-cursor for cards
   All respect prefers-reduced-motion.
*/
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Reveal on scroll ---------- */
function useReveal(opts = {}) {
  const { delay = 0, y = 24, once = true, rootMargin = "0px 0px -10% 0px" } = opts;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (prefersReducedMotion()) { setShown(true); return; }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      });
    }, { rootMargin, threshold: 0.08 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  const style = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 640ms var(--ease-civic) ${delay}ms, transform 640ms var(--ease-civic) ${delay}ms`,
    willChange: "opacity, transform",
  };
  return [ref, style, shown];
}

/* ---------- Reveal wrapper component ---------- */
function Reveal({ delay = 0, y = 24, as = "div", className, style, children, ...rest }) {
  const [ref, revealStyle] = useReveal({ delay, y });
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{ ...revealStyle, ...(style || {}) }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Scroll progress bar ---------- */
function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 100,
        background: "rgba(255,250,240,0.06)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, var(--gold), var(--river-blue))",
          transform: `scaleX(${p})`,
          transformOrigin: "left center",
          transition: "transform 80ms linear",
        }}
      />
    </div>
  );
}

/* ---------- Cursor light (desktop only) ---------- */
function CursorLight() {
  const ref = React.useRef(null);
  const [enabled, setEnabled] = React.useState(true);
  React.useEffect(() => {
    if (prefersReducedMotion()) { setEnabled(false); return; }
    if (window.matchMedia("(hover: none)").matches) { setEnabled(false); return; }
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      node.style.transform = `translate3d(${e.clientX - 240}px, ${e.clientY - 240}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0, width: 480, height: 480,
        pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(closest-side, rgba(217,164,65,0.10), rgba(217,164,65,0) 70%)",
        transition: "opacity 400ms",
        willChange: "transform",
      }}
    />
  );
}

/* ---------- Magnetic button hover ---------- */
function useMagnetic(strength = 0.25) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      node.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => { node.style.transform = "translate(0,0)"; };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);
  return ref;
}

/* ---------- Tilt card ---------- */
function useTilt(max = 6) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      node.style.transform = `perspective(800px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(0)`;
    };
    const onLeave = () => {
      node.style.transform = `perspective(800px) rotateX(0) rotateY(0)`;
    };
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);
  return ref;
}

Object.assign(window, {
  useReveal, Reveal, ScrollProgress, CursorLight, useMagnetic, useTilt, prefersReducedMotion,
});
