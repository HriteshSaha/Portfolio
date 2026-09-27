import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import { architecture } from "../data/content";

export default function Architecture() {
  return (
    <section className="py-28 border-t border-base bg-soft">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}Architecture</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
            How it's put together.
          </h2>
          <p className="text-muted mt-4 text-lg">
            The same layered architecture underneath every project — sized up
            or down to fit the product.
          </p>
        </div>

        <div className="flex flex-col items-stretch">
          {architecture.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="rounded-xl border border-base bg-elevated px-6 py-5 flex items-center justify-between gap-6">
                <div>
                  <p className="font-display font-semibold text-lg">{layer.label}</p>
                  <p className="text-sm text-muted font-mono mt-0.5">{layer.detail}</p>
                </div>
                <span className="font-mono text-xs text-muted">{`0${i + 1}`}</span>
              </div>
              {i < architecture.length - 1 && (
                <div className="flex justify-center py-2 text-muted">
                  <HiOutlineArrowDown size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-muted mt-8 text-center">
          Payments, AI APIs, messaging platforms and other third-party
          services plug in alongside as each project needs them.
        </p>
      </div>
    </section>
  );
}
