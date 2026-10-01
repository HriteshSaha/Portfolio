import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineBanknotes,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineMapPin,
  HiOutlinePaperClip,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineUserPlus,
} from "react-icons/hi2";

const CYCLE_MS = 4200;

type Notice = { icon: ReactNode; title: string; body: string };

type Site = {
  name: string;
  category: string;
  /** Desktop screenshot for the monitor. */
  desktop: string;
  /** Phone mockup image for the phone, plus the screen area to show from it. */
  mobile: string;
  /**
   * Screen area of the mobile mockup, as fractions of the image: left edge,
   * top edge and width. Cropping to the screen drops the mockup’s own frame
   * and backdrop. The visible height follows from the phone’s 9:19.5 shape.
   */
  crop: { cx: number; cy: number; cw: number };
  /** Two notifications that slide in while this site is on screen. */
  notices: [Notice, Notice];
};

const sites: Site[] = [
  {
    name: "Shopivo",
    category: "Online store",
    desktop: "/showcase/shopivo.webp",
    mobile: "/showcase/shopivo-m.webp",
    crop: { cx: 0.16, cy: 0.034, cw: 0.675 },
    notices: [
      { icon: <HiOutlineShoppingBag size={18} />, title: "New order #1042", body: "Ceramic Table Lamp · $59.00" },
      { icon: <HiOutlineBanknotes size={18} />, title: "Payment received", body: "$59.00 paid by card" },
    ],
  },
  {
    name: "InsightFlow",
    category: "SaaS dashboard",
    desktop: "/showcase/insightflow.webp",
    mobile: "/showcase/insightflow-m.webp",
    crop: { cx: 0.2, cy: 0.056, cw: 0.6 },
    notices: [
      { icon: <HiOutlineChartBar size={18} />, title: "Revenue up 12.5%", body: "Best week of the month" },
      { icon: <HiOutlineUserPlus size={18} />, title: "New user signed up", body: "Joined on the Pro plan" },
    ],
  },
  {
    name: "RideZip",
    category: "Booking platform",
    desktop: "/showcase/ridezip.webp",
    mobile: "/showcase/ridezip-m.webp",
    crop: { cx: 0.05, cy: 0, cw: 0.9 },
    notices: [
      { icon: <HiOutlineMapPin size={18} />, title: "Ride booked", body: "Pickup in 3 min · HSR Layout" },
      { icon: <HiOutlineBell size={18} />, title: "Driver arriving", body: "Rahul is 1.1 km away" },
    ],
  },
  {
    name: "NovaChat AI",
    category: "AI tool",
    desktop: "/showcase/novachat.webp",
    mobile: "/showcase/novachat-m.webp",
    crop: { cx: 0.14, cy: 0.035, cw: 0.71 },
    notices: [
      { icon: <HiOutlineSparkles size={18} />, title: "AI replied in 2s", body: "Your 7-day Japan itinerary is ready" },
      { icon: <HiOutlineDocumentText size={18} />, title: "Summary ready", body: "Report boiled down to 5 key points" },
    ],
  },
  {
    name: "Chattio",
    category: "Web app",
    desktop: "/showcase/chattio.webp",
    mobile: "/showcase/chattio-m.webp",
    crop: { cx: 0.125, cy: 0.045, cw: 0.745 },
    notices: [
      { icon: <HiOutlineChatBubbleLeftRight size={18} />, title: "Emma Watson", body: "Hey! Are we still on for the meeting?" },
      { icon: <HiOutlinePaperClip size={18} />, title: "File delivered", body: "final-design.pdf · 2.4 MB" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** A phone-style notification banner: app icon, title, detail and timestamp. */
function Notification({ notice, className, delay }: { notice: Notice; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      className={`absolute z-20 flex w-[205px] items-center gap-2.5 rounded-2xl border border-white/10 bg-elevated/90 px-2.5 py-2 shadow-2xl backdrop-blur-xl sm:w-[275px] sm:gap-3 sm:px-3 sm:py-2.5 ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-accent to-accent/60 text-accent-fg shadow-md sm:h-9 sm:w-9 sm:rounded-xl">
        {notice.icon}
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="flex items-baseline justify-between gap-2">
          <span className="truncate text-[12px] font-semibold sm:text-[13px]">{notice.title}</span>
          <span className="shrink-0 text-[10px] text-muted">now</span>
        </span>
        <span className="mt-0.5 block truncate text-[11px] text-muted sm:text-xs">{notice.body}</span>
      </span>
    </motion.div>
  );
}

/** Hero visual: a desktop monitor and a phone cycling through real project screens. */
export default function DeviceShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const site = sites[index];
  const { cx, cy, cw } = site.crop;

  // Warm the cache so crossfades never flash an empty screen.
  useEffect(() => {
    sites.forEach((s) => {
      new Image().src = s.desktop;
      new Image().src = s.mobile;
    });
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % sites.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduce]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:w-[calc(100%+1.5rem)] lg:max-w-none"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

      <div className="relative h-[370px] sm:h-[500px]">
        {/* Desktop monitor */}
        <div className="absolute left-0 top-4 w-[92%] sm:top-6">
          <div className="rounded-xl border border-[#6b779c] bg-[#3b4568] p-[5px] pb-0 shadow-2xl sm:rounded-2xl sm:p-[7px]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-md bg-[#05070d] ring-1 ring-black/40 sm:rounded-t-lg">
              <AnimatePresence initial={false}>
                <motion.img
                  key={site.desktop}
                  src={site.desktop}
                  alt={`${site.name} — ${site.category}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.06] to-white/0" />
            </div>
            {/* Chin with power light */}
            <div className="flex h-4 items-center justify-center sm:h-5">
              <span className="h-1 w-1 rounded-full bg-accent/70" />
            </div>
          </div>
          {/* Stand */}
          <div className="mx-auto h-5 w-[13%] bg-gradient-to-b from-[#4a5578] to-[#3b4568] sm:h-7" />
          <div className="mx-auto h-1.5 w-[34%] rounded-t-md rounded-b-xl bg-gradient-to-b from-[#6b779c] to-[#3b4568] shadow-xl sm:h-2" />
        </div>

        {/* Phone */}
        <div className="absolute bottom-3 right-0 z-10 w-[31%] sm:bottom-5">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.4rem] border-[5px] border-[#6b779c] bg-[#05070d] shadow-[0_24px_50px_rgba(0,0,0,0.55)] sm:rounded-[1.8rem] sm:border-[6px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={site.mobile}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                className="absolute inset-0 overflow-hidden bg-[#05070d]"
              >
                {/* Crop to the mockup’s screen so only the app shows. */}
                <img
                  src={site.mobile}
                  alt=""
                  style={{
                    width: `${100 / cw}%`,
                    transform: `translate(-${cx * 100}%, -${cy * 100}%)`,
                  }}
                  className="absolute left-0 top-0 max-w-none origin-top-left"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Notifications for the site on screen. They stack in the empty space
            under the monitor, beside the phone, so they never cover a screen. */}
        <AnimatePresence mode="wait">
          <div key={site.name} className="contents">
            <Notification notice={site.notices[0]} delay={0.5} className="bottom-[54px] left-0 sm:bottom-[64px]" />
            <Notification notice={site.notices[1]} delay={1.2} className="bottom-0 left-4 sm:left-10" />
          </div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={site.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-3 truncate text-center text-sm"
        >
          <span className="font-display font-semibold">{site.name}</span>
          <span className="text-muted"> · {site.category}</span>
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
