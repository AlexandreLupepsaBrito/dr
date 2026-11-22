import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'light' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-espresso text-ivory hover:bg-ink shadow-[0_10px_30px_-12px_rgba(58,45,36,0.55)] hover:shadow-[0_16px_40px_-14px_rgba(58,45,36,0.6)]',
  outline: 'border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory',
  light: 'bg-ivory text-espresso hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]',
  ghost: 'text-espresso hover:text-gold-deep px-0',
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  icon?: ReactNode
  external?: boolean
  size?: 'md' | 'lg'
}

/** Link com aparência de botão (todos os CTAs do site são links reais). */
export function ButtonLink({
  variant = 'primary',
  icon,
  external,
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  const sizing = variant === 'ghost' ? '' : size === 'lg' ? 'px-8 py-4 text-[0.82rem]' : 'px-6 py-3 text-[0.78rem]'
  return (
    <a
      {...props}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.12em] uppercase transition-all duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 active:translate-y-0 ${sizing} ${variants[variant]} ${className}`}
    >
      {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </a>
  )
}
