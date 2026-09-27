import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { caseStudies, type CaseStudy } from "../data/content";
import MockupScreen from "./MockupScreen";

function BrowserFrame({ study }: { study: CaseStudy }) {
  const [active, setActive] = useState(0);
  const images = study.images;
  const image = images[active];

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

      <div className="relative rounded-2xl border border-base bg-elevated shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-base bg-soft">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 min-w-0 rounded-md bg-elevated border border-base px-3 py-1 font-mono text-xs text-muted truncate">
            {study.domain}
          </div>
        </div>

        <div className="relative aspect-[16/10] bg-soft overflow-hidden group/frame">
          {image.kind === "screenshot" ? (
            <motion.img
              key={image.src}
              src={image.src}
              alt={`${study.name} — ${image.label}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <motion.div
              key={image.variant + image.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <MockupScreen variant={image.variant} />
            </motion.div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-elevated/90 border border-base grid place-items-center text-fg opacity-0 group-hover/frame:opacity-100 transition-opacity hover:border-accent hover:text-accent"
              >
                <HiOutlineChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-elevated/90 border border-base grid place-items-center text-fg opacity-0 group-hover/frame:opacity-100 transition-opacity hover:border-accent hover:text-accent"
              >
                <HiOutlineChevronRight size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={img.label}
              className="group/dot p-1.5"
            >
              <span
                className={`block rounded-full transition-all ${
                  active === i ? "w-6 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-border group-hover/dot:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
      )}
      <p className="mt-2 text-center font-mono text-xs text-muted">{image.label}</p>
    </div>
  );
}

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 items-start pt-10 pb-4">
      <div className="lg:order-2">
        <BrowserFrame study={study} />
      </div>

      <div className="lg:order-1">
        <div className="space-y-5 mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
              The problem
            </p>
            <p className="text-fg/90 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted mb-2">
              The solution
            </p>
            <p className="text-fg/90 leading-relaxed">{study.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1 rounded-full border border-base text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {study.url ? (
          <a
            href={study.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-fg text-base px-6 py-3 font-semibold hover:bg-accent hover:text-accent-fg transition-colors"
          >
            Visit live site
            <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-base px-6 py-3 font-semibold text-muted">
            Placeholder case study
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [openSlug, setOpenSlug] = useState(caseStudies[0].slug);

  return (
    <section id="work" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}Selected work</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
            Recent projects.
          </h2>
          <p className="text-muted mt-4 text-lg">
            GigmaPro is a real, live product. The rest are placeholders —
            swap in real case studies as they come in.
          </p>
        </div>

        <div className="border-t border-base">
          {caseStudies.map((study, i) => {
            const isOpen = openSlug === study.slug;
            return (
              <div key={study.slug} className="border-b border-base">
                <button
                  onClick={() => setOpenSlug(study.slug)}
                  className="w-full flex items-center gap-6 py-7 text-left group"
                >
                  <span className="font-mono text-sm text-muted shrink-0">{`0${i + 1}`}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3
                        className={`font-display font-semibold text-2xl transition-colors ${
                          isOpen ? "text-accent" : "group-hover:text-accent"
                        }`}
                      >
                        {study.name}
                      </h3>
                      <span className="text-xs font-medium uppercase tracking-wide text-muted">
                        {study.category}
                      </span>
                    </div>
                    <p className="text-muted mt-1">{study.tagline}</p>
                  </div>
                  <HiOutlineChevronDown
                    size={20}
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : "group-hover:text-fg"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <CaseStudyPanel study={study} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
