/**
 * PROCEDIMENTOS — exatamente os listados no perfil oficial da Dra. Fernanda.
 * Nenhum procedimento foi acrescentado ou removido.
 *
 * Textos redigidos a partir das descrições do próprio perfil, sem promessas
 * de resultado (Resolução CFM nº 2.336/2023).
 *
 * FOTOS: cada procedimento usa /public/images/<image>. Basta salvar o arquivo
 * com o nome indicado no campo `image` que ele aparece automaticamente.
 *
 * `pending: true` = o perfil traz pouca informação; texto deve ser
 * complementado/validado pela médica.
 */

export type ProcedureCategory = 'facial' | 'ambulatorial' | 'geral'

export interface Procedure {
  id: string
  name: string
  category: ProcedureCategory
  image: string
  summary: string
  details: string[]
  facts?: { label: string; value: string }[]
  pending?: boolean
}

export const categories: { id: ProcedureCategory | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'facial', label: 'Face e pele' },
  { id: 'ambulatorial', label: 'Cirurgias ambulatoriais' },
  { id: 'geral', label: 'Cirurgia geral' },
]

export const procedures: Procedure[] = [
  {
    id: 'blefaroplastia',
    name: 'Blefaroplastia',
    category: 'facial',
    image: 'procedimento-01-blefaroplastia.jpg',
    summary:
      'Cirurgia que trata o aspecto de olhar cansado, com retirada do excesso de pele e/ou das bolsas de gordura da região dos olhos.',
    details: [
      'Pode ser realizada com bisturi a frio ou com laser de CO2.',
      'Feita em ambiente ambulatorial, com anestesia local, com ou sem sedação.',
    ],
    facts: [
      { label: 'Anestesia', value: 'Local, com ou sem sedação' },
      { label: 'Recuperação', value: '10 a 15 dias' },
      { label: 'Downtime', value: '5 a 7 dias' },
    ],
  },
  {
    id: 'castanhares',
    name: 'Castanhares',
    category: 'facial',
    image: 'procedimento-02-castanhares.jpg',
    summary:
      'Lifting direto que eleva sutilmente a cauda da sobrancelha, com remoção de uma faixa fina de pele logo acima dela.',
    details: ['Geralmente é associado à blefaroplastia.'],
    facts: [{ label: 'Anestesia', value: 'Local, com ou sem leve sedação' }],
  },
  {
    id: 'lipofilling',
    name: 'Lipofilling',
    category: 'facial',
    image: 'procedimento-03-lipofilling.jpg',
    summary:
      'Uso de um preparado rico em células, obtido da gordura do próprio paciente, para rejuvenescer e dar viço à pele.',
    details: [
      'A gordura é coletada de áreas como abdômen ou pernas.',
      'Pode ser aplicado em maçãs do rosto, lábios, mandíbula e pescoço.',
      'Utiliza tecido do próprio paciente.',
    ],
  },
  {
    id: 'lifting-cervical',
    name: 'Lifting Cervical',
    category: 'facial',
    image: 'procedimento-04-lifting-cervical.jpg',
    summary:
      'Tratamento cirúrgico do excesso de gordura cervical (papada), por lipoaspiração e/ou fixação da musculatura e da pele.',
    details: [
      'Pode ser minimamente invasivo, com incisão de 3 a 5 cm sob o queixo, ou mais extenso, conforme a avaliação.',
      'No pós-operatório são usadas faixas de compressão e, em alguns casos, placa.',
      'Pode ser associado ao HIFU (HIPRO®), antes ou depois do procedimento.',
    ],
    facts: [{ label: 'Recuperação', value: 'Mínimo de 30 dias' }],
  },
  {
    id: 'laser-co2',
    name: 'Resurfacing com Laser de CO2',
    category: 'facial',
    image: 'procedimento-05-laser-co2.jpg',
    summary:
      'Renovação da pele por regeneração celular, provocada por dano térmico controlado com laser de CO2 (Fusion®).',
    details: [
      'Aplicação leve, com anestesia tópica, ou intensa, com anestesia tópica e local.',
      'Geralmente é necessária mais de uma sessão.',
      'Em peles de fototipo mais alto, a intensidade da aplicação é limitada.',
    ],
    facts: [{ label: 'Recuperação', value: 'Cerca de 1 semana' }],
  },
  {
    id: 'bioestimuladores',
    name: 'Bioestimuladores de Colágeno',
    category: 'facial',
    image: 'procedimento-06-bioestimuladores.jpg',
    summary:
      'Aplicação de substâncias como o ácido polilático, que estimulam os fibroblastos a produzir colágeno, favorecendo firmeza e elasticidade.',
    details: ['Indicado para flacidez facial e corporal, como pescoço, braços e glúteos.'],
    facts: [
      { label: 'Início dos efeitos', value: '30 a 90 dias' },
      { label: 'Duração', value: 'Até 2 anos (varia individualmente)' },
    ],
  },
  {
    id: 'toxina-botulinica',
    name: 'Toxina Botulínica',
    category: 'facial',
    image: 'procedimento-07-toxina-botulinica.jpg',
    summary:
      'Injeções intramusculares e subdérmicas para suavizar linhas de expressão e rugas.',
    details: ['Também tem indicação terapêutica em casos de enxaqueca e espasmos hemifaciais.'],
  },
  {
    id: 'hifu',
    name: 'HIFU — Ultrassom Focalizado (HIPRO®)',
    category: 'facial',
    image: 'procedimento-08-hifu.jpg',
    summary:
      'Ultrassom Focalizado de Alta Intensidade (HIPRO®), que pode complementar o Lifting Cervical, antes ou depois do procedimento.',
    details: [],
    // PENDENTE: o perfil só cita o HIFU nas áreas de atuação e no texto do
    // Lifting Cervical. Complementar com a descrição oficial da médica.
    pending: true,
  },
  {
    id: 'orelha-rasgada',
    name: 'Orelha Rasgada',
    category: 'ambulatorial',
    image: 'procedimento-09-orelha-rasgada.jpg',
    summary: 'Correção do lóbulo da orelha rasgado ou com deformidades causadas por alargadores.',
    details: [],
    // PENDENTE: o perfil traz apenas uma linha. Complementar (anestesia, recuperação).
    pending: true,
  },
  {
    id: 'unha-encravada',
    name: 'Unha Encravada e Unha em Pinça',
    category: 'ambulatorial',
    image: 'procedimento-10-unha-encravada.jpg',
    summary:
      'Tratamento da unha encravada e da unha em pinça, uma deformidade dolorosa frequentemente confundida com a unha encravada.',
    details: [],
    // PENDENTE: complementar com detalhes da técnica e recuperação.
    pending: true,
  },
  {
    id: 'biopsias',
    name: 'Biópsias e Pequenas Lesões',
    category: 'ambulatorial',
    image: 'procedimento-11-biopsias.jpg',
    summary:
      'Biópsias e retirada de pequenas lesões de pele, realizadas em consultório, com anestesia local.',
    details: [
      'O material é enviado para exame histopatológico.',
      'Retirada de pintas, verrugas, cistos, lipomas e neoplasias de pele.',
      'Técnica com eletrocautério, bisturi ou laser de CO2, definida conforme o tamanho e a localização da lesão.',
    ],
    facts: [{ label: 'Anestesia', value: 'Local, em consultório' }],
  },
  {
    id: 'colecistectomia',
    name: 'Colecistectomia Videolaparoscópica',
    category: 'geral',
    image: 'procedimento-12-colecistectomia.jpg',
    summary:
      'Retirada da vesícula biliar por videolaparoscopia, para tratamento de cálculos (pedras) ou pólipos.',
    details: ['Realizada sob anestesia geral, com 3 pequenas incisões.'],
    facts: [
      { label: 'Anestesia', value: 'Geral' },
      { label: 'Retorno às atividades', value: 'Cerca de 15 dias' },
    ],
  },
  {
    id: 'herniorrafia',
    name: 'Herniorrafia ou Hernioplastia',
    category: 'geral',
    image: 'procedimento-13-herniorrafia.jpg',
    summary:
      'Cirurgia para correção de hérnias abdominais: inguinais, femorais, umbilicais ou incisionais.',
    details: ['O uso de tela sintética depende do tipo e do tamanho da hérnia.'],
  },
]

/** Item "Consulta" do perfil, exibido como destaque ao final da seção. */
export const consultation = {
  title: 'Seu cuidado começa na consulta.',
  text: 'Um momento de escuta, exame, diagnóstico e planejamento, com espaço para tirar dúvidas e definir, juntos, o tratamento adequado.',
}
