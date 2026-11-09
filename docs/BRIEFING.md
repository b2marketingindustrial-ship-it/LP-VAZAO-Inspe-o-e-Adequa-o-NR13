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

| Ponto          | LP anterior                                                           | Decisão                                                                                 |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Base           | `index.html` autocontido, publicado na Vercel                         | padrão B2 v2.8 (Astro 7 + Tailwind 4), publicado no WordPress pela branch `wp-build`    |
| Header         | barra branca, menu de 4 âncoras, botão arredondado                    | header fixo do padrão: barra navy, logo em placa branca, tagline, um CTA, sem menu      |
| Chat           | chat próprio em JS que mandava o lead para o WhatsApp (81) 99203-9379 | shortcode `[atendimento_chat id="default"]` na coluna de 300px do hero                  |
| Formulário     | formulário próprio de 7 campos + banner "Fale com um especialista"    | Cotação do padrão com `[atendimento_form id="default-form"]`; banner removido           |
| Footer         | 4 colunas com logo, menu, telefone e "Voltar ao topo"                 | uma linha: © ano · endereço · crédito da B2 com link                                    |
| Cores e fonte  | marinho/azul/vermelho Vazão, Plus Jakarta Sans                        | cores Vazão nos tokens do padrão; fonte Plus Jakarta Sans na página toda (09/11, tarde) |
| Textos         | —                                                                     | Header/Hero/Cotação no padrão; **miolo com os textos originais** (09/11, tarde)         |
| Pontos do hero | 4 (um em 1 linha)                                                     | 3, cada um em 2 linhas fixas; sai "Atendimento em PE e CE" (vai para os selos)          |
| CTA            | "Solicitar avaliação técnica" em links `<a>`                          | `<button class="btn-slave-whats">`, rótulo "Solicite sua avaliação técnica" (desvio)    |

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

## Miolo no layout original (09/11/2026, tarde)

Depois da primeira versão no padrão, a B2 pediu que **o miolo voltasse à versão original**, exceto o hero. Ficam no padrão B2: Header, Hero, Cotação (shortcode do formulário) e Footer. Voltam ao layout e aos **textos originais**: Serviços (carrossel), Como funciona, Equipamentos (com o checklist de vasos), Diferenciais, Dúvidas e o banner "Fale com um especialista". Decisões: textos originais, ordem original, banner de volta e **Plus Jakarta Sans na página toda** (no lugar da Manrope).

Como foi feito, para a publicação continuar passando no `check:lp` do CI:

- Os 5 slots da biblioteca continuam (`linhas`, `processo`, `aplicacoes`, `diferenciais`, `perguntas`), com os mesmos arquivos, ids, dados e CTAs que o manifesto exige; **o markup de cada componente é o original**.
- O CSS original do miolo está em `src/styles/original.css`, escopado por `.vz` (classe na tag raiz de cada seção do miolo). Os ícones originais estão em `src/components/VzIcons.astro` (sprite + animação de entrada `.reveal`).
- O banner "Fale com um especialista" é `src/components/AuthorityBanner.astro` com dados em `src/data/miolo.ts`, montado à mão em `src/pages/index.astro`.
- Ordem original (Diferenciais antes de Dúvidas): ajustada à mão em `lp.manifest.json` e `src/pages/index.astro`. Diferenciais ganhou o ritmo `even` no manifesto, porque o layout original não tem os cards sobrepostos à Cotação que o ritmo `overlap` pressupõe.
- Nos dados, `glyph` é o ícone do sprite original; `icon` (catálogo B2) fica só onde o contrato exige.

Diferenças inevitáveis em relação ao original:

| Diferença                                                                       | Motivo                                                     |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Botões são `<button class="btn-slave-whats">` em vez de links para o formulário | o plugin de atendimento captura o clique                   |
| Cada card de serviço ganhou "Falar com especialista"                            | o manifesto exige um CTA por serviço (`linhas-{id}`)       |
| Cards de equipamento são botões (`aplicacoes-{id}`)                             | idem                                                       |
| Diferenciais ganhou um botão no fim                                             | o manifesto exige `diferenciais-cta`                       |
| Fotos via `astro:assets` em `<img>` em vez de `background-image`                | otimização de imagem do padrão                             |
| Sem formulário próprio no banner/área de contato                                | a Cotação do padrão (shortcode) fica logo depois do banner |

**Não recomponha** (`npm run compose`): ele sobrescreve os 5 componentes, o `index.astro` e o manifesto. Se precisar, guarde esta versão e reaplique os ajustes acima.

## Ajustes de 09/11/2026 (fim do dia)

- **Header** no modelo das LPs SEIVE e Print Master: barra branca com o logo dentro (sem a placa pendurada), filete azul→vermelho no topo, tagline com selo, CTA compacto e sombra só ao rolar. O logo não é link. A assinatura do Header em `scripts/check-lp.mjs` (A8) foi trocada pela mesma usada na SEIVE.
- **Logo da Vazão removido** do topo das seções do miolo e do banner.
- **Serviços em grid 2×2** (1 coluna abaixo de 1080px), no lugar do carrossel.
- **Botões padronizados** com o `Button.astro` do padrão: cantos retos, 15px seminegrito, 14px × 24px de respiro, ícone de 16px, sem sombra nem deslocamento no hover. O link "Falar com especialista" dos cards segue a receita de link de card (13px negrito). O CTA do header continua na versão compacta.
- **Banner "Fale com um especialista" integrado à Cotação**: mesmo fundo cinza, sem recorte arredondado nem faixas diagonais entre os dois.
- **Diferenciais no layout da LP Print Master Locação**: bloco escuro em largura total sobre a foto (o vaso de pressão da LP anterior, espelhado para ficar à direita), cantos superiores arredondados e os 5 cards brancos sobrepostos à base. Textos da LP original.
- **Hero com cantos inferiores arredondados** (40px / 64px), como nas LPs Print Master; Serviços começa por baixo dele.
- **Quebras de linha fixas**: H1 em 3 linhas ("Inspeção NR13," / "adequação e laudo" / "para sua indústria"), parágrafo do hero quebrado depois de "vasos de pressão,", parágrafo de Serviços em 1 linha e descrição do "Como funciona" em 2 linhas (desktop).
- **Número de linhas dos cards**: descrições com 3 linhas em Serviços, Etapas e Equipamentos, e títulos dos Equipamentos em 1 linha. Para caber, estes textos originais foram encurtados: Adequação, Laudo e Documentação, Gestão (Serviços); as 4 etapas; Vasos de pressão, Ar comprimido e Tubulações (Equipamentos); "Soluções para indústrias" (Diferenciais).

## Desvios do padrão que continuam valendo

| Desvio                                                                                                                              | Onde                                             | Motivo                                              |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| CTA do Header/Hero "Solicite sua avaliação técnica" (celular "Avaliação"); miolo com "Solicitar avaliação técnica" como no original | `src/data/content.ts`, `src/data/miolo.ts`       | serviço de engenharia começa por avaliação          |
| Fonte Plus Jakarta Sans (site da Vazão)                                                                                             | `global.css`, `Layout.astro`                     | decisão da B2                                       |
| Barra de CTA fixa no celular                                                                                                        | `src/components/MobileCta.astro`, `Layout.astro` | mantida da LP anterior                              |
| Brilhos e bordas pela cor do tema em vez do laranja fixo                                                                            | `global.css`                                     | o laranja do padrão estava escrito direto no código |
| Title mantido da LP anterior                                                                                                        | `src/data/site.ts`                               | a fórmula padrão ficaria longa demais               |

## Tokens

| Token              | Valor             | Origem                        |
| ------------------ | ----------------- | ----------------------------- |
| primary-dark       | `#0b3f8a`         | marinho do site Vazão         |
| primary-dark-800   | `#1550aa`         | azul do site Vazão            |
| primary-dark-900   | `#0a2b57`         | marinho escuro Vazão          |
| accent-orange      | `#e1062f`         | vermelho do site Vazão        |
| accent-orange-dark | `#c10428`         | vermelho escuro Vazão         |
| fonte              | Plus Jakarta Sans | site da Vazão (decisão da B2) |

## Assets

| Slot                     | Arquivo                               | Status                | Observação                                                                                        |
| ------------------------ | ------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| Logo                     | `src/assets/LOGO.png` (230×72)        | **pendente em alta**  | é o webp da LP anterior; no header aparece ampliado. Pedir o logo em PNG/SVG grande               |
| Banner do hero           | `src/assets/heroBg.png` (1981×900)    | adaptado              | foto da LP anterior reposicionada com o tampo do vaso em 70% da largura, fundo marinho à esquerda |
| Serviços                 | `src/assets/linhas/*.png`             | real, baixa resolução | 294–450 px de largura (o padrão pede 800×600)                                                     |
| Equipamentos             | `src/assets/aplicacoes/*.png`         | real, baixa resolução | 350×174 (o padrão pede 1200×900)                                                                  |
| Cenário dos Diferenciais | `src/assets/diferenciais/cenario.jpg` | real, baixa resolução | 1040×405 (o padrão pede 1600×900)                                                                 |
| Fundo do "Como funciona" | `src/assets/processo/fundo.jpg`       | real                  | variante local                                                                                    |

## Pendências para publicar

1. URL final da página no WordPress da Vazão (hoje provisória em `site.url`: `https://www.vazao.com.br/lp-inspecao-nr13/`).
2. Logo em alta resolução.
3. Fotos maiores dos serviços e equipamentos (opcional, melhora a nitidez).
4. Política de privacidade: a Vazão não tem; fica só a nota de LGPD.
5. Configurar o plugin B2 LP Publisher no WordPress da Vazão para ler a branch `wp-build`.
6. Depois de publicar no WordPress, desligar a LP antiga na Vercel (`vazao.b2marketingindustrial.com.br/inspecao-nr13/`) e apontar o anúncio para a URL nova.

## Conflitos e o que ficou de fora

- Telefone (81) 3228-8378 e WhatsApp de campanha (81) 99203-9379: não aparecem na página; o contato é pelo plugin de atendimento.
- GTM e endpoint de lead da LP anterior (`CONFIG` no HTML): substituídos pelo plugin; os eventos agora saem dos `data-cta`.

## CTAs (`data-cta`) para o GTM/GA4

`header-cta` · `hero-primary` · `hero-secondary` · `linhas-inspecao` · `linhas-adequacao` · `linhas-laudo` · `linhas-gestao` · `processo-cta` · `aplicacoes-vasos-de-pressao` · `aplicacoes-ar-comprimido` · `aplicacoes-caldeiras` · `aplicacoes-tubulacoes` · `diferenciais-cta` · `perguntas-cta` · `linhas-cta` · `aplicacoes-cta` · `especialista-cta` · `cotacao-whatsapp` · `mobile-cta`

## Bugs encontrados no starter (para corrigir no LP-STARTER-B2)

- `scripts/ficha.mjs` lê os nomes de ícone com uma regex que ignora chaves entre aspas: `badge-check`, `file-text`, `map-pin`, `clipboard-check` etc. são recusados como inexistentes. A ficha usa `clock`, `file` e `pin` no lugar; os arquivos de dados usam os ícones certos.
- Laranja `#ff6b00` escrito direto (sem token) em `ProcessSteps`, `WhyBrand`, `FaqAccordion` e na utility de badge do `global.css`: LP com cor de ação própria fica com brilho laranja.
- `ProductLines` mantém o cabeçalho em `max-w-xl` e o parágrafo em 330px mesmo sem carrossel de marcas.
- `ProcessSteps` acessa `step.when`, mas com etapas sem prazo o `astro check` falha; resolvido aqui anotando o tipo em `processo.ts`.
