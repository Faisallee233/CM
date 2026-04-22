import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  
  const SERVICES = [
    { title:"Wedding Performance", icon:"💍", desc:"Make your special day unforgettable with our enchanting brass melodies, creating a romantic atmosphere for you and your guests." },
    { title:"Corporate Events", icon:"🏢", desc:"Elevate your corporate gatherings with our sophisticated brass performances, adding a touch of elegance and energy to impress clients and colleagues alike." },
    { title:"Private Parties", icon:"🎉", desc:"Turn your celebrations into memorable occasions with our lively brass music, perfect for birthdays, anniversaries, and any festive gathering." },
    { title:"Funerals & Memorials", icon:"🕊️", desc:"Honor the memory of your loved ones with our respectful and soulful brass performances, providing comfort and solace during difficult times." },
    { title:"Public Concerts", icon:"🎶", desc:"Experience the power of live brass music at our public concerts, where we bring classical and contemporary pieces to life for music lovers of all ages." }
  ];

  const TESTIMONIALS = [
    { stars:5, text:"The CM Brass Band made our wedding day truly magical! Their music set the perfect tone and had everyone dancing. Highly recommend!", author:"Sarah K.", role:"Bride" },
    { stars:5, text:"We hired CM Brass Band for our corporate gala, and they exceeded all expectations. Professional, talented, and a pleasure to work with!", author:"James M.", role:"Event Planner" },
    { stars:5, text:"CM Brass Band's performance at our anniversary party was unforgettable. Their music created such a joyful atmosphere. Thank you for making our day special!", author:"Linda & Robert T.", role:"Anniversary Couple" }
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"/><div className="hero-lines"/>
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">Uganda's Premier Brass Ensemble</div>
            <h1 className="hero-title">Music That<br/><em>Moves</em> the Soul</h1>
            <p className="hero-subtitle">Classical Muzika Brass Band — performing with passion at weddings, graduations, corporate events, and every celebration that deserves to be remembered.</p>
            <div className="hero-btns">
              <button className="btn btn-gold" onClick={() => navigate("/contact")}>🎺 Book a Performance</button>
              <button className="btn btn-outline" onClick={() => navigate("/about")}>Learn More</button>
            </div>
            <div className="hero-stats">
              {[["500+","Events Performed"],["15+","Years Experience"],["100%","Client Satisfaction"]].map(([n,l]) => (
                <div key={l}><div className="hero-stat-num">{n}</div><div className="hero-stat-label">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Services */}
      <section className="page" style={{paddingTop:80}}>
        <div className="container">
          <div className="section-title">Our <span>Services</span></div>
          <p className="section-sub">We perform at all kinds of functions</p>
          <div className="divider"/>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Testimonials */}
      <section style={{padding:"80px 0", background:"var(--dark)"}}>
        <div className="container">
          <div className="section-title">What Our <span>Clients Say</span></div>
          <div className="divider"/>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t,i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{"★".repeat(t.stars)}</div>
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section style={{padding:"80px 0"}}>
        <div className="container" style={{textAlign:"center"}}>
          <div className="section-title">Ready to <span>Book Us?</span></div>
          <p style={{color:"var(--muted)", marginTop:12, marginBottom:32, maxWidth:480, margin:"12px auto 32px", fontSize:"0.9rem", lineHeight:1.7}}>
            Contact us today and let's create an unforgettable musical experience for your special occasion.
          </p>
          <button className="btn btn-gold" onClick={() => navigate("/contact")}>
            Get in Touch →
          </button>
        </div>
      </section>
    </>
  );
}

export default Home