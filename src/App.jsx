import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllNews from "./pages/AllNews"
import Article from "./pages/Article"
import About from "./pages/About"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/news" element={<AllNews />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
