import { Clock, MapPin, Navigation } from 'lucide-react'
import { fullAddress, site } from '../data/site'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { Photo } from '../components/ui/Photo'
import { ButtonLink } from '../components/ui/Button'

/**
 * FOTOS DA CLÍNICA — substituir em /public/images/:
 *   clinica-01.jpg  (horizontal, ~1600x1000px) — fachada ou recepção
 *   clinica-02.jpg  (vertical,   ~900x1100px)  — consultório
 *   clinica-03.jpg  (vertical,   ~900x1100px)  — sala de procedimentos
 */
const photos = [
  { file: 'clinica-01.jpg', alt: 'Recepção da Clínica Synthesis', label: 'Foto da clínica — recepção/fachada', ratio: '16 / 10', className: 'col-span-2' },
  { file: 'clinica-02.jpg', alt: 'Consultório da Clínica Synthesis', label: 'Foto da clínica — consultório', ratio: '4 / 5', className: '' },
  { file: 'clinica-03.jpg', alt: 'Sala de procedimentos da Clínica Synthesis', label: 'Foto da clínica — sala de procedimentos', ratio: '4 / 5', className: '' },
]

export function Clinic() {
  return (
    <section id="clinica" aria-labelledby="clinica-title" className="section">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="clinica-title"
              eyebrow="Local de atendimento"
              title={
                <>
                  {site.clinic.name.split(' ')[0]} <em className="text-gold-deep">{site.clinic.name.split(' ').slice(1).join(' ')}</em>
                </>
              }
              description={`Clínica fundada em 2008, da qual a ${site.doctor.name} é proprietária e responsável técnica, no Centro de ${site.clinic.city}.`}
            />

            <Reveal delay={100}>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-200 text-gold-deep">
                    <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-taupe uppercase">Endereço</p>
                    <address className="mt-1 not-italic text-espresso">{fullAddress}</address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-200 text-gold-deep">
                    <Clock size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-taupe uppercase">Atendimento</p>
                    {/* PENDENTE: horários não constam no perfil — preencher `site.clinic.hours` em src/data/site.ts */}
                    <p className="mt-1 text-espresso">
                      {site.clinic.hours ?? 'Atendimento com hora marcada. Consulte horários disponíveis pelo WhatsApp.'}
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <ButtonLink
                href={site.clinic.mapsUrl}
                external
                variant="outline"
                icon={<Navigation size={15} strokeWidth={1.6} />}
                className="mt-10"
              >
                Como chegar
              </ButtonLink>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
            {photos.map((p, i) => (
              <Reveal key={p.file} delay={i * 120} className={p.className}>
                <Photo file={p.file} alt={p.alt} label={p.label} ratio={p.ratio} className="rounded-[1.5rem]" sizes="(min-width: 1024px) 40vw, 90vw" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-sand-200 bg-sand-50">
            <iframe
              title={`Mapa: ${site.clinic.name}, ${fullAddress}`}
              src={site.clinic.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full grayscale-[35%] sepia-[15%] sm:h-[400px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
