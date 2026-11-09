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

export interface Stat {
  value: string
  label: string
}

export const why = {
  eyebrow: 'Engenharia desde 1991',
  title: 'Mais de 30 anos de *engenharia industrial.*',
  /** O mesmo título quebrado em 2 linhas; o trecho entre asteriscos é o destaque. */
  titleLines: ['Mais de 30 anos de', '*engenharia industrial.*'],
  text: 'Fundada em 1991, a Vazão Engenharia e Montagem desenvolve soluções completas para a indústria, do projeto à entrega, atendendo às normas regulamentadoras de cada segmento.',
  /** Números de autoridade abaixo do texto. */
  stats: [
    { value: '1991', label: 'Ano de fundação' },
    { value: '+30 anos', label: 'No mercado industrial' },
    { value: 'PE e CE', label: 'Atendimento técnico' },
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
      title: 'Engenharia própria',
      description: 'Equipe de engenharia do projeto à execução.',
    },
    {
      icon: 'wrench',
      title: 'Do projeto à entrega',
      description: 'Soluções completas, até as utilidades no ponto de uso.',
    },
    {
      icon: 'shield',
      title: 'Especialistas em NR13',
      description: 'Conformidade dos equipamentos com a norma.',
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
  stats: readonly [Stat, Stat, Stat]
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
