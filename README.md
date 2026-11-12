# LP Vazão — Inspeção e adequação NR13

Landing page de serviço da **Vazão Engenharia e Montagem** (Recife/PE) para indústrias de todo o Nordeste, no padrão B2 v2.8.0: Astro 7 + Tailwind 4, uma rota, publicada no WordPress da Vazão pela branch `wp-build`.

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

Ordem em [`src/pages/index.astro`](src/pages/index.astro) (ajustada à mão para a ordem original do miolo).

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

**O miolo usa o layout e os textos originais da LP anterior** (pedido da B2): os 5 componentes de seção ocupam os slots da biblioteca, mas o markup é o original, com CSS em `src/styles/original.css` (escopo `.vz`) e ícones em `src/components/VzIcons.astro`. O banner "Fale com um especialista" é `src/components/AuthorityBanner.astro`. Barra de CTA no celular: `src/components/MobileCta.astro`. **Não rode `npm run compose`**: ele sobrescreve tudo isso (ver `docs/BRIEFING.md`).

Marca, URL, endereço, title, description, palavra-chave e shortcodes: `src/data/site.ts`. Cores (marinho e vermelho Vazão nos tokens "navy" e "orange") e fonte (Plus Jakarta Sans): `src/styles/global.css`.

## Verificar e publicar

A biblioteca de seções fica no starter, clonado em `~/projetos/b2-interno/LP-STARTER-B2`. Nesta VPS, passe o caminho:

```bash
npm run ficha -- --library ../../../b2-interno/LP-STARTER-B2/sections
npm run check:lp:rascunho   # tolera as imagens pendentes da ficha
npm run check:lp            # portão de publicação: falha enquanto houver imagem de exemplo
npm run check && npm run lint && npm run format:check && npm run build
```

Push em `main` → GitHub Actions roda as verificações e o build → `dist/` vai para a branch `wp-build` → o plugin B2 LP Publisher lê de lá.
