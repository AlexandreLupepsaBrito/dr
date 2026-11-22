import { MapPin, Phone, ArrowUp } from 'lucide-react'
import { fullAddress, navItems, site } from '../../data/site'
import { whatsappLink } from '../../lib/whatsapp'
import { Logo } from './Header'
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '../ui/BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()
  const linkClass = 'text-sand-200/90 transition-colors hover:text-ivory'

  return (
    <footer className="bg-ink text-sand-200">
      <div className="container-site pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand-200/80">
              Cirurgia geral, cirurgias ambulatoriais e procedimentos faciais na {site.clinic.name}, em{' '}
              {site.clinic.city}-{site.clinic.state}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.instagram, label: 'Instagram', icon: <InstagramIcon size={18} /> },
                { href: site.social.facebook, label: 'Facebook', icon: <FacebookIcon size={18} /> },
                { href: whatsappLink(), label: 'WhatsApp', icon: <WhatsAppIcon size={17} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200/20 text-sand-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="lg:col-span-2">
            <h2 className="font-sans text-[0.7rem] font-semibold tracking-[0.25em] !text-gold uppercase">Navegação</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className={linkClass}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h2 className="font-sans text-[0.7rem] font-semibold tracking-[0.25em] !text-gold uppercase">Contato</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <a href={site.clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.clinic.name} — {fullAddress}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <a href={`tel:${site.contact.phone}`} className={linkClass}>
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {site.contact.whatsappDisplay}
                  </a>
                  <span className="text-sand-200/40"> · </span>
                  <a
                    href={whatsappLink(undefined, site.contact.whatsappAlt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {site.contact.whatsappAltDisplay}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Identificação médica — Resolução CFM nº 2.336/2023 */}
        <div className="mt-16 rounded-2xl border border-sand-200/15 p-6 text-xs leading-relaxed text-sand-200/75 sm:p-7">
          <p className="text-sm text-sand-100">
            <strong className="font-semibold">{site.doctor.name}</strong> · Médica · {site.doctor.crm} ·{' '}
            {site.doctor.rqeSpecialty} — {site.doctor.rqe}
          </p>
          <p className="mt-2">
            Responsável técnica: {site.doctor.name} — {site.doctor.crm} · {site.clinic.name}
            {site.clinic.crmPj ? ` · ${site.clinic.crmPj}` : ''}
          </p>
          <p className="mt-3">
            As informações deste site têm caráter exclusivamente informativo e educativo e não substituem a consulta
            médica. A indicação de qualquer procedimento depende de avaliação individual, e os resultados variam de
            pessoa para pessoa. Pós-graduações lato sensu e cursos mencionados não constituem título de especialista.
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-sand-200/10 pt-8 text-xs text-sand-200/60 sm:flex-row sm:items-center">
          <p>
            © {year} {site.doctor.name}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="group inline-flex items-center gap-2 transition-colors hover:text-ivory">
            Voltar ao topo
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
