import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();
  const items = [
    { id:"overview", icon:"📊", label:"Overview" },
    { id:"orders", icon:"📋", label:"My Orders" },
    { id:"profile", icon:"👤", label:"Profile" },
    { id:"upload", icon:"📁", label:"Upload" },
    { id:"payment", icon:"💳", label:"Payment" },
  ];

  const SAMPLE_ORDERS =[
    { id:"ORD-001", event:"Wedding", date:"2024-05-20", amount:"UGX 850,000", status:"Completed" },
    { id:"ORD-002", event:"Corporate Gala", date:"2024-06-15", amount:"UGX 1,200,000", status:"Confirmed" },
    { id:"ORD-003", event:"Anniversary", date:"2024-07-10", amount:"UGX 600,000", status:"Pending" }
  ];

  return (
    <div className="page">
      <div className="container">
        <div style={{marginBottom:28}}>
          <div className="section-title">My <span>Dashboard</span></div>
          <p className="section-sub">Manage your bookings and account</p>
        </div>
        <div className="dashboard-grid">
          <div className="sidebar">
            <div style={{fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--gold)", marginBottom:12, padding:"0 12px"}}>Menu</div>
            {items.map(i => (
              <button key={i.id} className={`sidebar-item${active===i.id?" active":""}`} onClick={() => { setActive(i.id); if(i.id!=="overview") navigate(`/${i.id}`); }}>
                <span>{i.icon}</span><span>{i.label}</span>
              </button>
            ))}
          </div>
          <div>
            <div className="stat-grid">
              {[["3","Total Bookings"],["1","Upcoming Events"],["UGX 2.5M","Total Spent"],["5★","Avg Rating"]].map(([n,l]) => (
                <div key={l} className="stat-card">
                  <div className="stat-label">{l}</div>
                  <div className="stat-num">{n}</div>
                </div>
              ))}
            </div>
            <div className="card">
              <div style={{marginBottom:16, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{fontFamily:"'Playfair Display', serif", fontSize:"1.1rem", color:"var(--white)"}}>Recent Orders</div>
                <button className="btn btn-outline" style={{fontSize:"0.7rem", padding:"6px 14px"}} onClick={() => navigate("/orders")}>View All</button>
              </div>
              <table>
                <thead><tr><th>Order ID</th><th>Event</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
                <tbody>
                  {SAMPLE_ORDERS.map(o => (
                    <tr key={o.id}>
                      <td style={{color:"var(--gold)", fontWeight:600}}>{o.id}</td>
                      <td>{o.event}</td>
                      <td>{o.date}</td>
                      <td>{o.amount}</td>
                      <td><span className={`badge badge-${o.status==="Completed"?"success":o.status==="Confirmed"?"gold":"muted"}`}>{o.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard