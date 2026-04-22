import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

const topics = [
  { title: "Audio fundamentals", items: ["Signal flow & gain staging", "Mixing consoles (analogue & digital)", "Microphone selection & placement", "Live monitoring setup"] },
  { title: "Video & streaming", items: ["Camera operation & PTZ", "Video switching & routing", "Live streaming (YouTube, Facebook)", "Recording workflows"] },
  { title: "Lighting & visuals", items: ["DMX fundamentals & patching", "Fixture programming", "ProPresenter & screen management", "Colour theory for worship"] },
  { title: "Social media & editing", items: ["Content strategy for churches", "Short-form video editing", "Graphics & motion", "Platform-specific best practices"] },
];

export default function TrainingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="mb-6 flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            ← All services
          </Link>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] mb-5">
            <GraduationCap size={26} />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Training</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Hands-on instruction across audio, video, lighting, visuals, editing, and social media. Built for real people in real spaces — volunteers included.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/events" className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
              See upcoming events <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--surface-2)]">
              Request private training
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">Who our training is for</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              We design every training programme with two types of people in mind: the dedicated volunteer who shows up every Sunday and needs practical, repeatable skills — and the aspiring professional who wants to push beyond the basics.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              Our sessions are hands-on from the start. No death-by-PowerPoint. You&apos;ll be at a console, behind a camera, or programming fixtures within the first hour.
            </p>
            <ul className="flex flex-col gap-2">
              {["No prior technical knowledge required for entry-level sessions", "Small group sizes (max 16–40 depending on format)", "Take-home resource packs and documentation", "Follow-up support via email after the session"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80" alt="Training session" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold tracking-tight">What we cover</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {topics.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-semibold capitalize">{t.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {t.items.map((item) => (
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

      <section className="bg-[var(--accent)] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Want a private session for your team?</h2>
            <p className="mt-1 text-white/70">We travel to your venue across Singapore and India.</p>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent)] hover:bg-white/90">
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
