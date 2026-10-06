import gracia from '../assets/ano-de-la-gracia.webp'
import logo from '../assets/logo-megajeseg.png'
import { cultosPorDia, iglesia, versiculoDelAnio } from '../data/iglesia'
import { ArrowIcon, ClockIcon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  const hoy = cultosPorDia[new Date().getDay()]

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      {/* Resplandor naranja y dorado detrás del logo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#c8642c_0%,#8f401a_35%,#0b0a09_75%)] lg:bg-[radial-gradient(ellipse_at_72%_45%,#c8642c_0%,#8f401a_30%,#0b0a09_70%)]" />
      <div className="absolute top-24 left-1/2 size-72 -translate-x-1/2 animate-brillo rounded-full bg-gold-400/25 blur-3xl lg:top-1/3 lg:left-[72%] lg:size-96" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 pt-24 pb-14 lg:min-h-[88vh] lg:grid-cols-2 lg:gap-12 lg:pt-28 lg:pb-20">
        <div className="animate-entrada lg:order-2">
          <img
            src={logo}
            alt="Logo Mega JESEG — Jesucristo es Señor en Guatemala"
            className="mx-auto w-[82%] max-w-sm animate-flotar drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] lg:w-full lg:max-w-md"
          />
        </div>

        <div className="animate-entrada text-center [animation-delay:200ms] lg:text-left">
          <p className="mb-4 inline-block rounded-full border border-gold-400/40 bg-black/30 px-3 py-1 font-display text-xs font-bold tracking-[0.2em] text-gold-300">
            2026 · AÑO DE LA GRACIA
          </p>
          <h1 className="text-[2.3rem] leading-[1.05] font-extrabold text-balance sm:text-6xl">
            Iglesia <span className="texto-oro">Mega JESEG</span>
          </h1>
          <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">{iglesia.lema}</p>
          <p className="mx-auto mt-5 max-w-md text-base text-pretty text-white/80 lg:mx-0 lg:text-lg">
            {iglesia.descripcion}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#cultos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-6 py-3.5 font-bold text-ink shadow-lg shadow-gold-500/20 transition active:scale-[0.98] hover:brightness-105"
            >
              Ver horarios de culto <ArrowIcon className="size-5" />
            </a>
            <a
              href="#ubicacion"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 font-semibold transition active:scale-[0.98] hover:bg-white/10"
            >
              Cómo llegar
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
            <p className="text-xs font-bold tracking-[0.2em] text-gold-300 uppercase">Hoy {hoy.dia.toLowerCase()}</p>
            <ul className="mt-2 space-y-2">
              {hoy.cultos.map((c) => (
                <li key={c.nombre} className="flex items-center gap-3">
                  <ClockIcon className="size-5 shrink-0 text-gold-400" />
                  <span className="flex-1 font-bold">{c.nombre}</span>
                  <span className="text-sm text-white/75 tabular-nums">{c.hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lema del año */}
      <div className="relative mx-auto max-w-6xl px-4 pb-14 lg:pb-20">
        <Reveal efecto="zoom" className="overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10">
          <img src={gracia} alt="2026 Año de la Gracia — Ministerios JESEG" className="paralaje w-full" loading="lazy" />
        </Reveal>
        <Reveal as="blockquote" retraso={150} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-base text-pretty text-white/85 italic sm:text-lg">“{versiculoDelAnio.texto}”</p>
          <footer className="mt-2 font-display text-sm font-bold tracking-[0.2em] text-grace-400">
            {versiculoDelAnio.cita}
          </footer>
        </Reveal>
      </div>
    </section>
  )
}
