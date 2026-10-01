import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import DeviceShowcase from "./DeviceShowcase";
import Magnetic from "./Magnetic";
import ScrollLink from "./ScrollLink";

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
      <motion.div
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 35, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-pop/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-mono text-sm text-accent mb-6 tracking-wide"
          >
            {"// "}Websites, apps &amp; AI tools
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
              <span className="text-gradient-animated">actually go live.</span>
              <svg
                className="absolute left-0 -bottom-2 w-full"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 12C60 2 240 2 298 12"
                  stroke="var(--pop)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 0.9, ease: "easeInOut" }}
                />
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
            We design and build websites, web apps, online platforms, and AI
            tools — from first idea to launch.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <ScrollLink
                to="contact"
                className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-accent text-accent-fg px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
              >
                Get a quote
                <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
              </ScrollLink>
            </Magnetic>
            <Magnetic>
              <ScrollLink
                to="work"
                className="inline-flex items-center gap-2 rounded-full border border-base px-7 py-3.5 font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                See our work
              </ScrollLink>
            </Magnetic>
          </motion.div>
        </div>

        <DeviceShowcase />
      </div>
    </section>
  );
}
