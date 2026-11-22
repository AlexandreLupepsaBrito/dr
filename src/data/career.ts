/**
 * FORMAÇÃO E EXPERIÊNCIA — transcritas do perfil oficial.
 * `current: true` marca as atividades indicadas como atuais no perfil.
 */

export interface CareerItem {
  period: string
  title: string
  place?: string
  current?: boolean
}

export const education: CareerItem[] = [
  { period: '2003', title: 'Graduação em Medicina', place: 'Faculdade Evangélica do Paraná' },
  { period: '2005', title: 'ATLS — Advanced Trauma Life Support' },
  { period: '2006', title: 'Especialização em Cirurgia Geral', place: 'Santa Casa de Misericórdia de Ponta Grossa' },
  { period: '2008', title: 'Pós-graduação em Medicina Estética', place: 'ASIME' },
  { period: '2018 · 2022', title: 'ACLS — Advanced Cardiovascular Life Support' },
  { period: '2021', title: 'Pós-graduação em Urgência, Emergência e UTI', place: 'Faculdade Unimed' },
  { period: '2024', title: 'Atualização em Cirurgia Minimamente Invasiva', place: 'SIMUTEC' },
  {
    period: '2025',
    title: 'Imersão em Blefaroplastia e Hands-On em Blefaroplastia',
    place: 'Dra. Debora Lopes · Dra. Nathalia Kassis',
  },
  { period: '2025 · 2026', title: 'Curso de Cervicoplastia', place: 'NULAB · New Face' },
  { period: '2026', title: 'Hands-On em Blefaroplastia com Laser de CO2', place: 'COEP — Dr. Tadaaki' },
  {
    period: 'Em andamento',
    title: 'Mentoria e Protocolo Observer Hands-On em Blefaroplastia',
    place: 'Dra. Nathalia Kassis',
    current: true,
  },
]

export const experience: CareerItem[] = [
  { period: '2008 — atual', title: 'Proprietária e Responsável Técnica', place: 'Clínica Synthesis', current: true },
  { period: '2020 — atual', title: 'Cirurgiã Geral', place: 'Hospital São Vicente de Paula', current: true },
  { period: '2020 — atual', title: 'Médica Auditora', place: 'SESA-PR', current: true },
  { period: 'Atual', title: 'Médica Auditora', place: 'Prefeitura de Guarapuava', current: true },
  { period: '2007 — 2011 · 2023 — atual', title: 'Emergencista', place: 'Prefeitura de Guarapuava', current: true },
  { period: '2023 — 2025', title: 'Coordenadora Médica de Urgência', place: 'Trianon' },
  { period: '2013 — 2014', title: 'Diretora do Departamento de Urgência e Emergência', place: 'Guarapuava' },
  { period: '2012', title: 'Secretária Municipal de Saúde', place: 'Guarapuava' },
  { period: '2011 — 2020', title: 'Médica Intensivista em Transporte Inter-hospitalar', place: 'SESA-PR' },
  { period: '2008 — 2018', title: 'Cirurgiã Geral', place: 'Hospital Santa Tereza' },
  { period: '2007 — 2022', title: 'Socorrista SAMU', place: 'Prefeitura de Guarapuava' },
  { period: '2007 — 2010', title: 'Legista', place: 'IML Guarapuava' },
  { period: '2007 — 2008', title: 'Cirurgiã Geral', place: 'Hospital Estrela de Belém, Guarapuava' },
  { period: '2006 — 2010', title: 'Socorrista SAMU', place: 'Prefeitura de Ponta Grossa' },
  { period: '2006 — 2009', title: 'Emergencista', place: 'Santa Casa de Ponta Grossa' },
  { period: '2005 — 2007', title: 'Residência em Cirurgia Geral', place: 'Santa Casa de Ponta Grossa' },
  { period: '2004 — 2005', title: 'Clínica Geral', place: 'Prefeitura de Curitiba' },
]
