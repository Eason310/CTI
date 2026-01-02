import { Link, useParams } from "react-router-dom"
import { getPostBySlug } from "../data/posts"
import Header from "../components/Header"

function Container({ children }) {
  return <div className="mx-auto max-w-3xl px-4">{children}</div>
}

export default function Article() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-2xl font-semibold">Article not found</h1>
          <p className="mt-2 text-zinc-600">That link doesn’t match any post.</p>
          <Link className="mt-6 inline-block underline" to="/">
            ← Back home
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <div className="bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <Container>
          <div className="py-5 flex items-center justify-between">
            <Link to="/" className="text-sm text-zinc-700 hover:text-black">
              ← Home
            </Link>
            <div className="text-sm text-zinc-500">{post.section}</div>
          </div>
        </Container>
      </header>

      <main>
        <Container>
          <article className="py-10">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="mt-3 text-sm text-zinc-600">
              {post.author} • {post.date} • {post.readTime}
            </div>

            <div className="mt-6 h-64 w-full rounded-2xl bg-zinc-100" />

            <div className="prose prose-zinc mt-8 max-w-none">
              {post.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </Container>
      </main>
    </div>
  )
}
