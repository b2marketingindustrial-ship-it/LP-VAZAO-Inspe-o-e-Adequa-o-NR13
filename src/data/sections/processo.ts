/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Alternativa ao painel de identificação para quando o atrito do visitante não é
 * "não sei o que pedir" e sim "não sei como isso acontece" — típico de serviço,
 * instalação, adequação a norma e contrato de manutenção.
 *
 * 4 a 6 etapas. Com 3 a promessa parece rasa; com 7 ninguém lê.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

export const process = {
  eyebrow: 'Como funciona',
  title: 'Como funciona uma adequação NR13?',
  text: 'Tudo começa com um levantamento técnico na sua planta, para definir o que precisa ser inspecionado, documentado ou adequado.',
  microcopy: 'Do diagnóstico à adequação',
  /** Sem prazos: a Vazão não informou prazos por etapa, então `when` fica de fora. */
  steps: [
    {
      id: 'levantamento',
      icon: 'search',
      title: 'Levantamento e diagnóstico',
      description: 'Identificação dos equipamentos em campo e dos requisitos aplicáveis a cada um.',
    },
    {
      id: 'inspecao',
      icon: 'shield',
      title: 'Inspeção dos equipamentos',
      description:
        'Verificações conforme o tipo, a categoria, as condições e o histórico do equipamento.',
    },
    {
      id: 'documentacao',
      icon: 'file-text',
      title: 'Documentação técnica',
      description:
        'Elaboração ou organização dos documentos decorrentes da inspeção e da adequação.',
    },
    {
      id: 'adequacoes',
      icon: 'wrench',
      title: 'Plano e adequações',
      description:
        'Indicação das intervenções e, quando preciso, execução de reparos e instalações.',
    },
  ] as readonly ProcessStep[],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}
