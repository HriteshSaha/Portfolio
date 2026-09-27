import { motion } from "framer-motion";

const lines: { tokens: { text: string; cls?: string }[] }[] = [
  { tokens: [{ text: "type", cls: "text-pop" }, { text: " Stack " }, { text: "=", cls: "text-muted" }, { text: " {" }] },
  { tokens: [{ text: "  frontend", cls: "text-accent" }, { text: ": " }, { text: "\"React + Next.js\"", cls: "text-pop" }, { text: "," }] },
  { tokens: [{ text: "  backend", cls: "text-accent" }, { text: ": " }, { text: "\"Node + Fastify\"", cls: "text-pop" }, { text: "," }] },
  { tokens: [{ text: "  database", cls: "text-accent" }, { text: ": " }, { text: "\"PostgreSQL\"", cls: "text-pop" }, { text: "," }] },
  { tokens: [{ text: "};" }] },
  { tokens: [] },
  { tokens: [{ text: "export", cls: "text-pop" }, { text: " " }, { text: "async function", cls: "text-pop" }, { text: " " }, { text: "deploy", cls: "text-accent" }, { text: "(product) {" }] },
  { tokens: [{ text: "  await", cls: "text-pop" }, { text: " build(product);" }] },
  { tokens: [{ text: "  await", cls: "text-pop" }, { text: " ship(product);" }] },
  { tokens: [{ text: "  " }, { text: "return", cls: "text-pop" }, { text: " " }, { text: "\"shipped\"", cls: "text-pop" }, { text: ";" }] },
  { tokens: [{ text: "}" }] },
];

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

      <div className="relative rounded-2xl border border-base bg-elevated shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-base bg-soft">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-muted">stack.ts</span>
        </div>

        <pre className="font-mono text-[13px] leading-relaxed p-6 overflow-x-auto">
          <code>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                className="whitespace-pre text-fg/90 min-h-[1.6em]"
              >
                {line.tokens.length === 0
                  ? " "
                  : line.tokens.map((t, j) => (
                      <span key={j} className={t.cls}>
                        {t.text}
                      </span>
                    ))}
              </motion.div>
            ))}
            <motion.span
              aria-hidden
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.51, 1] }}
              className="inline-block w-[7px] h-[15px] bg-accent align-text-bottom ml-0.5"
            />
          </code>
        </pre>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -bottom-6 -right-4 rounded-xl border border-base bg-elevated shadow-xl px-4 py-3 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs font-medium">build passing</span>
      </motion.div>
    </motion.div>
  );
}
