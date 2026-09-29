import { brand, nav } from "../data/content";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  return (
    <footer className="border-t border-base py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <ScrollLink to="top" className="flex items-center gap-2 font-display font-semibold">
            <img src="/brand/logo-mark-180.png" alt="" className="w-7 h-7 object-contain" />
            {brand.name}
          </ScrollLink>
          <p className="text-sm text-muted max-w-xs text-center md:text-left">
            We build websites, web apps, and AI tools for growing businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          {nav.map((item) => (
            <ScrollLink key={item.href} to={item.href} className="hover:text-fg transition-colors">
              {item.label}
            </ScrollLink>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="mailto:hsworkmail.1@gmail.com"
            className="text-sm text-muted hover:text-fg transition-colors"
          >
            hsworkmail.1@gmail.com
          </a>
          <p className="text-sm text-muted font-mono">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
