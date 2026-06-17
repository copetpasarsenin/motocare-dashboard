import { useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router'
import {
  CalendarDays,
  Gauge,
  LogOut,
  Menu,
  PlusCircle,
  UserCircle,
  Wrench,
  X,
} from 'lucide-react'
import { clearSession, getStoredUser } from '../../utils/auth'

const navItems = [
  { to: '/', label: 'Dashboard', icon: Gauge },
  { to: '/services', label: 'Services', icon: Wrench },
  { to: '/services/create', label: 'Create Service', icon: PlusCircle },
  { to: '/bookings', label: 'Bookings', icon: CalendarDays },
  { to: '/profile', label: 'Profile', icon: UserCircle },
]

const pageTitles = {
  '/': 'Dashboard',
  '/services': 'Services List',
  '/services/create': 'Create Service',
  '/bookings': 'Bookings',
  '/profile': 'Profile',
}

function Sidebar({ open, onClose, onLogout }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-mark">MC</div>
        <div>
          <strong>MotoCare</strong>
          <span>Garage Dashboard</span>
        </div>
        <button className="sidebar-close" type="button" onClick={onClose} aria-label="Close menu">
          <X size={18} />
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink key={item.to} to={item.to} onClick={onClose} end={item.to === '/'}>
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <button type="button" onClick={onLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const user = getStoredUser()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <div className="dashboard-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={handleLogout} />
      {sidebarOpen && <button className="backdrop" type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu" />}

      <div className="content-shell">
        <header className="topbar">
          <button className="icon-button mobile-menu" type="button" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div>
            <p className="topbar-kicker">MotoCare Dashboard</p>
            <h1>{pageTitles[location.pathname] || 'MotoCare'}</h1>
          </div>
          <div className="topbar-actions">
            <div className="user-chip">
              <span>{user?.username || 'User'}</span>
              <small>{user?.role || 'guest'}</small>
            </div>
            <button className="ghost-button" type="button" onClick={handleLogout}>
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
