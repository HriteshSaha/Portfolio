import { motion } from "framer-motion";
import { stack } from "../data/content";

export default function TechStack() {
  return (
    <section id="stack" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}Stack</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
            Tools &amp; technologies.
          </h2>
          <p className="text-muted mt-4 text-lg">
            A modern, TypeScript-first stack for building and running real
            products — not just prototypes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-base bg-soft p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-accent">
                {group.group}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-fg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pop shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
