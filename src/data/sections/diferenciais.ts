/**
 * Dados da seção "Por que a Vazão" (slot `diferenciais` da biblioteca B2, fase: autoridade).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout da seção de diferenciais da LP Print Master
 * Locação (bloco escuro sobre a foto + 5 cards sobrepostos). Conteúdo reformulado com o
 * institucional do site da Vazão (história, disciplinas, projetos turnkey), a pedido da B2:
 * sem nomes de clientes e sem Missão/Visão/Valores. `icon` é do sprite original
 * (VzIcons.astro). No título, o trecho entre asteriscos é o destaque.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  /** Ícone do catálogo B2 (exigido pelo contrato). */
  icon: IconName
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export const why = {
  eyebrow: 'Engenharia desde 1991',
  title: 'Mais de 30 anos de *engenharia industrial.*',
  /** O mesmo título quebrado em 2 linhas; o trecho entre asteriscos é o destaque. */
  titleLines: ['Mais de 30 anos de', '*engenharia industrial.*'],
  text: 'Fundada em 1991, a Vazão Engenharia e Montagem atua nas engenharias mecânica, civil e elétrica, com projetos turnkey da concepção à entrega e atendimento às normas regulamentadoras de cada segmento.',
  /** Números de autoridade abaixo do texto. */
  stats: [
    { value: '1991', label: 'Fundação em Recife' },
    { value: '3', label: 'Engenharias integradas' },
    { value: 'Turnkey', label: 'Da concepção à entrega' },
  ],
  scene: {
    src: cenario,
    alt: 'Vaso de pressão de aço inox em planta industrial a céu aberto',
  },
  reasons: [
    {
      icon: 'clock',
      title: 'Desde 1991',
      description: 'Mais de 30 anos atendendo o mercado industrial.',
    },
    {
      icon: 'layers',
      title: 'Engenharia integrada',
      description: 'Mecânica, civil e elétrica na mesma equipe.',
    },
    {
      icon: 'wrench',
      title: 'Projetos turnkey',
      description: 'Da concepção à entrega das utilidades no ponto de uso.',
    },
    {
      icon: 'shield',
      title: 'Especialistas em NR13',
      description: 'Inspeção, documentação e adequação de equipamentos.',
    },
    {
      icon: 'factory',
      title: 'Experiência industrial',
      description: 'Ar comprimido, ETA, ETE, montagem e automação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly [string, string]
  text: string
  stats: readonly [Stat, Stat, Stat]
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
