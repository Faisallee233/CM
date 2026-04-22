import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const MEMBERS = [
    { name: "Christopher Mugisha", role: "Conductor & Founder", instrument: "🎺 Trumpet", bio: "With over 15 years leading Classical Muzika, Christopher's vision has shaped Uganda's brass music scene. Trained at Makerere University and internationally recognized.", initials: "CM" },
    { name: "Grace Nakato", role: "Lead Soloist", instrument: "🎷 Saxophone", bio: "Grace brings soulful expression to every performance. Her solos have moved audiences to tears and to their feet — often in the same song.", initials: "GN" },
    { name: "Daniel Ochieng", role: "Principal Trombonist", instrument: "🎸 Trombone", bio: "Daniel's rich, warm tone anchors the band's sound. A staple of the Ugandan music scene for over a decade, he's performed across East Africa.", initials: "DO" },
    { name: "Miriam Auma", role: "Percussionist", instrument: "🥁 Drums & Percussion", bio: "Miriam's rhythmic precision and energy are the heartbeat of every CM Brass Band performance. She trained in Nairobi and Kampala.", initials: "MA" },
  ];

  const MILESTONES = [
    { year: "2009", event: "Classical Muzika Brass Band founded in Kampala by Christopher Mugisha with just 6 members." },
    { year: "2012", event: "Performed at the Presidential State Banquet, marking our entry into Uganda's premier event circuit." },
    { year: "2015", event: "Expanded to a full 20-piece ensemble, adding woodwinds and a full percussion section." },
    { year: "2018", event: "Toured across East Africa — Kenya, Tanzania, and Rwanda — gaining regional acclaim." },
    { year: "2021", event: "Surpassed 400 events performed, including weddings, state functions, and public concerts." },
    { year: "2024", event: "Celebrated 15 years of music with a sold-out anniversary concert at Kampala Serena Hotel." },
  ];

  const VALUES = [
    { icon: "🎵", title: "Musical Excellence", desc: "We hold every note to the highest standard. Our rehearsals are rigorous, our performances are polished, and our passion is unmatched." },
    { icon: "🤝", title: "Client Dedication", desc: "We listen, adapt, and tailor every performance to your event. Your vision is our music sheet." },
    { icon: "🌍", title: "Ugandan Pride", desc: "Rooted in Kampala, we celebrate African musical heritage while embracing global brass traditions." },
    { icon: "✨", title: "Unforgettable Moments", desc: "We don't just play music — we create the soundtrack to your most cherished memories." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero-bg" /><div className="hero-lines" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">About Classical Muzika</div>
            <h1 className="hero-title">Uganda's Most <br /><em>Beloved</em> Brass Band</h1>
            <p className="hero-subtitle">
              For over 15 years, Classical Muzika Brass Band has been the sound of celebration across Uganda and East Africa — crafting musical memories one event at a time.
            </p>
            <div className="hero-btns">
              <button className="btn btn-gold" onClick={() => navigate("/contact")}>🎺 Book Us Now</button>
              <button className="btn btn-outline" onClick={() => navigate("/")}>Back to Home</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="page" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="section-title">Our <span>Story</span></div>
          <div className="divider" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            marginTop: 48,
          }}
            className="about-story-grid"
          >
            {/* Text */}
            <div>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: 20 }}>
                Classical Muzika Brass Band was born in 2009 in the heart of Kampala, Uganda. Founded by conductor Christopher Mugisha with a small but passionate group of six musicians, the band set out with a singular mission: to bring the power and elegance of live brass music to every corner of Ugandan life.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: 20 }}>
                What began as a weekend ensemble playing at local church services and community events soon grew into Uganda's most sought-after brass performance group. Word spread fast — our music didn't just fill rooms, it transformed them.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                Today, with over 500 events performed and a 20-piece ensemble of Uganda's finest musicians, Classical Muzika continues to set the gold standard for live brass entertainment across East Africa.
              </p>
            </div>
            {/* Visual Card */}
            <div style={{
              background: "linear-gradient(135deg, var(--gold) 0%, #b8860b 100%)",
              borderRadius: 16,
              padding: 48,
              textAlign: "center",
              color: "#1a1208",
            }}>
              <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎺</div>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 24 }}>Years of Musical Excellence</div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}>
                {[["500+", "Events"], ["20+", "Musicians"], ["5★", "Rating"], ["3", "Countries"]].map(([n, l]) => (
                  <div key={l} style={{
                    background: "rgba(0,0,0,0.15)",
                    borderRadius: 10,
                    padding: "12px 8px",
                  }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{n}</div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, opacity: 0.8 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 0", background: "var(--dark)" }}>
        <div className="container">
          <div className="section-title">What We <span>Stand For</span></div>
          <p className="section-sub">The principles that guide every note we play</p>
          <div className="divider" />
          <div className="services-grid" style={{ marginTop: 48 }}>
            {VALUES.map(v => (
              <div key={v.title} className="service-card">
                <div className="service-icon">{v.icon}</div>
                <div className="service-title">{v.title}</div>
                <div className="service-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-title">Our <span>Journey</span></div>
          <p className="section-sub">Key milestones that shaped who we are</p>
          <div className="divider" />
          <div style={{ marginTop: 48, maxWidth: 720, margin: "48px auto 0" }}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{
                display: "flex",
                gap: 24,
                marginBottom: 32,
                position: "relative",
              }}>
                {/* Line */}
                {i < MILESTONES.length - 1 && (
                  <div style={{
                    position: "absolute",
                    left: 31,
                    top: 44,
                    width: 2,
                    height: "calc(100% + 8px)",
                    background: "linear-gradient(to bottom, var(--gold), transparent)",
                    opacity: 0.3,
                  }} />
                )}
                {/* Year Badge */}
                <div style={{
                  minWidth: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--gold), #b8860b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#1a1208",
                  flexShrink: 0,
                  zIndex: 1,
                }}>
                  {m.year}
                </div>
                {/* Content */}
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  flex: 1,
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}>
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 0", background: "var(--dark)" }}>
        <div className="container">
          <div className="section-title">Meet the <span>Band</span></div>
          <p className="section-sub">The talented musicians behind every unforgettable performance</p>
          <div className="divider" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            marginTop: 48,
          }}>
            {MEMBERS.map(m => (
              <div key={m.name} className="testimonial-card" style={{ textAlign: "left" }}>
                {/* Avatar */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--gold), #b8860b)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#1a1208",
                  marginBottom: 16,
                }}>
                  {m.initials}
                </div>
                <div style={{ color: "var(--gold)", fontSize: "0.8rem", marginBottom: 4 }}>{m.instrument}</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 2 }}>{m.name}</div>
                <div style={{ color: "var(--gold)", fontSize: "0.8rem", marginBottom: 12, opacity: 0.8 }}>{m.role}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-title">Ready to Experience <span>the Music?</span></div>
          <p style={{ color: "var(--muted)", marginTop: 12, marginBottom: 32, maxWidth: 480, margin: "12px auto 32px", fontSize: "0.9rem", lineHeight: 1.7 }}>
            Let Classical Muzika Brass Band be the heartbeat of your next event. We'd love to perform for you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-gold" onClick={() => navigate("/contact")}>🎺 Book a Performance</button>
            <button className="btn btn-outline" onClick={() => navigate("/services")}>View Our Services</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export default About;