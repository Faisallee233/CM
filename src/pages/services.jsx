import React from 'react'

const SERVICES = [
    { title:"Wedding Performance", icon:"💍", desc:"Make your special day unforgettable with our enchanting brass melodies, creating a romantic atmosphere for you and your guests." },
    { title:"Corporate Events", icon:"🏢", desc:"Elevate your corporate gatherings with our sophisticated brass performances, adding a touch of elegance and energy to impress clients and colleagues alike." },
    { title:"Private Parties", icon:"🎉", desc:"Turn your celebrations into memorable occasions with our lively brass music, perfect for birthdays, anniversaries, and any festive gathering." },
    { title:"Funerals & Memorials", icon:"🕊️", desc:"Honor the memory of your loved ones with our respectful and soulful brass performances, providing comfort and solace during difficult times." },
    { title:"Public Concerts", icon:"🎶", desc:"Experience the power of live brass music at our public concerts, where we bring classical and contemporary pieces to life for music lovers of all ages." }
  ];

function services() {

  return (
    <div>
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
    </div>
  )
}

export default services