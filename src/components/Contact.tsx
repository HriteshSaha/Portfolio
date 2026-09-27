import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineArrowRight } from "react-icons/hi";
import { brand } from "../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your website"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-sm text-accent mb-3">{"// "}Contact</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
            Have a project in mind?
          </h2>
          <p className="text-muted text-lg max-w-md mb-10">
            Whether it's a new website, a full product build, or an
            integration into something existing tell me what you're
            trying to do and I'll tell you how to get there.
          </p>

          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-3 font-display text-xl font-semibold hover:text-accent transition-colors"
          >
            <HiOutlineMail size={22} />
            {brand.email}
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-base bg-soft p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full rounded-lg border border-base bg-elevated px-4 py-3 text-fg focus:outline-none focus:border-accent transition-colors"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-lg border border-base bg-elevated px-4 py-3 text-fg focus:outline-none focus:border-accent transition-colors"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">
              Project details
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-base bg-elevated px-4 py-3 text-fg focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="What are you trying to build?"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-fg font-semibold px-6 py-3.5 hover:opacity-90 transition-opacity"
          >
            Send message
            <HiOutlineArrowRight />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
