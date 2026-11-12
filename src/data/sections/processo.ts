/**
 * Dados da seção "Como funciona" (slot `processo` da biblioteca B2, fase: apoio).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout e textos da LP original. `icon` é do
 * sprite original (VzIcons.astro). Descrições das etapas encurtadas para 3 linhas (09/11/2026). No título, o trecho entre asteriscos é o destaque.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  /** Ícone do catálogo B2 (exigido pelo contrato); o desenho usa `glyph`. */
  icon: IconName
  /** Ícone do sprite original (VzIcons.astro). */
  glyph: string
  title: string
  description: string
}

export const process = {
  eyebrow: 'Do diagnóstico à adequação',
  title: 'Como funciona uma adequação *NR13?*',
  question: 'Sua empresa sabe quais equipamentos precisam atender à NR13?',
  text: 'Tudo começa com um levantamento técnico na sua planta. A Vazão identifica os equipamentos, avalia as condições existentes e define o que precisa ser inspecionado, documentado ou adequado.',
  /** Exigido pelo contrato da biblioteca; o layout original não mostra esta linha. */
  microcopy: 'Do diagnóstico à adequação',
  steps: [
    {
      id: 'levantamento',
      icon: 'file',
      glyph: 'clip',
      title: 'Levantamento e diagnóstico',
      description: 'Identificação dos equipamentos em campo e dos requisitos de cada um.',
    },
    {
      id: 'inspecao',
      icon: 'shield',
      glyph: 'helmet',
      title: 'Inspeção dos equipamentos',
      description:
        'Verificações e inspeções conforme o tipo, a categoria e o histórico do equipamento.',
    },
    {
      id: 'documentacao',
      icon: 'file',
      glyph: 'doc',
      title: 'Documentação técnica',
      description: 'Elaboração ou organização dos documentos decorrentes da inspeção e adequação.',
    },
    {
      id: 'adequacoes',
      icon: 'gear',
      glyph: 'gear',
      title: 'Plano e adequações',
      description:
        'Indicação das intervenções e, quando preciso, execução de reparos e instalações.',
    },
  ] as readonly ProcessStep[],
} as const satisfies {
  eyebrow: string
  title: string
  question: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}
