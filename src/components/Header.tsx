import { useEffect, useState } from 'react'
import logo from '../assets/logo-megajeseg.png'
import { CloseIcon, MenuIcon } from './Icons'

const secciones = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'cultos', label: 'Cultos' },
  { id: 'redes', label: 'Redes' },
  { id: 'ubicacion', label: 'Ubicación' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgreso(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
  }, [abierto])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || abierto ? 'bg-ink/90 shadow-lg shadow-black/30 backdrop-blur' : 'bg-transparent'
      }`}
    >
      {/* Barra de progreso de lectura */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-brand-500 via-gold-400 to-gold-300"
        style={{ transform: `scaleX(${progreso})` }}
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setAbierto(false)}>
          <img src={logo} alt="" className="h-9 w-auto" />
          <span className="leading-tight text-white">
            <span className="block text-sm font-extrabold tracking-wide">MEGA JESEG</span>
            <span className="block text-[10px] font-medium tracking-[0.18em] text-gold-300">IGLESIA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {secciones.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-white transition active:scale-95 lg:hidden"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
          abierto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <nav className="min-h-0">
          <ul className="space-y-1 px-4 pt-2 pb-6">
            {secciones.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setAbierto(false)}
                  className="block rounded-xl px-4 py-3.5 text-lg font-semibold text-white transition active:bg-white/10"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
