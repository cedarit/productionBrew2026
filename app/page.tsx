import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Lightbulb,
  Puzzle,
  CalendarDays,
  ArrowRight,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training",
    href: "/services/training",
    description:
      "Hands-on instruction for audio, video, lighting, visuals, editing, and social media — designed for volunteers and professionals.",
    highlights: ["Console & mic technique", "Lighting & DMX", "Live streaming workflows"],
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    href: "/services/consulting",
    description:
      "Brand-neutral gear recommendations, facility walkthroughs, system assessments, and upgrade roadmaps that fit your real-world budget.",
    highlights: ["Facility walkthroughs", "Upgrade roadmaps", "Brand-neutral advice"],
  },
  {
    icon: Puzzle,
    title: "Integration",
    href: "/services/integration",
    description:
      "Full system setup across audio, video, lighting, visuals, and networking — with post-install support and volunteer-friendly workflows.",
    highlights: ["Signal flow & cabling", "On-site installation", "Post-install support"],
  },
  {
    icon: CalendarDays,
    title: "Events",
    href: "/services/events",
    description:
      "End-to-end event production: pre-pro planning, technical equipment, on-site execution, creative direction, and post-event media delivery.",
    highlights: ["Pre-production planning", "On-site crew", "Media delivery"],
  },
];

const partners = ["MA Lighting", "Sennheiser", "Shure", "Waves", "ProPresenter"];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "500+", label: "Events produced" },
  { value: "200+", label: "Teams trained" },
  { value: "2", label: "Global offices" },
];

const locations = [
  {
    city: "Singapore",
    description: "Our Asia-Pacific hub, serving churches and organisations across the region.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    flag: "🇸🇬",
  },
  {
    city: "Bangalore, India",
    description: "Supporting growing production teams across India with training and integration.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    flag: "🇮🇳",
  },
];

const posts = [
  {
    title: "SMAART Training Recap: What We Covered and Why It Matters",
    excerpt: "Our recent SMAART training session dove deep into measurement and system optimisation for live sound engineers.",
    date: "March 2026",
    category: "Training",
    slug: "smaart-training-recap",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  },
  {
    title: "MA Lighting at Pentecostal World Congress, Helsinki",
    excerpt: "Production Brew was on the ground supporting one of the world's largest Pentecostal gatherings.",
    date: "February 2026",
    category: "Events",
    slug: "ma-lighting-pentecostal-world-congress",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    title: "Building Volunteer-Friendly AV Systems for Churches",
    excerpt: "The best system is the one your team can actually operate. Here's our framework for designing with volunteers in mind.",
    date: "January 2026",
    category: "Consulting",
    slug: "volunteer-friendly-av-systems",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
            Purpose Driven Production
          </span>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Your <span className="text-[var(--accent)]">partner</span> in{" "}
            everything <span className="text-[var(--accent)]">tech.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            From training your volunteers to integrating a full AV system — Production Brew brings expert production
            support to churches, creative teams, and organisations across Asia and beyond.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/services"
              className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              See what we do <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
            >
              Coffee anyone?
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="border-y border-[var(--border)] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">Trusted partners</span>
          <div className="flex flex-wrap items-center gap-8">
            {partners.map((p) => (
              <span key={p} className="text-sm font-semibold tracking-tight text-[var(--muted)]">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS / ABOUT ── */}
      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-4xl font-bold tracking-tight text-[var(--accent)]">{s.value}</span>
                <span className="text-sm text-[var(--muted)]">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                We started as weekend support.<br />We became a global firm.
              </h2>
              <p className="leading-relaxed text-[var(--muted)]">
                Production Brew began by helping a single church run their Sunday services without the panic. Over a
                decade later, we&apos;ve trained hundreds of teams, integrated systems across two continents, and
                produced events for thousands of attendees — all while staying true to our purpose.
              </p>
              <Link
                href="/about"
                className="flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Our story <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80"
                alt="Production team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">What we do</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four ways we help you ship great production.</h2>
            <p className="text-[var(--muted)]">Tailored to your team, space, and budget.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 size={14} className="shrink-0 text-[var(--accent)]" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="bg-[var(--surface)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">In the news</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest from the field.</h2>
            </div>
            <Link href="/blog" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[var(--accent)] sm:flex hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[var(--accent-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                      {p.category}
                    </span>
                    <span className="text-xs text-[var(--muted-2)]">{p.date}</span>
                  </div>
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{p.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                    Read more <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Where we are</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Global reach, local expertise.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {locations.map((l) => (
              <div key={l.city} className="group relative overflow-hidden rounded-2xl border border-[var(--border)]">
                <div className="relative h-64 w-full">
                  <Image
                    src={l.image}
                    alt={l.city}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1.5 p-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[var(--accent)]" />
                    <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                      {l.flag} {l.city}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{l.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[var(--accent)] px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">Let&apos;s talk</span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to brew something great?
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-white/70">
              Tell us about your space, your team, and what you&apos;re trying to pull off.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-white/90"
            >
              <Mail size={15} />
              Get in touch
            </Link>
            <p className="text-center text-xs text-white/50">We respond within 24 hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
