import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";

const deliverables = [
  "Written system assessment report",
  "Signal flow diagrams",
  "Gear recommendations with rationale",
  "Budget scenarios (entry / mid / full)",
  "Phased upgrade roadmap",
  "Vendor-neutral product shortlist",
];

const process = [
  { step: "1", title: "Discovery call", description: "We start with a 30-minute call to understand your space, team, and goals." },
  { step: "2", title: "Site walkthrough", description: "On-site (or virtual) assessment of your current system, room acoustics, and workflow." },
  { step: "3", title: "Report & roadmap", description: "We deliver a written report with recommendations, diagrams, and a phased action plan." },
  { step: "4", title: "Follow-up support", description: "One follow-up call included to answer questions and refine the plan." },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="mb-6 flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">← All services</Link>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] mb-5">
            <Lightbulb size={26} />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Consulting</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Brand-neutral guidance to help you make confident, well-informed decisions about your production technology — whether you&apos;re starting from scratch or upgrading an existing system.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
              Book a consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80" alt="Consulting session" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">What you get</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              Every consulting engagement ends with clear, actionable documentation — not just verbal advice. You&apos;ll receive everything you need to brief a contractor, present to a board, or start shopping with confidence.
            </p>
            <ul className="flex flex-col gap-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle2 size={14} className="shrink-0 text-[var(--accent)]" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">How it works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">{p.step}</span>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--background)]">Ready for a fresh set of eyes on your system?</h2>
            <p className="mt-1 text-[var(--background)]/60">Remote and on-site assessments available across Asia.</p>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
            Book a call
          </Link>
        </div>
      </section>
    </div>
  );
}
