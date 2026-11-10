# LP Inspeção e Adequação NR13 — Vazão Engenharia

Landing page de serviço da **Vazão Engenharia e Montagem** para indústrias de todo o Nordeste.
Recebe o tráfego do grupo **NR13** da campanha *[PES] Locação e Serviços Nordeste* (Google Ads).
Palavra-chave principal: **inspeção nr13** (presente no H1 e no título da aba).

## Estrutura

- `index.html`: página única e autocontida (HTML, CSS e JS inline). Fonte: Plus Jakarta Sans (Google Fonts). Identidade visual igual à do site da Vazão (marinho `#0b3f8a`, azul `#2468cc`, vermelho `#e1062f`).
- `assets/`: imagens. Os arquivos abaixo entram **sozinhos** na página quando forem adicionados com o nome exato:

| Arquivo | Onde aparece | Tamanho |
|---|---|---|
| `logo-vazao.webp` (já incluída) | topo e rodapé | 230×72 |
| `banner-topo.jpg` | painel azul do topo, atrás do chat | 1200×900 |
| `servico-inspecao-nr13.jpg` | serviço Inspeção | 1200×900 |
| `servico-adequacao-nr13.jpg` | serviço Adequação | 1200×900 |
| `servico-laudo-documentacao-nr13.jpg` | serviço Laudo e Documentação | 1200×900 |
| `servico-gestao-nr13.jpg` | serviço Gestão | 1200×900 |
| `aplicacao-vasos-de-pressao.jpg` | aplicação Vasos de Pressão | 1200×900 |
| `aplicacao-ar-comprimido.jpg` | aplicação Ar Comprimido | 1200×900 |
| `aplicacao-caldeiras.jpg` | aplicação Caldeiras | 1200×900 |
| `aplicacao-tubulacoes.jpg` | aplicação Tubulações | 1200×900 |

## Configuração (bloco `CONFIG` no fim do `index.html`)

- `gtmId`: ID do Google Tag Manager. Vazio = não carrega.
- `leadEndpoint`: URL que recebe o lead (POST JSON). **Enquanto estiver vazio, o lead segue pelo WhatsApp da campanha (81) 99203-9379**, já com os dados preenchidos.
- `privacyUrl`: link da política de privacidade.

O lead leva junto UTMs, `gclid` e `keyword` da URL (guardados por 90 dias), além de campanha e grupo.
Eventos no `dataLayer`: `cta_click`, `chat_start`, `generate_lead`.

## Rodar localmente

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Deploy

Vercel, conectada a este repositório: todo push na `main` publica em produção.
