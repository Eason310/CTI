import { Link } from "react-router-dom"
import { useState } from "react"

function Container({ children }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScZIqEWGSGZwGKwdE_yh4CIibLFDMaT9JMKoqIFZyZwERu2bg/formResponse"

  const ENTRY_EMAIL = "entry.852221972"
  const ENTRY_CONSENT = "entry.1439614941"
  const CONSENT_VALUE = "Yes"

  const submit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    if (!consent) return

    setStatus("sending")

    try {
      const data = new FormData()
      data.append(ENTRY_EMAIL, email.trim())
      data.append(ENTRY_CONSENT, CONSENT_VALUE)

      // Google Forms doesn't allow CORS response reads, but the POST still works.
      // We use mode: "no-cors" and treat it as success.
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      })

      setStatus("success")
      setEmail("")
      setConsent(false)
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="mt-16 bg-slate-900 text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 md:items-start">
          {/* Newsletter */}
          <div>
            <h3 className="text-3xl font-semibold">Subscribe to Our Newsletter</h3>

            <form onSubmit={submit} className="mt-10 max-w-xl">
              <label className="block text-lg font-semibold">
                Enter your email here <span className="text-blue-400">*</span>
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="mt-4 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/60"
                placeholder="you@columbia.edu"
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-base text-white/90">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="h-5 w-5 rounded border-white/40 bg-transparent"
                  />
                  Yes, subscribe me to your newsletter.{" "}
                  <span className="text-blue-400">*</span>
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-none bg-blue-600 px-8 py-3 text-lg font-semibold hover:bg-blue-500 disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Subscribe"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-4 text-sm text-green-300">
                  Submitted! You’re on the list.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-300">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Links */}
          <div className="md:flex md:justify-end">
            <nav className="space-y-6 text-2xl font-semibold">
              <Link className="block hover:text-white/80" to="/">
                Home
              </Link>
              <Link className="block hover:text-white/80" to="/news">
                All News
              </Link>
              <Link className="block hover:text-white/80" to="/about">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-white/60">
          © {new Date().getFullYear()} CTI.
        </div>
      </Container>
    </footer>
  )
}