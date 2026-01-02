import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-sm text-zinc-700 hover:text-black">
      {children}
    </Link>
  )
}

export default function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q") || ""
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(q)
  }, [q])

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    navigate(trimmed ? `/news?q=${encodeURIComponent(trimmed)}` : "/news")
  }

  return (
    <header className="border-b border-zinc-200 bg-white text-zinc-900">
      <Container>
        <div className="flex items-start justify-between py-6">
          <div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">
              Columbia <br /> Technology <br /> Insight
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Technology • Business • Policy • Innovators
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/columbiatechinsight/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:scale-105 hover:bg-zinc-100 hover:text-pink-600"
            >
              <FaInstagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/company/columbiatechinsight/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:scale-105 hover:bg-zinc-100 hover:text-blue-600"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-4 md:flex-row md:items-center md:justify-between">
          <nav className="flex gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/news">All News</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <form onSubmit={onSubmit} className="w-full md:w-auto">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-2 text-sm outline-none focus:border-black md:w-80"
              placeholder="Search articles..."
            />
          </form>
        </div>
      </Container>
    </header>
  )
}