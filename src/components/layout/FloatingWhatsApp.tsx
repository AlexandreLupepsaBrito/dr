import { useEffect, useState } from 'react'
import { whatsappLink } from '../../lib/whatsapp'
import { WhatsAppIcon } from '../ui/BrandIcons'

/** Botão flutuante de WhatsApp — aparece após a primeira dobra. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6 transition-all duration-500 ease-[var(--ease-soft)] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span className="hidden rounded-full bg-ivory/95 px-4 py-2 text-xs font-semibold tracking-[0.1em] text-espresso uppercase opacity-0 shadow-lg ring-1 ring-sand-200 transition-all duration-300 group-hover:opacity-100 md:block">
        Agende sua consulta
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-[0_12px_30px_-8px_rgba(31,122,77,0.6)] transition-transform duration-300 group-hover:scale-105">
        <span className="animate-ping-soft absolute inset-0 rounded-full bg-[#1f7a4d]" aria-hidden="true" />
        <WhatsAppIcon size={26} className="relative" />
      </span>
    </a>
  )
}
