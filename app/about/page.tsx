import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Zap, Users, Globe } from "lucide-react";
import { team } from "../lib/data";

const values = [
  { icon: Heart, title: "Purpose over profit", description: "Every decision is filtered through one question: does this serve the mission? We're not here to sell gear — we're here to enable great production." },
  { icon: Zap, title: "Excellence matters", description: "Mediocre production undermines the message. We hold ourselves to a high standard in every training, every system, every event we touch." },
  { icon: Users, title: "Teams first", description: "We design everything — our training, our systems, our support — for the humans who have to operate it. Especially the volunteers." },
  { icon: Globe, title: "Global perspective", description: "Production challenges in Singapore look different from those in Bangalore or Helsinki. We bring cross-cultural experience to every engagement." },
];

const timeline = [
  { year: "2014", title: "First Sunday", description: "Production Brew started as weekend technical support for a single church in Singapore." },
  { year: "2016", title: "First training programme", description: "We formalised our training approach and ran our first multi-church audio workshop." },
  { year: "2018", title: "India office opens", description: "Growing demand from Indian churches led us to open our second office in Bangalore." },
  { year: "2021", title: "MA Lighting partnership", description: "We became an authorised partner for MA Lighting, expanding our integration capabilities." },
  { year: "2023", title: "International events", description: "Production Brew supported its first international conference — the Pentecostal World Congress in Helsinki." },
  { year: "2026", title: "Today", description: "200+ trained teams, 500+ events, and still driven by the same purpose we started with." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">About us</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            We started as weekend support.<br />We became a global firm.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Production Brew exists because we believe the message matters — and great production helps it land. We've spent over a decade building systems, training teams, and producing events so that the tech never gets in the way.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80"
              alt="Production team"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">The behind-the-scenes story</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              It started with a church that couldn't afford a full-time AV technician but desperately needed one. We volunteered to help — and quickly realised the problem was everywhere. Hundreds of churches across Asia were running services on underpowered, poorly-designed systems operated by well-meaning but undertrained volunteers.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              So we built a business around fixing that. Not by selling gear, but by training people, designing better systems, and showing up — every time. Twelve years later, we work with churches, nonprofits, and corporate clients across Singapore, India, and beyond.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              The coffee cup in our logo isn't just branding. It's a reminder of every early-morning pre-service setup, every post-event debrief, every training session that ran long because the questions were too good to cut off.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">What we believe</span>
            <h2 className="text-3xl font-bold tracking-tight">Our values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <v.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">The team</span>
            <h2 className="text-3xl font-bold tracking-tight">The people behind the production.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-[var(--accent)]">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Our journey</span>
            <h2 className="text-3xl font-bold tracking-tight">12 years in the making.</h2>
          </div>
          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 w-px flex-1 bg-[var(--border)]" />}
                </div>
                <div className="pb-2 pt-1.5">
                  <span className="text-xs font-semibold text-[var(--accent)]">{item.year}</span>
                  <h3 className="mt-0.5 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--accent)] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Want to work with us?</h2>
            <p className="mt-2 text-lg text-white/70">Let's talk about how we can serve your team.</p>
          </div>
          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent)] hover:bg-white/90"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
