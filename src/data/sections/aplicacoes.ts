/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Equipamentos atendidos',
  title: 'Inspeção NR13 por tipo de equipamento',
  text: 'Inspeção, adequação e laudo NR13 para os equipamentos enquadrados na norma.',
  items: [
    {
      id: 'vasos-de-pressao',
      label: 'Vasos de pressão',
      description: 'Inspeção, avaliação e documentação de vasos de pressão enquadrados.',
      photo: { src: app1, alt: 'Vaso de pressão horizontal em área industrial' },
    },
    {
      id: 'ar-comprimido',
      label: 'Ar comprimido',
      description: 'Vasos e reservatórios do sistema avaliados quanto ao enquadramento na NR13.',
      photo: { src: app2, alt: 'Compressor de ar e reservatório em sala de máquinas' },
    },
    {
      id: 'caldeiras',
      label: 'Caldeiras',
      description: 'Inspeção e avaliação técnica de caldeiras enquadradas na NR13.',
      photo: { src: app3, alt: 'Caldeira industrial com queimador em casa de caldeiras' },
    },
    {
      id: 'tubulacoes',
      label: 'Tubulações industriais',
      description: 'Avaliação de tubulações enquadradas, com inspeção e documentação.',
      photo: { src: app4, alt: 'Tubulações industriais com válvula e flanges' },
    },
  ],
  /**
   * Variante local (LP Vazão): checklist da LP anterior, abaixo dos cards. Fora do contrato
   * da seção; o componente só o mostra quando existe.
   */
  checklist: {
    title: 'Na inspeção de vasos de pressão, avaliamos',
    items: [
      'Identificação',
      'Dispositivos de segurança',
      'Instrumentação',
      'Condições de instalação',
      'Documentação',
      'Adequações',
    ],
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
  checklist?: { title: string; items: readonly string[] }
}
