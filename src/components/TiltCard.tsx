import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Turn off the 3D tilt and keep only the cursor spotlight. */
  tilt?: boolean;
  /** Max tilt in degrees. */
  max?: number;
};

const spring = { stiffness: 220, damping: 22, mass: 0.4 };

/** Card with a cursor-following glow and an optional subtle 3D tilt. */
export default function TiltCard({ children, className = "", tilt = true, max = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotX = useSpring(useMotionValue(0), spring);
  const rotY = useSpring(useMotionValue(0), spring);
  const canTilt = tilt && !reduce;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
    if (canTilt) {
      rotY.set((px / r.width - 0.5) * 2 * max);
      rotX.set(-(py / r.height - 0.5) * 2 * max);
    }
  };

  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={canTilt ? { rotateX: rotX, rotateY: rotY, transformPerspective: 900 } : undefined}
      className={`group/tilt relative ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />
      {children}
    </motion.div>
  );
}
