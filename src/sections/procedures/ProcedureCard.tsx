import { ArrowUpRight } from 'lucide-react'
import type { Procedure } from '../../data/procedures'
import { procedureMessage, whatsappLink } from '../../lib/whatsapp'
import { Photo } from '../../components/ui/Photo'
import { WhatsAppIcon } from '../../components/ui/BrandIcons'

const categoryLabel: Record<Procedure['category'], string> = {
  facial: 'Face e pele',
  ambulatorial: 'Ambulatorial',
  geral: 'Cirurgia geral',
}

interface Props {
  procedure: Procedure
  index: number
  onOpen: (p: Procedure) => void
}

export function ProcedureCard({ procedure, index, onOpen }: Props) {
  const hasMore = procedure.details.length > 0 || (procedure.facts?.length ?? 0) > 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-sand-200/80 bg-ivory transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-1.5 hover:border-sand-200 hover:shadow-[0_30px_60px_-30px_rgba(58,45,36,0.35)]">
      <div className="relative overflow-hidden">
        {/* FOTO DO PROCEDIMENTO — substituir /public/images/{procedure.image} (horizontal 3:2, ~1200x800px) */}
        <Photo
          file={procedure.image}
          alt={`Imagem ilustrativa: ${procedure.name}`}
          label={procedure.name}
          ratio="3 / 2"
          className="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-cocoa uppercase backdrop-blur">
          {categoryLabel[procedure.category]}
        </span>
        <span className="absolute top-4 right-4 font-display text-xl text-espresso/50 italic" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[1.7rem] leading-tight">{procedure.name}</h3>
        <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-body/90">{procedure.summary}</p>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-sand-200/80 pt-5">
          {hasMore ? (
            <button
              type="button"
              onClick={() => onOpen(procedure)}
              className="inline-flex items-center gap-1.5 text-[0.74rem] font-semibold tracking-[0.12em] text-espresso uppercase transition-colors hover:text-gold-deep"
              aria-label={`Saiba mais sobre ${procedure.name}`}
            >
              Saiba mais
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ) : (
            <span className="text-[0.74rem] text-taupe">Informações na consulta</span>
          )}
          <a
            href={whatsappLink(procedureMessage(procedure.name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar ${procedure.name} pelo WhatsApp`}
            className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.1em] text-espresso uppercase transition-all duration-300 hover:bg-espresso hover:text-ivory"
          >
            <WhatsAppIcon size={14} /> Consultar
          </a>
        </div>
      </div>
    </article>
  )
}
