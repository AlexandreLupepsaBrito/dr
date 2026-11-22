import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Envolve qualquer conteúdo com uma animação suave de entrada na rolagem. */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
