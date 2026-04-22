import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({  setIsLoggedIn, showToast }) {
  const [f, setF] = useState({ first:"", last:"", email:"", phone:"", pass:"", confirm:"" });
  const navigate = useNavigate();
  const submit = () => { setIsLoggedIn(true); showToast("✅ Account created! Welcome to CM Brass Band."); navigate("/dashboard"); };
  return (
    <div className="page" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className="form-card" style={{maxWidth:560}}>
        <div style={{textAlign:"center", marginBottom:32}}>
          <div style={{fontSize:"2rem", marginBottom:12}}>🎶</div>
          <div className="form-title">Create Account</div>
          <div className="form-sub">Join the Classical Muzika community</div>
        </div>
        <div className="form-row">
          <div className="input-group"><label>First Name</label><input value={f.first} onChange={e=>setF({...f,first:e.target.value})} placeholder="First name"/></div>
          <div className="input-group"><label>Last Name</label><input value={f.last} onChange={e=>setF({...f,last:e.target.value})} placeholder="Last name"/></div>
        </div>
        <div className="input-group"><label>Email Address</label><input type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="email@example.com"/></div>
        <div className="input-group"><label>Phone Number</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="+256..."/></div>
        <div className="form-row">
          <div className="input-group"><label>Password</label><input type="password" value={f.pass} onChange={e=>setF({...f,pass:e.target.value})} placeholder="••••••••"/></div>
          <div className="input-group"><label>Confirm Password</label><input type="password" value={f.confirm} onChange={e=>setF({...f,confirm:e.target.value})} placeholder="••••••••"/></div>
        </div>
        <button className="btn btn-gold" style={{width:"100%", justifyContent:"center", marginBottom:12}} onClick={submit}>Create Account →</button>
        <div className="form-link">Already have an account? <button onClick={() => navigate("/login")}>Sign in</button></div>
      </div>
    </div>
  );
}

export default Register