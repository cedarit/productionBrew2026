import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Users, CalendarDays, ArrowLeft, CheckCircle2, Tag } from "lucide-react";
import { events } from "../../lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-SG", { hour: "2-digit", minute: "2-digit" });
}
function formatPrice(amount: number, currency: string) {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-SG", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount / 100);
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const isSoldOut = event.status === "sold-out";
  const isPast = event.status === "past";

  return (
    <div className="flex flex-col">
      {/* Hero image */}
      <div className="relative h-64 w-full sm:h-96">
        <Image src={event.coverImage} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="mx-auto max-w-6xl">
            <Link href="/events" className="mb-4 flex w-fit items-center gap-1.5 text-sm text-white/70 hover:text-white">
              <ArrowLeft size={14} /> Back to events
            </Link>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
              {event.category}
            </span>
            <h1 className="mt-2 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{event.title}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Main content */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Quick info */}
            <div className="flex flex-wrap gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <CalendarDays size={14} className="text-[var(--accent)]" />
                {formatDate(event.startAt)}
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Clock size={14} className="text-[var(--accent)]" />
                {formatTime(event.startAt)} – {formatTime(event.endAt)}
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <MapPin size={14} className="text-[var(--accent)]" />
                {event.location.venue}, {event.location.city}
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Users size={14} className="text-[var(--accent)]" />
                {isPast ? "Event completed" : isSoldOut ? "Sold out" : `${event.seatsRemaining} seats remaining`}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">About this event</h2>
              <div
                className="prose prose-zinc max-w-none text-[var(--muted)] dark:prose-invert [&_h2]:text-[var(--foreground)] [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-6 [&_h2]:mb-2 [&_p]:leading-relaxed [&_ul]:mt-2 [&_li]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>

            {/* Agenda */}
            {event.agenda.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold">Agenda</h2>
                <div className="flex flex-col gap-0">
                  {event.agenda.map((item, i) => (
                    <div key={i} className="flex gap-4 border-l-2 border-[var(--border)] pb-5 pl-4 last:pb-0">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-[var(--accent)]">{item.time}</span>
                        <span className="text-sm text-[var(--foreground)]">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="sticky top-24 flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">{formatPrice(event.price.amount, event.price.currency)}</span>
                <span className="text-sm text-[var(--muted)]">per person, including materials</span>
              </div>
              <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--accent)]" /> Course materials included
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--accent)]" /> Certificate of completion
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[var(--accent)]" /> Lunch & refreshments
                </div>
              </div>
              {isPast ? (
                <div className="rounded-xl bg-[var(--surface-2)] px-4 py-3 text-center text-sm text-[var(--muted)]">
                  This event has ended
                </div>
              ) : isSoldOut ? (
                <div className="rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-600 dark:text-red-400">
                  Sold out — join the waitlist
                </div>
              ) : (
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Register now
                </Link>
              )}
              <p className="text-center text-xs text-[var(--muted-2)]">
                Questions? <a href="mailto:info@productionbrew.com" className="text-[var(--accent)] hover:underline">Email us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
