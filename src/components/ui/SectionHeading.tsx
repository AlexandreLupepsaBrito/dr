import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  id?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'left', id, light }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''} ${light ? '!text-sand-200' : ''}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-5 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] ${light ? '!text-ivory' : ''}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-[1.02rem] leading-relaxed ${light ? 'text-sand-200' : 'text-body/90'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
