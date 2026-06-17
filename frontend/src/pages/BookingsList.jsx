import EmptyState from '../components/ui/EmptyState'
import StatusBadge from '../components/ui/StatusBadge'

const sampleBookings = [
  { id: 1, customer_name: 'Budi Santoso', vehicle_name: 'Honda Beat', status: 'pending' },
  { id: 2, customer_name: 'Siti Rahma', vehicle_name: 'Yamaha NMAX', status: 'confirmed' },
]

function BookingsList() {
  return (
    <section className="card">
      <div className="section-heading row-heading">
        <div>
          <h3>Bookings</h3>
          <p>Table foundation untuk booking servis. API list/detail/status akan dihubungkan kemudian.</p>
        </div>
      </div>
      {sampleBookings.length > 0 ? (
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr><th>ID</th><th>Customer</th><th>Vehicle</th><th>Status</th></tr>
            </thead>
            <tbody>
              {sampleBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.customer_name}</td>
                  <td>{booking.vehicle_name}</td>
                  <td><StatusBadge status={booking.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState title="Booking kosong" description="Belum ada booking untuk ditampilkan." />
      )}
    </section>
  )
}

export default BookingsList
