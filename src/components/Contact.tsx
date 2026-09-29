import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMail, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineX } from "react-icons/hi";
import { brand } from "../data/content";

type Status = "idle" | "sending" | "sent" | "error";

type Errors = { name?: string; email?: string; message?: string };

const inputBase =
  "w-full rounded-lg border bg-elevated px-4 py-3 text-fg transition-colors " +
  "hover:border-accent/50 " +
  "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 " +
  "aria-[invalid=true]:border-pop aria-[invalid=true]:focus:ring-pop/25";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    if (!email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      next.email = "That email doesn't look right — check the format.";
    }
    if (message.trim().length < 10) {
      next.message = "Tell me a little more — at least a sentence about the project.";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field for keyboard/screen-reader users.
      const first = ["name", "email", "message"].find((k) => next[k as keyof Errors]);
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Project inquiry from ${name || "your website"}`,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const clearError = (field: keyof Errors) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  return (
    <section id="contact" className="py-28 border-t border-base">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-sm text-accent mb-3">{"// "}Contact us</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
            Have a project in mind?
          </h2>
          <p className="text-muted text-lg max-w-md mb-10">
            Whether you need a new website, a full product build, or help
            connecting to an existing system, tell us what you're trying
            to do and we'll suggest the best way forward.
          </p>

          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-3 font-display text-xl font-semibold hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-lg"
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
          noValidate
          className="rounded-2xl border border-base bg-soft p-8 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-muted mb-2">
              Full name <span aria-hidden className="text-pop">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              type="text"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : "contact-name-hint"}
              className={inputBase}
              placeholder="Jane Doe"
            />
            <p id="contact-name-hint" className="mt-1.5 text-xs text-muted">
              Your name so I know who I'm talking to.
            </p>
            {errors.name && (
              <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-pop">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-muted mb-2">
              Email <span aria-hidden className="text-pop">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              type="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : "contact-email-hint"}
              className={inputBase}
              placeholder="jane@company.com"
            />
            <p id="contact-email-hint" className="mt-1.5 text-xs text-muted">
              I'll reply to this address within 30–40 minutes.
            </p>
            {errors.email && (
              <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-pop">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-muted mb-2">
              Message <span aria-hidden className="text-pop">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                clearError("message");
              }}
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : "contact-message-hint"}
              className={`${inputBase} resize-none`}
              placeholder="What are you trying to build?"
            />
            <p id="contact-message-hint" className="mt-1.5 text-xs text-muted">
              A short brief: what you're building, timeline, and budget if you have one.
            </p>
            {errors.message && (
              <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-pop">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-fg font-semibold px-6 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-soft)]"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <HiOutlineArrowRight />
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-pop">
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
              role="dialog"
              aria-modal="true"
              aria-label="Message received"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-base bg-soft p-8 text-center"
            >
              <button
                onClick={() => setStatus("idle")}
                aria-label="Close"
                className="absolute top-4 right-4 text-muted hover:text-fg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-full p-1"
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
                autoFocus
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent text-accent-fg font-semibold px-6 py-3 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
