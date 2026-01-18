// src/pages/Home.jsx
import { Link } from "react-router-dom"
import { useState } from "react"
import { getPostsBySection } from "../data/posts"
import Layout from "../components/Layout"

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

/** Top banner (like your screenshot) */
function Banner() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-zinc-500/60 py-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative flex items-center justify-center bg-sky-400 py-3">
            <p className="text-xs font-medium tracking-wide text-white">
              Hunting for the Next Tech Alpha at Columbia.
            </p>

            <button
              type="button"
              className="ml-4 rounded bg-white px-5 py-1.5 text-xs font-semibold text-sky-600 hover:bg-zinc-50"
              onClick={() => {
                // TODO: hook this up to your subscribe flow
                // e.g. navigate("/subscribe") or open a modal
              }}
            >
              Subscribe
            </button>

            <button
              type="button"
              aria-label="Close banner"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ title, to = "/news" }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
      <Link to={to} className="text-xs text-zinc-500 hover:text-black">
        View more
      </Link>
    </div>
  )
}

/** Small horizontal card (Latest News) */
function MiniCard({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 hover:bg-zinc-50"
    >
      <div className="h-10 w-10 flex-none rounded-lg bg-zinc-100" />
      <div className="min-w-0">
        <h3 className="line-clamp-1 text-xs font-semibold leading-snug">
          {post.title}
        </h3>
        <div className="mt-1 text-[11px] text-zinc-500">
          {post.author} • {post.date} • {post.readTime}
        </div>
      </div>
    </Link>
  )
}

/** Big square image card (Opinions) */
function FeatureCard({ post }) {
  return (
    <Link to={`/article/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="aspect-square w-full rounded-2xl bg-zinc-100" />

        <div className="mt-3">
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <div className="h-6 w-6 rounded-full bg-zinc-200" />
            <div className="leading-tight">
              <div className="text-zinc-700">{post.author}</div>
              <div className="text-zinc-400">
                {post.date} • {post.readTime}
              </div>
            </div>
          </div>

          <h3 className="mt-3 text-sm font-semibold leading-snug group-hover:underline">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

/** Wide row list item (Campus Innovations) */
function ListRow({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="flex gap-4 rounded-2xl bg-white hover:bg-zinc-50"
    >
      <div className="h-28 w-56 flex-none overflow-hidden rounded-2xl bg-zinc-100" />

      <div className="min-w-0 py-2">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="h-7 w-7 rounded-full bg-zinc-200" />
          <div>
            <div className="text-zinc-700">{post.author}</div>
            <div className="text-zinc-400">
              {post.date} • {post.readTime}
            </div>
          </div>
        </div>

        <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug">
          {post.title}
        </h3>

        <div className="mt-2 text-[11px] text-zinc-400">Summary</div>
      </div>
    </Link>
  )
}

export default function Home() {
  const latest = getPostsBySection("Latest News").slice(0, 3)
  const opinions = getPostsBySection("Opinion").slice(0, 2)
  const campus = getPostsBySection("Campus News").slice(0, 3)

  return (
    <Layout>
      <Banner />

      {/* push content down so it's not hidden under fixed banner */}
      <main className="pt-16">
        <Container>
          <div className="py-10">
            {/* Latest News */}
            <section>
              <SectionHeader
                title="Latest News"
                to="/news?section=Latest%20News"
              />
              <div className="grid gap-3 md:grid-cols-3">
                {latest.map((p) => (
                  <MiniCard key={p.slug} post={p} />
                ))}
              </div>
            </section>

            {/* Opinions */}
            <section className="mt-12">
              <SectionHeader title="Opinions" to="/news?section=Opinion" />
              <div className="grid gap-8 md:grid-cols-2">
                {opinions.map((p) => (
                  <FeatureCard key={p.slug} post={p} />
                ))}
              </div>
            </section>

            {/* Campus Innovations */}
            <section className="mt-14">
              <SectionHeader
                title="Campus Innovations"
                to="/news?section=Campus%20News"
              />
              <div className="space-y-6">
                {campus.map((p) => (
                  <ListRow key={p.slug} post={p} />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </Layout>
  )
}
