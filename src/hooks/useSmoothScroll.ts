import { useEffect } from 'react'
import Lenis from 'lenis'
import { shouldUseSmoothScroll } from '@/utils/device'
import { registerLenis } from '@/utils/scroll'

export function useSmoothScroll() {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) {
      registerLenis(null)
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1,
    })

    registerLenis(lenis)

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      registerLenis(null)
      lenis.destroy()
    }
  }, [])
}
