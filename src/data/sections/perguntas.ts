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
        'É como o mercado chama a documentação técnica exigida pela NR13 para cada equipamento: relatório de inspeção de segurança, prontuário e registro de segurança, conforme o tipo e a categoria do equipamento.',
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
        // PENDENTE: confirmar a redação com a Vazão.
        'Depende. O compressor em si não é o foco da norma, mas o reservatório de ar comprimido é um vaso de pressão e pode estar enquadrado na NR13, conforme suas características. A avaliação considera a instalação e os equipamentos.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly Question[]
}
