import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  return (
    <>
      {/* เมนู */}
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      {/* Router */}
      <Routes>
        <Route path="*" element={<NotFound />} />
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />

    </Routes>
    </>
  )
}

export default App
