/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * 4 a 8 perguntas. Servem para derrubar a última objeção antes do formulário, não
 * para explicar o produto — isso é trabalho das seções de oferta. Se a resposta
 * passar de 3 linhas, a objeção é grande demais para um acordeão e merece seção.
 *
 * As perguntas são as que o comercial realmente ouve, na palavra do cliente.
 */
export interface Question {
  id: string
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'Dúvidas sobre inspeção e laudo NR13',
  text: 'Não encontrou sua resposta? Fale com um especialista da Vazão.',
  items: [
    {
      id: 'quando',
      question: 'Quando uma empresa precisa de inspeção NR13?',
      answer:
        'A necessidade depende dos equipamentos existentes, de seu enquadramento na NR13 e das condições e prazos aplicáveis. Um levantamento técnico identifica quais equipamentos precisam ser considerados e quais ações são necessárias.',
    },
    {
      id: 'laudo',
      question: 'O que é um laudo NR13?',
      answer:
        'É uma expressão comum nas buscas por adequação. Tecnicamente, a norma prevê documentos diferentes conforme o equipamento, como relatórios de inspeção de segurança, prontuários e registros de segurança, quando aplicáveis.',
    },
    {
      id: 'vasos',
      question: 'A NR13 se aplica a vasos de pressão?',
      answer:
        'Sim, aos vasos de pressão que estejam dentro do campo de aplicação da norma. O enquadramento considera as características técnicas de cada equipamento.',
    },
    {
      id: 'compressor',
      question: 'Compressor de ar precisa de NR13?',
      answer:
        'Em sistemas de ar comprimido, os vasos de pressão e demais componentes são avaliados quanto ao enquadramento na NR13. A análise considera as características da instalação e dos equipamentos.',
    },
    {
      id: 'adequacao',
      question: 'A Vazão realiza adequação NR13?',
      answer:
        'Sim. A Vazão faz o levantamento em campo, avalia os equipamentos e identifica os requisitos a atender, do diagnóstico à execução das intervenções de engenharia.',
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
