import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { posts } from "../data/posts"
import Layout from "../components/Layout"

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 text-sm transition " +
        (active
          ? "border-black bg-black text-white"
          : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50")
      }
      type="button"
    >
      {children}
    </button>
  )
}

function PostRow({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="block rounded-2xl border border-zinc-200 bg-white p-4 hover:bg-zinc-50"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 h-20 w-28 flex-none rounded-xl bg-zinc-100" />
        <div className="min-w-0">
          <div className="text-xs text-zinc-500">{post.section}</div>
          <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug">
            {post.title}
          </h3>
          <div className="mt-2 text-sm text-zinc-600">
            {post.author} • {post.date} • {post.readTime}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function AllNews() {
  const sections = ["All", ...Array.from(new Set(posts.map((p) => p.section)))]
  const [searchParams, setSearchParams] = useSearchParams()

  const [section, setSection] = React.useState(searchParams.get("section") || "All")
  const [query, setQuery] = React.useState(searchParams.get("q") || "")

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = posts
    .filter((p) => (section === "All" ? true : p.section === section))
    .filter((p) => {
      if (!normalizedQuery) return true
      const haystack = [p.title, p.author, p.section, ...(p.content || [])]
        .join(" ")
        .toLowerCase()
      return haystack.includes(normalizedQuery)
    })

  const updateURL = (nextSection, nextQuery) => {
    const next = new URLSearchParams(searchParams)

    if (nextQuery && nextQuery.trim()) next.set("q", nextQuery)
    else next.delete("q")

    if (nextSection && nextSection !== "All") next.set("section", nextSection)
    else next.delete("section")

    setSearchParams(next, { replace: true })
  }

  return (
    <Layout>
      <main>
        <Container>
          <div className="py-8">
            <h1 className="text-3xl font-semibold tracking-tight">All News</h1>
            <p className="mt-2 text-sm text-zinc-600">
              Browse everything we’ve published.
            </p>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <input
                value={query}
                onChange={(e) => {
                  const v = e.target.value
                  setQuery(v)
                  updateURL(section, v)
                }}
                className="w-full rounded-xl border border-zinc-300 px-4 py-2 text-sm outline-none focus:border-black md:max-w-md"
                placeholder="Search title, author, section, content..."
              />

              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <Chip
                    key={s}
                    active={s === section}
                    onClick={() => {
                      setSection(s)
                      updateURL(s, query)
                    }}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">
                  No posts match your filters.
                </div>
              ) : (
                filtered.map((p) => <PostRow key={p.slug} post={p} />)
              )}
            </div>

            <div className="mt-8">
              <Link to="/" className="text-sm text-zinc-700 hover:text-black">
                ← Back home
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  )
}
