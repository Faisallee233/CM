
function Admin({ showToast }) {
  const SAMPLE_ORDERS = [
    {
      id: "ORD-001",
      event: "Wedding",
      date: "2025-05-20",
      amount: "UGX 1,200,000",
      status: "Confirmed",
    },
    {
      id: "ORD-002",
      event: "Corporate Gala",
      date: "2025-05-25",
      amount: "UGX 2,500,000",
      status: "Completed",
    }]
  return (
    <div className="min-h-screen bg-deep text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold">
              <span className="text-gold">Admin</span> Panel
            </h1>
            <p className="text-muted text-sm mt-1">
              Classical Muzika Brass Band — Management Console
            </p>
          </div>

          <span className="text-xs uppercase font-semibold px-3 py-1 bg-gold/20 text-gold rounded">
            Administrator
          </span>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ["24", "Total Bookings"],
            ["8", "This Month"],
            ["UGX 12.4M", "Revenue"],
            ["4.9★", "Rating"],
          ].map(([n, l]) => (
            <div key={l} className="bg-card border border-border p-5 rounded">
              <p className="text-xs uppercase text-muted mb-2">{l}</p>
              <p className="text-2xl font-playfair text-gold font-bold">{n}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded p-6 mb-6 overflow-x-auto">

          <div className="flex justify-between items-center mb-4">
            <h2 className="font-playfair text-lg">All Bookings</h2>

            <button
              onClick={() => showToast("Exported!")}
              className="bg-gradient-to-r from-gold to-goldLight text-black px-4 py-2 text-xs uppercase font-semibold"
            >
              Export CSV
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gold text-xs uppercase border-b border-border">
                <th className="py-2 text-left">ID</th>
                <th className="py-2 text-left">Client</th>
                <th className="py-2 text-left">Event</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Amount</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {[
                ...SAMPLE_ORDERS.map((o, i) => ({
                  ...o,
                  client: ["Sarah Mukasa", "Robert N.", "Grace N."][i],
                })),
                {
                  id: "ORD-004",
                  event: "Birthday Party",
                  date: "2025-06-10",
                  amount: "UGX 300,000",
                  status: "Pending",
                  client: "Peter O.",
                },
              ].map((o) => (
                <tr key={o.id} className="border-b border-white/5 hover:bg-white/5">
                  
                  <td className="py-3 text-gold font-semibold">{o.id}</td>
                  <td>{o.client}</td>
                  <td>{o.event}</td>
                  <td>{o.date}</td>
                  <td>{o.amount}</td>

                  {/* Status */}
                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        o.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : o.status === "Confirmed"
                          ? "bg-gold/20 text-gold"
                          : "bg-muted/20 text-muted"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => showToast("✅ Status updated!")}
                        className="bg-card border border-border px-3 py-1 text-xs hover:border-gold hover:text-gold"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => showToast("❌ Booking removed")}
                        className="bg-red-500/10 border border-red-500/30 text-red-400 px-3 py-1 text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Quick Actions */}
          <div className="bg-card border border-border p-6 rounded">
            <h3 className="font-playfair mb-4">Quick Actions</h3>

            {[
              "Send Newsletter",
              "Export Bookings",
              "Manage Members",
              "View Analytics",
            ].map((a) => (
              <button
                key={a}
                onClick={() => showToast(`🚀 ${a} initiated`)}
                className="w-full text-left bg-card border border-border px-4 py-2 text-sm mb-2 hover:border-gold hover:text-gold"
              >
                {a}
              </button>
            ))}
          </div>

          {/* Activity */}
          <div className="bg-card border border-border p-6 rounded">
            <h3 className="font-playfair mb-4">Recent Activity</h3>

            {[
              "New booking: ORD-004",
              "Payment received: ORD-001",
              "Profile updated: Sarah M.",
              "File uploaded: venue_photo.jpg",
            ].map((a, i) => (
              <div key={i} className="flex gap-3 mb-3 text-sm">
                <span className="text-gold">●</span>
                <span className="text-muted">{a}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin