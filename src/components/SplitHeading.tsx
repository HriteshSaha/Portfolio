import { motion } from "framer-motion";

const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

type Props = {
  text: string;
  className?: string;
  as?: "h2" | "h3";
};

/** Heading that reveals word by word, each word sliding up out of a mask. */
export default function SplitHeading({ text, className = "", as: Tag = "h2" }: Props) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.07 }}
      >
        {words.map((w, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden align-bottom pb-[0.15em] -mb-[0.15em]">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
