import { useLocation } from "react-router-dom"
import Banner from "./Banner"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      {isHome && <Banner />}

      {}
      <div className={isHome ? "pt-12" : ""}>
        <Header />
      </div>

      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
