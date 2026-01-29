import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* เมนู */}
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
      </nav>

      <hr />

      {/* Router */}
      <Routes>
        <Route path="*" element={<NotFound />} />
         <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
