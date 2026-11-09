/**
 * Dados globais da LP. Tudo que aparece em mais de um lugar (head, header, footer,
 * JSON-LD) vem daqui. Transcrito da ficha de execução (`docs/FICHA-LP.md`): campos `site` e `campanha`.
 */
export const site = {
  /** Nome completo da empresa (entrada 1). */
  brand: 'Vazão Engenharia e Montagem',
  /** Nome curto usado em frases como "Por que a …" (entrada 2). */
  brandShort: 'Vazão',
  /** Produto principal, no plural (entrada 3). Vai na tagline do header e no H1. */
  product: 'Inspeção e adequação NR13',
  /** Contexto de uso (entrada 4). Completa o H1 e o title. */
  context: 'indústrias em Pernambuco e Ceará',
  /**
   * URL absoluta da página no ar (entrada 10). Usada em canonical e og:url.
   * PROVISÓRIA: a página vai para o WordPress da Vazão e a URL final ainda não foi informada.
   */
  url: 'https://www.vazao.com.br/lp-inspecao-nr13/',
  /** Endereço completo com CEP (entrada 9). Footer e JSON-LD. */
  address: 'Av. Barão de Bonito, 880 - Várzea, Recife - PE, 50740-080',
  /** Link da política de privacidade do cliente (entrada 10). Vazio esconde o link, mas a nota de LGPD continua. */
  privacyUrl: '',
  /** Versão do padrão B2 que esta LP segue. Não editar manualmente; vem do template. */
  standardVersion: '2.8.0',
} as const

/**
 * Shortcodes do plugin de atendimento do WordPress (entrada 11 da entrevista).
 *
 * Ficam aqui, e não na página, porque `src/pages/index.astro` é gerado por
 * `npm run compose` e seria sobrescrito a cada recomposição.
 */
export const shortcodes = {
  /** Chat na coluna de 300px do hero. */
  chat: '[atendimento_chat id="default"]',
  /** Formulário da seção de cotação. */
  form: '[atendimento_form id="default-form"]',
} as const

/**
 * Título da aba. Mantém o da LP anterior (no ar desde 06/11/2026): palavra-chave no início e a
 * área atendida, que a fórmula padrão deixaria longa demais. 56 caracteres.
 */
export const title = 'Inspeção NR13 e adequação em PE e CE | Vazão Engenharia'

/** Meta description (≤ 160 caracteres). Ajuste o texto, mantendo marcas e o apoio técnico. */
export const description =
  'Inspeção NR13, adequação e laudo para vasos de pressão, caldeiras, ar comprimido e tubulações. Atendimento em Pernambuco e Ceará.'

/**
 * Campanha que leva tráfego para esta LP (entrada 15). Quem clica digitou a
 * palavra-chave antes: se o H1 não a repete, a pessoa volta para o Google.
 */
export const campaign = {
  /**
   * Palavra-chave principal, como está na campanha. O `check:lp` falha se ela não
   * estiver no H1 e no title — aceita maiúscula, acento, plural e outra ordem.
   * `null` quando a LP não tem campanha definida; vazio é entrada não preenchida.
   */
  mainKeyword: 'inspeção nr13',
  /**
   * Negativas **de oferta** da campanha — o que a empresa não vende. O `check:lp`
   * avisa quando o texto da página usa uma delas. As de intenção (emprego, curso)
   * ficam só no BRIEFING.md.
   */
  negatives: [],
  /**
   * Claims que o briefing proíbe ("autorizado", "distribuidor", "até 42%"), em todas
   * as formas em que podem aparecer. O `check:lp` falha se a página usar qualquer um.
   */
  forbidden: [],
} as const satisfies {
  mainKeyword: string | null
  negatives: readonly string[]
  forbidden: readonly string[]
}

/** WhatsApp comercial (entrada 12). Número no formato internacional, só dígitos (ex.: 5511999999999). Vazio desativa o botão flutuante. */
export const whatsapp = ''
