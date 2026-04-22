import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, ArrowRight, CalendarDays } from "lucide-react";
import { events } from "../lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatPrice(amount: number, currency: string) {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-SG", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount / 100);
}

const statusStyles: Record<string, string> = {
  upcoming: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "sold-out": "bg-red-500/10 text-red-600 dark:text-red-400",
  past: "bg-[var(--surface-2)] text-[var(--muted)]",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming" || e.status === "sold-out");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Events & Training</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Upcoming workshops & events.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            Hands-on training sessions, masterclasses, and production events across Singapore and India. Register early — seats go fast.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-xl font-semibold">Upcoming events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[event.status]}`}>
                      {event.status === "sold-out" ? "Sold Out" : "Upcoming"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
                      {event.category}
                    </span>
                    <h3 className="mt-1 font-semibold leading-snug">{event.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={13} className="shrink-0 text-[var(--accent)]" />
                      {formatDate(event.startAt)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="shrink-0 text-[var(--accent)]" />
                      {event.location.venue}, {event.location.city}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={13} className="shrink-0 text-[var(--accent)]" />
                      {event.status === "sold-out"
                        ? "No seats remaining"
                        : `${event.seatsRemaining} of ${event.capacity} seats left`}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--foreground)]">
                      {formatPrice(event.price.amount, event.price.currency)}
                    </span>
                    <Link
                      href={`/events/${event.slug}`}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        event.status === "sold-out"
                          ? "cursor-not-allowed bg-[var(--surface-2)] text-[var(--muted-2)]"
                          : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                      }`}
                    >
                      {event.status === "sold-out" ? "Sold out" : "Register"} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Past events */}
          {past.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-xl font-semibold text-[var(--muted)]">Past events</h2>
              <div className="flex flex-col gap-4">
                {past.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className="group flex items-center gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all hover:border-[var(--accent)]"
                  >
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
                      <Image src={event.coverImage} alt={event.title} fill className="object-cover opacity-70" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <span className="text-xs text-[var(--muted-2)]">{formatDate(event.startAt)} · {event.location.city}</span>
                      <h3 className="truncate font-medium">{event.title}</h3>
                    </div>
                    <ArrowRight size={16} className="shrink-0 text-[var(--muted-2)] transition-colors group-hover:text-[var(--accent)]" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-16">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-xl font-semibold">Want a private workshop for your team?</h3>
            <p className="mt-1 text-[var(--muted)]">We run custom training sessions on-site at your venue across Asia.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
