import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Blog from './Blog/Blog.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}
