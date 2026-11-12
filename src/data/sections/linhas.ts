/**
 * Dados da seção "Serviços NR13" (slot `linhas` da biblioteca B2, fase: oferta).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): o miolo voltou ao layout e aos textos da LP
 * original (carrossel de serviços). Os campos do contrato da biblioteca continuam aqui
 * para o `check:lp`. As descrições foram encurtadas para caberem em 3 linhas (pedido de
 * 09/11/2026); `icon` é do sprite original (VzIcons.astro). No título, o trecho
 * entre asteriscos é o destaque em azul.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  glyph: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exigido pelo contrato da biblioteca; o layout original não tem card escuro. */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Inspeção · Adequação · Laudos',
  title: 'Serviços *NR13* para a sua indústria',
  text: 'Regularize equipamentos e instalações enquadrados na NR13 com suporte de engenharia especializada.',
  items: [
    {
      id: 'inspecao',
      tag: 'Inspeção',
      glyph: 'clip',
      title: 'Inspeção NR13',
      description:
        'Avaliação técnica dos equipamentos e das condições da instalação conforme os requisitos aplicáveis da norma.',
      photo: { src: linha1, alt: 'Inspetor anotando a leitura do manômetro de um vaso de pressão' },
      features: ['Levantamento em campo', 'Dispositivos de segurança', 'Teste hidrostático'],
      dark: false,
    },
    {
      id: 'adequacao',
      tag: 'Adequação',
      glyph: 'gear',
      title: 'Adequação NR13',
      description:
        'Do diagnóstico à execução das intervenções de engenharia que a sua indústria precisa.',
      photo: {
        src: linha2,
        alt: 'Vaso de pressão vertical com manômetro e válvula de segurança instalados',
      },
      features: ['Diagnóstico técnico', 'Plano de adequação', 'Intervenções de engenharia'],
      dark: false,
    },
    {
      id: 'laudo',
      tag: 'Documentação',
      glyph: 'doc',
      title: 'Laudo e documentação NR13',
      description:
        'Relatórios de inspeção de segurança e demais documentos técnicos exigíveis para cada equipamento.',
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
      glyph: 'cal',
      title: 'Gestão NR13',
      description:
        'Organização dos registros e da documentação dos equipamentos e acompanhamento das inspeções.',
      photo: {
        src: marcasPhoto,
        alt: 'Notebook com o painel de controle NR13 e capacete da Vazão',
      },
      features: [
        'Informações dos equipamentos',
        'Registros e documentação',
        'Acompanhamento de inspeções',
      ],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
