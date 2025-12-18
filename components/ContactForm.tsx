"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name || !values.email || !values.phone || !values.message) {
      setStatus("Please fill in every field before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "632e7bca-7194-4636-8347-4045978f3256",
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          subject: `New inquiry from ${values.name} - ConOps Tech`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully! We'll respond within 24 hours.");
        setValues({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again or email us directly.");
      }
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      aria-label="Contact form"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.24rem] text-white/70">
          Name
          <input
            className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            type="text"
            name="name"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.24rem] text-white/70">
          Email
          <input
            className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.24rem] text-white/70">
        Phone Number
        <input
          className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          type="tel"
          name="phone"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.24rem] text-white/70">
        Message
        <textarea
          className="min-h-[140px] rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          name="message"
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          required
        />
      </label>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Reach out"}
        </button>
        {status && (
          <p className="text-sm text-white/70" role="status">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}

