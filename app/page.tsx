import Image from "next/image";
import {
  GraduationCap,
  Lightbulb,
  Puzzle,
  CalendarDays,
  ArrowRight,
  MapPin,
  Mail,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Hands-on instruction for audio, video, lighting, visuals, editing, and social media — designed for both volunteers and professionals.",
    highlights: ["Console & mic technique", "Lighting & DMX", "Live streaming workflows"],
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description:
      "Brand-neutral gear recommendations, facility walkthroughs, system assessments, and upgrade roadmaps that fit your real-world budget.",
    highlights: ["Facility walkthroughs", "Upgrade roadmaps", "Brand-neutral advice"],
  },
  {
    icon: Puzzle,
    title: "Integration",
    description:
      "Full system setup across audio, video, lighting, visuals, and networking — with post-install support and volunteer-friendly workflows.",
    highlights: ["Signal flow & cabling", "On-site installation", "Post-install support"],
  },
  {
    icon: CalendarDays,
    title: "Events",
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
    city: "India",
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
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  },
  {
    title: "MA Lighting at Pentecostal World Congress, Helsinki",
    excerpt: "Production Brew was on the ground supporting one of the world's largest Pentecostal gatherings with MA Lighting systems.",
    date: "February 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    title: "Building Volunteer-Friendly AV Systems for Churches",
    excerpt: "The best system is the one your team can actually operate. Here's our framework for designing with volunteers in mind.",
    date: "January 2026",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
  },
];

function CoffeeCupLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 11h2a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 8V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 21h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <CoffeeCupLogo />
            <span>Production Brew</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <a href="#services" className="transition-colors hover:text-[var(--foreground)]">Services</a>
            <a href="#about" className="transition-colors hover:text-[var(--foreground)]">About</a>
            <a href="#news" className="transition-colors hover:text-[var(--foreground)]">News</a>
            <a href="#locations" className="transition-colors hover:text-[var(--foreground)]">Locations</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-36">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              Purpose Driven Production
            </span>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Your partner in{" "}
              <span className="text-[var(--accent)]">everything tech.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              From training your volunteers to integrating a full AV system — Production Brew brings expert production
              support to churches, creative teams, and organisations across Asia and beyond.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#services"
                className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                See what we do <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
              >
                Coffee anyone?
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="border-y border-[var(--border)] px-6 py-5">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">
              Trusted partners
            </span>
            <div className="flex flex-wrap items-center gap-8">
              {partners.map((p) => (
                <span key={p} className="text-sm font-semibold tracking-tight text-[var(--muted)]">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── ABOUT / STATS ── */}
        <section id="about" className="bg-[var(--surface)] px-6 py-20">
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
                  decade later, we&apos;ve trained hundreds of teams, integrated systems across two continents, and produced
                  events for thousands of attendees — all while staying true to our purpose.
                </p>
                <p className="leading-relaxed text-[var(--muted)]">
                  We believe great production is invisible. When it works, your message lands. We make that happen —
                  for churches, conferences, and corporate events alike.
                </p>
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
        <section id="services" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">What we do</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Four ways we help you ship great production.
              </h2>
              <p className="text-[var(--muted)]">
                Whether you need one service or all four, we tailor our support to your team, space, and budget.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWS ── */}
        <section id="news" className="bg-[var(--surface)] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">In the news</span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest from the field.</h2>
              </div>
              <a href="#" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[var(--accent)] sm:flex">
                View all <ArrowRight size={14} />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article
                  key={p.title}
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
                    <a href="#" className="mt-auto flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                      Read more <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATIONS ── */}
        <section id="locations" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Where we are</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Global reach, local expertise.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {locations.map((l) => (
                <div
                  key={l.city}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)]"
                >
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

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-[var(--foreground)] px-6 py-24">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Let&apos;s talk</span>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--background)] sm:text-5xl">
                Ready to brew something great?
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-[var(--background)]/60">
                Tell us about your space, your team, and what you&apos;re trying to pull off. No commitment required —
                just a conversation over coffee.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <a
                href="mailto:info@productionbrew.com"
                className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                <Mail size={15} />
                info@productionbrew.com
              </a>
              <p className="text-center text-xs text-[var(--background)]/40">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2.5 font-semibold">
                <CoffeeCupLogo />
                Production Brew
              </a>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
                Purpose Driven Production — supporting churches and creative teams across Asia and beyond.
              </p>
              <a
                href="https://instagram.com/productionbrew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <ExternalLink size={14} />
                @productionbrew on Instagram
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Services</span>
                {["Training", "Consulting", "Integration", "Events"].map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Company</span>
                {["About", "News", "Locations", "Contact"].map((s) => (
                  <a
                    key={s}
                    href={`#${s.toLowerCase()}`}
                    className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Locations</span>
                <span className="text-[var(--muted)]">🇸🇬 Singapore</span>
                <span className="text-[var(--muted)]">🇮🇳 India</span>
                <a
                  href="mailto:info@productionbrew.com"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  info@productionbrew.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Production Brew. All rights reserved.</span>
            <span>Built with Next.js · Deployed on Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
