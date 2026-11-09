/**
 * Dados da seção "Por que a Vazão" (slot `diferenciais` da biblioteca B2, fase: autoridade).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout e textos da LP original (cards brancos
 * sobre a foto que se dissolve, sem pessoa recortada). `icon` é do sprite original
 * (VzIcons.astro). No título, o trecho entre asteriscos é o destaque.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  /** Ícone do catálogo B2 (exigido pelo contrato); o desenho usa `glyph`. */
  icon: IconName
  /** Ícone do sprite original (VzIcons.astro). */
  glyph: string
  title: string
  description: string
}

export const why = {
  eyebrow: 'Segurança e conformidade',
  title: 'Por que contar com a *Vazão Engenharia?*',
  text: 'Experiência industrial, engenharia própria e avaliação feita na sua planta.',
  scene: {
    src: cenario,
    alt: 'Vaso de pressão em planta industrial',
  },
  reasons: [
    {
      icon: 'check',
      glyph: 'badge',
      title: 'Desde 1991',
      description: 'Experiência em soluções para o mercado industrial.',
    },
    {
      icon: 'shield',
      glyph: 'shield',
      title: 'Especialistas em NR13',
      description: 'Inspeção, levantamento e adequação de equipamentos.',
    },
    {
      icon: 'gear',
      glyph: 'gear',
      title: 'Engenharia especializada',
      description: 'Suporte para avaliar e desenvolver as intervenções.',
    },
    {
      icon: 'search',
      glyph: 'search',
      title: 'Levantamento em campo',
      description: 'Avaliação da situação real encontrada na instalação.',
    },
    {
      icon: 'factory',
      glyph: 'factory',
      title: 'Soluções para indústrias',
      description: 'Atendimento focado em ambientes e processos industriais.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
