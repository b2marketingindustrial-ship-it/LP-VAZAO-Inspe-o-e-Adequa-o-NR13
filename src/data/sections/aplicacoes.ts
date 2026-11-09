/**
 * Dados da seção "Equipamentos atendidos" (slot `aplicacoes` da biblioteca B2, fase: prova).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout e textos da LP original, com o checklist
 * de vasos de pressão. `icon` é do sprite original (VzIcons.astro); `featured` destaca o
 * card com borda azul. Descrições dos cards encurtadas para 3 linhas (09/11/2026). No título, o trecho entre asteriscos é o destaque.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  glyph: string
  description: string
  photo: Photo
  featured?: boolean
}

export const applications = {
  eyebrow: 'Equipamentos atendidos',
  title: 'NR13 para vasos de pressão, caldeiras, *ar comprimido e tubulações*',
  text: 'Inspeção, adequação e laudo NR13 para os equipamentos enquadrados na norma. Vasos de pressão precisam ter sua integridade e documentação gerenciadas.',
  button: 'Solicitar inspeção',
  checklist: {
    title: 'Na inspeção de vasos de pressão, avaliamos:',
    items: [
      'Identificação',
      'Dispositivos de segurança',
      'Instrumentação',
      'Condições de instalação',
      'Documentação',
      'Adequações',
    ],
  },
  items: [
    {
      id: 'vasos-de-pressao',
      label: 'Vasos de pressão',
      glyph: 'tank',
      description: 'Inspeção, avaliação e documentação de vasos de pressão enquadrados.',
      photo: { src: app1, alt: 'Vaso de pressão horizontal em área industrial' },
      featured: true,
    },
    {
      id: 'ar-comprimido',
      label: 'Ar comprimido',
      glyph: 'air',
      description: 'Vasos e reservatórios do sistema avaliados quanto ao enquadramento.',
      photo: { src: app2, alt: 'Compressor de ar e reservatório em sala de máquinas' },
    },
    {
      id: 'caldeiras',
      label: 'Caldeiras',
      glyph: 'boiler',
      description: 'Inspeção e avaliação técnica de caldeiras enquadradas na NR13.',
      photo: { src: app3, alt: 'Caldeira industrial com queimador em casa de caldeiras' },
    },
    {
      id: 'tubulacoes',
      label: 'Tubulações industriais',
      glyph: 'pipe',
      description: 'Avaliação, inspeção e documentação de tubulações enquadradas.',
      photo: { src: app4, alt: 'Tubulações industriais com válvula e flanges' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  button: string
  checklist: { title: string; items: readonly string[] }
  items: readonly [Application, Application, Application, Application]
}
