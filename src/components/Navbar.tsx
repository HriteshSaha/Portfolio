import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { brand, nav } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ScrollLink from "./ScrollLink";

type Props = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative text-sm transition-colors ${
      active === href ? "text-fg" : "text-muted hover:text-fg"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-base" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <ScrollLink to="top" className="flex items-center gap-2.5 font-display font-semibold text-lg tracking-tight">
          <img src="/brand/logo-mark-180.png" alt="" className="w-8 h-8 object-contain" />
          {brand.name}
        </ScrollLink>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                  active === item.href ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </ScrollLink>
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
          <ScrollLink
            to="contact"
            className="hidden sm:inline-flex items-center rounded-full bg-accent text-accent-fg text-sm font-semibold px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Get a quote
          </ScrollLink>
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
            <ScrollLink
              key={item.href}
              to={item.href}
              onNavigate={() => setOpen(false)}
              className={`text-sm transition-colors ${
                active === item.href ? "text-fg font-medium" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            onNavigate={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-accent text-accent-fg text-sm font-semibold px-5 py-2"
          >
            Get a quote
          </ScrollLink>
        </div>
      )}
    </header>
  );
}
