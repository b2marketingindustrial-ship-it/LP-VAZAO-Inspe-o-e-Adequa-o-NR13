/**
 * VARIANTE LOCAL (LP Vazão, 09/11/2026): o miolo voltou ao layout e aos textos da LP
 * original. Header, Hero e Cotação seguem com o vocabulário de `cta` em content.ts.
 */
import cenario from '@assets/diferenciais/cenario.jpg'

/** Rótulo dos botões do miolo: o mesmo CTA principal da página (padronizado em 09/11/2026). */
export const ctaMiolo = 'Solicite sua avaliação técnica'

/**
 * Banner "Fale com um especialista" da LP original, entre o miolo e a Cotação. Não é seção
 * da biblioteca B2: componente em src/components/AuthorityBanner.astro, montado à mão em
 * src/pages/index.astro.
 */
export const authority = {
  eyebrow: 'Atenção aos prazos',
  title: 'Evite deixar a adequação NR13 para depois',
  text: 'A Vazão avalia os equipamentos e indica o caminho para regularizar.',
  button: ctaMiolo,
  photo: { src: cenario, alt: '' },
  /** Situações que pedem avaliação (não repetem serviços nem selos da página). */
  items: [
    { icon: 'cal', label: 'Prazo de inspeção vencido' },
    { icon: 'gear', label: 'Equipamento novo ou alterado' },
    { icon: 'clip', label: 'Auditoria ou fiscalização à vista' },
  ],
} as const
