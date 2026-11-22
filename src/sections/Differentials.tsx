import { differentials } from '../data/differentials'
import { whatsappLink } from '../lib/whatsapp'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/Button'
import { WhatsAppIcon } from '../components/ui/BrandIcons'

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="section relative overflow-hidden bg-espresso">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full border border-gold/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-96 w-96 rounded-full border border-gold/10" />

      <div className="container-site relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="diferenciais-title"
            eyebrow="Diferenciais"
            light
            title={
              <>
                Experiência que se traduz em <em className="text-gold">segurança e cuidado</em>
              </>
            }
          />
          <Reveal delay={100}>
            <ButtonLink href={whatsappLink()} external variant="light" icon={<WhatsAppIcon size={16} />}>
              Agendar consulta
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-espresso">
              <Reveal delay={(i % 3) * 100} className="group h-full">
                <div className="h-full p-8 transition-colors duration-500 hover:bg-white/[0.04] sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-espresso">
                    <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-[1.6rem] !text-ivory">{title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-sand-200/85">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
