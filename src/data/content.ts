/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/**
 * Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar.
 * Desvio aprovado em 09/11/2026 (docs/BRIEFING.md): serviço de engenharia não se cota às
 * cegas, começa por uma avaliação; "cotação" vira "avaliação técnica".
 */
export const cta = {
  primary: 'Solicite sua avaliação técnica',
  primaryShort: 'Avaliação',
  secondary: 'Identifique seus equipamentos',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Engenharia especializada em NR13',
  title: 'Inspeção NR13, adequação e laudo para sua indústria',
  /** Quebras fixas do H1 (pedido de 09/11/2026). Juntas, as linhas têm de formar `title`. */
  titleLines: ['Inspeção NR13,', 'adequação e laudo', 'para sua indústria'],
  text: 'Inspeção, adequação e documentação para vasos de pressão, caldeiras, ar comprimido e tubulações.',
  /** Quebra do parágrafo a partir de `sm` (pedido de 09/11/2026). */
  textLines: [
    'Inspeção, adequação e documentação para vasos de pressão,',
    'caldeiras, ar comprimido e tubulações.',
  ],
  banner: {
    src: heroBg,
    alt: 'Trocador de calor e tubulações em planta industrial',
  },
  points: [
    { icon: 'search', line1: 'Levantamento', line2: 'em campo' },
    { icon: 'file-text', line1: 'Inspeção e', line2: 'documentação' },
    { icon: 'badge-check', line1: 'Desde 1991', line2: 'na indústria' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly string[]
  text: string
  textLines: readonly string[]
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Avaliação técnica NR13',
  title: 'Fale com quem entende de inspeção NR13.',
  text: 'Nossa equipe avalia os equipamentos da sua planta e indica o que precisa ser inspecionado, documentado ou adequado. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'shield', label: 'Especialistas em NR13' },
    { icon: 'badge-check', label: 'Experiência desde 1991' },
    { icon: 'map-pin', label: 'Atendimento em PE e CE' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de avaliação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
