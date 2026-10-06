import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type Efecto = 'subir' | 'izquierda' | 'derecha' | 'zoom'

type Props = {
  children: ReactNode
  efecto?: Efecto
  /** Retraso en milisegundos, útil para escalonar elementos de una lista. */
  retraso?: number
  as?: ElementType
  className?: string
}

/** Muestra su contenido con una animación cuando entra en pantalla al deslizar. */
export default function Reveal({ children, efecto = 'subir', retraso = 0, as: Tag = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal={efecto}
      data-visible={visible || undefined}
      style={{ transitionDelay: `${retraso}ms` }}
      className={className}
    >
      {children}
    </Tag>
  )
}
