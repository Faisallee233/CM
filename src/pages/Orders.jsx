import { useNavigate } from "react-router-dom";
function Orders() {
  const navigate = useNavigate();

  const SAMPLE_ORDERS =[
    { id:"ORD-001", event:"Wedding", date:"2024-05-20", amount:"UGX 850,000", status:"Completed" },
    { id:"ORD-002", event:"Corporate Gala", date:"2024-06-15", amount:"UGX 1,200,000", status:"Confirmed" },
    { id:"ORD-003", event:"Anniversary", date:"2024-07-10", amount:"UGX 600,000", status:"Pending" }
  ]

  return (
    <div className="page">
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32}}>
          <div>
            <div className="section-title">My <span>Orders</span></div>
            <p className="section-sub">Your booking history</p>
          </div>
          <button className="btn btn-gold" onClick={() => navigate("/contact")}>+ New Booking</button>
        </div>
        <div className="card" style={{padding:0, overflow:"hidden"}}>
          <table>
            <thead><tr><th>Order ID</th><th>Event</th><th>Date</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              { SAMPLE_ORDERS.map(o => (
                <tr key={o.id}>
                  <td style={{color:"var(--gold)", fontWeight:600}}>{o.id}</td>
                  <td>{o.event}</td>
                  <td>{o.date}</td>
                  <td style={{fontWeight:600}}>{o.amount}</td>
                  <td><span className={`badge badge-${o.status==="Completed"?"success":o.status==="Confirmed"?"gold":"muted"}`}>{o.status}</span></td>
                  <td><button className="btn btn-dark" style={{padding:"5px 12px", fontSize:"0.7rem"}} onClick={() => navigate("/payment")}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders