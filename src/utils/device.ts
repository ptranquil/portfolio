export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 767px)').matches
  )
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
