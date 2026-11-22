# Site — Dra. Fernanda Fabiani

Landing page institucional da Dra. Fernanda Fabiani, Cirurgiã Geral (CRM/PR 20.980 · RQE 15.127), com atendimento na Clínica Synthesis, em Guarapuava-PR.

Stack: **React 19 + Vite + TypeScript + Tailwind CSS v4 + Lucide**. Sem bibliotecas de animação: tudo é CSS com IntersectionObserver.

## Como executar

Requisito: Node.js 20 ou superior.

```bash
npm install        # instala as dependências
npm run dev        # ambiente de desenvolvimento → http://localhost:5173
npm run build      # gera a versão de produção em /dist
npm run preview    # serve a versão de produção → http://localhost:4173
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (Vercel, Netlify, Hostinger, cPanel etc.).

## Onde editar

| O quê | Arquivo |
|---|---|
| Contatos, WhatsApp, endereço, CRM/RQE, horários | `src/data/site.ts` |
| Procedimentos (textos, categorias, fotos) | `src/data/procedures.ts` |
| Formação e experiência | `src/data/career.ts` |
| Diferenciais | `src/data/differentials.ts` |
| Cores e fontes | `src/index.css` (bloco `@theme`) |
| SEO, Open Graph e dados estruturados | `index.html` |

## Fotografias

Salve as fotos em `public/images/` com os nomes listados em `public/images/LEIA-ME.txt`. Enquanto uma foto não existir, o site mostra um espaço reservado neutro com o nome do arquivo esperado. Quando você salvar a foto, ela aparece sozinha, sem mexer no código.

## Estrutura

```
src/
  components/
    layout/   Header (menu + menu mobile), Footer, FloatingWhatsApp
    ui/       Photo, ButtonLink, SectionHeading, Reveal, BrandIcons
  sections/   Hero, About, procedures/, Differentials, Career, Clinic, Contact
  data/       conteúdo do site (fonte única)
  hooks/      useReveal (animação de entrada), useScrollSpy (menu ativo)
  lib/        whatsapp.ts (links com mensagem personalizada)
```

## Pendências: informações que não estão no perfil oficial

Fonte usada: https://airgo.bio/dra.fernanda.fabiani.cirurgia (consultado em 15/11/2026).

- [ ] **Horários de atendimento**: preencher `site.clinic.hours`. Enquanto estiver vazio, o site diz "Consulte horários pelo WhatsApp".
- [ ] **E-mail**: aparece oculto no perfil. Preencher `site.contact.email`, se quiser exibir.
- [ ] **Registro da clínica no CRM-PR (CRM-PJ)**: preencher `site.clinic.crmPj` (vai para o rodapé).
- [ ] **HIFU (HIPRO®)**: o perfil só cita o HIFU nas áreas de atuação e no texto do Lifting Cervical. Complementar a descrição.
- [ ] **Orelha Rasgada** e **Unha Encravada e Unha em Pinça**: o perfil traz só uma linha. Complementar, se desejar.
- [ ] **Domínio definitivo**: trocar `VITE_SITE_URL` no arquivo `.env` e rodar `npm run build` (atualiza canonical, Open Graph, robots.txt e sitemap.xml).
- [ ] **Fotografias**: ver `public/images/LEIA-ME.txt`.
- [ ] Revisar os textos de apresentação (Hero e Sobre). Foram redigidos só com fatos do currículo, mas a médica deve aprovar o tom.

## Publicidade médica (CFM)

- O rodapé traz nome, CRM, especialidade com RQE e a responsável técnica, conforme a Resolução CFM nº 2.336/2023.
- O site não contém promessas de resultado, depoimentos nem fotos de antes e depois.
- Pós-graduações e cursos aparecem como formação, com a ressalva de que não são título de especialista.
