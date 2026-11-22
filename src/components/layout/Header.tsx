import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '../../data/site'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { whatsappLink } from '../../lib/whatsapp'
import { ButtonLink } from '../ui/Button'
import { WhatsAppIcon, InstagramIcon } from '../ui/BrandIcons'

// Todas as seções (inclusive as que não estão no menu), para não destacar item errado
const ids = ['inicio', 'sobre', 'procedimentos', 'diferenciais', 'formacao', 'clinica', 'contato'] as const

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label={`${site.doctor.name} — voltar ao início`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border font-display text-lg italic transition-colors duration-300 ${
          light ? 'border-sand-200/40 text-sand-100' : 'border-gold/50 text-gold-deep group-hover:bg-espresso group-hover:text-ivory'
        }`}
        aria-hidden="true"
      >
        FF
      </span>
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span className={`font-display text-[1.32rem] font-medium tracking-tight ${light ? 'text-ivory' : 'text-espresso'}`}>
          {site.doctor.name}
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold tracking-[0.3em] uppercase ${light ? 'text-sand-200' : 'text-taupe'}`}>
          {site.doctor.title}
        </span>
      </span>
    </a>
  )
}

export function Header() {
  const { active, scrolled } = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Trava a rolagem, fecha com ESC e mantém o foco dentro do menu mobile
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const firstLink = panelRef.current?.querySelector<HTMLElement>('a')
    firstLink?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Fecha o menu ao passar para desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-soft)] ${
        scrolled || open
          ? 'border-b border-sand-200/70 bg-ivory/85 py-3 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Ir para o conteúdo
      </a>

      <div className="container-site flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative py-2 text-[0.8rem] font-medium tracking-[0.08em] transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-500 ${
                      isActive ? 'text-espresso after:w-full' : 'text-body/80 after:w-0 hover:text-espresso hover:after:w-full'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href={whatsappLink()} external icon={<WhatsAppIcon size={16} />}>
              Agendar consulta
            </ButtonLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-sand-100 lg:hidden"
          >
            {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

    </header>

      {/* Menu mobile — fora do <header> porque o backdrop-blur criaria um novo contexto para "fixed" */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[4.3rem] bottom-0 z-[45] overflow-y-auto bg-ivory lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-site flex min-h-full flex-col pt-8 pb-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.id} className="border-b border-sand-200/80">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-display text-[2rem] text-espresso transition-colors hover:text-gold-deep"
                >
                  {item.label}
                  <span className="font-sans text-xs tracking-[0.2em] text-taupe">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4 pt-10">
            <ButtonLink href={whatsappLink()} external size="lg" icon={<WhatsAppIcon size={18} />} className="w-full">
              Agendar pelo WhatsApp
            </ButtonLink>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-sm text-body"
            >
              <InstagramIcon size={16} /> {site.social.instagramHandle}
            </a>
            <p className="text-center text-xs text-taupe">
              {site.doctor.crm} · {site.doctor.rqe}
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
