import { useMemo, useState } from 'react'
import { MessagesSquare } from 'lucide-react'
import { categories, consultation, procedures, type Procedure, type ProcedureCategory } from '../../data/procedures'
import { whatsappLink } from '../../lib/whatsapp'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { Reveal } from '../../components/ui/Reveal'
import { ButtonLink } from '../../components/ui/Button'
import { WhatsAppIcon } from '../../components/ui/BrandIcons'
import { ProcedureCard } from './ProcedureCard'
import { ProcedureDialog } from './ProcedureDialog'

type Filter = ProcedureCategory | 'todos'

export function Procedures() {
  const [filter, setFilter] = useState<Filter>('todos')
  const [selected, setSelected] = useState<Procedure | null>(null)

  const counts = useMemo(() => {
    const c: Record<string, number> = { todos: procedures.length }
    procedures.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1))
    return c
  }, [])

  const list = filter === 'todos' ? procedures : procedures.filter((p) => p.category === filter)

  return (
    <section id="procedimentos" aria-labelledby="procedimentos-title" className="section relative">
      <div className="container-site">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="procedimentos-title"
            eyebrow="Procedimentos"
            title={
              <>
                Cuidados para a face, a pele e <em className="text-gold-deep">a sua saúde</em>
              </>
            }
            description="Procedimentos faciais, cirurgias ambulatoriais e cirurgia geral, sempre com indicação definida após avaliação individual."
          />

          <Reveal delay={100}>
            <div role="group" aria-label="Filtrar procedimentos por categoria" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {categories.map((c) => {
                const isActive = filter === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setFilter(c.id)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.74rem] font-semibold tracking-[0.08em] whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-sand-200 text-body hover:border-espresso/40 hover:text-espresso'
                    }`}
                  >
                    {c.label}
                    <span className={`ml-2 ${isActive ? 'text-sand-200' : 'text-taupe'}`}>{counts[c.id]}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" aria-live="polite">
          {list.map((p) => (
            <li key={p.id}>
              <Reveal className="h-full">
                <ProcedureCard procedure={p} index={procedures.indexOf(p)} onOpen={setSelected} />
              </Reveal>
            </li>
          ))}

          {/* Destaque: Consulta (item do perfil oficial) — ocupa o espaço restante da grade */}
          <li className={list.length % 3 === 1 ? 'lg:col-span-2' : list.length % 3 === 0 ? 'lg:col-span-3' : ''}>
            <Reveal className="h-full">
              <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.6rem] bg-sand-100 p-8 sm:p-10 lg:p-12">
                <div aria-hidden="true" className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full border border-gold/30" />
                <div aria-hidden="true" className="absolute -right-8 -bottom-12 h-72 w-72 rounded-full border border-gold/20" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-gold-deep">
                    <MessagesSquare size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 max-w-lg text-[2.1rem] leading-tight sm:text-[2.5rem]">{consultation.title}</h3>
                  <p className="mt-4 max-w-lg text-[1.02rem]">{consultation.text}</p>
                </div>
                <div className="relative mt-8">
                  <ButtonLink href={whatsappLink()} external size="lg" icon={<WhatsAppIcon size={18} />}>
                    Agendar consulta
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>

      <ProcedureDialog procedure={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
