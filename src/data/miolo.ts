/**
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): o miolo voltou ao layout e aos textos da LP
 * original. Header, Hero e Cotação seguem com o vocabulário de `cta` em content.ts.
 */
import cenario from '@assets/diferenciais/cenario.jpg'

/** Rótulo dos botões do miolo, como na LP original. */
export const ctaMiolo = 'Solicitar avaliação técnica'

/**
 * Banner "Fale com um especialista" da LP original, entre o miolo e a Cotação. Não é seção
 * da biblioteca B2: componente em src/components/AuthorityBanner.astro, montado à mão em
 * src/pages/index.astro.
 */
export const authority = {
  eyebrow: 'Fale com um especialista',
  title: 'Evite deixar a adequação NR13 para depois.',
  text: 'A Vazão avalia os equipamentos e indica o caminho para regularizar.',
  button: 'Solicitar avaliação',
  photo: { src: cenario, alt: '' },
  items: [
    { icon: 'search', label: 'Levantamento em campo' },
    { icon: 'doc', label: 'Documentação técnica' },
    { icon: 'headset', label: 'Atendimento em Pernambuco e Ceará' },
  ],
} as const
