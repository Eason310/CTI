import { useEffect, useState } from "react"

export default function Banner() {
  const [open, setOpen] = useState(() => {
    return localStorage.getItem("cti_banner_closed") !== "1"
  })

  useEffect(() => {
    if (!open) localStorage.setItem("cti_banner_closed", "1")
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-sky-400 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex items-center justify-center py-3">
          <p className="text-xs text-white">
            Hunting for the Next Tech Alpha at Columbia.
          </p>

          <button
            type="button"
            className="ml-6 bg-white px-7 py-1.5 text-xs font-medium text-sky-600 hover:bg-zinc-50"
            onClick={() => {
              // TODO: hook up subscribe
            }}
          >
            Subscribe
          </button>

          <button
            type="button"
            aria-label="Close banner"
            onClick={() => setOpen(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
