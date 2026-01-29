import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>404</h1>
      <p>ไม่พบหน้าที่คุณต้องการ</p>
      <Link to="/">กลับหน้า Home</Link>
    </div>
  )
}

export default NotFound
