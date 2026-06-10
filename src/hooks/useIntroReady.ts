import { useEffect, useState } from 'react'
import { getIsMobile, useIsMobile } from '@/hooks/useIsMobile'
import { prefersReducedMotion } from '@/utils/device'

/**
 * Desktop: intro animations start after loading screen.
 * Mobile: ready immediately — no loader, no entrance choreography.
 */
export function useIntroReady() {
  const isMobile = useIsMobile()
  const [ready, setReady] = useState(() => getIsMobile() || prefersReducedMotion())

  useEffect(() => {
    if (isMobile || prefersReducedMotion()) {
      setReady(true)
    }
  }, [isMobile])

  const skipLoader = isMobile || prefersReducedMotion()

  return {
    isMobile,
    ready,
    skipLoader,
    onIntroComplete: () => setReady(true),
  }
}
