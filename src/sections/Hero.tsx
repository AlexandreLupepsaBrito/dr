import { ArrowDown, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { ButtonLink } from '../components/ui/Button'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { WhatsAppIcon } from '../components/ui/BrandIcons'

const areas = ['Blefaroplastia', 'Lifting Cervical', 'Laser de CO2', 'Cirurgia Geral']

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-[100svh] lg:pt-36 lg:pb-24">
      {/* Fundo decorativo discreto */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,var(--color-sand-100),transparent_60%)] lg:w-[58%]" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sand-50 blur-3xl" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Texto */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <p className="eyebrow">{site.doctor.title} · {site.clinic.city}-{site.clinic.state}</p>
          </Reveal>

          <Reveal delay={100}>
            <h1 id="hero-title" className="mt-7 text-[3.1rem] leading-[0.98] sm:text-7xl lg:text-[5.4rem]">
              Dra. Fernanda
              <span className="block italic text-gold-deep">Fabiani</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl font-display text-[1.6rem] leading-snug text-espresso sm:text-[1.85rem]">
              Cirurgia e cuidado facial conduzidos com técnica, ética e escuta atenta.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 max-w-lg text-[1.02rem] text-body/90">
              Cirurgiã Geral com mais de duas décadas de trajetória médica entre centro cirúrgico, urgência e
              consultório. Atende na {site.clinic.name}, onde realiza consultas, procedimentos faciais e cirurgias
              ambulatoriais.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href={whatsappLink()} external size="lg" icon={<WhatsAppIcon size={18} />}>
                Agendar pelo WhatsApp
              </ButtonLink>
              <ButtonLink href="#procedimentos" variant="outline" size="lg">
                Ver procedimentos
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <ul className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] font-medium tracking-[0.16em] text-taupe uppercase" aria-label="Áreas de atuação">
              {areas.map((a, i) => (
                <li key={a} className="flex items-center gap-5">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />}
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Fotografia */}
        <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <Reveal delay={150} className="relative mx-auto max-w-md lg:max-w-none">
            <div aria-hidden="true" className="absolute -top-6 -right-6 hidden h-40 w-40 rounded-full border border-gold/40 sm:block" />
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-full w-full rounded-t-[999px] rounded-b-[2rem] border border-sand-200" />

            {/* FOTO PRINCIPAL — substituir /public/images/hero-medica.jpg (retrato vertical, ~1200x1500px) */}
            <Photo
              file="hero-medica.jpg"
              alt="Retrato da Dra. Fernanda Fabiani, Cirurgiã Geral"
              label="Foto principal da médica"
              ratio="4 / 5"
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="rounded-t-[999px] rounded-b-[2rem] shadow-[0_40px_80px_-40px_rgba(58,45,36,0.45)]"
            />

            <div className="animate-float-slow absolute -bottom-6 left-4 rounded-2xl border border-sand-200/80 bg-ivory/95 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(58,45,36,0.35)] backdrop-blur sm:-left-8">
              <p className="font-display text-lg leading-tight text-espresso">{site.doctor.title}</p>
              <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.14em] text-taupe uppercase">
                {site.doctor.crm} · {site.doctor.rqe}
              </p>
            </div>

            <div className="absolute top-8 -right-2 hidden items-center gap-2 rounded-full bg-espresso px-4 py-2 text-[0.7rem] font-medium tracking-[0.1em] text-ivory sm:flex">
              <MapPin size={13} strokeWidth={1.8} /> {site.clinic.name}
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-taupe uppercase transition-colors hover:text-espresso lg:flex"
      >
        Conheça
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
