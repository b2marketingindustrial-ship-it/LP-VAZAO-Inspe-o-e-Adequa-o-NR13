/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Sua indústria', 'dentro da NR13.'],
  text: 'Experiência industrial, engenharia própria e avaliação feita na sua planta.',
  scene: {
    src: cenario,
    alt: 'Vaso de pressão em planta industrial',
  },
  /** PENDENTE: foto de pessoa recortada (1220×1000, fundo transparente). Placeholder do padrão. */
  person: {
    src: pessoa,
    alt: `Engenheiro da ${site.brandShort}`,
  },
  reasons: [
    {
      icon: 'badge-check',
      title: 'Desde 1991',
      description: 'Experiência em soluções para o mercado industrial.',
    },
    {
      icon: 'shield',
      title: 'Especialistas em NR13',
      description: 'Inspeção, levantamento e adequação de equipamentos.',
    },
    {
      icon: 'gear',
      title: 'Engenharia especializada',
      description: 'Suporte para avaliar e desenvolver as intervenções.',
    },
    {
      icon: 'search',
      title: 'Levantamento em campo',
      description: 'Avaliação da situação real encontrada na instalação.',
    },
    {
      icon: 'factory',
      title: 'Soluções para indústrias',
      description: 'Foco em ambientes e processos industriais.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
