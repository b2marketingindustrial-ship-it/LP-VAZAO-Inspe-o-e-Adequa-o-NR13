/**
 * Dados da seção "Por que a Vazão" (slot `diferenciais` da biblioteca B2, fase: autoridade).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout da seção de diferenciais da LP Print Master
 * Locação (bloco escuro sobre a foto + 5 cards sobrepostos). Conteúdo reformulado com o
 * institucional do site da Vazão (história e autoridade), a pedido da B2: sem nomes de
 * clientes, sem Missão/Visão/Valores, sem o termo "turnkey" e sem contar ou listar soluções. `icon` é do sprite original
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

export const why = {
  eyebrow: 'Por que a Vazão',
  title: 'Mais de 30 anos de *engenharia industrial*',
  /** O mesmo título quebrado em 2 linhas; o trecho entre asteriscos é o destaque. */
  titleLines: ['Mais de 30 anos de', '*engenharia industrial*'],
  text: 'Fundada em 1991, a Vazão Engenharia e Montagem desenvolve soluções completas para a indústria, do projeto à entrega, atendendo às normas regulamentadoras de cada segmento.',
  scene: {
    src: cenario,
    alt: 'Vaso de pressão de aço inox em planta industrial a céu aberto',
  },
  reasons: [
    {
      icon: 'search',
      title: 'Orientação técnica',
      description: 'Indicação clara do que fazer em cada equipamento.',
    },
    {
      icon: 'layers',
      title: 'Equipe técnica',
      description: 'Engenheiros e técnicos dedicados à indústria.',
    },
    {
      icon: 'wrench',
      title: 'Todas as etapas',
      description: 'Do diagnóstico à adequação, um só parceiro.',
    },
    {
      icon: 'shield',
      title: 'Especialistas em NR13',
      description: 'Apoio técnico para adequar seus equipamentos à norma.',
    },
    {
      icon: 'factory',
      title: 'Experiência industrial',
      description: 'Atuação em diversos processos industriais.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly [string, string]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
