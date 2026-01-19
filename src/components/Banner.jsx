import { useState } from "react"

export default function Banner() {
  // permanently hide if already subscribed
  const isSubscribed =
    typeof window !== "undefined" &&
    localStorage.getItem("cti_subscribed") === "1"

  const [open, setOpen] = useState(!isSubscribed)

  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-sky-400 border-b border-black/10">
      {/* Centered content */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-3">
          <p className="text-[16px] text-white">
            Hunting for the Next Tech Alpha at Columbia.
          </p>

          <button
            type="button"
            className="ml-6 rounded bg-white px-7 py-1.5 text-[16px] font-medium text-sky-600 hover:bg-zinc-50"
            onClick={() => {
              // mark as subscribed
              localStorage.setItem("cti_subscribed", "1")

              // hide banner
              setOpen(false)

              // scroll to footer newsletter
              const el = document.getElementById("newsletter")
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {}
      <button
        type="button"
        aria-label="Close banner"
        onClick={() => setOpen(false)}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/90 hover:text-white"
      >
        <svg
          width="24"
          height="24"
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
  )
}
