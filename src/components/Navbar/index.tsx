import { Link } from 'react-router-dom'
import logo from '../../assets/logo-alfa-omega.png'


export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-white"
        >
          <div className="flex items-center gap-2">
            <img src={logo}
              alt="Orquestra"
              className="h-18 w-18"
            />
            {/* Alfa <span className="text-amber-400">&</span> Ômega */}
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/orquestra"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            A Orquestra
          </Link>

          <Link
            to="/galeria"
            className="text-sm text-slate-300 transition hover:text-amber-400"
          >
            Galeria
          </Link>

          <Link
            to="/contato"
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}