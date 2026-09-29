import { useCallback, type MouseEvent, type ReactNode } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // Account for the fixed navbar height so headings aren't hidden behind it.
  const navOffset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });

  // Keep the URL shareable without triggering the browser's # jump.
  if (window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

type Props = {
  /** Target section id, without the leading `#`. */
  to: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  ariaLabel?: string;
};

export default function ScrollLink({ to, children, className, onNavigate, ariaLabel }: Props) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(to);
      onNavigate?.();
    },
    [to, onNavigate],
  );

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
