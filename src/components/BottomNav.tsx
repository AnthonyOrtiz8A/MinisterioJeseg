import { useEffect, useState } from 'react'
import { redes } from '../data/iglesia'
import { ClockIcon, HomeIcon, PinIcon, ShareIcon, UsersIcon, WhatsAppIcon } from './Icons'

const items = [
  { id: 'inicio', label: 'Inicio', Icon: HomeIcon },
  { id: 'nosotros', label: 'Nosotros', Icon: UsersIcon },
  { id: 'cultos', label: 'Cultos', Icon: ClockIcon },
  { id: 'redes', label: 'Redes', Icon: ShareIcon },
  { id: 'ubicacion', label: 'Mapa', Icon: PinIcon },
]

export default function BottomNav() {
  const [activa, setActiva] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiva(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const { id } of items) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a
        href={`https://wa.me/${redes.whatsapp.numero}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed right-4 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/25 transition active:scale-95 lg:right-6 lg:bottom-6"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <nav
        aria-label="Navegación principal"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      >
        <ul className="grid grid-cols-5">
          {items.map(({ id, label, Icon }) => {
            const on = activa === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={on ? 'true' : undefined}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition ${
                    on ? 'text-gold-300' : 'text-white/55'
                  }`}
                >
                  <span
                    className={`grid h-7 w-12 place-items-center rounded-full transition ${on ? 'bg-white/10' : ''}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
