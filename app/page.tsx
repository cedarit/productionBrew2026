const services = [
  {
    title: "Training",
    description:
      "Hands-on instruction for audio, video, lighting, visuals, editing, and social media — built for volunteer teams.",
  },
  {
    title: "Consulting",
    description:
      "Brand-neutral gear recommendations, facility walkthroughs, and upgrade roadmaps that fit your workflow and budget.",
  },
  {
    title: "Integration",
    description:
      "System setup and configuration across audio, video, lighting, visuals, and networking — with post-install support.",
  },
  {
    title: "Events",
    description:
      "Full-cycle event production: pre-pro, technical gear, on-site execution, creative direction, and media delivery.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <header className="w-full border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            Production Brew
          </span>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-20 sm:py-28">
        <section className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Purpose Driven Production
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your partner in everything tech — for worship, events, and beyond.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Efficient systems and expert support at every step. We help
            churches, creative teams, and organizations run production that
            just works.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#services"
              className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              See what we do
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/[.1] px-5 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.15] dark:hover:bg-white/[.06]"
            >
              Coffee anyone?
            </a>
          </div>
        </section>

        <section id="services" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              What we do
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Four core ways we help teams ship great production.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-black/[.06] bg-white p-6 transition-colors hover:border-black/[.15] dark:border-white/[.08] dark:bg-zinc-950 dark:hover:border-white/[.2]"
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-start gap-5 rounded-2xl border border-black/[.06] bg-white p-8 dark:border-white/[.08] dark:bg-zinc-950 sm:p-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s build something together.
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Tell us about your space, your team, and what you&apos;re trying
            to pull off. We&apos;ll bring the coffee.
          </p>
          <a
            href="mailto:info@productionbrew.com"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            info@productionbrew.com
          </a>
        </section>
      </main>

      <footer className="mt-auto border-t border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Production Brew</span>
          <span>Singapore · India</span>
        </div>
      </footer>
    </div>
  );
}
