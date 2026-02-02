function Login() {
  return (
    <div className="login">
      <form className="card">
        <h1>GIT 101</h1>
        <p>ยินดีต้อนรับสู่หน้า Login</p>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>

      <style>{`
        .login {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg,#667eea,#764ba2);
          font-family: sans-serif;
        }
        .card {
          background: #fff;
          padding: 2rem;
          width: 320px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,.2);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
        h1 { margin: 0; }
        input {
          padding: .6rem;
          border-radius: 8px;
          border: 1px solid #ddd;
        }
        button {
          padding: .6rem;
          border: none;
          border-radius: 8px;
          background: #667eea;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Login
