import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function Login({  setIsLoggedIn, showToast }) {
  const [f, setF] = useState({ email:"", pass:"" });
  const navigate = useNavigate();
  const submit = () => { setIsLoggedIn(true); showToast("✅ Welcome back!"); navigate("/dashboard"); };
  return (
    <div className="page" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className="form-card">
        <div style={{textAlign:"center", marginBottom:32}}>
          <div style={{fontSize:"2rem", marginBottom:12}}>🎺</div>
          <div className="form-title">Welcome Back</div>
          <div className="form-sub">Sign in to your CM Brass Band account</div>
        </div>
        <div className="input-group"><label>Email Address</label><input type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="email@example.com"/></div>
        <div className="input-group"><label>Password</label><input type="password" value={f.pass} onChange={e=>setF({...f,pass:e.target.value})} placeholder="••••••••"/></div>
        <button className="btn btn-gold" style={{width:"100%", justifyContent:"center", marginBottom:12}} onClick={submit}>Sign In →</button>
        <div className="form-link"><button onClick={() => {}}>Forgot password?</button></div>
        <div className="form-divider">or</div>
        <div className="form-link">Don't have an account? <button onClick={() => navigate("/register")}>Create one</button></div>
      </div>
    </div>
  );
}

export default Login