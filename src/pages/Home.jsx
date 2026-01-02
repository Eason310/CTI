import { Link } from "react-router-dom"
import { getPostsBySection } from "../data/posts"
import Layout from "../components/Layout"

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

function SectionTitle({ children }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{children}</h2>
      <Link to="/news" className="text-sm text-zinc-500 hover:text-black">
        View all →
      </Link>
    </div>
  )
}

function PostCard({ post }) {
  return (
    <Link
      to={`/article/${post.slug}`}
      className="block rounded-2xl border border-zinc-200 bg-white p-4 hover:bg-zinc-50"
    >
      <div className="flex gap-4">
        <div className="h-20 w-28 rounded-xl bg-zinc-100" />
        <div>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug">
            {post.title}
          </h3>
          <div className="mt-1 text-xs text-zinc-500">
            {post.author} • {post.date} • {post.readTime}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const latest = getPostsBySection("Latest News")[0]
  const opinion = getPostsBySection("Opinion")[0]
  const campus = getPostsBySection("Campus News")[0]

  return (
    <Layout>
      <main>
        <Container>
          <section className="py-8">
            <div className="overflow-hidden rounded-3xl border">
              <div className="h-64 bg-zinc-100 md:h-80" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-snug">
                  Join CTI as a Journalist, Editor, Growth Hacker, or Engineer.
                </h2>

                <p className="mt-3 max-w-5xl text-sm text-zinc-600">
                  Tell the stories shaping tomorrow, or help us build them. If you
                  are interested, please reach out to{" "}
                  <a className="underline hover:text-black" href="mailto:xx2020@columbia.edu">
                    xx2020@columbia.edu
                  </a>{" "}
                  or{" "}
                  <a className="underline hover:text-black" href="mailto:kh3443@barnard.edu">
                    kh3443@barnard.edu
                  </a>
                  .
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Recruitment closes Spring 2026 (TBA).
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-10 pb-12 md:grid-cols-3">
            <div>
              <SectionTitle>Latest News</SectionTitle>
              {latest && <PostCard post={latest} />}
            </div>

            <div>
              <SectionTitle>Opinion</SectionTitle>
              {opinion && <PostCard post={opinion} />}
            </div>

            <div>
              <SectionTitle>Campus News</SectionTitle>
              {campus && <PostCard post={campus} />}
            </div>
          </section>
        </Container>
      </main>
    </Layout>
  )
}
