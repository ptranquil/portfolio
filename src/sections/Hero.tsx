import { HeroDesktop } from '@/sections/HeroDesktop'
import { HeroMobile } from '@/sections/HeroMobile'
import { useIsMobile } from '@/hooks/useIsMobile'

interface HeroProps {
  ready?: boolean
}

export function Hero({ ready = true }: HeroProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <HeroMobile />
  }

  return <HeroDesktop ready={ready} />
}
