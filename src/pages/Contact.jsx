import { useState } from "react";

function Contact({ showToast }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", event:"", date:"", msg:"" });
  const submit = () => { showToast("✅ Message sent! We'll be in touch soon."); setForm({ name:"", email:"", phone:"", event:"", date:"", msg:"" }); };
  const SERVICES = [
    { title:"Wedding" },
    { title:"Corporate Event" },
    { title:"Birthday Party" },
    { title:"Anniversary" },
    { title:"Funeral" },
    { title:"Other" }
  ];
  return (
    <div className="page">
      <div className="container">
        <div style={{textAlign:"center", marginBottom:48}}>
          <div className="section-title">Get in <span>Touch</span></div>
          <p className="section-sub">We'd love to perform at your event</p>
          <div className="divider" style={{margin:"16px auto 0"}}/>
        </div>
        <div className="contact-grid">
          <div>
            <div className="section-title" style={{fontSize:"1.4rem"}}>Contact <span>Info</span></div>
            <div className="divider"/>
            {[
              { icon:"📞", title:"Phone", val:"+256 700 000 000\n+256 782 000 000" },
              { icon:"✉️", title:"Email", val:"info@cmbrassband.ug\nbookings@cmbrassband.ug" },
              { icon:"📍", title:"Location", val:"Kampala, Uganda\nAvailable Nationwide" },
              { icon:"⏰", title:"Working Hours", val:"Mon – Sat: 8:00 AM – 8:00 PM\nSunday: By Appointment" },
            ].map(c => (
              <div key={c.title} className="contact-info-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-item-title">{c.title}</div>
                  <div className="contact-item-val" style={{whiteSpace:"pre-line"}}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="form-title" style={{fontSize:"1.3rem", marginBottom:20}}>Send a Message</div>
            <div className="form-row">
              <div className="input-group"><label>Full Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></div>
              <div className="input-group"><label>Email</label><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="email@example.com"/></div>
            </div>
            <div className="form-row">
              <div className="input-group"><label>Phone</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+256..."/></div>
              <div className="input-group"><label>Event Type</label>
                <select value={form.event} onChange={e=>setForm({...form,event:e.target.value})}>
                  <option value="">Select event</option>
                  {SERVICES.map(s=><option key={s.title}>{s.title}</option>)}
                </select>
              </div>
            </div>
            <div className="input-group"><label>Event Date</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
            <div className="input-group"><label>Message</label><textarea rows={4} value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} placeholder="Tell us about your event..."/></div>
            <button className="btn btn-gold" style={{width:"100%", justifyContent:"center"}} onClick={submit}>Send Message →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact