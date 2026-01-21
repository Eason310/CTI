import { Link } from "react-router-dom"
import { getPostsBySection } from "../data/posts"
import Layout from "../components/Layout"

/* -------------------- Layout helpers -------------------- */

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}


function SectionHeader({ title, to }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-semibold">{title}</h2>
      <Link to={to} className="text-xs text-zinc-500 hover:text-black">
        View more
      </Link>
    </div>
  )
}

function FeatureCard({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="group block flex-none"
      style={{ width: 360 }}
    >
      <div className="relative h-[360px] w-[360px] overflow-hidden bg-zinc-200">
        {/* Random image for testing */}
        <img
          src={`https://picsum.photos/360/360?random=${post.slug}`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Top meta */}
        <div className="absolute left-5 top-5 right-5 flex items-start gap-3">
          <div className="h-9 w-9 rounded-full bg-white/40" />
          <div className="font-sans text-[14px] leading-tight text-[#E8E8E8]">
            <div className="text-white">{post.author}</div>
            <div>
              {post.date} • {post.readTime}
            </div>
          </div>
        </div>

        {/* Bottom title */}
        <div className="absolute left-5 right-5 bottom-5">
          <h3 className="font-mono text-[22px] leading-tight text-white">
            {post.title}
          </h3>

          <div className="mt-2 font-sans text-[14px] text-[#E8E8E8]">
            Summary
          </div>
        </div>
      </div>
    </Link>
  )
}


function ListRow({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="flex gap-4 rounded-2xl bg-white hover:bg-zinc-50"
    >
      <div className="h-28 w-56 rounded-2xl bg-zinc-100" />

      <div className="py-2">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="h-7 w-7 rounded-full bg-zinc-200" />
          <div>
            <div className="text-zinc-700">{post.author}</div>
            <div className="text-zinc-400">
              {post.date} • {post.readTime}
            </div>
          </div>
        </div>

        <h3 className="mt-2 line-clamp-2 text-sm font-semibold">
          {post.title}
        </h3>

        <div className="mt-2 text-[11px] text-zinc-400">
          Summary
        </div>
      </div>
    </Link>
  )
}

/* -------------------- Home -------------------- */

export default function Home() {
  const latest = getPostsBySection("Latest News").slice(0, 3)
  const opinions = getPostsBySection("Opinion").slice(0, 2)
  const campus = getPostsBySection("Campus News").slice(0, 3)

  return (
    <Layout>
      <main>
        <Container>
          <div className="py-10">
            {/* Latest News — MATCHES Campus Innovations */}
            <section>
              <SectionHeader
                title="Latest News"
                to="/news?section=Latest%20News"
              />
              <div className="space-y-6">
                {latest.map((p) => (
                  <ListRow key={p.slug} post={p} />
                ))}
              </div>
            </section>

            {/* Opinions (horizontal scroll, 480x480 cards) */}
            <section className="mt-12">
              <SectionHeader title="Opinions" to="/news?section=Opinion" />

              <div className="-mx-4 px-4 overflow-x-auto">
                <div className="flex gap-6 snap-x snap-mandatory pb-3">
                  {opinions.map((p) => (
                    <div key={p.slug} className="snap-start">
                      <FeatureCard post={p} />
                    </div>
                  ))}
                </div>
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
