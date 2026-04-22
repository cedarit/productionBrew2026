import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Puzzle } from "lucide-react";

const systems = [
  { title: "Audio", items: ["Mixing consoles (analogue & digital)", "Microphones & wireless systems", "Stage boxes & snakes", "Speaker systems & amplifiers", "Monitor & IEM systems"] },
  { title: "Video", items: ["Cameras & PTZ systems", "Video switchers & scalers", "Recording & streaming encoders", "Projection & display routing", "LED walls & panels"] },
  { title: "Lighting", items: ["Moving heads & LED fixtures", "DMX networking & patching", "Lighting consoles (MA, ETC, etc.)", "Dimmer racks & power distribution", "Automated scene programming"] },
  { title: "Connectivity & IT", items: ["Dante & AES67 audio networking", "NDI video-over-IP", "Managed network switches & VLANs", "Cable infrastructure & patching", "Remote monitoring & control"] },
];

export default function IntegrationPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="mb-6 flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">← All services</Link>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] mb-5">
            <Puzzle size={26} />
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Integration</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            We design and install complete AV systems — from signal flow planning to final tuning — with volunteer-friendly workflows built in from day one.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
              Get a quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Built for your team</h2>
            <p className="leading-relaxed text-[var(--muted)]">
              The best AV system is the one your team can actually operate. We don&apos;t just install equipment — we design workflows, program scenes, label everything, and make sure your volunteers leave opening day with confidence.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              Every integration includes post-install support: we&apos;re available to troubleshoot, fine-tune, and answer questions after you&apos;ve had a few Sundays with the new system.
            </p>
            <ul className="flex flex-col gap-2">
              {["On-site installation and commissioning", "Signal flow documentation included", "Volunteer-friendly scene programming", "Post-install training session", "30-day follow-up support"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <CheckCircle2 size={14} className="shrink-0 text-[var(--accent)]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80" alt="AV integration" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Systems we integrate</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {systems.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-semibold text-[var(--accent)]">{s.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {s.items.map((item) => (
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
            <h2 className="text-2xl font-bold text-[var(--background)]">Planning a new build or upgrade?</h2>
            <p className="mt-1 text-[var(--background)]/60">Tell us about your space and we&apos;ll start with a free scoping call.</p>
          </div>
          <Link href="/contact" className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
