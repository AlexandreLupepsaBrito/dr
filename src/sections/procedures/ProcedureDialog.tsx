import { useEffect, useRef } from 'react'
import { Check, X } from 'lucide-react'
import type { Procedure } from '../../data/procedures'
import { procedureMessage, whatsappLink } from '../../lib/whatsapp'
import { Photo } from '../../components/ui/Photo'
import { ButtonLink } from '../../components/ui/Button'
import { WhatsAppIcon } from '../../components/ui/BrandIcons'

interface Props {
  procedure: Procedure | null
  onClose: () => void
}

/** Janela de detalhes do procedimento, com <dialog> nativo (foco e ESC acessíveis). */
export function ProcedureDialog({ procedure, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (procedure && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!procedure && dialog.open) {
      dialog.close()
    }
  }, [procedure])

  const handleClose = () => {
    document.body.style.overflow = ''
    onClose()
  }

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="dialog-title"
      className="m-auto max-h-[92svh] w-[min(56rem,calc(100%-2rem))] overflow-hidden rounded-[1.75rem] bg-ivory p-0 text-body shadow-2xl open:animate-[dialog-in_0.4s_var(--ease-soft)] backdrop:bg-transparent"
    >
      {procedure && (
        <div className="grid max-h-[92svh] overflow-y-auto md:grid-cols-5">
          <div className="md:col-span-2">
            <Photo
              file={procedure.image}
              alt={`Imagem ilustrativa: ${procedure.name}`}
              label={procedure.name}
              ratio="4 / 3"
              className="h-full md:!aspect-auto md:min-h-full"
            />
          </div>

          <div className="relative p-7 sm:p-10 md:col-span-3">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Fechar"
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-espresso transition-colors hover:bg-sand-100"
            >
              <X size={18} strokeWidth={1.6} />
            </button>

            <p className="eyebrow">Procedimento</p>
            <h3 id="dialog-title" className="mt-4 pr-10 text-[2.2rem] leading-tight">
              {procedure.name}
            </h3>
            <p className="mt-4 leading-relaxed">{procedure.summary}</p>

            {procedure.details.length > 0 && (
              <ul className="mt-6 space-y-3">
                {procedure.details.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.95rem]">
                    <Check size={17} strokeWidth={1.8} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            )}

            {procedure.facts && procedure.facts.length > 0 && (
              <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                {procedure.facts.map((f) => (
                  <div key={f.label} className="rounded-xl bg-sand-50 px-4 py-3">
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-taupe uppercase">{f.label}</dt>
                    <dd className="mt-1 text-[0.95rem] font-medium text-espresso">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="mt-6 text-xs leading-relaxed text-taupe">
              A indicação, a técnica e o tempo de recuperação são definidos em consulta, após avaliação individual.
            </p>

            <ButtonLink
              href={whatsappLink(procedureMessage(procedure.name))}
              external
              icon={<WhatsAppIcon size={16} />}
              className="mt-7 w-full sm:w-auto"
            >
              Consultar pelo WhatsApp
            </ButtonLink>
          </div>
        </div>
      )}
    </dialog>
  )
}
