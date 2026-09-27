import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-accent mb-3">{"// "}Selected work</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
              Recent projects.
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Case studies below are placeholders — swap in real clients,
            links and screenshots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href="#contact"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group relative rounded-2xl border border-base bg-soft p-8 overflow-hidden hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <HiOutlineArrowUpRight
                  size={22}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>

              <h3 className="font-display font-semibold text-2xl mb-3">
                {project.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted">
                    {tag}
                    {tag !== project.tags[project.tags.length - 1] && (
                      <span className="ml-2 text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
