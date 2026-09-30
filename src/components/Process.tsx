import { motion } from "framer-motion";
import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}How we work</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
            From idea to launch.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pt-8"
            >
              <span className="font-display text-5xl font-semibold text-muted/40">
                {item.step}
              </span>
              <h3 className="font-display font-semibold text-xl mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
