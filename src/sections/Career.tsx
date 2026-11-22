import { useState, type KeyboardEvent } from 'react'
import { GraduationCap, Stethoscope } from 'lucide-react'
import { education, experience, type CareerItem } from '../data/career'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

const tabs = [
  { id: 'formacao', label: 'Formação', icon: GraduationCap, items: education },
  { id: 'experiencia', label: 'Experiência', icon: Stethoscope, items: experience },
] as const

const INITIAL_VISIBLE = 8

function Timeline({ items }: { items: CareerItem[] }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? items : items.slice(0, INITIAL_VISIBLE)
  const hasMore = items.length > INITIAL_VISIBLE

  return (
    <>
      <ol className="relative grid gap-x-12 md:grid-cols-2">
        {visible.map((item, i) => (
          <li key={`${item.title}-${item.period}-${i}`} className="group relative border-t border-sand-200 py-6 pl-0">
            <div className="flex items-start gap-5">
              <span className="mt-1.5 flex h-2.5 w-2.5 shrink-0 rounded-full border border-gold bg-ivory transition-colors duration-300 group-hover:bg-gold" aria-hidden="true" />
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-gold-deep uppercase">
                  {item.period}
                  {item.current && (
                    <span className="rounded-full bg-sand-100 px-2 py-0.5 text-[0.6rem] tracking-[0.12em] text-cocoa">Atual</span>
                  )}
                </p>
                <h3 className="mt-2 font-sans text-[1rem] leading-snug font-semibold text-espresso">{item.title}</h3>
                {item.place && <p className="mt-1 text-sm text-body/80">{item.place}</p>}
              </div>
            </div>
          </li>
        ))}
      </ol>
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="rounded-full border border-espresso/20 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.12em] text-espresso uppercase transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
          >
            {expanded ? 'Mostrar menos' : `Ver trajetória completa (${items.length})`}
          </button>
        </div>
      )}
    </>
  )
}

export function Career() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('formacao')
  const current = tabs.find((t) => t.id === active)!

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const idx = tabs.findIndex((t) => t.id === active)
    const next = tabs[(idx + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]
    setActive(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }

  return (
    <section id="formacao" aria-labelledby="formacao-title" className="section bg-sand-50">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="formacao-title"
                eyebrow="Formação e experiência"
                title={
                  <>
                    Uma carreira de <em className="text-gold-deep">dedicação</em> à medicina
                  </>
                }
                description="Da graduação em 2003 às atualizações mais recentes, a trajetória completa da Dra. Fernanda, conforme o currículo profissional."
              />
              <Reveal delay={100}>
                <div role="tablist" aria-label="Trajetória profissional" className="mt-10 inline-flex rounded-full border border-sand-200 bg-ivory p-1.5" onKeyDown={onKeyDown}>
                  {tabs.map((t) => {
                    const selected = t.id === active
                    return (
                      <button
                        key={t.id}
                        id={`tab-${t.id}`}
                        role="tab"
                        type="button"
                        aria-selected={selected}
                        aria-controls={`panel-${t.id}`}
                        tabIndex={selected ? 0 : -1}
                        onClick={() => setActive(t.id)}
                        className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
                          selected ? 'bg-espresso text-ivory shadow-md' : 'text-body hover:text-espresso'
                        }`}
                      >
                        <t.icon size={15} strokeWidth={1.6} aria-hidden="true" />
                        {t.label}
                      </button>
                    )
                  })}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={150}>
              <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} key={current.id}>
                <Timeline items={current.items} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
