// ── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "💒", title: "Weddings", desc: "Unforgettable ceremonial processions and receptions with our brass ensemble." },
  { icon: "🎓", title: "Graduations", desc: "Celebrate academic achievements with a triumphant live brass performance." },
  { icon: "🏛️", title: "Corporate Events", desc: "Professional entertainment for conferences, galas, and product launches." },
  { icon: "⛪", title: "Church Services", desc: "Sacred music arrangements for worship, funerals, and special masses." },
  { icon: "🎉", title: "Private Parties", desc: "Birthdays, anniversaries, and family celebrations brought to life." },
  { icon: "🎪", title: "Festivals", desc: "High-energy performances for cultural festivals and public events." },
];
 
const TESTIMONIALS = [
  { text: "CM Brass Band made our wedding day absolutely magical. The music filled the entire venue with warmth and energy.", author: "Sarah & David Mukasa", role: "Wedding, 2024", stars: 5 },
  { text: "Classical Muzika Brass Band performed at our company gala — every guest was on their feet. Truly world-class.", author: "Robert Nkurunziza", role: "Corporate Event", stars: 5 },
  { text: "From the processional to the recessional, every note was perfect. We couldn't have asked for better.", author: "Grace Namukasa", role: "Church Ceremony", stars: 5 },
];
 
const SAMPLE_ORDERS = [
  { id: "ORD-001", event: "Wedding Reception", date: "2025-03-14", amount: "UGX 850,000", status: "Completed" },
  { id: "ORD-002", event: "Graduation Ceremony", date: "2025-04-02", amount: "UGX 450,000", status: "Confirmed" },
  { id: "ORD-003", event: "Corporate Gala", date: "2025-05-20", amount: "UGX 1,200,000", status: "Pending" },
];
 
const NAV_PAGES = ["Home", "Contact"];
const AUTH_PAGES = ["Login", "Register"];
const USER_PAGES = ["Dashboard", "Profile", "Orders", "Upload", "Payment"];
const ADMIN_PAGES = ["Admin"];