import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Navbar({ page, setPage, isLoggedIn, setIsLoggedIn }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const NAV_PAGES = ["Home", "About", "Services", "Contact"];
  const USER_PAGES = ["Dashboard", "Profile", "Orders"];
 
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={()=>{navigate("/home")}}>
          <div className="nav-logo-icon">🎺</div>
          <div className="nav-logo-text">
            <div className="abbr">CM Brass Band</div>
            <div className="full">Classical Muzika Brass Band</div>
          </div>
        </div>
        <div className={`nav-links${open ? " open" : ""}`}>
          {NAV_PAGES.map(p => (
            <button key={p} className={`nav-link${page === p ? " active" : ""}`} onClick={() => navigate(`/${p.toLowerCase()}`)}>
              {p}
            </button>
          ))}
          {isLoggedIn && USER_PAGES.map(p => (
            <button key={p} className={`nav-link${page === p ? " active" : ""}`} onClick={() => navigate(`/${p.toLowerCase()}`)}>
              {p}
            </button>
          ))}
          {isLoggedIn && (
            <button className={`nav-link${page === "Admin" ? " active" : ""}`} onClick={() => navigate("/admin")}>Admin</button>
          )}
          {!isLoggedIn ? (
            <>
              <button className={`nav-link${page === "Login" ? " active" : ""}`} onClick={() => navigate("/login")}>Login</button>
              <button className="nav-link cta" onClick={() => navigate("/register")}>Book Now</button>
            </>
          ) : (
            <button className="nav-link" onClick={() => { setIsLoggedIn(false); navigate("/home"); }}>Logout</button>
          )}
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar