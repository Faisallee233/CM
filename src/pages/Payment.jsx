import { useState } from "react";
function Payment({ showToast }) {
  const [f, setF] = useState({ name:"", card:"", expiry:"", cvv:"", method:"card" });
  const submit = () => showToast("✅ Payment of UGX 850,000 processed successfully!");
  return (
    <div className="page">
      <div className="container" style={{maxWidth:900}}>
        <div className="section-title">Make <span>Payment</span></div>
        <div className="divider"/>
        <div className="payment-grid">
          <div className="card">
            <div style={{fontFamily:"'Playfair Display', serif", fontSize:"1.1rem", color:"var(--white)", marginBottom:20}}>Payment Details</div>
            <div style={{display:"flex", gap:10, marginBottom:20}}>
              {["card","mobile","bank"].map(m => (
                <button key={m} className={`btn ${f.method===m?"btn-gold":"btn-dark"}`} style={{flex:1, justifyContent:"center", padding:"8px 4px", fontSize:"0.7rem"}}
                  onClick={() => setF({...f,method:m})}>
                  {m==="card"?"💳 Card":m==="mobile"?"📱 Mobile Money":"🏦 Bank"}
                </button>
              ))}
            </div>
            {f.method === "card" && <>
              <div className="input-group"><label>Cardholder Name</label><input value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Name on card"/></div>
              <div className="input-group card-input"><label>Card Number</label><input value={f.card} onChange={e=>setF({...f,card:e.target.value})} placeholder="1234 5678 9012 3456"/><span className="card-icon">💳</span></div>
              <div className="form-row">
                <div className="input-group"><label>Expiry Date</label><input value={f.expiry} onChange={e=>setF({...f,expiry:e.target.value})} placeholder="MM/YY"/></div>
                <div className="input-group"><label>CVV</label><input value={f.cvv} onChange={e=>setF({...f,cvv:e.target.value})} placeholder="123"/></div>
              </div>
            </>}
            {f.method === "mobile" && <div className="input-group"><label>Mobile Money Number</label><input placeholder="+256 7XX XXX XXX"/></div>}
            {f.method === "bank" && <div style={{padding:"20px", background:"rgba(201,168,76,0.06)", border:"1px solid var(--border)", borderRadius:4, fontSize:"0.85rem", color:"var(--muted)"}}>
              Bank: Stanbic Bank Uganda<br/>Account: CM Brass Band Ltd<br/>Account No: 9030012345678
            </div>}
            <button className="btn btn-gold" style={{width:"100%", justifyContent:"center", marginTop:8}} onClick={submit}>Pay UGX 850,000 →</button>
          </div>
          <div>
            <div className="payment-summary">
              <div style={{fontFamily:"'Playfair Display', serif", fontSize:"1.1rem", color:"var(--white)", marginBottom:20}}>Order Summary</div>
              {[["Event","Wedding Reception"],["Date","14 March 2025"],["Duration","4 Hours"],["Package","Premium"]].map(([k,v]) => (
                <div key={k} className="payment-row"><span>{k}</span><span style={{color:"var(--text)"}}>{v}</span></div>
              ))}
              <div className="payment-row"><span>Base Fee</span><span>UGX 750,000</span></div>
              <div className="payment-row"><span>Travel</span><span>UGX 100,000</span></div>
              <div className="payment-total"><span>Total</span><span>UGX 850,000</span></div>
            </div>
            <div className="card" style={{marginTop:16}}>
              <div style={{fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--gold)", marginBottom:10}}>Secure Payment</div>
              <div style={{fontSize:"0.8rem", color:"var(--muted)", lineHeight:1.7}}>🔒 SSL encrypted · 256-bit security<br/>All transactions are safe and secure.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment