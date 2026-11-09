# LP Vazão — Inspeção e adequação NR13

Landing page de serviço da **Vazão Engenharia e Montagem** (Recife/PE) para indústrias de Pernambuco e Ceará, no padrão B2 v2.8.0: Astro 7 + Tailwind 4, uma rota, publicada no WordPress da Vazão pela branch `wp-build`.

- Campanha: grupo **NR13** de _[PES] Locação e Serviços Nordeste_ (Google Ads). Palavra-chave principal: `inspeção nr13` (H1 e title).
- URL final: **pendente** (WordPress da Vazão). A versão anterior, em HTML puro, segue no ar na Vercel até a troca.
- Decisões, origem de cada texto, desvios do padrão e pendências: [`docs/BRIEFING.md`](docs/BRIEFING.md). Conteúdo: [`docs/FICHA-LP.md`](docs/FICHA-LP.md).

## Rodar

```bash
npm install
npm run dev        # http://127.0.0.1:4321 (na VPS: https://4321.code.b2hub.cloud)
```

Fora do WordPress, os shortcodes do chat e do formulário aparecem como texto cru.

## Página

Ordem fixa em [`src/pages/index.astro`](src/pages/index.astro), gerado por `npm run compose`. Ao recompor, reaplique as variantes locais marcadas no topo de cada componente.

| Seção                      | Componente                                          | Texto                               |
| -------------------------- | --------------------------------------------------- | ----------------------------------- |
| Cabeçalho                  | `src/components/Header.astro`                       | `src/data/content.ts`               |
| Hero (+ chat)              | `src/components/Hero.astro`                         | `src/data/content.ts`               |
| Serviços NR13              | `src/components/sections/ProductLines.astro`        | `src/data/sections/linhas.ts`       |
| Como funciona              | `src/components/sections/ProcessSteps.astro`        | `src/data/sections/processo.ts`     |
| Equipamentos (+ checklist) | `src/components/sections/ApplicationsGallery.astro` | `src/data/sections/aplicacoes.ts`   |
| Perguntas frequentes       | `src/components/sections/FaqAccordion.astro`        | `src/data/sections/perguntas.ts`    |
| Por que a Vazão            | `src/components/sections/WhyBrand.astro`            | `src/data/sections/diferenciais.ts` |
| Cotação (+ formulário)     | `src/components/QuoteForm.astro`                    | `src/data/content.ts`               |
| Rodapé                     | `src/components/Footer.astro`                       | `src/data/site.ts`                  |

Variantes locais (fora do padrão, aprovadas): `SectionLogo.astro` (logo nas seções) e `MobileCta.astro` (barra de CTA no celular).

Marca, URL, endereço, title, description, palavra-chave e shortcodes: `src/data/site.ts`. Cores (marinho e vermelho Vazão nos tokens "navy" e "orange") e fonte: `src/styles/global.css`.

## Verificar e publicar

A biblioteca de seções fica no starter, clonado em `~/projetos/b2-interno/LP-STARTER-B2`. Nesta VPS, passe o caminho:

```bash
npm run ficha -- --library ../../../b2-interno/LP-STARTER-B2/sections
npm run check:lp:rascunho   # tolera as imagens pendentes da ficha
npm run check:lp            # portão de publicação: falha enquanto houver imagem de exemplo
npm run check && npm run lint && npm run format:check && npm run build
```

Push em `main` → GitHub Actions roda as verificações e o build → `dist/` vai para a branch `wp-build` → o plugin B2 LP Publisher lê de lá.
