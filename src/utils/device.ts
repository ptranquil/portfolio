import { getIsMobile } from '@/hooks/useIsMobile'

export function isTouchDevice(): boolean {
  return getIsMobile()
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function shouldUseSmoothScroll(): boolean {
  return !isTouchDevice() && !prefersReducedMotion()
}

export function shouldSkipLoadingScreen(): boolean {
  return isTouchDevice() || prefersReducedMotion()
}
