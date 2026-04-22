import { useState } from "react";

function Profile({ showToast }) {
  const [f, setF] = useState({ first:"John", last:"Doe", email:"john@example.com", phone:"+256 700 000 000", city:"Kampala", bio:"Music lover and event organizer." });
  return (
    <div className="page">
      <div className="container" style={{maxWidth:800}}>
        <div className="section-title">My <span>Profile</span></div>
        <div className="divider"/>
        <div className="profile-header">
          <div className="avatar">JD</div>
          <div>
            <div className="profile-name">{f.first} {f.last}</div>
            <div className="profile-role">Verified Client</div>
            <div style={{fontSize:"0.8rem", color:"var(--muted)", marginTop:6}}>{f.email} · {f.city}</div>
          </div>
          <button className="btn btn-outline" style={{marginLeft:"auto"}}>Change Photo</button>
        </div>
        <div className="card">
          <div style={{fontFamily:"'Playfair Display', serif", fontSize:"1.1rem", color:"var(--white)", marginBottom:20}}>Personal Information</div>
          <div className="profile-grid">
            <div className="input-group"><label>First Name</label><input value={f.first} onChange={e=>setF({...f,first:e.target.value})}/></div>
            <div className="input-group"><label>Last Name</label><input value={f.last} onChange={e=>setF({...f,last:e.target.value})}/></div>
            <div className="input-group"><label>Email</label><input value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
            <div className="input-group"><label>Phone</label><input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})}/></div>
            <div className="input-group"><label>City</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})}/></div>
          </div>
          <div className="input-group"><label>Bio</label><textarea rows={3} value={f.bio} onChange={e=>setF({...f,bio:e.target.value})}/></div>
          <div style={{display:"flex", gap:12}}>
            <button className="btn btn-gold" onClick={() => showToast("✅ Profile updated!")}>Save Changes</button>
            <button className="btn btn-dark">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile