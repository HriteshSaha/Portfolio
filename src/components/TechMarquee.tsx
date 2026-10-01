import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFastify,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

const techs: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "var(--fg)" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Fastify", Icon: SiFastify, color: "var(--fg)" },
  { name: "Express", Icon: SiExpress, color: "var(--fg)" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759b" },
  { name: "Shopify", Icon: SiShopify, color: "#7ab55c" },
  { name: "WooCommerce", Icon: SiWoocommerce, color: "#96588a" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4f8fc7" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
];

/** Infinite, pause-on-hover strip of tech logos that light up in brand colour. */
export default function TechMarquee() {
  return (
    <div className="marquee mb-12 overflow-hidden" aria-label="Technologies we use">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={copy === 1}>
            {techs.map(({ name, Icon, color }) => (
              <li
                key={name}
                style={{ "--c": color } as CSSProperties}
                className="flex items-center gap-2.5 text-muted transition-colors duration-300 hover:text-(--c)"
              >
                <Icon size={26} />
                <span className="font-mono text-sm whitespace-nowrap">{name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
