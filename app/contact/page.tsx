"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "Singapore",
    flag: "🇸🇬",
    address: "Asia-Pacific Office",
    email: "info@productionbrew.com",
    description: "Serving churches and organisations across Singapore, Malaysia, and the broader Asia-Pacific region.",
  },
  {
    city: "Hyderabad, India",
    flag: "🇮🇳",
    address: "India Office",
    email: "india@productionbrew.com",
    description: "Supporting production teams and churches across India with training, consulting, and integration.",
  },
];

const subjects = [
  "Training enquiry",
  "Consulting request",
  "Integration project",
  "Event production",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Contact</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s brew something great together.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            Tell us about your space, your team, and what you&apos;re trying to pull off. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-3">

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-subtle)]">
                  <CheckCircle2 size={28} className="text-[var(--accent)]" />
                </div>
                <h2 className="text-xl font-semibold">Message received!</h2>
                <p className="max-w-sm text-[var(--muted)]">
                  Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-2 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" htmlFor="name">Your name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--muted-2)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" htmlFor="email">Email address</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@church.org"
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--muted-2)]"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+65 9123 4567"
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--muted-2)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium" htmlFor="subject">What can we help with?</label>
                    <select
                      id="subject" name="subject" required
                      value={form.subject} onChange={handleChange}
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] text-[var(--foreground)]"
                    >
                      <option value="" disabled>Select a topic</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="message">Tell us more</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your venue, team size, what you're working with, and what you'd like to achieve..."
                    className="resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--muted-2)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                >
                  {loading ? "Sending…" : <><Send size={14} /> Send message</>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Our offices</h2>
              <p className="text-sm text-[var(--muted)]">We&apos;re based across Asia and available globally for events.</p>
            </div>
            {offices.map((o) => (
              <div key={o.city} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{o.flag}</span>
                  <h3 className="font-semibold">{o.city}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{o.description}</p>
                <a
                  href={`mailto:${o.email}`}
                  className="mt-3 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  <Mail size={13} /> {o.email}
                </a>
              </div>
            ))}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--accent-subtle)] p-5">
              <p className="text-sm font-medium text-[var(--accent)]">☕ Coffee anyone?</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                If you&apos;re in Singapore or Hyderabad, we&apos;re always happy to meet in person. Just say the word.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
