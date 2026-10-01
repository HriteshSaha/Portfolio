import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { architecture, process, services, stack } from "../data/content";

// Derived from the site's own content so the numbers never drift from the copy.
const techCount = new Set(stack.flatMap((g) => g.items)).size;

const stats = [
  { value: services.length, label: "Services we offer", suffix: "" },
  { value: techCount, label: "Tools & technologies", suffix: "+" },
  { value: process.length, label: "Steps from idea to launch", suffix: "" },
  { value: architecture.length, label: "Layers in every build", suffix: "" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-t border-base">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center md:text-left md:px-6 md:border-l border-base md:first:border-l-0 md:first:pl-0"
          >
            <p className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-accent">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
