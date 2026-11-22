import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Send, Star } from 'lucide-react'
import { fullAddress, site } from '../data/site'
import { procedures } from '../data/procedures'
import { whatsappLink } from '../lib/whatsapp'
import { Reveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/Button'
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '../components/ui/BrandIcons'

const inputClass =
  'mt-2 w-full rounded-xl border border-sand-200 bg-ivory px-4 py-3.5 text-[0.95rem] text-espresso placeholder:text-taupe/70 transition-colors focus:border-gold-deep focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-gold/25'

/**
 * Formulário sem servidor: monta uma mensagem e abre o WhatsApp da clínica.
 * Nenhum dado é armazenado pelo site.
 */
function WhatsAppForm() {
  const [name, setName] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const parts = [
      `Olá! Meu nome é ${name.trim()}. Vim pelo site da Dra. Fernanda Fabiani e gostaria de agendar uma consulta.`,
      interest && `Interesse: ${interest}.`,
      message.trim() && message.trim(),
    ].filter(Boolean)
    window.open(whatsappLink(parts.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-ivory p-7 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] sm:p-10">
      <h3 className="text-[1.9rem]">Envie sua mensagem</h3>
      <p className="mt-2 text-sm text-body/85">Preencha e continue a conversa diretamente no WhatsApp.</p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-cocoa uppercase">Seu nome *</span>
          <input
            required
            type="text"
            name="nome"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como podemos chamar você?"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-cocoa uppercase">Assunto de interesse</span>
          <select name="interesse" value={interest} onChange={(e) => setInterest(e.target.value)} className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c8470' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10`}>
            <option value="">Consulta / avaliação</option>
            {procedures.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-cocoa uppercase">Mensagem (opcional)</span>
          <textarea
            name="mensagem"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Conte brevemente como podemos ajudar"
            className={`${inputClass} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-espresso px-8 py-4 text-[0.8rem] font-semibold tracking-[0.12em] text-ivory uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
      >
        Continuar no WhatsApp
        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-[0.72rem] text-taupe">Seus dados não são armazenados neste site.</p>
    </form>
  )
}

export function Contact() {
  const items = [
    { icon: <WhatsAppIcon size={18} />, label: 'WhatsApp', value: site.contact.whatsappDisplay, href: whatsappLink(), external: true },
    { icon: <WhatsAppIcon size={18} />, label: 'WhatsApp alternativo', value: site.contact.whatsappAltDisplay, href: whatsappLink(undefined, site.contact.whatsappAlt), external: true },
    { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Telefone', value: site.contact.phoneDisplay, href: `tel:${site.contact.phone}` },
    { icon: <InstagramIcon size={18} />, label: 'Instagram', value: site.social.instagramHandle, href: site.social.instagram, external: true },
    { icon: <FacebookIcon size={18} />, label: 'Facebook', value: 'Dra. Fernanda Fabiani', href: site.social.facebook, external: true },
    { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Endereço', value: fullAddress, href: site.clinic.mapsUrl, external: true },
  ]

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-cocoa py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow !text-sand-200">Contato e agendamento</p>
            <h2 id="contato-title" className="mt-5 text-[2.5rem] leading-[1.03] !text-ivory sm:text-5xl lg:text-[3.6rem]">
              Agende sua consulta com a <em className="text-sand-200">Dra. Fernanda</em>
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] text-sand-100/90">
              Tire suas dúvidas e encontre o melhor horário para a sua avaliação. A equipe da {site.clinic.name}{' '}
              responde pelo WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ButtonLink href={whatsappLink()} external variant="light" size="lg" icon={<WhatsAppIcon size={18} />} className="mt-10">
              Falar no WhatsApp
            </ButtonLink>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {items.map((it) => (
                <li key={it.label} className="bg-cocoa">
                  <a
                    href={it.href}
                    {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full gap-4 p-5 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <span className="mt-0.5 text-sand-200 transition-colors group-hover:text-ivory">{it.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-sand-200/80 uppercase">{it.label}</span>
                      <span className="mt-1 block text-[0.92rem] break-words text-ivory">{it.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={250}>
            <a
              href={site.social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-sand-200 underline-offset-4 transition-colors hover:text-ivory hover:underline"
            >
              <Star size={15} strokeWidth={1.6} /> Avalie a clínica no Google
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={150}>
            <WhatsAppForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
