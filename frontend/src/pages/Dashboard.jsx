import { CalendarCheck, CircleDollarSign, ClipboardList, Wrench } from 'lucide-react'

const stats = [
  { label: 'Categories', value: '10', icon: ClipboardList, tone: 'blue' },
  { label: 'Services', value: '10', icon: Wrench, tone: 'orange' },
  { label: 'Bookings', value: '10', icon: CalendarCheck, tone: 'blue' },
  { label: 'Revenue', value: 'Rp 500K', icon: CircleDollarSign, tone: 'orange' },
]

function Dashboard() {
  return (
    <div className="page-grid">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Workshop Control</p>
          <h2>Modern Garage Operations</h2>
          <p className="muted">Pantau layanan, booking, dan performa bengkel dari satu dashboard.</p>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon
          return (
            <article className="stat-card" key={item.label}>
              <span className={`stat-icon ${item.tone}`}>
                <Icon size={22} />
              </span>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </article>
          )
        })}
      </section>

      <section className="card span-2">
        <div className="section-heading">
          <h3>Dashboard foundation</h3>
          <p>API statistik dan chart akan dihubungkan pada task berikutnya.</p>
        </div>
        <div className="timeline-list">
          <div><strong>Auth</strong><span>Login, register, token, protected route siap.</span></div>
          <div><strong>Services</strong><span>List foundation dengan search, filter, table, dan export CSV.</span></div>
          <div><strong>Bookings</strong><span>Halaman dasar siap untuk integrasi API booking.</span></div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
