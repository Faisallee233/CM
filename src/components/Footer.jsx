import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">CM Brass Band</div>
            <div className="footer-brand-sub">Classical Muzika Brass Band</div>
            <div className="footer-brand-desc">
              Uganda's premier brass ensemble, bringing world-class live music to weddings, graduations, corporate events, and more. Excellence in every note.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Navigation</div>
            {["Home", "Contact"].map(p => (
              <button key={p} className="footer-link" onClick={() => navigate(`/${p.toLowerCase()}`)}>
                {p}
              </button>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Account</div>
            {["Login", "Register", "Dashboard", "Profile", "Orders"].map(p => (
              <button key={p} className="footer-link" onClick={() => navigate(`/${p.toLowerCase()}`)}>
                {p}
              </button>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-link" style={{cursor:"default"}}>📞 +256 700 000 000</div>
            <div className="footer-link" style={{cursor:"default"}}>✉️ info@cmbrassband.ug</div>
            <div className="footer-link" style={{cursor:"default"}}>📍 Kampala, Uganda</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Classical Muzika Brass Band. All rights reserved.</p>
          <div className="social-links">
            {["f", "t", "in", "▶"].map((s, i) => (
              <div key={i} className="social-link">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer