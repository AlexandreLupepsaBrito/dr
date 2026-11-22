import type { LucideIcon } from 'lucide-react'
import { Award, HeartPulse, GraduationCap, Building2, MessagesSquare, Syringe } from 'lucide-react'

/**
 * DIFERENCIAIS — cada item tem como base um dado verificado no perfil
 * oficial (indicado no comentário). Nenhum equipamento, certificação ou
 * estrutura foi acrescentado.
 */
export const differentials: { icon: LucideIcon; title: string; text: string }[] = [
  {
    // CRM/PR 20.980 · RQE 15.127 · Residência e Especialização em Cirurgia Geral
    icon: Award,
    title: 'Cirurgiã Geral com RQE',
    text: 'Residência em Cirurgia Geral na Santa Casa de Ponta Grossa e Registro de Qualificação de Especialista (RQE 15.127).',
  },
  {
    // SAMU, emergencista, intensivista, pós em Urgência, Emergência e UTI
    icon: HeartPulse,
    title: 'Vivência em urgência e emergência',
    text: 'Trajetória em SAMU, emergência, transporte inter-hospitalar e pós-graduação em Urgência, Emergência e UTI.',
  },
  {
    // Cursos de 2024 a 2026 + mentoria em andamento
    icon: GraduationCap,
    title: 'Atualização contínua',
    text: 'Cursos recentes em cirurgia minimamente invasiva, blefaroplastia, cervicoplastia e laser de CO2.',
  },
  {
    // Blefaroplastia ambulatorial; biópsias em consultório com anestesia local
    icon: Syringe,
    title: 'Procedimentos ambulatoriais',
    text: 'Diversos procedimentos realizados em ambiente ambulatorial, com anestesia local, conforme a indicação.',
  },
  {
    // Item "Consulta" do perfil
    icon: MessagesSquare,
    title: 'Cuidado que começa na consulta',
    text: 'Escuta, exame, diagnóstico e planejamento, com espaço para todas as suas dúvidas.',
  },
  {
    // Proprietária e responsável técnica da Clínica Synthesis desde 2008
    icon: Building2,
    title: 'Clínica própria desde 2008',
    text: 'Responsável técnica pela Clínica Synthesis, no Centro de Guarapuava-PR.',
  },
]
