/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Serviços NR13',
  title: 'Serviços NR13 para a sua indústria',
  text: 'Regularize equipamentos e instalações enquadrados na NR13 com suporte de engenharia especializada.',
  items: [
    {
      id: 'inspecao',
      tag: 'Inspeção',
      title: 'Inspeção NR13',
      description: 'Avaliação técnica dos equipamentos e da instalação conforme a norma.',
      photo: { src: linha1, alt: 'Inspetor anotando a leitura do manômetro de um vaso de pressão' },
      features: ['Levantamento em campo', 'Dispositivos de segurança', 'Teste hidrostático'],
      dark: false,
    },
    {
      id: 'adequacao',
      tag: 'Adequação',
      title: 'Adequação NR13',
      description: 'Do diagnóstico à execução das intervenções de engenharia necessárias.',
      photo: {
        src: linha2,
        alt: 'Técnico ajustando os rotores internos de um equipamento industrial',
      },
      features: ['Diagnóstico técnico', 'Plano de adequação', 'Intervenções de engenharia'],
      dark: false,
    },
    {
      id: 'laudo',
      tag: 'Documentação',
      title: 'Laudo e documentação NR13',
      description: 'Relatórios de inspeção e documentos exigíveis para cada equipamento.',
      photo: {
        src: linha3,
        alt: 'Engenheiro da Vazão preenchendo o checklist NR13 ao lado de um vaso de pressão',
      },
      features: ['Relatórios de inspeção', 'Prontuário do equipamento', 'Registro de segurança'],
      dark: false,
    },
    {
      id: 'gestao',
      tag: 'Gestão',
      title: 'Gestão NR13',
      description: 'Registros, documentação e acompanhamento das inspeções ao longo da operação.',
      photo: {
        src: marcasPhoto,
        alt: 'Notebook com o painel de controle NR13 e capacete da Vazão',
      },
      features: ['Dados dos equipamentos', 'Registros e documentação', 'Controle das inspeções'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
