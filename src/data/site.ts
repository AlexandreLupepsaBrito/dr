/**
 * DADOS INSTITUCIONAIS — Dra. Fernanda Fabiani
 * ---------------------------------------------------------------
 * Fonte: perfil oficial https://airgo.bio/dra.fernanda.fabiani.cirurgia
 * (consultado em 15/11/2026). Tudo o que aparece no site sai daqui.
 *
 * Campos marcados com `null` NÃO foram encontrados no perfil e devem ser
 * preenchidos pela médica/clínica. Enquanto forem `null`, o site
 * simplesmente não exibe a informação (nada é inventado).
 */

export const site = {
  doctor: {
    name: 'Dra. Fernanda Fabiani',
    shortName: 'Fernanda Fabiani',
    title: 'Cirurgiã Geral',
    crm: 'CRM/PR 20.980',
    rqe: 'RQE 15.127',
    rqeSpecialty: 'Cirurgia Geral',
  },

  clinic: {
    name: 'Clínica Synthesis',
    street: 'Rua Quintino Bocaiúva, 2326',
    district: 'Centro',
    city: 'Guarapuava',
    state: 'PR',
    zip: '85010-300',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Quintino+Bocai%C3%BAva%2C+2326+-+centro%2C+Guarapuava-PR%2C+85010-300',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Rua+Quintino+Bocai%C3%BAva,+2326,+Centro,+Guarapuava+-+PR,+85010-300&output=embed',
    /** PENDENTE: horários não constam no perfil. Ex.: 'Segunda a sexta, das 8h às 18h' */
    hours: null as string | null,
    /** PENDENTE: CRM-PJ / registro da clínica no CRM-PR (exigido em publicidade de estabelecimento) */
    crmPj: null as string | null,
  },

  contact: {
    /** WhatsApp principal — "Informações e agendamentos" no perfil */
    whatsapp: '554230361560',
    whatsappDisplay: '(42) 3036-1560',
    /** WhatsApp alternativo listado no perfil */
    whatsappAlt: '5542999170126',
    whatsappAltDisplay: '(42) 99917-0126',
    phone: '+554230361560',
    phoneDisplay: '(42) 3036-1560',
    /** PENDENTE: o e-mail aparece oculto/protegido no perfil */
    email: null as string | null,
  },

  social: {
    instagram: 'https://instagram.com/clinicasynthesis',
    instagramHandle: '@clinicasynthesis',
    facebook: 'https://www.facebook.com/Dra.fernanda.fabiani.cirurgia',
    googleReview: 'https://g.page/r/CexwiSaie1CnEBM/review',
  },

  whatsappMessages: {
    default:
      'Olá! Vim pelo site da Dra. Fernanda Fabiani e gostaria de agendar uma consulta.',
    info: 'Olá! Vim pelo site da Dra. Fernanda Fabiani e gostaria de mais informações.',
  },
} as const

export const fullAddress = `${site.clinic.street} — ${site.clinic.district}, ${site.clinic.city}-${site.clinic.state}, CEP ${site.clinic.zip}`

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'procedimentos', label: 'Procedimentos' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'contato', label: 'Contato' },
] as const
