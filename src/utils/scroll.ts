import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

const HEADER_OFFSET = 72

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.1 })
    return
  }

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}
