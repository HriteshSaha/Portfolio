import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMail, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineX } from "react-icons/hi";
import { brand } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Project inquiry from ${name || "your website"}`,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-fg font-semibold px-6 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <HiOutlineArrowRight />
          </button>
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </motion.form>
      </div>

      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
            onClick={() => setStatus("idle")}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-base bg-soft p-8 text-center"
            >
              <button
                onClick={() => setStatus("idle")}
                aria-label="Close"
                className="absolute top-4 right-4 text-muted hover:text-fg transition-colors"
              >
                <HiOutlineX size={20} />
              </button>
              <HiOutlineCheckCircle size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="font-display font-semibold text-2xl mb-3">
                Message received
              </h3>
              <p className="text-muted">
                Thank you for reaching out. I've received your message and will
                get back to you within 30–40 minutes.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent text-accent-fg font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
