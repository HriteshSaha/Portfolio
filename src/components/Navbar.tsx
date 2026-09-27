import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { brand, nav } from "../data/content";

type Props = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-base" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-accent text-accent-fg grid place-items-center font-bold">
            C
          </span>
          {brand.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-fg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-base grid place-items-center text-fg hover:border-accent transition-colors"
          >
            {theme === "dark" ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-accent text-accent-fg text-sm font-semibold px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Start a project
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-full border border-base grid place-items-center"
          >
            {open ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-base border-t border-base px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-fg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent text-accent-fg text-sm font-semibold px-5 py-2"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
