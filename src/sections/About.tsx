import { Quote } from 'lucide-react'
import { site } from '../data/site'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { ButtonLink } from '../components/ui/Button'

/** Marcos verificados no perfil oficial (sem números inventados). */
const milestones = [
  { value: '2003', label: 'Graduação em Medicina' },
  { value: 'RQE', label: 'Especialista em Cirurgia Geral' },
  { value: '2008', label: 'Fundação da Clínica Synthesis' },
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section relative">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Composição de fotos */}
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <Reveal>
            {/* FOTO SOBRE 1 — substituir /public/images/sobre-medica-01.jpg (vertical, ~1000x1300px) */}
            <Photo
              file="sobre-medica-01.jpg"
              alt="Dra. Fernanda Fabiani em atendimento no consultório"
              label="Foto profissional — Sobre"
              ratio="4 / 5"
              className="w-[82%] rounded-[2rem]"
              sizes="(min-width: 1024px) 34vw, 80vw"
            />
          </Reveal>
          <Reveal delay={200} className="absolute right-0 -bottom-10 w-[48%]">
            {/* FOTO SOBRE 2 — substituir /public/images/sobre-medica-02.jpg (quadrada, ~800x800px) */}
            <Photo
              file="sobre-medica-02.jpg"
              alt="Detalhe do atendimento da Dra. Fernanda Fabiani"
              label="Foto complementar"
              ratio="1 / 1"
              className="rounded-[1.5rem] ring-8 ring-ivory"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </Reveal>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow">Sobre a médica</p>
            <h2 id="sobre-title" className="mt-5 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Uma trajetória construída <em className="text-gold-deep">entre o centro cirúrgico</em> e o consultório
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed">
              <p>
                Formada em Medicina pela Faculdade Evangélica do Paraná (2003), a {site.doctor.name} fez residência e
                especialização em Cirurgia Geral na Santa Casa de Misericórdia de Ponta Grossa e possui Registro de
                Qualificação de Especialista ({site.doctor.rqe}).
              </p>
              <p>
                Ao longo da carreira, atuou como cirurgiã geral em hospitais de Guarapuava, em urgência e emergência,
                no SAMU e no transporte inter-hospitalar, além de cargos de gestão em saúde pública. Hoje é cirurgiã
                geral no Hospital São Vicente de Paula e, desde 2008, proprietária e responsável técnica da{' '}
                {site.clinic.name}.
              </p>
              <p>
                Com pós-graduação em Medicina Estética e atualizações recentes em blefaroplastia, cervicoplastia e
                laser de CO2, une a base cirúrgica ao cuidado com a face e a pele.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <figure className="mt-10 rounded-2xl border-l-2 border-gold bg-sand-50 py-6 pr-6 pl-7">
              <Quote size={22} strokeWidth={1.2} className="text-gold" aria-hidden="true" />
              <blockquote className="mt-3 font-display text-[1.45rem] leading-snug text-espresso italic">
                Seu cuidado começa na consulta.
              </blockquote>
              <figcaption className="mt-3 text-sm text-body/85">
                Escuta, exame, diagnóstico e planejamento, com espaço para dúvidas e decisões tomadas em conjunto.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-sand-200 border-y border-sand-200">
              {milestones.map((m) => (
                <div key={m.label} className="flex flex-col px-3 py-6 text-center first:pl-0 last:pr-0 sm:px-5">
                  <dt className="order-2 mt-2 text-[0.66rem] leading-snug font-medium tracking-[0.1em] text-taupe uppercase sm:text-[0.7rem]">
                    {m.label}
                  </dt>
                  <dd className="order-1 font-display text-3xl text-espresso sm:text-4xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 flex flex-wrap gap-6">
              <ButtonLink href="#formacao" variant="ghost" className="border-b border-gold pb-1">
                Formação e experiência
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
