import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Tag } from "lucide-react";
import { posts } from "../../lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero image */}
      <div className="relative h-64 w-full sm:h-80">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <Link href="/blog" className="mb-8 flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          <ArrowLeft size={14} /> All posts
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-[var(--accent-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
            {post.category}
          </span>
          <span className="text-xs text-[var(--muted-2)]">{post.date}</span>
          <span className="text-xs text-[var(--muted-2)]">· {post.author}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{post.excerpt}</p>

        <hr className="my-8 border-[var(--border)]" />

        <div
          className="prose prose-zinc max-w-none dark:prose-invert text-[var(--muted)] [&_h2]:text-[var(--foreground)] [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_ul]:mt-2 [&_li]:leading-relaxed [&_li]:text-[var(--muted)]"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-xl font-semibold">More from the blog</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-[var(--accent)]"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-[var(--accent)]">{p.category}</span>
                    <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
                    <span className="text-xs text-[var(--muted-2)]">{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
