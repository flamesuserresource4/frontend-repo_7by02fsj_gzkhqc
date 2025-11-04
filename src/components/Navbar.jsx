import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, label }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm md:text-base transition-colors duration-200 ${
        active ? 'text-black' : 'text-black/60 hover:text-black'
      }`}
    >
      {label}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-white/60 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg md:text-xl tracking-wide text-black">
          Fragments of Yume
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" label="Home" />
          <NavLink to="/chapters" label="Chapters" />
          <NavLink to="/gallery" label="Gallery" />
        </div>
      </nav>
    </header>
  )
}
