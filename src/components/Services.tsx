import { motion } from "framer-motion";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}Services</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
            Ways I can help you build.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-base border border-base rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="bg-base p-8 md:p-10 hover:bg-soft transition-colors"
            >
              <span className="font-mono text-sm text-muted">{service.index}</span>
              <h3 className="font-display font-semibold text-2xl mt-3 mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-base text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
