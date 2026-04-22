import AppRoutes from './routes/AppRoutes'
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --gold: #C9A84C;
    --gold-light: #E8C97A;
    --gold-dark: #8B6914;
    --deep: #0A0A0F;
    --dark: #111118;
    --card: #16161F;
    --border: rgba(201,168,76,0.18);
    --text: #F0EDE6;
    --muted: #8A8578;
    --white: #FDFAF4;
    --success: #4CAF83;
    --danger: #CF4F4F;
  }
 
  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--deep);
    color: var(--text);
    min-height: 100vh;
  }
 
  .page { min-height: calc(100vh - 80px - 260px); padding: 60px 0; }
  .container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
  }
  .section-title span { color: var(--gold); }
  .section-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: var(--muted);
    margin-top: 8px;
    font-style: italic;
  }
  .divider {
    width: 60px; height: 2px;
    background: linear-gradient(90deg, var(--gold), transparent);
    margin: 16px 0 32px;
  }
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 28px;
    border: none; border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.78rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    cursor: pointer; transition: all 0.25s;
    text-decoration: none;
  }
  .btn-gold {
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
    color: var(--deep);
  }
  .btn-gold:hover { filter: brightness(1.12); transform: translateY(-1px); }
  .btn-outline {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
  }
  .btn-outline:hover { background: rgba(201,168,76,0.08); }
  .btn-dark {
    background: var(--card);
    border: 1px solid var(--border);
    color: var(--text);
  }
  .btn-dark:hover { border-color: var(--gold); color: var(--gold); }
 
  .input-group { margin-bottom: 20px; }
  .input-group label {
    display: block; margin-bottom: 6px;
    font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--muted);
  }
  .input-group input,
  .input-group select,
  .input-group textarea {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--text);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
    resize: vertical;
  }
  .input-group input:focus,
  .input-group select:focus,
  .input-group textarea:focus { border-color: var(--gold); }
  .input-group select option { background: var(--card); }
 
  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 28px;
  }
 
  .badge {
    display: inline-block; padding: 4px 10px;
    border-radius: 2px; font-size: 0.7rem;
    font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  }
  .badge-gold { background: rgba(201,168,76,0.15); color: var(--gold); }
  .badge-success { background: rgba(76,175,131,0.15); color: var(--success); }
  .badge-danger { background: rgba(207,79,79,0.15); color: var(--danger); }
  .badge-muted { background: rgba(138,133,120,0.15); color: var(--muted); }
 
  table { width: 100%; border-collapse: collapse; }
  th {
    padding: 12px 16px; text-align: left;
    font-size: 0.68rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--gold); border-bottom: 1px solid var(--border);
  }
  td {
    padding: 14px 16px;
    font-size: 0.87rem;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    color: var(--text);
  }
  tr:hover td { background: rgba(255,255,255,0.02); }
 
  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--dark); }
  ::-webkit-scrollbar-thumb { background: var(--gold-dark); border-radius: 3px; }
 
  /* Nav */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(10,10,15,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    height: 72px;
  }
  .nav-inner {
    max-width: 1160px; margin: 0 auto; padding: 0 24px;
    height: 100%; display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 12px; cursor: pointer;
  }
  .nav-logo-icon {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .nav-logo-text { line-height: 1.1; }
  .nav-logo-text .abbr {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; font-weight: 700; color: var(--gold);
  }
  .nav-logo-text .full {
    font-size: 0.6rem; color: var(--muted); letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .nav-links { display: flex; align-items: center; gap: 6px; }
  .nav-link {
    padding: 6px 14px;
    font-size: 0.75rem; font-weight: 500; letter-spacing: 0.06em;
    color: var(--muted); cursor: pointer;
    border-radius: 2px; transition: color 0.2s;
    border: none; background: none; text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
  }
  .nav-link:hover { color: var(--text); }
  .nav-link.active { color: var(--gold); }
  .nav-link.cta {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--deep); font-weight: 600; padding: 6px 16px;
  }
  .nav-link.cta:hover { filter: brightness(1.1); }
  .hamburger {
    display: none; flex-direction: column; gap: 4px;
    cursor: pointer; background: none; border: none; padding: 4px;
  }
  .hamburger span {
    display: block; width: 22px; height: 2px;
    background: var(--gold); border-radius: 2px; transition: 0.3s;
  }
  @media (max-width: 768px) {
    .hamburger { display: flex; }
    .nav-links {
      display: none; position: absolute; top: 72px; left: 0; right: 0;
      background: rgba(10,10,15,0.98); flex-direction: column;
      padding: 16px; border-bottom: 1px solid var(--border); gap: 2px;
    }
    .nav-links.open { display: flex; }
    .nav-link { width: 100%; text-align: left; padding: 10px 14px; }
  }
 
  /* Footer */
  .footer {
    background: var(--dark); border-top: 1px solid var(--border);
    padding: 60px 0 0;
  }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px; padding-bottom: 48px;
  }
  @media (max-width: 768px) {
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .footer-brand { grid-column: 1/-1; }
  }
  .footer-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 700; color: var(--gold);
    margin-bottom: 4px;
  }
  .footer-brand-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem; color: var(--muted); font-style: italic;
    margin-bottom: 16px;
  }
  .footer-brand-desc {
    font-size: 0.83rem; color: var(--muted); line-height: 1.7;
    max-width: 280px;
  }
  .footer-col-title {
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
  }
  .footer-link {
    display: block; font-size: 0.82rem; color: var(--muted);
    margin-bottom: 10px; cursor: pointer; transition: color 0.2s;
    background: none; border: none; text-align: left;
    font-family: 'Montserrat', sans-serif;
  }
  .footer-link:hover { color: var(--text); }
  .footer-bottom {
    border-top: 1px solid var(--border);
    padding: 20px 0; display: flex; align-items: center; justify-content: space-between;
  }
  .footer-bottom p { font-size: 0.75rem; color: var(--muted); }
  .social-links { display: flex; gap: 10px; }
  .social-link {
    width: 32px; height: 32px; border: 1px solid var(--border);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 13px; color: var(--muted); cursor: pointer; transition: all 0.2s;
  }
  .social-link:hover { border-color: var(--gold); color: var(--gold); }
 
  /* Hero */
  .hero {
    min-height: 92vh; display: flex; align-items: center;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%),
                radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%),
                var(--deep);
  }
  .hero-lines {
    position: absolute; inset: 0; overflow: hidden; opacity: 0.06;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 40px, var(--gold) 40px, var(--gold) 41px);
  }
  .hero-content { position: relative; z-index: 1; max-width: 680px; }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,168,76,0.1); border: 1px solid var(--border);
    border-radius: 20px; padding: 6px 16px; margin-bottom: 24px;
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--gold);
  }
  .hero-tag::before { content: '♩'; }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 900; line-height: 1.05;
    color: var(--white); margin-bottom: 12px;
  }
  .hero-title em { color: var(--gold); font-style: normal; }
  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: var(--muted); font-style: italic; margin-bottom: 32px; line-height: 1.5;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }
  .hero-stats { display: flex; gap: 40px; }
  .hero-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; font-weight: 700; color: var(--gold);
  }
  .hero-stat-label {
    font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--muted); margin-top: 2px;
  }
 
  /* Services grid */
  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1px;
    background: var(--border); border: 1px solid var(--border);
  }
  .service-card {
    background: var(--card); padding: 36px 28px;
    transition: background 0.3s; cursor: default;
  }
  .service-card:hover { background: rgba(22,22,31,0.95); }
  .service-icon { font-size: 2rem; margin-bottom: 16px; }
  .service-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; font-weight: 600; color: var(--white); margin-bottom: 8px;
  }
  .service-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.7; }
 
  /* Testimonials */
  .testimonial-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;
  }
  .testimonial-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 4px; padding: 28px;
  }
  .stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 12px; }
  .testimonial-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-style: italic; color: var(--text); line-height: 1.7;
    margin-bottom: 16px;
  }
  .testimonial-author { font-size: 0.78rem; font-weight: 600; color: var(--gold); }
  .testimonial-role { font-size: 0.72rem; color: var(--muted); }
 
  /* Forms */
  .form-card {
    max-width: 520px; margin: 0 auto;
    background: var(--card); border: 1px solid var(--border);
    border-radius: 4px; padding: 40px;
  }
  .form-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; font-weight: 700; color: var(--white); margin-bottom: 4px;
  }
  .form-sub { font-size: 0.83rem; color: var(--muted); margin-bottom: 28px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
  .form-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 20px 0; font-size: 0.75rem; color: var(--muted);
  }
  .form-divider::before, .form-divider::after {
    content: ''; flex: 1; height: 1px; background: var(--border);
  }
  .form-link {
    font-size: 0.82rem; color: var(--muted); text-align: center; margin-top: 16px;
  }
  .form-link button {
    background: none; border: none; color: var(--gold); cursor: pointer;
    font-family: 'Montserrat', sans-serif; font-size: 0.82rem; font-weight: 600;
  }
 
  /* Dashboard */
  .dashboard-grid {
    display: grid; grid-template-columns: 220px 1fr; gap: 24px; align-items: start;
  }
  @media (max-width: 768px) { .dashboard-grid { grid-template-columns: 1fr; } }
  .sidebar {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 4px; padding: 20px; position: sticky; top: 96px;
  }
  .sidebar-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 12px; border-radius: 2px; cursor: pointer;
    font-size: 0.82rem; font-weight: 500; color: var(--muted);
    transition: all 0.2s; margin-bottom: 2px;
    background: none; border: none; width: 100%; text-align: left;
    font-family: 'Montserrat', sans-serif;
  }
  .sidebar-item:hover { background: rgba(255,255,255,0.04); color: var(--text); }
  .sidebar-item.active { background: rgba(201,168,76,0.1); color: var(--gold); }
  .stat-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;
    margin-bottom: 24px;
  }
  .stat-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 4px; padding: 20px;
  }
  .stat-label {
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--muted); margin-bottom: 8px;
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; font-weight: 700; color: var(--gold);
  }
  .stat-sub { font-size: 0.72rem; color: var(--muted); margin-top: 4px; }
 
  /* Upload */
  .upload-zone {
    border: 2px dashed var(--border); border-radius: 4px;
    padding: 60px 40px; text-align: center; cursor: pointer;
    transition: all 0.3s; margin-bottom: 24px;
  }
  .upload-zone:hover { border-color: var(--gold); background: rgba(201,168,76,0.03); }
  .upload-icon { font-size: 3rem; margin-bottom: 16px; opacity: 0.6; }
  .upload-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--white); margin-bottom: 6px; }
  .upload-hint { font-size: 0.8rem; color: var(--muted); }
 
  /* Payment */
  .payment-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 32px; align-items: start; }
  @media (max-width: 768px) { .payment-grid { grid-template-columns: 1fr; } }
  .payment-summary { background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 28px; }
  .payment-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.85rem; color: var(--muted); }
  .payment-total { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border); margin-top: 8px; font-weight: 600; color: var(--gold); font-size: 1rem; }
  .card-input { position: relative; }
  .card-input input { padding-right: 50px; }
  .card-icon { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--muted); font-size: 1.1rem; }
 
  /* Profile */
  .profile-header {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 4px; padding: 32px; display: flex; gap: 24px; align-items: center; margin-bottom: 24px;
  }
  .avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700;
    color: var(--deep); flex-shrink: 0;
  }
  .profile-name { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--white); }
  .profile-role { font-size: 0.75rem; color: var(--gold); font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
  .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  @media (max-width: 600px) { .profile-grid { grid-template-columns: 1fr; } }
 
  /* Contact */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 40px; align-items: start; }
  @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
  .contact-info-item { display: flex; gap: 14px; margin-bottom: 24px; }
  .contact-icon { font-size: 1.2rem; margin-top: 2px; flex-shrink: 0; }
  .contact-item-title { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
  .contact-item-val { font-size: 0.87rem; color: var(--muted); line-height: 1.6; }
 
  /* 404 */
  .not-found {
    min-height: 70vh; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
  }
  .not-found-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(6rem, 18vw, 12rem); font-weight: 900;
    color: transparent; -webkit-text-stroke: 1px rgba(201,168,76,0.3);
    line-height: 1; margin-bottom: 8px;
  }
 
  /* Toast */
  .toast {
    position: fixed; bottom: 28px; right: 28px; z-index: 999;
    background: var(--card); border: 1px solid var(--gold);
    border-radius: 4px; padding: 14px 20px;
    font-size: 0.85rem; color: var(--text);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    animation: slideUp 0.3s ease;
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
 

function App() {
  return (
    <div>
      <style>{globalStyles}</style>
      <AppRoutes />
    </div>
  )
}

export default App