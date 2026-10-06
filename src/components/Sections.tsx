import { useState, type ComponentType, type ReactNode, type SVGProps } from 'react'
import logo from '../assets/logo-megajeseg.png'
import { cultosPorDia, datosIglesia, iglesia, integrantes, redes, valores } from '../data/iglesia'
import {
  ArrowIcon,
  CalendarIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
  UsersIcon,
  WhatsAppIcon,
} from './Icons'
import Reveal from './Reveal'

function Titulo({ etiqueta, children, oscuro = false }: { etiqueta: string; children: ReactNode; oscuro?: boolean }) {
  return (
    <Reveal className="mb-8">
      <p
        className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase ${
          oscuro ? 'text-gold-400' : 'text-brand-600'
        }`}
      >
        <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-gold-400 to-brand-500" />
        {etiqueta}
      </p>
      <h2 className="mt-2 text-[1.85rem] leading-tight font-extrabold text-balance sm:text-4xl">{children}</h2>
    </Reveal>
  )
}

function iniciales(texto: string) {
  return texto
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export function Nosotros() {
  const datos = [
    { Icon: CalendarIcon, etiqueta: 'Año de fundación', valor: datosIglesia.anioFundacion },
    { Icon: UsersIcon, etiqueta: 'Integrantes', valor: datosIglesia.integrantes },
  ]

  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <Titulo etiqueta="Nuestra iglesia">Una familia en Cristo</Titulo>

      <div className="mb-4 grid grid-cols-2 gap-3">
        {datos.map(({ Icon, etiqueta, valor }, i) => (
          <Reveal
            key={etiqueta}
            efecto={i === 0 ? 'izquierda' : 'derecha'}
            className="relative overflow-hidden rounded-2xl bg-ink p-4 text-white sm:p-6"
          >
            <span className="absolute -top-10 -right-10 size-28 rounded-full bg-brand-500/40 blur-2xl" />
            <Icon className="relative size-6 text-gold-400" />
            <p className={`relative mt-3 font-extrabold ${valor ? 'texto-oro text-3xl sm:text-4xl' : 'text-lg text-white/45 italic'}`}>
              {valor ?? 'Por definir'}
            </p>
            <p className="relative mt-0.5 text-xs font-semibold tracking-wide text-white/65 uppercase sm:text-sm">{etiqueta}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {valores.map((v, i) => (
          <Reveal
            key={v.titulo}
            as="article"
            retraso={i * 120}
            className="rounded-2xl border-l-4 border-brand-500 bg-white p-5 shadow-sm ring-1 ring-brand-100"
          >
            <span className="font-display text-3xl font-bold text-gold-500">0{i + 1}</span>
            <h3 className="mt-1 text-lg font-bold">{v.titulo}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{v.texto}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal as="h3" className="mb-4 text-lg font-bold">
          Pastores y líderes
        </Reveal>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {integrantes.map((p, i) => (
            <Reveal
              key={p.cargo}
              as="li"
              efecto="zoom"
              retraso={i * 100}
              className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-brand-100"
            >
              {p.foto ? (
                <img
                  src={p.foto}
                  alt={p.nombre ?? p.cargo}
                  className="mx-auto size-20 rounded-full object-cover ring-2 ring-gold-400 ring-offset-2"
                />
              ) : (
                <span className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-brand-600 p-[3px]">
                  <span className="grid size-full place-items-center rounded-full bg-ink text-xl font-extrabold text-gold-300">
                    {iniciales(p.nombre ?? p.cargo)}
                  </span>
                </span>
              )}
              <p className={`mt-3 font-bold ${p.nombre ? '' : 'text-stone-400 italic'}`}>{p.nombre ?? 'Nombre pendiente'}</p>
              <p className="text-sm text-brand-600">{p.cargo}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

const abreviar = (dia: string) => dia.slice(0, 3)
// Lunes primero, domingo al final.
const orden = [1, 2, 3, 4, 5, 6, 0]

export function Cultos() {
  const hoy = new Date().getDay()
  const [dia, setDia] = useState(hoy)
  const seleccion = cultosPorDia[dia]

  return (
    <section id="cultos" className="relative overflow-hidden bg-gradient-to-b from-brand-600 to-brand-700 py-16 text-white lg:py-24">
      <span className="absolute -top-24 -left-24 size-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Titulo etiqueta="Te esperamos" oscuro>
          Nuestros cultos
        </Titulo>

        {/* Celular: selector de día + detalle */}
        <div className="lg:hidden">
          <Reveal>
          <div className="grid grid-cols-7 gap-1.5" role="tablist" aria-label="Días de la semana">
            {orden.map((i) => {
              const on = dia === i
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setDia(i)}
                  className={`relative rounded-xl py-2.5 text-xs font-bold transition active:scale-95 ${
                    on ? 'bg-ink text-gold-300 shadow-lg shadow-black/30' : 'bg-white/10 text-white'
                  }`}
                >
                  {abreviar(cultosPorDia[i].dia)}
                  {i === hoy && <span className="absolute top-1 right-1 size-1.5 rounded-full bg-gold-400" />}
                </button>
              )
            })}
          </div>
          </Reveal>

          <div className="mt-5 space-y-3" role="tabpanel">
            <p className="text-sm font-semibold text-white/75">
              {seleccion.dia}
              {dia === hoy && <span className="ml-2 rounded-full bg-gold-400 px-2 py-0.5 text-xs text-ink">Hoy</span>}
            </p>
            {seleccion.cultos.map((c) => (
              // La key incluye el día para repetir la animación al cambiar de día.
              <article
                key={`${dia}-${c.nombre}`}
                className="flex animate-entrada gap-4 rounded-2xl bg-ink/85 p-4 shadow-xl shadow-black/20 ring-1 ring-white/10"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink">
                  <ClockIcon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg leading-snug font-bold">{c.nombre}</h3>
                  <p className="font-semibold text-gold-300 tabular-nums">{c.hora}</p>
                  <p className="mt-1 text-sm text-white/70">{c.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PC: semana completa */}
        <ul className="hidden gap-4 lg:grid lg:grid-cols-4">
          {orden.map((i, n) => (
            <Reveal
              key={i}
              as="li"
              retraso={n * 80}
              className={`rounded-2xl p-5 ring-1 ${
                i === hoy ? 'bg-ink ring-gold-400/60' : 'bg-white/10 ring-white/15'
              }`}
            >
              <p className="mb-3 flex items-center justify-between font-bold">
                {cultosPorDia[i].dia}
                {i === hoy && <span className="rounded-full bg-gold-400 px-2 py-0.5 text-xs text-ink">Hoy</span>}
              </p>
              <div className="space-y-2">
                {cultosPorDia[i].cultos.map((c) => (
                  <div key={c.nombre}>
                    <p className="font-semibold text-gold-300">{c.nombre}</p>
                    <p className="text-sm text-white/70 tabular-nums">{c.hora}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

type Red = {
  nombre: string
  usuario: string
  href: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  clase: string
}

export function Redes() {
  const lista: Red[] = [
    { nombre: 'Facebook', usuario: redes.facebook.usuario, href: redes.facebook.url, Icon: FacebookIcon, clase: 'bg-[#1877f2]' },
    {
      nombre: 'Instagram',
      usuario: redes.instagram.usuario,
      href: redes.instagram.url,
      Icon: InstagramIcon,
      clase: 'bg-[linear-gradient(45deg,#f9a825,#e1306c,#833ab4)]',
    },
    { nombre: 'TikTok', usuario: redes.tiktok.usuario, href: redes.tiktok.url, Icon: TikTokIcon, clase: 'bg-black ring-1 ring-white/25' },
    {
      nombre: 'WhatsApp',
      usuario: redes.whatsapp.usuario,
      href: `https://wa.me/${redes.whatsapp.numero}`,
      Icon: WhatsAppIcon,
      clase: 'bg-[#25d366]',
    },
  ]

  return (
    <section id="redes" className="bg-ink py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Titulo etiqueta="Síguenos" oscuro>
          Conéctate con <span className="texto-oro">nosotros</span>
        </Titulo>
        <Reveal as="p" className="-mt-4 max-w-lg text-white/70">
          Mira las transmisiones, prédicas y anuncios de la iglesia en nuestras redes.
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lista.map(({ nombre, usuario, href, Icon, clase }, i) => (
            <Reveal key={nombre} as="li" efecto={i % 2 ? 'derecha' : 'izquierda'} retraso={i * 90}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition active:scale-[0.99] hover:bg-white/10 hover:ring-gold-400/40"
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl text-white transition group-hover:scale-110 ${clase}`}>
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{nombre}</span>
                  <span className="block truncate text-sm text-white/60">{usuario}</span>
                </span>
                <ArrowIcon className="size-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-gold-400" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Ubicacion() {
  const { lat, lng } = iglesia.coordenadas
  const datos = [
    { Icon: PinIcon, label: 'Dirección', valor: iglesia.direccion, href: iglesia.mapaUrl },
    { Icon: PhoneIcon, label: 'Teléfono', valor: iglesia.telefono, href: `tel:${iglesia.telefono.replace(/\s/g, '')}` },
    { Icon: MailIcon, label: 'Correo', valor: iglesia.correo, href: `mailto:${iglesia.correo}` },
  ]

  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <Titulo etiqueta="Visítanos">¿Cómo llegar?</Titulo>

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal efecto="zoom" className="overflow-hidden rounded-3xl bg-ink p-1.5 shadow-xl lg:col-span-3">
          <iframe
            title="Mapa de la Iglesia Mega JESEG"
            src={`https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
            className="aspect-[4/3] w-full rounded-[1.25rem] lg:aspect-auto lg:h-full lg:min-h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <div className="flex flex-col gap-3 lg:col-span-2">
          {datos.map(({ Icon, label, valor, href }, i) => (
            <Reveal key={label} efecto="derecha" retraso={i * 100}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-100 transition active:scale-[0.99] hover:ring-brand-500/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold-400">
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-stone-500 uppercase">{label}</span>
                  <span className="block font-semibold text-pretty">{valor}</span>
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal retraso={300}>
            <a
              href={iglesia.mapaUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-brand-700/30 transition active:scale-[0.98] hover:brightness-110"
            >
              <PinIcon className="size-5" /> Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const sociales = [
    { nombre: 'Facebook', href: redes.facebook.url, Icon: FacebookIcon },
    { nombre: 'Instagram', href: redes.instagram.url, Icon: InstagramIcon },
    { nombre: 'TikTok', href: redes.tiktok.url, Icon: TikTokIcon },
    { nombre: 'WhatsApp', href: `https://wa.me/${redes.whatsapp.numero}`, Icon: WhatsAppIcon },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink px-4 pt-12 pb-28 text-center text-white/60 lg:pb-12">
      <span className="absolute -bottom-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
      <Reveal efecto="zoom" className="relative">
        <img src={logo} alt="Mega JESEG" className="mx-auto w-40" />
      </Reveal>
      <div className="relative mt-6 flex justify-center gap-3">
        {sociales.map(({ nombre, href, Icon }) => (
          <a
            key={nombre}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={nombre}
            className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-gold-400 hover:text-ink"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>
      <p className="relative mt-6 text-xs">
        © {new Date().getFullYear()} Ministerios JESEG · {iglesia.nombre}
      </p>
    </footer>
  )
}
