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
  text: 'Inspeção, adequação e documentação para vasos de pressão, caldeiras, ar comprimido e tubulações, para indústrias de todo o Nordeste.',
  /** Quebra do parágrafo a partir de `sm` (pedido de 09/11/2026); área atendida no fim (10/11/2026). */
  textLines: [
    'Inspeção, adequação e documentação para vasos de pressão,',
    'caldeiras, ar comprimido e tubulações, para indústrias de todo o Nordeste.',
  ],
  banner: {
    src: heroBg,
    alt: 'Trocador de calor e tubulações em planta industrial',
  },
  points: [
    { icon: 'users', line1: 'Engenharia', line2: 'própria' },
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
  title: 'Fale com quem entende de inspeção NR13',
  text: 'Conte o que você precisa e um especialista em NR13 retorna com a orientação para a sua planta. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'users', label: 'Retorno de especialista' },
    { icon: 'shield', label: 'Dados protegidos' },
    { icon: 'map-pin', label: 'Atendimento em todo o Nordeste' },
  ],
  /**
   * Nota de LGPD abaixo do formulário. Vazia a pedido da B2 (09/11/2026): o aviso de LGPD fica
   * no próprio formulário do plugin. Sem texto e sem `site.privacyUrl`, a nota não aparece.
   */
  lgpd: '',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  /** 3 selos: sai "Sem compromisso" (09/11/2026) e entra a área atendida (10/11/2026). */
  trust: readonly TrustItem[]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
