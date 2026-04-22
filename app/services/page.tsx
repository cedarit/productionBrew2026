import Link from "next/link";
import { GraduationCap, Lightbulb, Puzzle, CalendarDays, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training",
    href: "/services/training",
    tagline: "Equip your team",
    description: "Hands-on instruction for audio, video, lighting, visuals, editing, and social media — built for real teams in real spaces.",
    highlights: ["Console & mic technique", "Lighting & DMX", "Live streaming workflows", "Video editing", "Social media content"],
    color: "from-amber-500/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    href: "/services/consulting",
    tagline: "Plan with confidence",
    description: "Brand-neutral guidance on gear, systems, and workflows. We give you the information you need to make great decisions.",
    highlights: ["Facility walkthroughs", "Upgrade roadmaps", "Brand-neutral advice", "Budget planning", "Remote assessments"],
    color: "from-sky-500/10 to-transparent",
  },
  {
    icon: Puzzle,
    title: "Integration",
    href: "/services/integration",
    tagline: "Build it right",
    description: "We design and install complete AV systems — from signal flow to final tuning — with volunteer-friendly workflows built in.",
    highlights: ["Signal flow & cabling", "On-site installation", "Console programming", "Network & Dante", "Post-install support"],
    color: "from-violet-500/10 to-transparent",
  },
  {
    icon: CalendarDays,
    title: "Events",
    href: "/services/events",
    tagline: "Produce it live",
    description: "Full-cycle event production for churches, conferences, and corporate clients — from first call to final media delivery.",
    highlights: ["Pre-production planning", "Technical equipment", "On-site crew", "Creative direction", "Post-event media"],
    color: "from-emerald-500/10 to-transparent",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Services</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to run great production.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Whether you need one service or all four, we tailor our approach to your team, your space, and your budget.
            Every engagement starts with listening.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl flex flex-col gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group grid items-center gap-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--accent)] hover:shadow-lg ${
                i % 2 === 0 ? "lg:grid-cols-[auto_1fr]" : "lg:grid-cols-[1fr_auto]"
              }`}
            >
              {i % 2 !== 0 && (
                <div className="hidden flex-col gap-3 lg:flex">
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">{s.tagline}</span>
                  <ul className="grid grid-cols-2 gap-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <CheckCircle2 size={13} className="shrink-0 text-[var(--accent)]" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <s.icon size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">{s.description}</p>
                </div>
                <div className="flex lg:hidden flex-col gap-2">
                  {s.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 size={13} className="shrink-0 text-[var(--accent)]" /> {h}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              {i % 2 === 0 && (
                <div className="hidden flex-col gap-3 lg:flex">
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">{s.tagline}</span>
                  <ul className="grid grid-cols-1 gap-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <CheckCircle2 size={13} className="shrink-0 text-[var(--accent)]" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--foreground)] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[var(--background)]">Not sure where to start?</h2>
            <p className="mt-2 text-lg text-[var(--background)]/60">Tell us what you&apos;re working with. We&apos;ll figure it out together.</p>
          </div>
          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
