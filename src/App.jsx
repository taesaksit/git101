import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import FeatA from './pages/FeatA'
import FeatB from './pages/FeatB'

function App() {
  return (
    <>
      {/* เมนู */}
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/feat_a"></Link>
        <Link to="/feat_b"></Link>
      </nav>

      <hr />

      {/* Router */}
      <Routes>
        <Route path="*" element={<NotFound />} />
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/feat_a" element={<FeatA />} />
         <Route path="/feat_b" element={<FeatB />} />

    </Routes>
    </>
  )
}

export default App
