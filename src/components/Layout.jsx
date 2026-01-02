import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
