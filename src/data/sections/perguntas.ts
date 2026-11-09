/**
 * Dados da seção "Perguntas frequentes" (slot `perguntas` da biblioteca B2, fase: autoridade).
 *
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): layout e textos da LP original. No título, o
 * trecho entre asteriscos é o destaque.
 */
export interface Question {
  id: string
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'Dúvidas sobre inspeção e *laudo NR13*',
  text: 'Não encontrou sua resposta? Fale com um especialista da Vazão.',
  items: [
    {
      id: 'quando',
      question: 'Quando uma empresa precisa de inspeção NR13?',
      answer:
        'A necessidade depende dos equipamentos existentes, de seu enquadramento na NR13 e das condições e prazos aplicáveis. Um levantamento técnico permite identificar quais equipamentos precisam ser considerados e quais ações são necessárias.',
    },
    {
      id: 'laudo',
      question: 'O que é um laudo NR13?',
      answer:
        '“Laudo NR13” é uma expressão comum nas buscas por serviços de adequação. Tecnicamente, a norma prevê diferentes documentos conforme o equipamento, incluindo relatórios de inspeção de segurança, prontuários e registros de segurança, quando aplicáveis.',
    },
    {
      id: 'vasos',
      question: 'A NR13 se aplica a vasos de pressão?',
      answer:
        'Sim, aos vasos de pressão que estejam dentro do campo de aplicação estabelecido pela norma. O enquadramento deve considerar as características técnicas do equipamento.',
    },
    {
      id: 'compressor',
      question: 'Compressor de ar precisa de NR13?',
      answer:
        'Em sistemas de ar comprimido, é necessário avaliar os vasos de pressão e demais equipamentos ou componentes quanto ao enquadramento na NR13. A análise considera as características da instalação e dos equipamentos.',
    },
    {
      id: 'adequacao',
      question: 'A Vazão realiza adequação NR13?',
      answer:
        'Sim. A Vazão faz o levantamento em campo, avalia os equipamentos e identifica os requisitos que precisam ser atendidos, do diagnóstico à execução das intervenções de engenharia.',
    },
    {
      id: 'caldeiras',
      question: 'A Vazão realiza inspeção NR13 em caldeiras?',
      answer:
        'Sim. A Vazão faz a inspeção e a avaliação técnica de caldeiras enquadradas na NR13, com verificação das condições de segurança e da documentação aplicável.',
    },
    {
      id: 'documentacao',
      question: 'A Vazão pode ajudar na documentação NR13?',
      answer:
        'Sim. A Vazão avalia a documentação existente e apoia a organização ou a elaboração dos documentos técnicos aplicáveis a cada equipamento.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Question[]
}
