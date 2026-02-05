import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import FeatA from './pages/FeatA'
import FeatB from './pages/FeatB'
import FeatC from './pages/FeatC'

function App() {
  return (
    <>
      {/* เมนู */}
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/feat_a">FeatA</Link>
        <Link to="/feat_b">FeatB</Link>
        <Link to="/feat_c">FeatC</Link>
      </nav>

      <hr />

      {/* Router */}
      <Routes>
        <Route path="*" element={<NotFound />} />
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/feat_a" element={<FeatA />} />
         <Route path="/feat_b" element={<FeatB />} />
         <Route path="/feat_c" element={<FeatC />} />

    </Routes>
    </>
  )
}

export default App
