import { useState } from "react"

export default function Banner() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* light gray page strip behind */}
      <div className="bg-zinc-500/60 py-3">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative flex items-center justify-center rounded-none bg-sky-400 py-3">
            <p className="text-xs font-medium tracking-wide text-white">
              Hunting for the Next Tech Alpha at Columbia.
            </p>

            <button
              type="button"
              className="ml-4 rounded bg-white px-5 py-1.5 text-xs font-semibold text-sky-600 hover:bg-zinc-50"
              onClick={() => {
                // TODO: open your subscribe modal / navigate to subscribe section
                // e.g. navigate("/subscribe")
              }}
            >
              Subscribe
            </button>

            {/* close */}
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
