import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "../lib/data";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--accent-subtle)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Blog</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            From the field.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
            Practical guides, event recaps, and production insights from the Production Brew team.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative h-64 lg:h-auto">
              <Image src={posts[0].coverImage} alt={posts[0].title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--accent-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                  {posts[0].category}
                </span>
                <span className="text-xs text-[var(--muted-2)]">{posts[0].date}</span>
              </div>
              <h2 className="text-2xl font-bold leading-snug sm:text-3xl">{posts[0].title}</h2>
              <p className="leading-relaxed text-[var(--muted)]">{posts[0].excerpt}</p>
              <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.coverImage}
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
    </div>
  );
}
