import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

function CoffeeCupLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 11h2a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 8V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 21h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 font-semibold">
              <CoffeeCupLogo />
              Production Brew
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Purpose Driven Production — supporting churches and creative teams across Asia and beyond.
            </p>
            <a
              href="https://instagram.com/productionbrew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink size={13} />
              @productionbrew on Instagram
            </a>
            <a
              href="mailto:info@productionbrew.com"
              className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={13} />
              info@productionbrew.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Services</span>
              {[
                { label: "Training", href: "/services/training" },
                { label: "Consulting", href: "/services/consulting" },
                { label: "Integration", href: "/services/integration" },
                { label: "Events", href: "/services/events" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Company</span>
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Locations</span>
              <span className="text-[var(--muted)]">🇸🇬 Singapore</span>
              <span className="text-[var(--muted)]">🇮🇳 Hyderabad, India</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Production Brew. All rights reserved.</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
