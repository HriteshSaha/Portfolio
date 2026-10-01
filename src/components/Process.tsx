import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { process } from "../data/content";
import SplitHeading from "./SplitHeading";

function Step({
  item,
  index,
  progress,
}: {
  item: (typeof process)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = index / process.length + 0.03;
  const [reached, setReached] = useState(false);
  useMotionValueEvent(progress, "change", (v) => setReached(v >= threshold));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10 lg:pl-0 lg:pt-12"
    >
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 lg:top-0 h-3 w-3 rounded-full border-2 transition-all duration-500 ${
          reached
            ? "border-accent bg-accent shadow-[0_0_0_6px] shadow-accent/20"
            : "border-base bg-base"
        }`}
      />
      <span
        className={`font-display text-5xl font-semibold transition-colors duration-500 ${
          reached ? "text-accent" : "text-muted/40"
        }`}
      >
        {item.step}
      </span>
      <h3 className="font-display font-semibold text-xl mt-4 mb-2">{item.title}</h3>
      <p className="text-muted leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <section id="process" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}How we work</p>
          <SplitHeading
            text="From idea to launch."
            className="font-display font-semibold text-4xl md:text-5xl tracking-tight"
          />
        </div>

        <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
          {/* Timeline track + fill: vertical on small screens, horizontal on lg. */}
          <div aria-hidden className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-base lg:hidden">
            <motion.div style={{ scaleY: scrollYProgress }} className="h-full w-full origin-top bg-accent" />
          </div>
          <div aria-hidden className="absolute left-0 right-0 top-[5px] hidden h-px bg-base lg:block">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full w-full origin-left bg-accent" />
          </div>

          {process.map((item, i) => (
            <Step key={item.step} item={item} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
