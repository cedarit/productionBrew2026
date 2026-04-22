import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CalendarDays } from "lucide-react";

const phases = [
  { phase: "Pre-production", items: ["Run sheets & cue-to-cue planning", "Stage layouts & technical riders", "Team coordination strategy", "Creative brainstorming & direction", "Gear list & logistics planning"] },
  { phase: "Technical equipment", items: ["PA systems & front-of-house audio", "Lighting rigs & LED walls", "Cameras & video switching", "Staging & backline", "Broadcast & streaming setup"] },
  { phase: "On-site execution", items: ["Live sound mixing", "Lighting design & operation", "Camera operation & direction", "Stage management", "Presenter & transition management"] },
  { phase: "Post-event", items: ["Media delivery (recordings & photos)", "Highlight reel editing", "Livestream archive", "Gear teardown & logistics", "Debrief & future planning"] },
];

const eventTypes = ["Sunday services & special nights", "Multi-day conferences", "Worship concerts & festivals", "Corporate summits & launches", "Fundraiser galas", "International gatherings"];

export default function EventsServicePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="mb-6 flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">← All services</Link>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] mb-5">
            <CalendarDays size={26} />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Event Production</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Full-cycle event production from first call to final media delivery. We&apos;re part of your team from day one — through planning, setup, the live event, and teardown.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
              Plan an event with us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80" alt="Live event" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Types of events we produce</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              From a 50-person worship night to a 15,000-delegate international conference — we scale our approach to your event, not the other way around.
            </p>
            <ul className="flex flex-col gap-2">
              {eventTypes.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle2 size={14} className="shrink-0 text-[var(--accent)]" /> {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">What we handle end-to-end</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {phases.map((p) => (
              <div key={p.phase} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-semibold text-[var(--accent)]">{p.phase}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 size={13} className="shrink-0 text-[var(--accent)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--background)]">Got an event coming up?</h2>
            <p className="mt-1 text-[var(--background)]/60">The earlier we get involved, the better the result. Let&apos;s talk.</p>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
            Start planning
          </Link>
        </div>
      </section>
    </div>
  );
}
