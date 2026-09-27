import { brand, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-base py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="w-7 h-7 rounded-md bg-accent text-accent-fg grid place-items-center text-sm font-bold">
            C
          </span>
          {brand.name}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-fg transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted font-mono">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
