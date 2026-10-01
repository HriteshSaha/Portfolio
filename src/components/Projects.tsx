import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { HiOutlineArrowUpRight, HiOutlineChevronDown } from "react-icons/hi2";
import { caseStudies, type CaseStudy } from "../data/content";
import MockupScreen from "./MockupScreen";
import SplitHeading from "./SplitHeading";
import TiltCard from "./TiltCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Magnetic "Visit live site" badge that floats over the slider image.
 * Follows the cursor with a springy lag (magnetic pull) and snaps back
 * when the cursor leaves. Hidden entirely when the study has no URL.
 */
function MagneticLiveLink({ study }: { study: CaseStudy }) {
  if (!study.url) return null;
  return <MagneticBadge url={study.url} name={study.name} />;
}

function MagneticBadge({ url, name }: { url: string; name: string }) {
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const badge = badgeRef.current;
    if (!badge) return;
    // Pull is measured from the badge's own resting spot (its rect minus the
    // offset we've already applied), so the badge stays anchored. The effect
    // only plays when the cursor is within MAGNET_RADIUS of it — elsewhere on
    // the image the badge holds its position.
    const rect = badge.getBoundingClientRect();
    const restX = rect.left + rect.width / 2 - x.get();
    const restY = rect.top + rect.height / 2 - y.get();
    const dx = e.clientX - restX;
    const dy = e.clientY - restY;
    const MAGNET_RADIUS = 150;
    const MAX_PULL = 16;
    if (Math.hypot(dx, dy) > MAGNET_RADIUS) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, dx * 0.25)));
    y.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, dy * 0.25)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHovering(false);
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      <motion.a
        ref={badgeRef}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${name} live site (opens in a new tab)`}
        style={{ x: springX, y: springY }}
        animate={{
          opacity: hovering ? 1 : 0.85,
          scale: hovering ? 1.05 : 1,
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="group/link pointer-events-auto absolute bottom-14 left-4 inline-flex items-center gap-2 rounded-full bg-base/80 backdrop-blur-md border border-base px-4 py-2.5 font-semibold text-sm text-fg shadow-xl hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        Visit live site
        <motion.span
          aria-hidden
          className="inline-block"
          whileHover={{ x: 2, y: -2 }}
        >
          <HiOutlineArrowUpRight size={16} />
        </motion.span>
      </motion.a>
    </div>
  );
}

function ProjectSlider({ study }: { study: CaseStudy }) {
  const images = study.images;

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

        <div className="relative">
          <Swiper
            modules={[A11y, Keyboard, Navigation, Pagination]}
            spaceBetween={0}
            speed={450}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={images.length > 1}
            className="project-swiper group/frame"
          >
            {images.map((image, i) => (
              <SwiperSlide key={i} className="relative aspect-[16/10] bg-soft overflow-hidden">
                {image.kind === "screenshot" ? (
                  <img
                    src={image.src}
                    alt={`${study.name} — ${image.label}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/frame:scale-[1.04]">
                    <MockupScreen variant={image.variant} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <MagneticLiveLink study={study} />
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-xs text-muted">
        {study.name} — {images.length > 1 ? `${images.length} screenshots` : "preview"}
      </p>
    </div>
  );
}

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 items-start pt-10 pb-4">
      <div className="lg:order-2 min-w-0">
        <TiltCard tilt max={2.5} className="rounded-2xl">
          <ProjectSlider study={study} />
        </TiltCard>
      </div>

      <div className="lg:order-1 min-w-0">
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
          {study.tags.map((tag, i) => (
            <span
              key={tag}
              className={`font-mono text-xs px-3 py-1 rounded-full border ${
                chipVariants[i % chipVariants.length]
              }`}
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
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-fg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
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

// Rotating accent chip styles so tech tags don't all read as identical.
const chipVariants = [
  "border-accent/40 text-accent bg-accent/10",
  "border-pop/40 text-pop bg-pop/10",
  "border-base text-muted hover:border-accent/40 hover:text-accent transition-colors",
];

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(caseStudies[0].slug);

  const toggle = (slug: string) => setOpenSlug((cur) => (cur === slug ? null : slug));

  return (
    <section id="work" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-accent mb-3">{"// "}Our work</p>
          <SplitHeading
            text="Recent projects."
            className="font-display font-semibold text-4xl md:text-5xl tracking-tight"
          />
          <p className="text-muted mt-4 text-lg">
            A few projects we've built. More case studies coming soon.
          </p>
        </div>

        <div className="border-t border-base">
          {caseStudies.map((study, i) => {
            const isOpen = openSlug === study.slug;
            return (
              <div key={study.slug} className="border-b border-base">
                <button
                  onClick={() => toggle(study.slug)}
                  aria-expanded={isOpen}
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
                  <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {isOpen ? "Hide case study" : "View case study"}
                    <HiOutlineArrowUpRight size={14} />
                  </span>
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
