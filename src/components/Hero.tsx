import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { brand } from "../data/content";
import CodeWindow from "./CodeWindow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-28 md:pt-32 md:pb-36">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-pop/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-mono text-sm text-accent mb-6 tracking-wide"
          >
            {"// "}Full-stack web development
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display font-semibold text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-tight"
          >
            Websites, apps &amp;
            <br />
            <span className="text-muted">platforms that</span>
            <br />
            <span className="relative inline-block">
              actually ship.
              <svg
                className="absolute left-0 -bottom-2 w-full"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 12C60 2 240 2 298 12" stroke="var(--pop)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg text-muted"
          >
            {brand.name} designs and builds websites, web applications, SaaS
            platforms and AI-enabled tools — end to end, from database to
            deployment.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fg text-base px-7 py-3.5 font-semibold hover:bg-accent hover:text-accent-fg transition-colors"
            >
              Start a project
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-base px-7 py-3.5 font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              See past work
            </a>
          </motion.div>
        </div>

        <CodeWindow />
      </div>
    </section>
  );
}
