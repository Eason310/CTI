import AllNews from "./pages/AllNews"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Article from "./pages/Article"
import About from "./pages/About"

function Placeholder({ title }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-zinc-600">We’ll build this page next.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
