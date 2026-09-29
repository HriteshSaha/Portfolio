import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";
import { brand } from "../data/content";

export default function NotFoundPage() {
  const { theme, toggle } = useTheme();

  return (
    <div className="bg-base text-fg min-h-screen flex flex-col">
      <header className="fixed top-0 inset-x-0 z-50 bg-base/80 backdrop-blur-md border-b border-base">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-display font-semibold text-lg tracking-tight">
            <img src="/brand/logo-mark-180.png" alt="" className="w-8 h-8 object-contain" />
            {brand.name}
          </Link>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-base grid place-items-center text-fg hover:border-accent transition-colors"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main className="relative flex-1 flex items-center justify-center overflow-hidden px-6 pt-16">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-[-15%] h-[420px] w-[420px] rounded-full bg-pop/10 blur-[120px]" />

        <div className="relative text-center max-w-xl">
          <p className="font-mono text-sm text-accent mb-6 tracking-wide">
            {"// "}404 — page not found
          </p>

          <h1 className="font-display font-semibold text-[clamp(4rem,14vw,9rem)] leading-none tracking-tight">
            4<span className="text-accent">0</span>4
          </h1>

          <p className="mt-6 text-lg text-muted">
            This page doesn't exist — it may have moved, or the link is broken.
          </p>

          <p className="mt-2 font-mono text-sm text-muted">
            <span className="text-pop">const</span> page = <span className="text-accent">undefined</span>;
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-fg px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity"
            >
              <HiOutlineArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-base px-7 py-3.5 font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Go back
            </button>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-muted hover:text-accent transition-colors"
            >
              Report a broken link
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-base py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-semibold text-sm">
            <img src="/brand/logo-mark-180.png" alt="" className="w-6 h-6 object-contain" />
            {brand.name}
          </div>
          <p className="text-sm text-muted font-mono">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
