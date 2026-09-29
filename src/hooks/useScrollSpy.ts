import { useEffect, useState } from "react";

/**
 * Watches the given section ids and returns the id of the section currently
 * in view (based on the top of the viewport + navbar offset).
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + offset;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= probe) current = id;
      }
      // At (or near) the bottom of the page, highlight the last section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? current;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
