/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Vazio: a Vazão vende serviço próprio, sem marcas de terceiros (ficha, `marcas.usarLogos: false`).
 * O componente fica porque a seção `linhas` declara o primitivo `BrandCarousel`; com menos
 * de 4 logos ele não renderiza.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
