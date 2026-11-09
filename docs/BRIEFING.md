# Registro da LP — Vazão Engenharia e Montagem · Inspeção NR13

> Fonte: `docs/FICHA-LP.md`. Esta LP **substitui** a versão em HTML puro que estava neste repositório (mockups com a identidade do site da Vazão, importada em 06/11/2026 de `harpyacessory-ux/Inspe-o-e-Adequa-o-NR13`). A versão anterior continua no histórico do Git (`main` até o commit `9dd5034`).

## Origem

| Campo                     | Valor                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`, escrita a partir do conteúdo da LP anterior e das decisões de 09/11/2026 |
| Data da ficha             | 2026-11-09                                                                                   |
| Versão do padrão na ficha | 2.8.0                                                                                        |
| Validada em               | 09/11/2026 por `npm run ficha -- --library ../../../b2-interno/LP-STARTER-B2/sections`       |
| Material bruto do cliente | nenhum além da LP anterior (textos e fotos)                                                  |
| Briefing de campanha      | grupo **NR13** da campanha _[PES] Locação e Serviços Nordeste_ (Google Ads)                  |
| Fora desta execução       | LP Vazão Tubulações e Ar Comprimido (mesmo estilo HTML da anterior; ainda fora do padrão)    |

## Por que a LP foi refeita

Análise de 09/11/2026: a LP anterior não seguia o padrão das demais LPs da B2 em header, hero, chat, formulário, footer, tipografia, quebras de linha e vocabulário de CTA. Decisões tomadas ponto a ponto com a B2:

| Ponto          | LP anterior                                                            | Decisão                                                                              |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Base           | `index.html` autocontido, publicado na Vercel                          | padrão B2 v2.8 (Astro 7 + Tailwind 4), publicado no WordPress pela branch `wp-build` |
| Header         | barra branca, menu de 4 âncoras, botão arredondado                     | header fixo do padrão: barra navy, logo em placa branca, tagline, um CTA, sem menu   |
| Chat           | chat próprio em JS que mandava o lead para o WhatsApp (81) 99203-9379  | shortcode `[atendimento_chat id="default"]` na coluna de 300px do hero               |
| Formulário     | formulário próprio de 7 campos + banner "Fale com um especialista"     | Cotação do padrão com `[atendimento_form id="default-form"]`; banner removido        |
| Footer         | 4 colunas com logo, menu, telefone e "Voltar ao topo"                  | uma linha: © ano · endereço · crédito da B2 com link                                 |
| Cores e fonte  | marinho/azul/vermelho Vazão, Plus Jakarta Sans                         | cores Vazão nos tokens do padrão, fonte Manrope                                      |
| Textos         | parágrafos de 2 frases, cards de 110–150 caracteres, títulos com ponto | enxugados aos limites do padrão; `<br>` só onde o padrão permite                     |
| Pontos do hero | 4 (um em 1 linha)                                                      | 3, cada um em 2 linhas fixas; sai "Atendimento em PE e CE" (vai para os selos)       |
| CTA            | "Solicitar avaliação técnica" em links `<a>`                           | `<button class="btn-slave-whats">`, rótulo "Solicite sua avaliação técnica" (desvio) |

## Campanha

| Campo                      | Valor                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| Palavra-chave principal    | `inspeção nr13` — no H1 ("Inspeção NR13, adequação e laudo para sua indústria") e no title |
| Origem                     | LP anterior (README: grupo NR13 da campanha)                                               |
| Área atendida              | Pernambuco e Ceará — no title, na description e no selo da Cotação                         |
| Negativas de oferta        | nenhuma informada                                                                          |
| Claims proibidos           | nenhum informado                                                                           |
| Divergência de vocabulário | "laudo NR13" é o termo de busca; a norma fala em relatórios, prontuário e registro (FAQ)   |

### Famílias de palavra-chave

| Família   | Termos                                                       | Bloco que responde | Status  |
| --------- | ------------------------------------------------------------ | ------------------ | ------- |
| servico   | inspeção nr13, adequação nr13, laudo nr13, documentação nr13 | linhas             | coberta |
| aplicacao | nr13 vasos de pressão, caldeiras, compressor, tubulações     | aplicacoes         | coberta |
| duvida    | o que é laudo nr13, quando fazer inspeção nr13               | perguntas          | coberta |
| geografia | inspeção nr13 recife, inspeção nr13 fortaleza                | — (title e selo)   | parcial |

## Composição

Derivada em 09/11/2026 · `npm run compose -- linhas processo aplicacoes perguntas diferenciais`

| Fase       | Seção        | Fundo | Respiro       | Veredicto | Famílias          |
| ---------- | ------------ | ----- | ------------- | --------- | ----------------- |
| oferta     | linhas       | light | open          | completo  | servico           |
| apoio      | processo     | light | panel-lead    | completo  | servico           |
| prova      | aplicacoes   | light | centered-lead | completo  | aplicacao         |
| autoridade | perguntas    | gray  | even          | completo  | duvida, aplicacao |
| autoridade | diferenciais | gray  | overlap       | completo  | servico           |

Blocos fora: `especificacoes`, `vitrine`, `identificar`, `escopo` (não se aplicam a serviço); `situacoes`, `segmentos`, `clientes` (sem material — ver a ficha).

## Desvios do padrão (aprovados em 09/11/2026)

| Desvio                                                                                                           | Onde                                                                        | Motivo                                                      |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| CTA principal "Solicite sua avaliação técnica" (celular "Avaliação"), secundário "Identifique seus equipamentos" | `src/data/content.ts` (`cta`)                                               | serviço de engenharia começa por avaliação, não por cotação |
| Logo da Vazão acima do eyebrow em Serviços, Como funciona, Equipamentos e Diferenciais                           | `src/components/SectionLogo.astro` + 4 seções                               | mantido da LP anterior                                      |
| Foto esmaecida no painel "Como funciona" e linhas decorativas em SVG em Serviços                                 | `ProcessSteps.astro`, `ProductLines.astro`, `src/assets/processo/fundo.jpg` | mantido da LP anterior                                      |
| Barra de CTA fixa no celular (aparece depois do hero, some na Cotação)                                           | `src/components/MobileCta.astro`, `src/layouts/Layout.astro`                | mantido da LP anterior                                      |
| Checklist "Na inspeção de vasos de pressão, avaliamos" abaixo dos cards de Equipamentos                          | `ApplicationsGallery.astro`, `aplicacoes.checklist`                         | mantido da LP anterior                                      |
| Sem logos de marca, o cabeçalho de Serviços usa a largura inteira                                                | `ProductLines.astro` (variante 1)                                           | evitar "indústria" sozinha na 2ª linha do H2                |
| Fotos de serviço preenchem o palco do card (`object-cover`)                                                      | `ProductLines.astro` (variante 2)                                           | são cenas, não produto recortado                            |
| Número do card branco com sombra                                                                                 | `ProductLines.astro`                                                        | o número ficava ilegível sobre a foto                       |
| Brilhos e bordas de destaque pela cor do tema em vez do laranja fixo                                             | `global.css`, `ProcessSteps.astro`, `WhyBrand.astro`, `FaqAccordion.astro`  | o laranja do padrão estava escrito direto no código         |
| Title mantido da LP anterior                                                                                     | `src/data/site.ts`                                                          | a fórmula padrão ficaria longa demais                       |

**Ao recompor** (`npm run compose`), os componentes de seção são sobrescritos pela biblioteca: reaplique as variantes marcadas no topo de cada um.

## Tokens

| Token              | Valor     | Origem                 |
| ------------------ | --------- | ---------------------- |
| primary-dark       | `#0b3f8a` | marinho do site Vazão  |
| primary-dark-800   | `#1550aa` | azul do site Vazão     |
| primary-dark-900   | `#0a2b57` | marinho escuro Vazão   |
| accent-orange      | `#e1062f` | vermelho do site Vazão |
| accent-orange-dark | `#c10428` | vermelho escuro Vazão  |
| fonte              | Manrope   | padrão B2              |

## Assets

| Slot                     | Arquivo                               | Status                | Observação                                                                                        |
| ------------------------ | ------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| Logo                     | `src/assets/LOGO.png` (230×72)        | **pendente em alta**  | é o webp da LP anterior; no header aparece ampliado. Pedir o logo em PNG/SVG grande               |
| Banner do hero           | `src/assets/heroBg.png` (1981×900)    | adaptado              | foto da LP anterior reposicionada com o tampo do vaso em 70% da largura, fundo marinho à esquerda |
| Serviços                 | `src/assets/linhas/*.png`             | real, baixa resolução | 294–450 px de largura (o padrão pede 800×600)                                                     |
| Equipamentos             | `src/assets/aplicacoes/*.png`         | real, baixa resolução | 350×174 (o padrão pede 1200×900)                                                                  |
| Cenário dos Diferenciais | `src/assets/diferenciais/cenario.jpg` | real, baixa resolução | 1040×405 (o padrão pede 1600×900)                                                                 |
| Pessoa dos Diferenciais  | `src/assets/diferenciais/pessoa.png`  | **pendente**          | placeholder do padrão; bloqueia o `npm run verify`                                                |
| Fundo do "Como funciona" | `src/assets/processo/fundo.jpg`       | real                  | variante local                                                                                    |

## Pendências para publicar

1. URL final da página no WordPress da Vazão (hoje provisória em `site.url`: `https://www.vazao.com.br/lp-inspecao-nr13/`).
2. Foto de pessoa recortada (1220×1000, fundo transparente) para os Diferenciais.
3. Logo em alta resolução.
4. Fotos maiores dos serviços e equipamentos (opcional, melhora a nitidez).
5. Política de privacidade: a Vazão não tem; fica só a nota de LGPD.
6. Configurar o plugin B2 LP Publisher no WordPress da Vazão para ler a branch `wp-build`.
7. Depois de publicar no WordPress, desligar a LP antiga na Vercel (`vazao.b2marketingindustrial.com.br/inspecao-nr13/`) e apontar o anúncio para a URL nova.

## Conflitos e o que ficou de fora

- Telefone (81) 3228-8378 e WhatsApp de campanha (81) 99203-9379: não aparecem na página; o contato é pelo plugin de atendimento.
- GTM e endpoint de lead da LP anterior (`CONFIG` no HTML): substituídos pelo plugin; os eventos agora saem dos `data-cta`.

## CTAs (`data-cta`) para o GTM/GA4

`header-cta` · `hero-primary` · `hero-secondary` · `linhas-inspecao` · `linhas-adequacao` · `linhas-laudo` · `linhas-gestao` · `processo-cta` · `aplicacoes-vasos-de-pressao` · `aplicacoes-ar-comprimido` · `aplicacoes-caldeiras` · `aplicacoes-tubulacoes` · `perguntas-cta` · `diferenciais-cta` · `cotacao-whatsapp` · `mobile-cta`

## Bugs encontrados no starter (para corrigir no LP-STARTER-B2)

- `scripts/ficha.mjs` lê os nomes de ícone com uma regex que ignora chaves entre aspas: `badge-check`, `file-text`, `map-pin`, `clipboard-check` etc. são recusados como inexistentes. A ficha usa `clock`, `file` e `pin` no lugar; os arquivos de dados usam os ícones certos.
- Laranja `#ff6b00` escrito direto (sem token) em `ProcessSteps`, `WhyBrand`, `FaqAccordion` e na utility de badge do `global.css`: LP com cor de ação própria fica com brilho laranja.
- `ProductLines` mantém o cabeçalho em `max-w-xl` e o parágrafo em 330px mesmo sem carrossel de marcas.
- `ProcessSteps` acessa `step.when`, mas com etapas sem prazo o `astro check` falha; resolvido aqui anotando o tipo em `processo.ts`.
